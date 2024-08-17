// src/pages/index.js
import React from 'react';
import { Provider } from 'react-redux';
import {store} from '@site/src/store';
import PlurkLayout from '@site/src/components/plurk/PlurkLayout';
import Hero from '@site/src/components/plurk/Hero';
import HeroOneApiWithSwiper from '@site/src/components/plurk/HeroOneApiWithSwiper';
import FAQ from '@site/src/components/plurk/FAQ';
import UserProvider from '@site/src/contexts/UserContext';
import StatusProvider from '@site/src/contexts/StatusContext';
import { SnackbarProvider } from 'notistack';

export default function MyPage() {
  return (
    <Provider store={store}>
    <SnackbarProvider autoHideDuration={5000} maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <UserProvider>
        <StatusProvider>
          <PlurkLayout title="My Custom Page">
            <Hero />
            <HeroOneApiWithSwiper />
            <FAQ />
          </PlurkLayout>
        </StatusProvider>
      </UserProvider>
    </SnackbarProvider>
    </Provider>
  );
}