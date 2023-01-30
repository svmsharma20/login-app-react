import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import LoginCard from './components/logincard/LoginCard';
import NavigationBar from './components/navigation/NavigationBar';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Varela Round"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <NavigationBar />
        <LoginCard />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
