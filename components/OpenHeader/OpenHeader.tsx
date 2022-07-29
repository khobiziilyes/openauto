import { Header, Group, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export function OpenHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <div>المنصة الأولى لبيع و شراء السيارات في الجزائر</div>

        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="xl"
          sx={(theme) => ({
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
