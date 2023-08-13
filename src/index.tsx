import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react";
import { Alert, ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import themeSettings from './theme';
import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset
} from '@chakra-ui/react';
import { store, persistor } from './store';
import { Provider as StoreProvider } from 'react-redux';

const currentTheme = extendTheme(themeSettings);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const toastOptions = { defaultOptions: { render: Alert } } as any;

root.render(
  <React.StrictMode>
      <StoreProvider store={store}>
          <PersistGate persistor={persistor}>
              <ChakraProvider theme={currentTheme} toastOptions={toastOptions}>
                  <ThemeProvider theme={theme}>
                      <ColorModeProvider>
                          <Suspense>
                              <RouterProvider router={router} />
                          </Suspense>
                      </ColorModeProvider>
                  </ThemeProvider>
              </ChakraProvider>
          </PersistGate>
      </StoreProvider>
  </React.StrictMode>
);