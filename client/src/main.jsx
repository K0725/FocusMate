import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

// create the background theme
const styles = {
  global: (prop) => ({
    body: {
      bg: mode('gray.50', '#000')(prop),
      color:mode("gray.50", "white.Alpha.900")(prop),
    },
  }),
}

// create the theme
const config ={
  initialColorMode: "light",
  useSystemColorMode: false,
}

// extent the them
const theme = extendTheme({config})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
