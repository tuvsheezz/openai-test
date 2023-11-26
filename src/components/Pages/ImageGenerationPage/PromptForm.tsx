import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { Paper, Stack, TextField } from '@mui/material';
import OpenAI from 'openai';
import { ImageGenerateParams } from 'openai/resources/images.mjs';
import { useContext, useState } from 'react';
import {
  dalleCreateModels,
  promptDescription,
} from '../../../constants/constants';
import { ApiKeyContext } from '../../../contexts/ApiKeyProvider';
import {
  dalleCreateAPIHandleArgType,
  dalleCreateAPIProps,
} from '../../../types/types';
import ApiKey from '../../Common/ApiKey';
import InputPopover from '../../Common/InputPopover';
import ModelSelect from '../../Common/ModelSelect';

type Props = {
  states: dalleCreateAPIProps;
  handleStateChange: (changes: dalleCreateAPIHandleArgType[]) => void;
};

export default function PromptForm(props: Props) {
  const { states, handleStateChange } = props;
  const { apiKey } = useContext(ApiKeyContext);

  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = async () => {
    handleStateChange([
      { key: 'imageUrl', value: '' },
      { key: 'revisedPrompt', value: '' },
    ]);

    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true,
    });

    setLoading(true);

    const request: ImageGenerateParams = {
      model: states.model.name,
      prompt: states.prompt,
      n: states.n,
      size: states.model.name === 'dall-e-2' ? '256x256' : '1024x1024',
    };

    await openai.images
      .generate(request)
      .then((response) => {
        handleStateChange([
          { key: 'imageUrl', value: response.data[0].url || '' },
          {
            key: 'revisedPrompt',
            value: response.data[0].revised_prompt || '',
          },
        ]);
      })
      .catch((error: { status: number }) => {
        if (error.status === 401)
          handleStateChange([{ key: 'apiKeyError', value: 'Invalid API key' }]);
      })
      .finally(() => {
        setLoading(false);
      });
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
          models={dalleCreateModels}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: '100%' }}
        >
          <InputPopover text={promptDescription} />
          <TextField
            fullWidth
            id="prompt-basic"
            label="Prompt"
            variant="standard"
            multiline
            minRows={3}
            value={states.prompt}
            onChange={(event) =>
              handleStateChange([
                {
                  key: 'prompt',
                  value: event.target.value || '',
                },
              ])
            }
          />
        </Stack>
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
