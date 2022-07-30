import {
  Header,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Text,
  Burger,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export function OpenHeader({
  isDrawerOpen,
  toggleDrawer,
}: {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}) {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={isDrawerOpen}
              onClick={() => toggleDrawer()}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>

          <Text variant="gradient">المنصة الأولى لبيع و شراء السيارات في الجزائر</Text>
        </div>

        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="xl"
          sx={() => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
          })}
        >
          {colorScheme === 'dark' ? (
            <SunIcon width={20} height={20} />
          ) : (
            <MoonIcon width={20} height={20} />
          )}
        </ActionIcon>
      </Group>
    </Header>
  );
}
