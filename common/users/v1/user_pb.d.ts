import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getGivenName(): string;
  setGivenName(value: string): User;

  getFamilyName(): string;
  setFamilyName(value: string): User;

  getAvatarId(): string;
  setAvatarId(value: string): User;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreatedAt(): boolean;
  clearCreatedAt(): User;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasModifiedAt(): boolean;
  clearModifiedAt(): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    givenName: string,
    familyName: string,
    avatarId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

