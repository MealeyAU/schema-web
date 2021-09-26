import * as jspb from 'google-protobuf'



export class GetUploadURLRequest extends jspb.Message {
  getMediaType(): GetUploadURLRequest.MediaType;
  setMediaType(value: GetUploadURLRequest.MediaType): GetUploadURLRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUploadURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUploadURLRequest): GetUploadURLRequest.AsObject;
  static serializeBinaryToWriter(message: GetUploadURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUploadURLRequest;
  static deserializeBinaryFromReader(message: GetUploadURLRequest, reader: jspb.BinaryReader): GetUploadURLRequest;
}

export namespace GetUploadURLRequest {
  export type AsObject = {
    mediaType: GetUploadURLRequest.MediaType,
  }

  export enum MediaType { 
    UNKNOWN = 0,
    AVATAR = 1,
    IMAGE = 2,
    VIDEO = 3,
    AUDIO = 4,
  }
}

export class GetUploadURLResult extends jspb.Message {
  getId(): string;
  setId(value: string): GetUploadURLResult;

  getUrl(): string;
  setUrl(value: string): GetUploadURLResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUploadURLResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetUploadURLResult): GetUploadURLResult.AsObject;
  static serializeBinaryToWriter(message: GetUploadURLResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUploadURLResult;
  static deserializeBinaryFromReader(message: GetUploadURLResult, reader: jspb.BinaryReader): GetUploadURLResult;
}

export namespace GetUploadURLResult {
  export type AsObject = {
    id: string,
    url: string,
  }
}

export class GetDownloadURLRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetDownloadURLRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDownloadURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDownloadURLRequest): GetDownloadURLRequest.AsObject;
  static serializeBinaryToWriter(message: GetDownloadURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDownloadURLRequest;
  static deserializeBinaryFromReader(message: GetDownloadURLRequest, reader: jspb.BinaryReader): GetDownloadURLRequest;
}

export namespace GetDownloadURLRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetDownloadURLResult extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GetDownloadURLResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDownloadURLResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetDownloadURLResult): GetDownloadURLResult.AsObject;
  static serializeBinaryToWriter(message: GetDownloadURLResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDownloadURLResult;
  static deserializeBinaryFromReader(message: GetDownloadURLResult, reader: jspb.BinaryReader): GetDownloadURLResult;
}

export namespace GetDownloadURLResult {
  export type AsObject = {
    url: string,
  }
}

