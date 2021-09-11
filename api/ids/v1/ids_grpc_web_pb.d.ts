import * as grpcWeb from 'grpc-web';

import * as api_ids_v1_ids_pb from '../../../api/ids/v1/ids_pb';


export class IdServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  generate(
    request: api_ids_v1_ids_pb.GenerateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_ids_v1_ids_pb.GenerateResult) => void
  ): grpcWeb.ClientReadableStream<api_ids_v1_ids_pb.GenerateResult>;

  verify(
    request: api_ids_v1_ids_pb.VerifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_ids_v1_ids_pb.VerifyResult) => void
  ): grpcWeb.ClientReadableStream<api_ids_v1_ids_pb.VerifyResult>;

  delete(
    request: api_ids_v1_ids_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_ids_v1_ids_pb.DeleteResult) => void
  ): grpcWeb.ClientReadableStream<api_ids_v1_ids_pb.DeleteResult>;

}

export class IdServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  generate(
    request: api_ids_v1_ids_pb.GenerateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_ids_v1_ids_pb.GenerateResult>;

  verify(
    request: api_ids_v1_ids_pb.VerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_ids_v1_ids_pb.VerifyResult>;

  delete(
    request: api_ids_v1_ids_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_ids_v1_ids_pb.DeleteResult>;

}

