import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";

export default function SideMenu() {
  const location = useLocation();
  return (
    <List>
      {routes.map((route) => {
        return (
          <Link key={route.key} to={route.path}>
            <ListItem
              disablePadding
              sx={{ color: location.pathname === route.path ? red[500] : "" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}
