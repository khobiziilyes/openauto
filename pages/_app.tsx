import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import {
  MantineThemeOverride,
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  TextInputProps,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { rtlCache } from '../rtl-cache';

const TextInputDefaultProps: Partial<TextInputProps> = {
  required: true,
};

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');

    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const theme: MantineThemeOverride = {
    components: {
      TextInput: { defaultProps: TextInputDefaultProps },
    },
    colorScheme,
    dir: 'rtl',
    fontFamily: 'Almarai',
    fontSizes: {
      xs: 60,
      sm: 60,
      md: 25,
      lg: 60,
      xl: 60,
    },
    headings: {
      fontFamily: 'Almarai',
    },
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={theme} emotionCache={rtlCache} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
