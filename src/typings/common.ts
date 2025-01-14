export enum ThemePrefEnum {
    DARK = 0,
    LIGHT = 1,
  }


// export interface ParsedUserInfo {
//     username: string;
//     id: number;
//     description: string;
//     role: string;
//     permissions: Array<number>;
//     tokenIssueEpoch: number;
//     tokenExpEpoch: number;
//     token: string;
//   }

export interface ParsedUserInfo {
  tokenExpEpoch: number;
  tokenIssueEpoch: number;
  id: number;
  token: string;
  role:string,
  username: string;
}


export interface IUserInfoAPI {
    email: string;
    id: number;
    fullName: string;
    profileImg: string;
    username: string;
    password: string;
    phoneNo: string;
  }


  export enum LsKeyNameEnum {
    ACCESS_TOKEN = 'react__access_token',
    REFRESH_TOKEN = 'react__refresh_token',
    ACTIVE_BASE_URL = 'react__active_baseUrl',
    ORIGINAL_BASE_URL = 'react__original_baseUrl',
    THEME = 'react__theme_preference',
  }


  export enum MessageBoxActionEnum {
    LOGOUT_CONFIRM = 1,
  }

  export enum MessageIconTypeEnum {
    ERROR = 0,
    SUCCESS = 1,
    INFO = 2,
    WARNING = 3,
  }

  export enum MessageBoxCloseTypeEnum {
    SINGLE_ACTION_BTN = 1,
    DOUBLE_ACTION_BTN = 2,
  }


  export interface MessageBoxProps {
    type: MessageBoxCloseTypeEnum;
    title: string;
    content: string;
    iconType?: MessageIconTypeEnum;
    confirmMsg?: string;
    closeMsg?: string;
    actionType:MessageBoxActionEnum
  }


  export interface INotificationReducerState {
    messageDialogDetails?: MessageBoxProps;
    actionType?:MessageBoxActionEnum | null
  }

  export enum AppWebSocketNSPEnum {
    WS_NSP_CHAT = '/chat',
  }

  export interface Environment {
    production: boolean;
    serverAddress: string;
    serverPort: string;
    baseUrl: string;
  }

  export enum AppRoutesEnum {
    CONFIG = '/config',
    ROOT='/',
    ALLP_RODUCTS = '/all-products',
    SINGLE_PRODUCTS = '/product',
    POSTS = '/posts',
    DISCOVER = '/discover',
    WRITE = '/write',
    SINGLE_POST = '/single-post',
    ALL_CATEGORIES = '/all-categories',
  }
  

  export interface IJWTPayload {
    exp: number;
    iat: number;
    jti: string;
    token_type: 'access' | 'refresh';
    id: number;
    // username: string;
    role:string,
    name: string;
    // userId: number;
    // identity: {
    //   username: string;
    //   groups: Array<{
    //     description: string;
    //     id: number;
    //     is_active: boolean;
    //     name: string;
    //     permissions: Array<number>;
    //   }>;
    // };
  }


  export interface ReqMetaData {
    method: string;
    url: string;
    signal?: AbortSignal;
    params?: object; // the request params argument eg 'userName=123&id=23'
    data?: object;
    loaderText?: string;
    loaderSubText?: string;
    headers?: object;
    options?: any;
  }


  export interface HttpResponse{
    data:any,
    status:number;
    statusText:string;
  }


  export enum ToastColors {
    WARNING = '#FFA500', // Orange
    SUCCESS = '#4CAF50', // Green
    ERROR = '#F44336', // Red
    FAILURE = '#D32F2F', // Dark Red
    INFO = '#2196F3', // Blue
    DEFAULT = '#757575', // Grey
  }
  
  export interface ToasterProps {
    id: string;
    message: ToastMessage;
    visible: boolean;
    duration?: number;
    onHide?: () => void;
  }
  
  export type ToastMessage = {
    message: string;
    type: 'ERROR' | 'INFO' | 'WARNING' | 'SUCCESS' | 'FAILURE';
  };
