import * as jspb from 'google-protobuf'

import * as api_users_v1_user_pb from '../../../api/users/v1/user_pb';


export class CreateUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
  }
}

export class CreateUserResult extends jspb.Message {
  getUser(): api_users_v1_user_pb.User | undefined;
  setUser(value?: api_users_v1_user_pb.User): CreateUserResult;
  hasUser(): boolean;
  clearUser(): CreateUserResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResult.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResult): CreateUserResult.AsObject;
  static serializeBinaryToWriter(message: CreateUserResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResult;
  static deserializeBinaryFromReader(message: CreateUserResult, reader: jspb.BinaryReader): CreateUserResult;
}

export namespace CreateUserResult {
  export type AsObject = {
    user?: api_users_v1_user_pb.User.AsObject,
  }
}

