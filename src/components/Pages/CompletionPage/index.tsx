import { Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { completionModels } from '../../../constants/constants';
import { PageTitleContext } from '../../../contexts/PageTitleProvider';
import { completionAPIProps } from '../../../types/types';
import TextResponse from '../../Common/TextResponse';
import PromptForm from './PromptForm';

export default function CompletionPage() {
  const { setTitle } = useContext(PageTitleContext);

  const [states, setStates] = useState<completionAPIProps>({
    model: completionModels[0],
    maxToken: 100,
    prompt: '',
    suffix: '',
    apiKeyError: '',
    maxTokenError: '',
    temperature: 0.6,
    top_p: 0.6,
    stop: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>('');

  useEffect(() => {
    setTitle?.('Completion API');
  }, [setTitle]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PromptForm
          states={states}
          setStates={setStates}
          loading={loading}
          setLoading={setLoading}
          setResponse={setResponse}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextResponse text={response} />
      </Grid>
    </Grid>
  );
}
