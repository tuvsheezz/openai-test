import { Paper, Stack } from '@mui/material';
import { chatCompletionModels } from '../../../constants/constants';
import {
  chatCompletionAPIHandleArgType,
  chatCompletionAPIProps,
} from '../../../types/types';
import ApiKey from '../../Common/ApiKey';
import ModelSelect from '../../Common/ModelSelect';

type Props = {
  states: chatCompletionAPIProps;
  handleStateChange: (changes: chatCompletionAPIHandleArgType[]) => void;
};

export default function PromptForm(props: Props) {
  const { states, handleStateChange } = props;

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
          models={chatCompletionModels}
        />
      </Stack>
    </Paper>
  );
}
