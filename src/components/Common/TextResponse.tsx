import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

type Props = {
  text: string;
};

export default function TextResponse(props: Props) {
  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Typography gutterBottom variant="h5" component="div">
        Response
      </Typography>
      <Typography variant="body1">{props.text}</Typography>
    </Paper>
  );
}
