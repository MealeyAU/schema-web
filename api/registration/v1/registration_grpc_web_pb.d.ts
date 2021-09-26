import * as grpcWeb from 'grpc-web';

import * as api_registration_v1_registration_pb from '../../../api/registration/v1/registration_pb';


export class RegistrationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  register(
    request: api_registration_v1_registration_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_registration_v1_registration_pb.RegisterResult) => void
  ): grpcWeb.ClientReadableStream<api_registration_v1_registration_pb.RegisterResult>;

}

export class RegistrationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  register(
    request: api_registration_v1_registration_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_registration_v1_registration_pb.RegisterResult>;

}

