import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';


const drawerWidth = 28;

interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer open={true} variant='persistent'>
        <Box width={theme.spacing(drawerWidth)}>
          Criando Drawer
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={theme.spacing(drawerWidth)}>
        {children}
      </Box>
    </>
  );
};