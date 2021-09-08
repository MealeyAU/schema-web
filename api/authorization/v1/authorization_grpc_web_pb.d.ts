import * as grpcWeb from 'grpc-web';

import * as api_authorization_v1_authorization_pb from '../../../api/authorization/v1/authorization_pb';


export class AuthorizationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAccessToken(
    request: api_authorization_v1_authorization_pb.GetAccessTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_authorization_v1_authorization_pb.GetAccessTokenResult) => void
  ): grpcWeb.ClientReadableStream<api_authorization_v1_authorization_pb.GetAccessTokenResult>;

  refreshAccessToken(
    request: api_authorization_v1_authorization_pb.RefreshAccessTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_authorization_v1_authorization_pb.RefreshAccessTokenResult) => void
  ): grpcWeb.ClientReadableStream<api_authorization_v1_authorization_pb.RefreshAccessTokenResult>;

}

export class AuthorizationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAccessToken(
    request: api_authorization_v1_authorization_pb.GetAccessTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_authorization_v1_authorization_pb.GetAccessTokenResult>;

  refreshAccessToken(
    request: api_authorization_v1_authorization_pb.RefreshAccessTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_authorization_v1_authorization_pb.RefreshAccessTokenResult>;

}

