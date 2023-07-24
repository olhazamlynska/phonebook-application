import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from 'components/AppBar/';
import Container from 'components/Container/';
import Footer from 'components/Footer/';

const SharedLayout = () => {
  return (
    <Box as={'div'} display="flex" flexDirection="column">
      <Container>
        <AppBar />
        <Box flexGrow={1}>
          <main>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </main>
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};
export default SharedLayout;
