import * as jspb from 'google-protobuf'

import * as common_ids_v1_id_pb from '../../../common/ids/v1/id_pb';


export class GenerateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateRequest): GenerateRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateRequest;
  static deserializeBinaryFromReader(message: GenerateRequest, reader: jspb.BinaryReader): GenerateRequest;
}

export namespace GenerateRequest {
  export type AsObject = {
  }
}

export class GenerateResult extends jspb.Message {
  getId(): common_ids_v1_id_pb.Id | undefined;
  setId(value?: common_ids_v1_id_pb.Id): GenerateResult;
  hasId(): boolean;
  clearId(): GenerateResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResult.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResult): GenerateResult.AsObject;
  static serializeBinaryToWriter(message: GenerateResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResult;
  static deserializeBinaryFromReader(message: GenerateResult, reader: jspb.BinaryReader): GenerateResult;
}

export namespace GenerateResult {
  export type AsObject = {
    id?: common_ids_v1_id_pb.Id.AsObject,
  }
}

export class VerifyRequest extends jspb.Message {
  getId(): common_ids_v1_id_pb.Id | undefined;
  setId(value?: common_ids_v1_id_pb.Id): VerifyRequest;
  hasId(): boolean;
  clearId(): VerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyRequest): VerifyRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyRequest;
  static deserializeBinaryFromReader(message: VerifyRequest, reader: jspb.BinaryReader): VerifyRequest;
}

export namespace VerifyRequest {
  export type AsObject = {
    id?: common_ids_v1_id_pb.Id.AsObject,
  }
}

export class VerifyResult extends jspb.Message {
  getStatus(): VerifyStatus;
  setStatus(value: VerifyStatus): VerifyResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyResult.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyResult): VerifyResult.AsObject;
  static serializeBinaryToWriter(message: VerifyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyResult;
  static deserializeBinaryFromReader(message: VerifyResult, reader: jspb.BinaryReader): VerifyResult;
}

export namespace VerifyResult {
  export type AsObject = {
    status: VerifyStatus,
  }
}

export class DeleteRequest extends jspb.Message {
  getId(): common_ids_v1_id_pb.Id | undefined;
  setId(value?: common_ids_v1_id_pb.Id): DeleteRequest;
  hasId(): boolean;
  clearId(): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id?: common_ids_v1_id_pb.Id.AsObject,
  }
}

export class DeleteResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResult.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResult): DeleteResult.AsObject;
  static serializeBinaryToWriter(message: DeleteResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResult;
  static deserializeBinaryFromReader(message: DeleteResult, reader: jspb.BinaryReader): DeleteResult;
}

export namespace DeleteResult {
  export type AsObject = {
  }
}

export enum VerifyStatus { 
  UNKNOWN = 0,
  INVALID = 1,
  ACTIVE = 2,
  DELETED = 3,
}
