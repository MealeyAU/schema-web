import * as grpcWeb from 'grpc-web';

import * as api_authentication_v1_authentication_pb from '../../../api/authentication/v1/authentication_pb';


export class AuthenticationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  authenticatePassword(
    request: api_authentication_v1_authentication_pb.AuthenticatePasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_authentication_v1_authentication_pb.TokenResult) => void
  ): grpcWeb.ClientReadableStream<api_authentication_v1_authentication_pb.TokenResult>;

  refresh(
    request: api_authentication_v1_authentication_pb.RefreshRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_authentication_v1_authentication_pb.TokenResult) => void
  ): grpcWeb.ClientReadableStream<api_authentication_v1_authentication_pb.TokenResult>;

}

export class AuthenticationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  authenticatePassword(
    request: api_authentication_v1_authentication_pb.AuthenticatePasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_authentication_v1_authentication_pb.TokenResult>;

  refresh(
    request: api_authentication_v1_authentication_pb.RefreshRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_authentication_v1_authentication_pb.TokenResult>;

}

