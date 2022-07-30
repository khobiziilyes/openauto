import React from 'react';
import Link from 'next/link';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  to: string;
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
  return (
    <Link href={to} passHref>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
          '&.active': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
          },
        })}
        component="a"
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

const data = [
  {
    icon: <SunIcon width={20} height={20} />,
    color: 'blue',
    label: 'إنشاء عقد جديد',
    to: '/browse',
  },
  { icon: <SunIcon width={20} height={20} />, color: 'teal', label: 'لائحة العقود', to: '/a' },
  { icon: <SunIcon width={20} height={20} />, color: 'violet', label: 'الفهرسة', to: '/b' },
  { icon: <MoonIcon width={20} height={20} />, color: 'grape', label: 'حساب المواريث', to: '/c' },
];

export function NavLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
