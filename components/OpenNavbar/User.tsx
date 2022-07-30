import React from 'react';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core';
import { ChevronRightIcon, ChevronLeftIcon } from '@modulz/radix-icons';

export function User() {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }}
      >
        <Group>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
            radius="xl"
          />

          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              غير مسجل
            </Text>

            <Text color="dimmed" size="xs">
              قم بتسجيل الدخول من اجل
            </Text>
          </Box>

          {theme.dir === 'ltr' ? (
            <ChevronRightIcon height={18} width={18} />
          ) : (
            <ChevronLeftIcon height={18} width={18} />
          )}
        </Group>
      </UnstyledButton>
    </Box>
  );
}
