import * as jspb from 'google-protobuf'

import * as common_users_v1_user_pb from '../../../common/users/v1/user_pb';


export class RegisterRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getGivenName(): string;
  setGivenName(value: string): RegisterRequest;

  getFamilyName(): string;
  setFamilyName(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    email: string,
    password: string,
    givenName: string,
    familyName: string,
  }
}

export class RegisterResult extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): RegisterResult;

  getRefreshToken(): string;
  setRefreshToken(value: string): RegisterResult;

  getUser(): common_users_v1_user_pb.User | undefined;
  setUser(value?: common_users_v1_user_pb.User): RegisterResult;
  hasUser(): boolean;
  clearUser(): RegisterResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResult.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResult): RegisterResult.AsObject;
  static serializeBinaryToWriter(message: RegisterResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResult;
  static deserializeBinaryFromReader(message: RegisterResult, reader: jspb.BinaryReader): RegisterResult;
}

export namespace RegisterResult {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    user?: common_users_v1_user_pb.User.AsObject,
  }
}

