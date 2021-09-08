/**
 * @fileoverview gRPC-Web generated client stub for mealey.api.authorization.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.mealey = {};
proto.mealey.api = {};
proto.mealey.api.authorization = {};
proto.mealey.api.authorization.v1 = require('./authorization_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mealey.api.authorization.v1.AuthorizationServiceClient =
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
proto.mealey.api.authorization.v1.AuthorizationServicePromiseClient =
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
 *   !proto.mealey.api.authorization.v1.GetAccessTokenRequest,
 *   !proto.mealey.api.authorization.v1.GetAccessTokenResult>}
 */
const methodDescriptor_AuthorizationService_GetAccessToken = new grpc.web.MethodDescriptor(
  '/mealey.api.authorization.v1.AuthorizationService/GetAccessToken',
  grpc.web.MethodType.UNARY,
  proto.mealey.api.authorization.v1.GetAccessTokenRequest,
  proto.mealey.api.authorization.v1.GetAccessTokenResult,
  /**
   * @param {!proto.mealey.api.authorization.v1.GetAccessTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealey.api.authorization.v1.GetAccessTokenResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealey.api.authorization.v1.GetAccessTokenRequest,
 *   !proto.mealey.api.authorization.v1.GetAccessTokenResult>}
 */
const methodInfo_AuthorizationService_GetAccessToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealey.api.authorization.v1.GetAccessTokenResult,
  /**
   * @param {!proto.mealey.api.authorization.v1.GetAccessTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealey.api.authorization.v1.GetAccessTokenResult.deserializeBinary
);


/**
 * @param {!proto.mealey.api.authorization.v1.GetAccessTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealey.api.authorization.v1.GetAccessTokenResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealey.api.authorization.v1.GetAccessTokenResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealey.api.authorization.v1.AuthorizationServiceClient.prototype.getAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealey.api.authorization.v1.AuthorizationService/GetAccessToken',
      request,
      metadata || {},
      methodDescriptor_AuthorizationService_GetAccessToken,
      callback);
};


/**
 * @param {!proto.mealey.api.authorization.v1.GetAccessTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealey.api.authorization.v1.GetAccessTokenResult>}
 *     Promise that resolves to the response
 */
proto.mealey.api.authorization.v1.AuthorizationServicePromiseClient.prototype.getAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealey.api.authorization.v1.AuthorizationService/GetAccessToken',
      request,
      metadata || {},
      methodDescriptor_AuthorizationService_GetAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealey.api.authorization.v1.RefreshAccessTokenRequest,
 *   !proto.mealey.api.authorization.v1.RefreshAccessTokenResult>}
 */
const methodDescriptor_AuthorizationService_RefreshAccessToken = new grpc.web.MethodDescriptor(
  '/mealey.api.authorization.v1.AuthorizationService/RefreshAccessToken',
  grpc.web.MethodType.UNARY,
  proto.mealey.api.authorization.v1.RefreshAccessTokenRequest,
  proto.mealey.api.authorization.v1.RefreshAccessTokenResult,
  /**
   * @param {!proto.mealey.api.authorization.v1.RefreshAccessTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealey.api.authorization.v1.RefreshAccessTokenResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealey.api.authorization.v1.RefreshAccessTokenRequest,
 *   !proto.mealey.api.authorization.v1.RefreshAccessTokenResult>}
 */
const methodInfo_AuthorizationService_RefreshAccessToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealey.api.authorization.v1.RefreshAccessTokenResult,
  /**
   * @param {!proto.mealey.api.authorization.v1.RefreshAccessTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealey.api.authorization.v1.RefreshAccessTokenResult.deserializeBinary
);


/**
 * @param {!proto.mealey.api.authorization.v1.RefreshAccessTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealey.api.authorization.v1.RefreshAccessTokenResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealey.api.authorization.v1.RefreshAccessTokenResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealey.api.authorization.v1.AuthorizationServiceClient.prototype.refreshAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealey.api.authorization.v1.AuthorizationService/RefreshAccessToken',
      request,
      metadata || {},
      methodDescriptor_AuthorizationService_RefreshAccessToken,
      callback);
};


/**
 * @param {!proto.mealey.api.authorization.v1.RefreshAccessTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealey.api.authorization.v1.RefreshAccessTokenResult>}
 *     Promise that resolves to the response
 */
proto.mealey.api.authorization.v1.AuthorizationServicePromiseClient.prototype.refreshAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealey.api.authorization.v1.AuthorizationService/RefreshAccessToken',
      request,
      metadata || {},
      methodDescriptor_AuthorizationService_RefreshAccessToken);
};


module.exports = proto.mealey.api.authorization.v1;

