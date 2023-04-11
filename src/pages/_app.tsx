import { ThemeProvider } from 'styled-components';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/themes/default';
import { LanguageProvider } from '../components/contexts/LanguageContext';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider theme={defaultTheme}>
        <ReactNotifications />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
