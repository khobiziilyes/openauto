import { Navbar } from '@mantine/core';
import { NavLinks } from './NavLinks';
import { User } from './User';

export function OpenNavbar({ isDrawerOpen }: { isDrawerOpen: boolean }) {
  return (
    <Navbar hiddenBreakpoint="sm" hidden={!isDrawerOpen} width={{ sm: 300 }} p="sm">
      <Navbar.Section grow>
        <NavLinks />
      </Navbar.Section>

      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
