import { Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { modelType, stateChangeType } from '../../types/types';
import InputPopover from './InputPopover';

type Props = {
  model: modelType;
  handleChange: stateChangeType;
  models: modelType[];
};

export default function ModelSelect(props: Props) {
  const localHandleChange = (event: SelectChangeEvent) => {
    props.models.map((model) => {
      if (model.name === event.target.value)
        props.handleChange([{ key: 'model', value: model }]);
    });
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <InputPopover
        text={[
          props.model.description,
          `MAX TOKENS: ${props.model.maxTokens}`,
          `TRAINING DATA: ${props.model.trainingData}`,
        ]}
      />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
        <InputLabel id="model-label">Model</InputLabel>
        <Select
          labelId="model-label"
          id="model-select"
          value={props.model.name}
          onChange={localHandleChange}
          label="Model"
        >
          {props.models.map((model) => {
            return (
              <MenuItem key={model.name} value={model.name}>
                {model.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
}
