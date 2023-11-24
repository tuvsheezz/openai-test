import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";

type Props = {
  dWidth: number;
  toggle: () => void;
};

export default function PcLayoutAppBar(props: Props) {
  const { t } = useTranslation();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.dWidth}px)` },
        ml: { sm: `${props.dWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.toggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Typography variant="h6" noWrap component="div">
            {t("appName")}
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <IconButton
              aria-label="delete"
              onClick={() => {
                console.log("HI");
              }}
            >
              <DeleteIcon />
            </IconButton>
            <Button
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.reload();
              }}
              color="inherit"
            >
              LOGOUT
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
