import { Stack, TextField } from '@mui/material';

import {
  completionAPIHandleChangeType,
  completionAPIPropsKeys,
} from '../../types/types';
import InputPopover from './InputPopover';

type Props = {
  prompt: string;
  label: string;
  stateKey: completionAPIPropsKeys;
  handleChange: completionAPIHandleChangeType;
  description: string[];
  minRows: number;
};

export default function TextInputComponent(props: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <InputPopover text={props.description} />
      <TextField
        fullWidth
        id="prompt-basic"
        label={props.label}
        variant="standard"
        multiline
        minRows={props.minRows}
        value={props.prompt}
        onChange={(event) =>
          props.handleChange([
            {
              key: props.stateKey,
              value: event.target.value || '',
            },
          ])
        }
      />
    </Stack>
  );
}
