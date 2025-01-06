import StorageHandler from "@shared/storageHandeler";
import { changeTheme } from "@store/reducers/userSlice";
import { RootState } from "@store/store";
import { ThemePrefEnum } from "@typings/common"
import { useDispatch, useSelector } from "react-redux"

export const useThemeSwitcher = ()=>{
    const {themePref} = useSelector((state:RootState) => state.user);
  const {getThemePreference,setThemePreference} = new StorageHandler();

    const dispatch = useDispatch()
    function setAppTheme(theme:ThemePrefEnum){
        dispatch(changeTheme(theme))
        setThemePreference(theme === ThemePrefEnum.DARK ? 'dark' : 'light')
    }

    function toggleTheme(){
        const themeToggle = themePref==ThemePrefEnum.DARK ? ThemePrefEnum.LIGHT : ThemePrefEnum.DARK
        setAppTheme(themeToggle)
    }

    function setDefaultTheme(){
        if(!getThemePreference){
            setAppTheme(ThemePrefEnum.DARK)
        }else{
            const lsTheme = (getThemePreference == 'dark') ?  0  :  1
            setAppTheme(lsTheme)
        }
    }

    return {
        setAppTheme,
        toggleTheme,
        setDefaultTheme
    }
}