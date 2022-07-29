import { AppShell, MantineTheme } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { OpenNavbar } from '../components/OpenNavbar/OpenNavbar';
import { OpenHeader } from '../components/OpenHeader/OpenHeader';

function styles(theme: MantineTheme) {
  return {
    main: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  };
}

export default function HomePage() {
  return (
    <AppShell padding="md" navbar={<OpenNavbar />} header={<OpenHeader />} styles={styles}>
      <Welcome />
    </AppShell>
  );
}
