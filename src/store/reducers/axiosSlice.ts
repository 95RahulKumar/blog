import { initRequestInterceptor } from "@interceptors/request.interceptor";
import { initResponseInterceptor } from "@interceptors/response.interceptor";
import {createSlice } from "@reduxjs/toolkit";
import makeRequest from "@thunks/axiosRequestThunk";
import { axiosState } from "@typings/store";
import axios, { AxiosInstance } from "axios";

let axiosInstance:AxiosInstance;

const initialState:axiosState ={
    loading: false,
    loaderVisibility: true,
    error: false,
}

/**
 * Intializes both request and response interceptors.
 */
function initAxiosInterceptors() {
    initRequestInterceptor();
    initResponseInterceptor();
}

/**
 * Creates the axios instance, which can be used as base for all api requests made.
 * @param baseUrl
 */
function createAxiosInsFromBaseUrl(baseUrl: string) {
    axiosInstance = axios.create({
        baseURL: baseUrl,
        timeout: 60000,
      });
    initAxiosInterceptors()
}

const axiosReducer = createSlice({
    name: "axios",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(makeRequest.pending, (state) => {
          state.loading = true;
        })
        .addCase(makeRequest.fulfilled, (state) => {
          state.loading = false;
        })
        .addCase(makeRequest.rejected, (state,action) => {
          state.error = true;
          state.loading = false;
          console.error("Request failed:", action.payload);
        });
    },
  });

  export {axiosInstance,createAxiosInsFromBaseUrl}
  export default axiosReducer.reducer;