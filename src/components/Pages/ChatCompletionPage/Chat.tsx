import PersonIcon from '@mui/icons-material/Person';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { IconButton, Paper, Stack, TextField } from '@mui/material';
import OpenAI from 'openai';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources/index.mjs';
import { useContext, useState } from 'react';
import { ApiKeyContext } from '../../../contexts/ApiKeyProvider';
import {
  chatCompletionAPIHandleArgType,
  chatCompletionAPIProps,
} from '../../../types/types';
import ChatHistory from './ChatHistory';

type Props = {
  states: chatCompletionAPIProps;
  setStates: (value: chatCompletionAPIProps) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  handleStateChange: (changes: chatCompletionAPIHandleArgType[]) => void;
};

export default function Chat(props: Props) {
  const { apiKey } = useContext(ApiKeyContext);
  const { states, setStates, loading, setLoading, handleStateChange } = props;
  const [userInput, setUserInput] = useState<string>('');

  const handleSave = async () => {
    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true,
    });

    setLoading(true);

    const tmpMessages: ChatCompletionMessageParam[] = [
      ...states.messages,
      {
        role: 'user',
        content: userInput,
      },
    ];

    const request: ChatCompletionCreateParamsNonStreaming = {
      model: states.model.name,
      messages: tmpMessages,
    };

    await openai.chat.completions
      .create(request)
      .then((response) => {
        setStates(states);
        tmpMessages.push(response.choices[0].message);
        console.log(response);
      })
      .catch((error: { status: number }) => {
        if (error.status === 401)
          handleStateChange([{ key: 'apiKeyError', value: 'Invalid API key' }]);
      })
      .finally(() => {
        handleStateChange([
          {
            key: 'messages',
            value: tmpMessages,
          },
        ]);
        setLoading(false);
      });
  };

  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Stack spacing={2}>
        <ChatHistory messages={states.messages} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: '100%' }}
        >
          <IconButton aria-label="help">
            <PersonIcon fontSize="small" />
          </IconButton>
          <TextField
            id="standard-basic"
            label="Question"
            variant="standard"
            fullWidth
            multiline
            minRows={3}
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
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
