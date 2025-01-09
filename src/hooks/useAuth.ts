import StorageHandler from "@shared/storageHandeler"
import UrlConfigManager from "@shared/urlConfigManager";
import { setUserInfo, userActiveAction } from "@store/reducers/userSlice";
import { useDispatch } from "react-redux";

export const useAuth = ()=> {
    const storageHandeler = new StorageHandler();
    const urlConfigManager =  new UrlConfigManager()
    const dispatch = useDispatch()
    const saveAuthTocken = (token:string)=>{
      if(token){
        storageHandeler.setAccesstoken = token;
        urlConfigManager.setParsedTokenData();
       dispatch(setUserInfo(urlConfigManager.parsedUserInfo))
      };

    }

    const logout = () =>{
    // await dispatch(
    //   makeRequest({
    //     method: 'post',
    //     url: '/logout',
    //     data: { username: parsedUserInfo?.username },
    //   })
    // );
    urlConfigManager.removeTokensFromLS();
    dispatch(userActiveAction(false));
  }
    
  return {saveAuthTocken,logout}
}