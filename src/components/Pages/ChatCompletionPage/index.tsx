import { Stack } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { chatCompletionModels } from '../../../constants/constants';
import { PageTitleContext } from '../../../contexts/PageTitleProvider';
import {
  chatCompletionAPIHandleArgType,
  chatCompletionAPIProps,
} from '../../../types/types';
import Chat from './Chat';
import PromptForm from './PromptForm';

export default function CompletionPage() {
  const { setTitle } = useContext(PageTitleContext);
  const [states, setStates] = useState<chatCompletionAPIProps>({
    model: chatCompletionModels[0],
    messages: [],
    apiKeyError: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTitle?.('Chat Completion API');
  }, [setTitle]);

  const handleStateChange = (changes: chatCompletionAPIHandleArgType[]) => {
    let newStates = { ...states };
    changes.forEach((change) => {
      if (change.key) newStates = { ...newStates, [change.key]: change.value };
    });

    setStates({ ...newStates });
  };

  return (
    <Stack direction="column" spacing={3}>
      <PromptForm states={states} handleStateChange={handleStateChange} />
      <Chat
        states={states}
        setStates={setStates}
        loading={loading}
        setLoading={setLoading}
        handleStateChange={handleStateChange}
      />
    </Stack>
  );
}
