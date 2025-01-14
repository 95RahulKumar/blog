import { AppWebSocketNSPEnum, Environment } from "@typings/common";

const hostAddress = 'localhost';
const hostPort = '3000';
const hostProto = 'http://';
const apiEPSuffix = '/api/';
const baseURL = `${hostProto}${hostAddress}:${hostPort}${apiEPSuffix}`;

export const WSUrl = (wsEndpoint: AppWebSocketNSPEnum) => `${hostProto}${hostAddress}:${hostPort}${wsEndpoint}`;

export const environment: Environment = {
  production: false,
  serverAddress: hostAddress,
  serverPort: hostPort,
  baseUrl: baseURL,
};
