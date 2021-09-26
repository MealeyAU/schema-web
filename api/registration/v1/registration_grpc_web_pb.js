/**
 * @fileoverview gRPC-Web generated client stub for mealeyau.api.registration.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_users_v1_user_pb = require('../../../common/users/v1/user_pb.js')
const proto = {};
proto.mealeyau = {};
proto.mealeyau.api = {};
proto.mealeyau.api.registration = {};
proto.mealeyau.api.registration.v1 = require('./registration_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mealeyau.api.registration.v1.RegistrationServiceClient =
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
proto.mealeyau.api.registration.v1.RegistrationServicePromiseClient =
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
 *   !proto.mealeyau.api.registration.v1.RegisterRequest,
 *   !proto.mealeyau.api.registration.v1.RegisterResult>}
 */
const methodDescriptor_RegistrationService_Register = new grpc.web.MethodDescriptor(
  '/mealeyau.api.registration.v1.RegistrationService/Register',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.registration.v1.RegisterRequest,
  proto.mealeyau.api.registration.v1.RegisterResult,
  /**
   * @param {!proto.mealeyau.api.registration.v1.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.registration.v1.RegisterResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.registration.v1.RegisterRequest,
 *   !proto.mealeyau.api.registration.v1.RegisterResult>}
 */
const methodInfo_RegistrationService_Register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.registration.v1.RegisterResult,
  /**
   * @param {!proto.mealeyau.api.registration.v1.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.registration.v1.RegisterResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.registration.v1.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.registration.v1.RegisterResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.registration.v1.RegisterResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.registration.v1.RegistrationServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.registration.v1.RegistrationService/Register',
      request,
      metadata || {},
      methodDescriptor_RegistrationService_Register,
      callback);
};


/**
 * @param {!proto.mealeyau.api.registration.v1.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.registration.v1.RegisterResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.registration.v1.RegistrationServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.registration.v1.RegistrationService/Register',
      request,
      metadata || {},
      methodDescriptor_RegistrationService_Register);
};


module.exports = proto.mealeyau.api.registration.v1;

