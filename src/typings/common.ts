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