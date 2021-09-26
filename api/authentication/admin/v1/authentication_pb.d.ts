import * as jspb from 'google-protobuf'



export class AddPasswordCredentialsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): AddPasswordCredentialsRequest;

  getEmail(): string;
  setEmail(value: string): AddPasswordCredentialsRequest;

  getPassword(): string;
  setPassword(value: string): AddPasswordCredentialsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPasswordCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPasswordCredentialsRequest): AddPasswordCredentialsRequest.AsObject;
  static serializeBinaryToWriter(message: AddPasswordCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPasswordCredentialsRequest;
  static deserializeBinaryFromReader(message: AddPasswordCredentialsRequest, reader: jspb.BinaryReader): AddPasswordCredentialsRequest;
}

export namespace AddPasswordCredentialsRequest {
  export type AsObject = {
    userId: string,
    email: string,
    password: string,
  }
}

export class AddPasswordCredentialsResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPasswordCredentialsResult.AsObject;
  static toObject(includeInstance: boolean, msg: AddPasswordCredentialsResult): AddPasswordCredentialsResult.AsObject;
  static serializeBinaryToWriter(message: AddPasswordCredentialsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPasswordCredentialsResult;
  static deserializeBinaryFromReader(message: AddPasswordCredentialsResult, reader: jspb.BinaryReader): AddPasswordCredentialsResult;
}

export namespace AddPasswordCredentialsResult {
  export type AsObject = {
  }
}

