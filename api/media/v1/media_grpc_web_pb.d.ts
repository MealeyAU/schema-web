import * as grpcWeb from 'grpc-web';

import * as api_media_v1_media_pb from '../../../api/media/v1/media_pb';


export class MediaServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getUploadURL(
    request: api_media_v1_media_pb.GetUploadURLRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_media_v1_media_pb.GetUploadURLResult) => void
  ): grpcWeb.ClientReadableStream<api_media_v1_media_pb.GetUploadURLResult>;

  getDownloadURL(
    request: api_media_v1_media_pb.GetDownloadURLRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_media_v1_media_pb.GetDownloadURLResult) => void
  ): grpcWeb.ClientReadableStream<api_media_v1_media_pb.GetDownloadURLResult>;

}

export class MediaServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getUploadURL(
    request: api_media_v1_media_pb.GetUploadURLRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_media_v1_media_pb.GetUploadURLResult>;

  getDownloadURL(
    request: api_media_v1_media_pb.GetDownloadURLRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_media_v1_media_pb.GetDownloadURLResult>;

}

