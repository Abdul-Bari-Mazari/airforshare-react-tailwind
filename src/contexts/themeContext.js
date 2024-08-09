import { createContext } from 'react';

const ThemeContext = createContext({
  themeMode: 'light',
  switchMode: () => {},
});

const ThemeContextProvider = ThemeContext.Provider;

export { ThemeContext, ThemeContextProvider };
