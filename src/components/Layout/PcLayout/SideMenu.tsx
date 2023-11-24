import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import ChangeLanguageComponent from "../ChangeLanguageComponent";
import { routes } from "../routes";

export default function SideMenu() {
  const { t } = useTranslation();
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
                <ListItemText primary={t(route.textKey, { ns: "menu" })} />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
      <ChangeLanguageComponent />
    </List>
  );
}
