export enum ThemePrefEnum {
    DARK = 0,
    LIGHT = 1,
  }


export interface ParsedUserInfo {
    username: string;
    id: number;
    description: string;
    role: string;
    permissions: Array<number>;
    tokenIssueEpoch: number;
    tokenExpEpoch: number;
    token: string;
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


  export enum MessageBoxTypeEnum {
    MESSAGE_BOX = 1,
  }

  export enum MessageIconTypeEnum {
    ERROR = 0,
    SUCCESS = 1,
    INFO = 2,
    WARNING = 3,
  }

  export enum MessageBoxCloseTypeEnum {
    CONFIRM_LOGOUT = 1,
    CONFIRM_DELETE_POST = 2,
    CONFIRM_DELETE_COMMENT = 3,
  }

  export interface MessageBoxProps {
    type: MessageBoxTypeEnum;
    title: string;
    content: string;
    iconType?: MessageIconTypeEnum;
    confirmMsg?: string;
    closeMsg?: string;
    confirmFor?: MessageBoxCloseTypeEnum;
  }


  export interface INotificationReducerState {
    messageDialogDetails?: MessageBoxProps;
    isSubmitted?:boolean
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
    HOMEPAGE = '/homepage',
    PROFILE = '/profile',
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
    username: string;
    userId: number;
    identity: {
      username: string;
      groups: Array<{
        description: string;
        id: number;
        is_active: boolean;
        name: string;
        permissions: Array<number>;
      }>;
    };
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