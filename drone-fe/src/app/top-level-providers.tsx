import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UiProvider } from '@app/context/ui';
import { WithChildren } from './types/with-children';
import { ControlsProvider } from './features/controls/context';
import { SocketProvider } from './features/socket/context/socket-context';

export const TopLevelProviders = ({ children }: WithChildren) => (
  <BrowserRouter>
    <UiProvider>
      <ControlsProvider>
        <SocketProvider>{children}</SocketProvider>
      </ControlsProvider>
    </UiProvider>
  </BrowserRouter>
);
