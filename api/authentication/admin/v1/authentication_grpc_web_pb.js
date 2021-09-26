/**
 * @fileoverview gRPC-Web generated client stub for mealeyau.api.authentication.admin.v1
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
proto.mealeyau.api.authentication.admin = {};
proto.mealeyau.api.authentication.admin.v1 = require('./authentication_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mealeyau.api.authentication.admin.v1.AdminAuthenticationServiceClient =
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
proto.mealeyau.api.authentication.admin.v1.AdminAuthenticationServicePromiseClient =
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
 *   !proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsRequest,
 *   !proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult>}
 */
const methodDescriptor_AdminAuthenticationService_AddPasswordCredentials = new grpc.web.MethodDescriptor(
  '/mealeyau.api.authentication.admin.v1.AdminAuthenticationService/AddPasswordCredentials',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsRequest,
  proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult,
  /**
   * @param {!proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsRequest,
 *   !proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult>}
 */
const methodInfo_AdminAuthenticationService_AddPasswordCredentials = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult,
  /**
   * @param {!proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.authentication.admin.v1.AdminAuthenticationServiceClient.prototype.addPasswordCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.authentication.admin.v1.AdminAuthenticationService/AddPasswordCredentials',
      request,
      metadata || {},
      methodDescriptor_AdminAuthenticationService_AddPasswordCredentials,
      callback);
};


/**
 * @param {!proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.authentication.admin.v1.AddPasswordCredentialsResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.authentication.admin.v1.AdminAuthenticationServicePromiseClient.prototype.addPasswordCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.authentication.admin.v1.AdminAuthenticationService/AddPasswordCredentials',
      request,
      metadata || {},
      methodDescriptor_AdminAuthenticationService_AddPasswordCredentials);
};


module.exports = proto.mealeyau.api.authentication.admin.v1;

