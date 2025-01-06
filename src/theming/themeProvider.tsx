import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { ThemePrefEnum } from '@typings/common';
import { themeDark, themeLight } from './customTheme';
import { RootState } from '@store/store';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher';
import { CssBaseline, GlobalStyles } from '@mui/material';

type MyThemeProviderProps = {
    children: React.ReactNode;
  };

const CustomThemeProvider = ({children}:MyThemeProviderProps) => {
    const {themePref} = useSelector((state: RootState) => state.user);
     const themeConf = (themePref == ThemePrefEnum.DARK) ? themeDark : themeLight;
     console.log(themePref == ThemePrefEnum.DARK)
     const {setDefaultTheme} =  useThemeSwitcher();
     useEffect(()=>{
      setDefaultTheme()
     },[])

  return (

    <ThemeProvider theme={themeConf}>
       <CssBaseline />
      {children}</ThemeProvider>
  )
}

export default CustomThemeProvider