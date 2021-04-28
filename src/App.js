import { useState } from 'react'
import Splash from './components/SplashScreen.jsx'
import { ThemeProvider } from 'styled-components'

const LightTheme = {
  pageBackground: 'white',
  titleColor: '#dc658b',
  tagLineColor: 'black'
}

const DarkTheme = {
  pageBackground: '#282c36',
  titleColor: 'lightpink',
  tagLineColor: 'lavender'
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
