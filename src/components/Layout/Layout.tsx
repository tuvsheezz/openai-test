import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMode } from '../../contexts/AppThemeProvider';
import { PageTitleContext } from '../../contexts/PageTitleProvider';
import { menuType } from '../../types/types';
import { AppRoutes } from '../AppRoutes';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export const Layout = (props: Props) => {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { title } = React.useContext(PageTitleContext);

  const handleOnMenuClick = React.useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerMenuList: menuType<React.ReactNode>[] = [
    {
      icon: <LinkIcon />,
      label: 'Completion API',
      url: '/',
    },
    {
      icon: <LinkIcon />,
      label: 'Chat Completion API',
      url: '/chat_completion',
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          width={drawerWidth}
        >
          OpenAI
        </Stack>
      </Toolbar>
      <Divider />
      <List>
        {drawerMenuList.map((menu) => (
          <ListItem key={Math.random()} disablePadding>
            <ListItemButton onClick={() => handleOnMenuClick(menu.url)}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            width="100%"
          >
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
            <IconButton
              sx={{ ml: 1 }}
              onClick={useMode().toggleMode}
              color="inherit"
            >
              {useMode().mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <AppRoutes />
      </Box>
    </Box>
  );
};
