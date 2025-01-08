import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from '@store/store.ts'
import CustomThemeProvider from '@theming/themeProvider.tsx'
import MessageDialog from '@components/message-dialog/MessageDialog.tsx'
import axios from 'axios'
import UrlConfigManager from '@shared/urlConfigManager.ts'
import { createAxiosInsFromBaseUrl } from '@store/reducers/axiosSlice.ts'
import Loader from '@components/loader/Loader.tsx'
import Header from '@components/layout/header/Header.tsx'
import { BrowserRouter } from 'react-router-dom'
import { StatusMessage } from '@components/status-message/StatusMessage.tsx'

const urlConfigManager = new UrlConfigManager();

function resolveConfigJsonFile(): Promise<void> {
  return new Promise((resolve) => {
    axios.get('config.json').then((res) => {
      urlConfigManager.initBaseURLConfigurator(res?.data?.baseUrl, res?.data?.env);
      createAxiosInsFromBaseUrl(urlConfigManager.baseUrl as string);
      resolve();
    });
  });
}

resolveConfigJsonFile().then(() => {
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
      <BrowserRouter>
       <App />
      </BrowserRouter>
      </CustomThemeProvider>
      </Provider>
  </StrictMode>,
)
});