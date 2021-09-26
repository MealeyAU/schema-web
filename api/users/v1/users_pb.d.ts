import * as jspb from 'google-protobuf'

import * as common_users_v1_user_pb from '../../../common/users/v1/user_pb';


export class CreateRequest extends jspb.Message {
  getGivenName(): string;
  setGivenName(value: string): CreateRequest;

  getFamilyName(): string;
  setFamilyName(value: string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    givenName: string,
    familyName: string,
  }
}

export class CreateResult extends jspb.Message {
  getUser(): common_users_v1_user_pb.User | undefined;
  setUser(value?: common_users_v1_user_pb.User): CreateResult;
  hasUser(): boolean;
  clearUser(): CreateResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResult.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResult): CreateResult.AsObject;
  static serializeBinaryToWriter(message: CreateResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResult;
  static deserializeBinaryFromReader(message: CreateResult, reader: jspb.BinaryReader): CreateResult;
}

export namespace CreateResult {
  export type AsObject = {
    user?: common_users_v1_user_pb.User.AsObject,
  }
}

export class GetByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByIDRequest): GetByIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByIDRequest;
  static deserializeBinaryFromReader(message: GetByIDRequest, reader: jspb.BinaryReader): GetByIDRequest;
}

export namespace GetByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetResult extends jspb.Message {
  getUser(): common_users_v1_user_pb.User | undefined;
  setUser(value?: common_users_v1_user_pb.User): GetResult;
  hasUser(): boolean;
  clearUser(): GetResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetResult): GetResult.AsObject;
  static serializeBinaryToWriter(message: GetResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResult;
  static deserializeBinaryFromReader(message: GetResult, reader: jspb.BinaryReader): GetResult;
}

export namespace GetResult {
  export type AsObject = {
    user?: common_users_v1_user_pb.User.AsObject,
  }
}

export class UpdateNamesRequest extends jspb.Message {
  getGivenName(): string;
  setGivenName(value: string): UpdateNamesRequest;

  getFamilyName(): string;
  setFamilyName(value: string): UpdateNamesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNamesRequest): UpdateNamesRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNamesRequest;
  static deserializeBinaryFromReader(message: UpdateNamesRequest, reader: jspb.BinaryReader): UpdateNamesRequest;
}

export namespace UpdateNamesRequest {
  export type AsObject = {
    givenName: string,
    familyName: string,
  }
}

export class UpdateNamesResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNamesResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNamesResult): UpdateNamesResult.AsObject;
  static serializeBinaryToWriter(message: UpdateNamesResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNamesResult;
  static deserializeBinaryFromReader(message: UpdateNamesResult, reader: jspb.BinaryReader): UpdateNamesResult;
}

export namespace UpdateNamesResult {
  export type AsObject = {
  }
}

export class UpdateAvatarRequest extends jspb.Message {
  getAvatarId(): string;
  setAvatarId(value: string): UpdateAvatarRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAvatarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAvatarRequest): UpdateAvatarRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAvatarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAvatarRequest;
  static deserializeBinaryFromReader(message: UpdateAvatarRequest, reader: jspb.BinaryReader): UpdateAvatarRequest;
}

export namespace UpdateAvatarRequest {
  export type AsObject = {
    avatarId: string,
  }
}

export class UpdateAvatarResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAvatarResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAvatarResult): UpdateAvatarResult.AsObject;
  static serializeBinaryToWriter(message: UpdateAvatarResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAvatarResult;
  static deserializeBinaryFromReader(message: UpdateAvatarResult, reader: jspb.BinaryReader): UpdateAvatarResult;
}

export namespace UpdateAvatarResult {
  export type AsObject = {
  }
}

