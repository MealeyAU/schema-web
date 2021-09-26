import * as jspb from 'google-protobuf'



export class AuthenticatePasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AuthenticatePasswordRequest;

  getPassword(): string;
  setPassword(value: string): AuthenticatePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticatePasswordRequest): AuthenticatePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticatePasswordRequest;
  static deserializeBinaryFromReader(message: AuthenticatePasswordRequest, reader: jspb.BinaryReader): AuthenticatePasswordRequest;
}

export namespace AuthenticatePasswordRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class RefreshRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshRequest): RefreshRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshRequest;
  static deserializeBinaryFromReader(message: RefreshRequest, reader: jspb.BinaryReader): RefreshRequest;
}

export namespace RefreshRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

export class TokenResult extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): TokenResult;

  getRefreshToken(): string;
  setRefreshToken(value: string): TokenResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenResult.AsObject;
  static toObject(includeInstance: boolean, msg: TokenResult): TokenResult.AsObject;
  static serializeBinaryToWriter(message: TokenResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenResult;
  static deserializeBinaryFromReader(message: TokenResult, reader: jspb.BinaryReader): TokenResult;
}

export namespace TokenResult {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

