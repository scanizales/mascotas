import { createRoot } from 'react-dom/client'
import {StrictMode} from 'react'
import App from './App.jsx'
import {HeroUIProvider} from '@heroui/react'
import { Provider } from "react-redux";
import store from "./redux/store.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HeroUIProvider>
  </StrictMode>
)
