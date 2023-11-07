import { FormHelperText, Input, Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { maxTokensDescription } from '../../constants/constants';
import InputPopover from './InputPopover';
import { completionAPIHandleChangeType } from '../../types/types';

type Props = {
  maxToken: number;
  max: number;
  error: string;
  handleChange: completionAPIHandleChangeType;
};

export default function MaxTokens(props: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <InputPopover text={maxTokensDescription} />

      <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="standard-max-token">Max Token</InputLabel>
        <Input
          id="standard-max-token"
          type="number"
          value={props.maxToken}
          onChange={(e) => {
            const newValue = parseInt(e.target.value) || 0;
            let newError = '';
            if (newValue === 0) newError = 'Max Token must be greater than 0';
            else if (newValue > props.max)
              newError = 'Max Token must be less than or equal to ' + props.max;

            props.handleChange([
              {
                key: 'maxToken',
                value: newValue,
              },
              {
                key: 'maxTokenError',
                value: newError,
              },
            ]);
          }}
          error={props.error !== ''}
        />
        <FormHelperText variant="outlined" error sx={{ mx: 0 }}>
          {props.error}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
}
