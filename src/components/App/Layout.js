import { Box } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box as={'div'} display="flex" flexDirection="column">
      <AppBar />
      <Box flexGrow={1}>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </Box>
      <Footer />
    </Box>
  );
};
