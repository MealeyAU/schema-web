import * as grpcWeb from 'grpc-web';

import * as api_users_v1_users_pb from '../../../api/users/v1/users_pb';


export class UsersServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createUser(
    request: api_users_v1_users_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_users_v1_users_pb.CreateUserResult) => void
  ): grpcWeb.ClientReadableStream<api_users_v1_users_pb.CreateUserResult>;

}

export class UsersServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createUser(
    request: api_users_v1_users_pb.CreateUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_users_v1_users_pb.CreateUserResult>;

}

