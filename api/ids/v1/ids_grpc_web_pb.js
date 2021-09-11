/**
 * @fileoverview gRPC-Web generated client stub for mealeyau.api.ids.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_ids_v1_id_pb = require('../../../common/ids/v1/id_pb.js')
const proto = {};
proto.mealeyau = {};
proto.mealeyau.api = {};
proto.mealeyau.api.ids = {};
proto.mealeyau.api.ids.v1 = require('./ids_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mealeyau.api.ids.v1.IdServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mealeyau.api.ids.v1.IdServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealeyau.api.ids.v1.GenerateRequest,
 *   !proto.mealeyau.api.ids.v1.GenerateResult>}
 */
const methodDescriptor_IdService_Generate = new grpc.web.MethodDescriptor(
  '/mealeyau.api.ids.v1.IdService/Generate',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.ids.v1.GenerateRequest,
  proto.mealeyau.api.ids.v1.GenerateResult,
  /**
   * @param {!proto.mealeyau.api.ids.v1.GenerateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.ids.v1.GenerateResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.ids.v1.GenerateRequest,
 *   !proto.mealeyau.api.ids.v1.GenerateResult>}
 */
const methodInfo_IdService_Generate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.ids.v1.GenerateResult,
  /**
   * @param {!proto.mealeyau.api.ids.v1.GenerateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.ids.v1.GenerateResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.ids.v1.GenerateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.ids.v1.GenerateResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.ids.v1.GenerateResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.ids.v1.IdServiceClient.prototype.generate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.ids.v1.IdService/Generate',
      request,
      metadata || {},
      methodDescriptor_IdService_Generate,
      callback);
};


/**
 * @param {!proto.mealeyau.api.ids.v1.GenerateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.ids.v1.GenerateResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.ids.v1.IdServicePromiseClient.prototype.generate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.ids.v1.IdService/Generate',
      request,
      metadata || {},
      methodDescriptor_IdService_Generate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealeyau.api.ids.v1.VerifyRequest,
 *   !proto.mealeyau.api.ids.v1.VerifyResult>}
 */
const methodDescriptor_IdService_Verify = new grpc.web.MethodDescriptor(
  '/mealeyau.api.ids.v1.IdService/Verify',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.ids.v1.VerifyRequest,
  proto.mealeyau.api.ids.v1.VerifyResult,
  /**
   * @param {!proto.mealeyau.api.ids.v1.VerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.ids.v1.VerifyResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.ids.v1.VerifyRequest,
 *   !proto.mealeyau.api.ids.v1.VerifyResult>}
 */
const methodInfo_IdService_Verify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.ids.v1.VerifyResult,
  /**
   * @param {!proto.mealeyau.api.ids.v1.VerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.ids.v1.VerifyResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.ids.v1.VerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.ids.v1.VerifyResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.ids.v1.VerifyResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.ids.v1.IdServiceClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.ids.v1.IdService/Verify',
      request,
      metadata || {},
      methodDescriptor_IdService_Verify,
      callback);
};


/**
 * @param {!proto.mealeyau.api.ids.v1.VerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.ids.v1.VerifyResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.ids.v1.IdServicePromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.ids.v1.IdService/Verify',
      request,
      metadata || {},
      methodDescriptor_IdService_Verify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealeyau.api.ids.v1.DeleteRequest,
 *   !proto.mealeyau.api.ids.v1.DeleteResult>}
 */
const methodDescriptor_IdService_Delete = new grpc.web.MethodDescriptor(
  '/mealeyau.api.ids.v1.IdService/Delete',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.ids.v1.DeleteRequest,
  proto.mealeyau.api.ids.v1.DeleteResult,
  /**
   * @param {!proto.mealeyau.api.ids.v1.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.ids.v1.DeleteResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.ids.v1.DeleteRequest,
 *   !proto.mealeyau.api.ids.v1.DeleteResult>}
 */
const methodInfo_IdService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.ids.v1.DeleteResult,
  /**
   * @param {!proto.mealeyau.api.ids.v1.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.ids.v1.DeleteResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.ids.v1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.ids.v1.DeleteResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.ids.v1.DeleteResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.ids.v1.IdServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.ids.v1.IdService/Delete',
      request,
      metadata || {},
      methodDescriptor_IdService_Delete,
      callback);
};


/**
 * @param {!proto.mealeyau.api.ids.v1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.ids.v1.DeleteResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.ids.v1.IdServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.ids.v1.IdService/Delete',
      request,
      metadata || {},
      methodDescriptor_IdService_Delete);
};


module.exports = proto.mealeyau.api.ids.v1;

