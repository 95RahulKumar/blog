import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from '@store/store.ts'
import CustomThemeProvider from '@theming/themeProvider.tsx'
import MessageDialog from '@components/message-dialog/MessageDialog.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
      <App />
      <MessageDialog/>
      </CustomThemeProvider>
    </Provider>
  </StrictMode>,
)
