
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



interface IAppBarProps extends MuiAppBarProps {
  newopen?: boolean;
  drawerWidth: number;
}

const BarraApp = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })<IAppBarProps>(({ theme, newopen, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(newopen && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface IBarraAppProps {
  open?: boolean;
  menuWidth: number;
  handleOpen: () => void;
}

export const BarraDeAplicativos: React.FC<IBarraAppProps> = ({ menuWidth, open, handleOpen }) => {
  return (
    <BarraApp position="fixed" newopen={open} drawerWidth={menuWidth} >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Página Inicial
        </Typography>
      </Toolbar>
    </BarraApp >
  );
};