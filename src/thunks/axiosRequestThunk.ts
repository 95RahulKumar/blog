import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@store/reducers/axiosSlice";
import { HttpResponse, ReqMetaData } from "@typings/common";
import { AxiosResponse } from "axios";

const makeRequest = createAsyncThunk(
  "user/fetchUserData",
  async (configParams:ReqMetaData, { extra }) => {
    const axiosConfig = {...configParams}
    console.log('extra',extra);
    
    /**
     * this returnPayload function will return only set of response to client 
     */

    const returnPayload = (data:any,status:number,statusText:string):HttpResponse => ({data,status,statusText});
    try{
        const response:AxiosResponse = await axiosInstance(axiosConfig);

        /**
         * returning the success response
         */
        return returnPayload(response?.data,response?.status,response.statusText);
    }catch(err:any){
         /**
         * returning the error response in case of an error
         */
        return returnPayload(err?.response?.data,err?.response?.status,err?.response.statusText);;
    }
  }
);

export default makeRequest;