import InfoIcon from '@mui/icons-material/Info';
import { IconButton, Stack } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import * as React from 'react';

type Props = {
  text: string[];
};

export default function InputPopover(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <IconButton aria-label="help">
          <InfoIcon fontSize="small" />
        </IconButton>
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          maxWidth: '50vw',
          minWidth: '300px',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Stack direction="column" spacing={0.5} sx={{ padding: 2 }}>
          {props.text.map((textRow, index) => {
            return (
              <Typography
                variant="body1"
                key={`${Math.random().toString(36)}-${index}`}
              >
                {textRow}
              </Typography>
            );
          })}
        </Stack>
      </Popover>
    </div>
  );
}
