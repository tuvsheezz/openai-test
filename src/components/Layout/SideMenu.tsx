import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const routes = [
  {
    key: "id-1",
    path: "/",
    text: "Home",
  },
  {
    key: "id-2",
    path: "/about",
    text: "About",
  },
  {
    key: "id-3",
    path: "/test/1",
    text: "Test 1",
  },
  {
    key: "id-4",
    path: "/test/2",
    text: "Test 2",
  },
];

export default function SideMenu() {
  return (
    <List>
      {routes.map((route) => {
        return (
          <Link key={route.key} to={route.path}>
            <ListItem disablePadding>
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
