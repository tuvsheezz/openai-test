import RestoreIcon from "@mui/icons-material/Restore";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { red } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";

export default function BottomMenu() {
  const location = useLocation();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        {routes.map((route) => {
          return (
            <Link key={route.key} to={route.path}>
              <BottomNavigationAction
                sx={{ color: location.pathname === route.path ? red[500] : "" }}
                showLabel={true}
                label={route.textKey}
                icon={<RestoreIcon />}
              />
            </Link>
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
