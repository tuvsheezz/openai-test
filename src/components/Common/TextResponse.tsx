import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

type Props = {
  text: string;
  sx?: any;
};

export default function TextResponse(props: Props) {
  if (props.text)
    return (
      <Paper sx={{ p: 2, width: '100%', ...props.sx }}>
        <Typography gutterBottom variant="h5" component="div">
          Response
        </Typography>
        <Typography variant="body1">{props.text}</Typography>
      </Paper>
    );
}
