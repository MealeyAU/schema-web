/**
 * @fileoverview gRPC-Web generated client stub for mealeyau.api.media.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.mealeyau = {};
proto.mealeyau.api = {};
proto.mealeyau.api.media = {};
proto.mealeyau.api.media.v1 = require('./media_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mealeyau.api.media.v1.MediaServiceClient =
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
proto.mealeyau.api.media.v1.MediaServicePromiseClient =
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
 *   !proto.mealeyau.api.media.v1.GetUploadURLRequest,
 *   !proto.mealeyau.api.media.v1.GetUploadURLResult>}
 */
const methodDescriptor_MediaService_GetUploadURL = new grpc.web.MethodDescriptor(
  '/mealeyau.api.media.v1.MediaService/GetUploadURL',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.media.v1.GetUploadURLRequest,
  proto.mealeyau.api.media.v1.GetUploadURLResult,
  /**
   * @param {!proto.mealeyau.api.media.v1.GetUploadURLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.media.v1.GetUploadURLResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.media.v1.GetUploadURLRequest,
 *   !proto.mealeyau.api.media.v1.GetUploadURLResult>}
 */
const methodInfo_MediaService_GetUploadURL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.media.v1.GetUploadURLResult,
  /**
   * @param {!proto.mealeyau.api.media.v1.GetUploadURLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.media.v1.GetUploadURLResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.media.v1.GetUploadURLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.media.v1.GetUploadURLResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.media.v1.GetUploadURLResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.media.v1.MediaServiceClient.prototype.getUploadURL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.media.v1.MediaService/GetUploadURL',
      request,
      metadata || {},
      methodDescriptor_MediaService_GetUploadURL,
      callback);
};


/**
 * @param {!proto.mealeyau.api.media.v1.GetUploadURLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.media.v1.GetUploadURLResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.media.v1.MediaServicePromiseClient.prototype.getUploadURL =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.media.v1.MediaService/GetUploadURL',
      request,
      metadata || {},
      methodDescriptor_MediaService_GetUploadURL);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealeyau.api.media.v1.GetDownloadURLRequest,
 *   !proto.mealeyau.api.media.v1.GetDownloadURLResult>}
 */
const methodDescriptor_MediaService_GetDownloadURL = new grpc.web.MethodDescriptor(
  '/mealeyau.api.media.v1.MediaService/GetDownloadURL',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.media.v1.GetDownloadURLRequest,
  proto.mealeyau.api.media.v1.GetDownloadURLResult,
  /**
   * @param {!proto.mealeyau.api.media.v1.GetDownloadURLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.media.v1.GetDownloadURLResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.media.v1.GetDownloadURLRequest,
 *   !proto.mealeyau.api.media.v1.GetDownloadURLResult>}
 */
const methodInfo_MediaService_GetDownloadURL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.media.v1.GetDownloadURLResult,
  /**
   * @param {!proto.mealeyau.api.media.v1.GetDownloadURLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.media.v1.GetDownloadURLResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.media.v1.GetDownloadURLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.media.v1.GetDownloadURLResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.media.v1.GetDownloadURLResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.media.v1.MediaServiceClient.prototype.getDownloadURL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.media.v1.MediaService/GetDownloadURL',
      request,
      metadata || {},
      methodDescriptor_MediaService_GetDownloadURL,
      callback);
};


/**
 * @param {!proto.mealeyau.api.media.v1.GetDownloadURLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.media.v1.GetDownloadURLResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.media.v1.MediaServicePromiseClient.prototype.getDownloadURL =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.media.v1.MediaService/GetDownloadURL',
      request,
      metadata || {},
      methodDescriptor_MediaService_GetDownloadURL);
};


module.exports = proto.mealeyau.api.media.v1;

