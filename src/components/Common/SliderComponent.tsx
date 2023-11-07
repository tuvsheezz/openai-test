import { FormControl, FormLabel, Stack } from '@mui/material';
import Slider from '@mui/material/Slider';
import {
  completionAPIHandleChangeType,
  completionAPIPropsKeys,
} from '../../types/types';
import InputPopover from './InputPopover';

type Props = {
  label: string;
  temperature: number;
  stateKey: completionAPIPropsKeys;
  handleChange: completionAPIHandleChangeType;
  description: string[];
  max: number;
};

export default function SliderComponent(props: Props) {
  const marks = [
    { value: 0, label: '0' },
    { value: props.max / 2, label: (props.max / 2).toString() },
    { value: props.max, label: props.max.toString() },
  ];

  function valuetext(value: number) {
    return value.toString();
  }

  const localHandleChange = (_event: Event, newValue: number | number[]) => {
    props.handleChange([
      {
        key: props.stateKey,
        value: newValue as number,
      },
    ]);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <InputPopover text={props.description} />
      <FormControl sx={{ width: '100%' }}>
        <FormLabel id="-label">{props.label}</FormLabel>
        <Slider
          aria-label="Always visible"
          defaultValue={props.temperature}
          value={props.temperature}
          onChange={localHandleChange}
          getAriaValueText={valuetext}
          step={0.001}
          marks={marks}
          valueLabelDisplay="on"
          max={props.max}
        />
      </FormControl>
    </Stack>
  );
}
