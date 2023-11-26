import { Stack } from '@mui/system';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import ChatMessage from './ChatMessage';

type Props = {
  messages: ChatCompletionMessageParam[];
};
export default function ChatHistory(props: Props) {
  return (
    <Stack spacing={2}>
      {props.messages.map((message, index) => {
        return <ChatMessage key={index} message={message} />;
      })}
    </Stack>
  );
}
