import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { Button, Paper, Stack } from '@mui/material';
import {
  completionAPIHandleArgType,
  completionAPIProps,
} from '../../../types/types';
import ApiKey from '../../Common/ApiKey';
import MaxTokens from '../../Common/MaxTokens';
import ModelSelect from '../../Common/ModelSelect';
import TextInputComponent from '../../Common/TextInputComponent';
import OpenAI from 'openai';
import { useContext, useState } from 'react';
import { ApiKeyContext } from '../../../contexts/ApiKeyProvider';
import SliderComponent from '../../Common/SliderComponent';
import {
  promptDescription,
  stopDescription,
  suffixDescription,
  temperatureDescription,
  topPDescription,
} from '../../../constants/constants';
import { CompletionCreateParamsNonStreaming } from 'openai/resources/completions.mjs';

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

  const [showMore, setShowMore] = useState<boolean>(false);

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
    if (!!states.suffix) request.suffix = states.suffix;
    if (!!states.stop) request.stop = states.stop;

    await openai.completions
      .create(request)
      .then((response) => {
        setResponse(response.choices[0].text);
      })
      .catch((error) => {
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
        <ModelSelect model={states.model} handleChange={handleStateChange} />
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
        {!showMore && (
          <>
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
          </>
        )}

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ width: '100%' }}
        >
          <Button
            sx={{ width: '150px' }}
            color="secondary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Hide' : 'Show More'}
          </Button>

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
