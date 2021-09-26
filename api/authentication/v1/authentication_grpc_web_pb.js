/**
 * @fileoverview gRPC-Web generated client stub for mealeyau.api.authentication.v1
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
proto.mealeyau.api.authentication = {};
proto.mealeyau.api.authentication.v1 = require('./authentication_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mealeyau.api.authentication.v1.AuthenticationServiceClient =
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
proto.mealeyau.api.authentication.v1.AuthenticationServicePromiseClient =
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
 *   !proto.mealeyau.api.authentication.v1.AuthenticatePasswordRequest,
 *   !proto.mealeyau.api.authentication.v1.TokenResult>}
 */
const methodDescriptor_AuthenticationService_AuthenticatePassword = new grpc.web.MethodDescriptor(
  '/mealeyau.api.authentication.v1.AuthenticationService/AuthenticatePassword',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.authentication.v1.AuthenticatePasswordRequest,
  proto.mealeyau.api.authentication.v1.TokenResult,
  /**
   * @param {!proto.mealeyau.api.authentication.v1.AuthenticatePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.authentication.v1.TokenResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.authentication.v1.AuthenticatePasswordRequest,
 *   !proto.mealeyau.api.authentication.v1.TokenResult>}
 */
const methodInfo_AuthenticationService_AuthenticatePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.authentication.v1.TokenResult,
  /**
   * @param {!proto.mealeyau.api.authentication.v1.AuthenticatePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.authentication.v1.TokenResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.authentication.v1.AuthenticatePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.authentication.v1.TokenResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.authentication.v1.TokenResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.authentication.v1.AuthenticationServiceClient.prototype.authenticatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.authentication.v1.AuthenticationService/AuthenticatePassword',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_AuthenticatePassword,
      callback);
};


/**
 * @param {!proto.mealeyau.api.authentication.v1.AuthenticatePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.authentication.v1.TokenResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.authentication.v1.AuthenticationServicePromiseClient.prototype.authenticatePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.authentication.v1.AuthenticationService/AuthenticatePassword',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_AuthenticatePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealeyau.api.authentication.v1.RefreshRequest,
 *   !proto.mealeyau.api.authentication.v1.TokenResult>}
 */
const methodDescriptor_AuthenticationService_Refresh = new grpc.web.MethodDescriptor(
  '/mealeyau.api.authentication.v1.AuthenticationService/Refresh',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.authentication.v1.RefreshRequest,
  proto.mealeyau.api.authentication.v1.TokenResult,
  /**
   * @param {!proto.mealeyau.api.authentication.v1.RefreshRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.authentication.v1.TokenResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.authentication.v1.RefreshRequest,
 *   !proto.mealeyau.api.authentication.v1.TokenResult>}
 */
const methodInfo_AuthenticationService_Refresh = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.authentication.v1.TokenResult,
  /**
   * @param {!proto.mealeyau.api.authentication.v1.RefreshRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.authentication.v1.TokenResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.authentication.v1.RefreshRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.authentication.v1.TokenResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.authentication.v1.TokenResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.authentication.v1.AuthenticationServiceClient.prototype.refresh =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.authentication.v1.AuthenticationService/Refresh',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_Refresh,
      callback);
};


/**
 * @param {!proto.mealeyau.api.authentication.v1.RefreshRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.authentication.v1.TokenResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.authentication.v1.AuthenticationServicePromiseClient.prototype.refresh =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.authentication.v1.AuthenticationService/Refresh',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_Refresh);
};


module.exports = proto.mealeyau.api.authentication.v1;

