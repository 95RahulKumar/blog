export interface axiosState {
    loading: boolean;
    loaderVisibility?: boolean;
    error: boolean;
    httpErrDetails?: IHttpErrDetails;
  }

  export interface IHttpErrDetails {
    statusCode?: number;
    preview?: string;
  }