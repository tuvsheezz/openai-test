import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { Paper, Stack } from '@mui/material';
import OpenAI from 'openai';
import { CompletionCreateParamsNonStreaming } from 'openai/resources/completions.mjs';
import { useContext } from 'react';
import {
  completionModels,
  promptDescription,
  stopDescription,
  suffixDescription,
  temperatureDescription,
  topPDescription,
} from '../../../constants/constants';
import { ApiKeyContext } from '../../../contexts/ApiKeyProvider';
import {
  completionAPIHandleArgType,
  completionAPIProps,
} from '../../../types/types';
import ApiKey from '../../Common/ApiKey';
import MaxTokens from '../../Common/MaxTokens';
import ModelSelect from '../../Common/ModelSelect';
import SliderComponent from '../../Common/SliderComponent';
import TextInputComponent from '../../Common/TextInputComponent';

type Props = {
  states: completionAPIProps;
  setStates: (value: completionAPIProps) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  setResponse: (value: string) => void;
};

export default function PromptForm(props: Props) {
  const { apiKey } = useContext(ApiKeyContext);
  const { states, setStates, loading, setLoading, setResponse } = props;

  const handleStateChange = (changes: completionAPIHandleArgType[]) => {
    let newStates = { ...states };
    changes.forEach((change) => {
      if (change.key) newStates = { ...newStates, [change.key]: change.value };
    });

    setStates({ ...newStates });
  };

  const handleSave = async () => {
    setResponse('');

    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true,
    });

    setLoading(true);

    const request: CompletionCreateParamsNonStreaming = {
      model: states.model.name,
      prompt: states.prompt + states.suffix,
      max_tokens: states.maxToken,
      temperature: states.temperature === 0.6 ? null : states.temperature,
      top_p: states.top_p === 0.6 ? null : states.top_p,
    };

    if (states.suffix) request.suffix = states.suffix;
    if (states.stop) request.stop = states.stop;

    await openai.completions
      .create(request)
      .then((response: { choices: { text: string }[] }) => {
        setResponse(response.choices[0].text);
      })
      .catch((error: { status: number }) => {
        if (error.status === 401)
          handleStateChange([{ key: 'apiKeyError', value: 'Invalid API key' }]);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <ApiKey error={states.apiKeyError} handleChange={handleStateChange} />
        <ModelSelect
          model={states.model}
          handleChange={handleStateChange}
          models={completionModels}
        />
        <MaxTokens
          maxToken={states.maxToken}
          max={states.model.maxTokens}
          error={states.maxTokenError}
          handleChange={handleStateChange}
        />
        <TextInputComponent
          label="Prompt"
          prompt={states.prompt}
          stateKey="prompt"
          handleChange={handleStateChange}
          description={promptDescription}
          minRows={3}
        />
        <TextInputComponent
          label="Suffix"
          prompt={states.suffix}
          stateKey="suffix"
          handleChange={handleStateChange}
          description={suffixDescription}
          minRows={3}
        />
        <SliderComponent
          label="Temperature"
          temperature={states.temperature}
          stateKey="temperature"
          handleChange={handleStateChange}
          max={2}
          description={temperatureDescription}
        />
        <SliderComponent
          label="top_p"
          temperature={states.top_p}
          stateKey="top_p"
          handleChange={handleStateChange}
          max={1}
          description={topPDescription}
        />
        <TextInputComponent
          label="Stop"
          prompt={states.stop || ''}
          stateKey="stop"
          handleChange={handleStateChange}
          description={stopDescription}
          minRows={1}
        />

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ width: '100%' }}
        >
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
            onClick={handleSave}
          >
            Save
          </LoadingButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
