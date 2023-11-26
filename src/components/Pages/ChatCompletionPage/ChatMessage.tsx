import AirIcon from '@mui/icons-material/Air';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';

type Props = {
  message: ChatCompletionMessageParam;
};

export default function ChatMessage(props: Props) {
  const role = props.message.role == 'user' ? 'user' : 'AI';
  const content = props.message.content;
  return (
    <Stack
      direction={role === 'user' ? 'row-reverse' : 'row'}
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0.5}
        sx={{ borderRadius: 2, border: '1px solid #ccc' }}
      >
        <IconButton>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            {role === 'user' ? <PersonIcon /> : <AirIcon />}
            <Typography variant="caption">{role}</Typography>
          </Stack>
        </IconButton>
      </Stack>
      <Paper sx={{ p: 2 }}>{content}</Paper>
    </Stack>
  );
}
