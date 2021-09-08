import * as jspb from 'google-protobuf'



export class GetAccessTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccessTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccessTokenRequest): GetAccessTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccessTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccessTokenRequest;
  static deserializeBinaryFromReader(message: GetAccessTokenRequest, reader: jspb.BinaryReader): GetAccessTokenRequest;
}

export namespace GetAccessTokenRequest {
  export type AsObject = {
  }
}

export class GetAccessTokenResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccessTokenResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccessTokenResult): GetAccessTokenResult.AsObject;
  static serializeBinaryToWriter(message: GetAccessTokenResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccessTokenResult;
  static deserializeBinaryFromReader(message: GetAccessTokenResult, reader: jspb.BinaryReader): GetAccessTokenResult;
}

export namespace GetAccessTokenResult {
  export type AsObject = {
  }
}

export class RefreshAccessTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshAccessTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshAccessTokenRequest): RefreshAccessTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshAccessTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshAccessTokenRequest;
  static deserializeBinaryFromReader(message: RefreshAccessTokenRequest, reader: jspb.BinaryReader): RefreshAccessTokenRequest;
}

export namespace RefreshAccessTokenRequest {
  export type AsObject = {
  }
}

export class RefreshAccessTokenResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshAccessTokenResult.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshAccessTokenResult): RefreshAccessTokenResult.AsObject;
  static serializeBinaryToWriter(message: RefreshAccessTokenResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshAccessTokenResult;
  static deserializeBinaryFromReader(message: RefreshAccessTokenResult, reader: jspb.BinaryReader): RefreshAccessTokenResult;
}

export namespace RefreshAccessTokenResult {
  export type AsObject = {
  }
}

