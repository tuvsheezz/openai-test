import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
  height: number;
  width: number;
  imageUrl: string;
  revisedPrompt: string;
};

export default function ResponseCard(props: Props) {
  if (props.imageUrl === '') return <></>;

  return (
    <Card sx={{ maxWidth: props.width }}>
      <CardMedia
        sx={{ height: props.height }}
        image={props.imageUrl}
        title="image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.revisedPrompt}
        </Typography>
      </CardContent>
    </Card>
  );
}
