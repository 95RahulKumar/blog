import makeRequest from "@thunks/axiosRequestThunk"
import { HttpResponse, ReqMetaData } from "@typings/common"
import { useDispatch } from "react-redux"
export const useHttp = ()=>{
 const dispatch =  useDispatch<any>()
 const controller = new AbortController();
 const signal = controller.signal;
/**
 * Common function created for all http requests and on resolve sends back payload as a promise.
 * @param method
 * @param url
 * @param params
 * @param body
 * @returns
 */
function request(method: string, url: string, params?: any, body = {}, headers?: any):Promise<HttpResponse> {
    return new Promise((resolve)=>{
        let requesConfig:ReqMetaData = {
            method,
            url,
            params,
            headers,
            data:body,
            signal
        } as ReqMetaData
        console.log(requesConfig)
        dispatch(makeRequest(requesConfig)).then((res: any)=>{
            resolve(res?.payload as HttpResponse);
        })
    })
}


 /**
   * Function used the abort the current running http request.
   */
 function abortRequest(): void {
    controller.abort();
  }

/**
   * Used to not show loader on api request made.
   * @returns
   */
// function noLoader(): ReturnType<typeof useHttp> {
//     dispatch(setLoaderVisibility(false));
//     return this;
//   }


  return {request,abortRequest}
}