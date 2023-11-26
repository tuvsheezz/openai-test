import { Grid, Paper, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { dalleCreateModels } from '../../../constants/constants';
import { PageTitleContext } from '../../../contexts/PageTitleProvider';
import {
  dalleCreateAPIHandleArgType,
  dalleCreateAPIProps,
} from '../../../types/types';
import PromptForm from './PromptForm';
import ResponseCard from './ResponseCard';

export default function ImageGenerationPage() {
  const { setTitle } = useContext(PageTitleContext);

  const [states, setStates] = useState<dalleCreateAPIProps>({
    model: dalleCreateModels[0],
    n: 1,
    prompt: '',
    apiKeyError: '',
    size: '256x256',
    imageUrl: '',
    revisedPrompt: '',
  });

  // const [response, setResponse] = useState<string>('');

  useEffect(() => {
    setTitle?.('Image Generation API - Create');
  }, [setTitle]);

  const handleStateChange = (changes: dalleCreateAPIHandleArgType[]) => {
    let newStates = { ...states };
    changes.forEach((change) => {
      if (change.key) newStates = { ...newStates, [change.key]: change.value };
    });

    setStates({ ...newStates });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PromptForm states={states} handleStateChange={handleStateChange} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, width: '100%' }}>
          <Typography gutterBottom variant="h5" component="div">
            Response
          </Typography>
          <ResponseCard
            revisedPrompt={states.revisedPrompt}
            imageUrl={states.imageUrl}
            height={512}
            width={512}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
