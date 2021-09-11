import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Id extends jspb.Message {
  getSimplified(): string;
  setSimplified(value: string): Id;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Id;
  hasTimestamp(): boolean;
  clearTimestamp(): Id;

  getEntityId(): string;
  setEntityId(value: string): Id;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Id.AsObject;
  static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
  static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Id;
  static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
  export type AsObject = {
    simplified: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    entityId: string,
  }
}

