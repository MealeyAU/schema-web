import * as grpcWeb from 'grpc-web';

import * as api_users_v1_users_pb from '../../../api/users/v1/users_pb';


export class UsersServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: api_users_v1_users_pb.CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_users_v1_users_pb.CreateResult) => void
  ): grpcWeb.ClientReadableStream<api_users_v1_users_pb.CreateResult>;

  getByID(
    request: api_users_v1_users_pb.GetByIDRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_users_v1_users_pb.GetResult) => void
  ): grpcWeb.ClientReadableStream<api_users_v1_users_pb.GetResult>;

  updateNames(
    request: api_users_v1_users_pb.UpdateNamesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_users_v1_users_pb.UpdateNamesResult) => void
  ): grpcWeb.ClientReadableStream<api_users_v1_users_pb.UpdateNamesResult>;

  updateAvatar(
    request: api_users_v1_users_pb.UpdateAvatarRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_users_v1_users_pb.UpdateAvatarResult) => void
  ): grpcWeb.ClientReadableStream<api_users_v1_users_pb.UpdateAvatarResult>;

}

export class UsersServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: api_users_v1_users_pb.CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_users_v1_users_pb.CreateResult>;

  getByID(
    request: api_users_v1_users_pb.GetByIDRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_users_v1_users_pb.GetResult>;

  updateNames(
    request: api_users_v1_users_pb.UpdateNamesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_users_v1_users_pb.UpdateNamesResult>;

  updateAvatar(
    request: api_users_v1_users_pb.UpdateAvatarRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_users_v1_users_pb.UpdateAvatarResult>;

}

