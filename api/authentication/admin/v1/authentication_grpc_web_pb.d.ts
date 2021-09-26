import * as grpcWeb from 'grpc-web';

import * as api_authentication_admin_v1_authentication_pb from '../../../../api/authentication/admin/v1/authentication_pb';


export class AdminAuthenticationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addPasswordCredentials(
    request: api_authentication_admin_v1_authentication_pb.AddPasswordCredentialsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_authentication_admin_v1_authentication_pb.AddPasswordCredentialsResult) => void
  ): grpcWeb.ClientReadableStream<api_authentication_admin_v1_authentication_pb.AddPasswordCredentialsResult>;

}

export class AdminAuthenticationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addPasswordCredentials(
    request: api_authentication_admin_v1_authentication_pb.AddPasswordCredentialsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_authentication_admin_v1_authentication_pb.AddPasswordCredentialsResult>;

}

