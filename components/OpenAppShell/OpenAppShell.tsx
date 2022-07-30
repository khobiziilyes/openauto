/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppShell, MantineTheme } from '@mantine/core';
import React from 'react';
import { OpenHeader } from '../OpenHeader/OpenHeader';
import { OpenNavbar } from '../OpenNavbar/OpenNavbar';

function styles(theme: MantineTheme) {
  return {
    main: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  };
}

export function OpenAppShell({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen((_) => !_);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      padding="md"
      navbar={<OpenNavbar isDrawerOpen={isDrawerOpen} />}
      header={<OpenHeader isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />}
      styles={styles}
    >
      {children}
    </AppShell>
  );
}
