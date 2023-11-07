import { Stack, TextField } from '@mui/material';
import { useContext } from 'react';
import { apiKeyDescription } from '../../constants/constants';
import { ApiKeyContext } from '../../contexts/ApiKeyProvider';
import { completionAPIHandleChangeType } from '../../types/types';
import InputPopover from './InputPopover';

type Props = {
  error: string;
  handleChange: completionAPIHandleChangeType;
};

export default function ApiKey(props: Props) {
  const { apiKey, setApiKey } = useContext(ApiKeyContext);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <InputPopover text={apiKeyDescription} />
      <TextField
        id="standard-basic"
        label="API key"
        variant="standard"
        value={apiKey}
        onChange={(e) => {
          setApiKey?.(e.target.value || '');
          props.handleChange([
            {
              key: 'apiKeyError',
              value: e.target.value ? '' : 'API key is required',
            },
          ]);
        }}
        fullWidth
        error={!!props.error}
        helperText={props.error}
      />
    </Stack>
  );
}
