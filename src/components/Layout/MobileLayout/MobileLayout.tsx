import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import { AppRoutes } from "../../AppRouters";
import BottomMenu from "./BottomNavigationMenu";
import MobileLayoutAppBar from "./MobileLayoutAppBar";

export default function MobileLayout() {
  return (
    <Box sx={{ pb: 7 }}>
      <MobileLayoutAppBar />
      <Toolbar />
      <AppRoutes />
      <BottomMenu />
    </Box>
  );
}
