import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function MobileLayoutAppBar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Typography variant="h6" noWrap component="div">
            AppName
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
