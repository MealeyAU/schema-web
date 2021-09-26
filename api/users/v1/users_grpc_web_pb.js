/**
 * @fileoverview gRPC-Web generated client stub for mealeyau.api.users.v1
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
proto.mealeyau.api.users = {};
proto.mealeyau.api.users.v1 = require('./users_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mealeyau.api.users.v1.UsersServiceClient =
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
proto.mealeyau.api.users.v1.UsersServicePromiseClient =
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
 *   !proto.mealeyau.api.users.v1.CreateRequest,
 *   !proto.mealeyau.api.users.v1.CreateResult>}
 */
const methodDescriptor_UsersService_Create = new grpc.web.MethodDescriptor(
  '/mealeyau.api.users.v1.UsersService/Create',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.users.v1.CreateRequest,
  proto.mealeyau.api.users.v1.CreateResult,
  /**
   * @param {!proto.mealeyau.api.users.v1.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.users.v1.CreateResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.users.v1.CreateRequest,
 *   !proto.mealeyau.api.users.v1.CreateResult>}
 */
const methodInfo_UsersService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.users.v1.CreateResult,
  /**
   * @param {!proto.mealeyau.api.users.v1.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.users.v1.CreateResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.users.v1.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.users.v1.CreateResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.users.v1.CreateResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.users.v1.UsersServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.users.v1.UsersService/Create',
      request,
      metadata || {},
      methodDescriptor_UsersService_Create,
      callback);
};


/**
 * @param {!proto.mealeyau.api.users.v1.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.users.v1.CreateResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.users.v1.UsersServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.users.v1.UsersService/Create',
      request,
      metadata || {},
      methodDescriptor_UsersService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealeyau.api.users.v1.GetByIDRequest,
 *   !proto.mealeyau.api.users.v1.GetResult>}
 */
const methodDescriptor_UsersService_GetByID = new grpc.web.MethodDescriptor(
  '/mealeyau.api.users.v1.UsersService/GetByID',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.users.v1.GetByIDRequest,
  proto.mealeyau.api.users.v1.GetResult,
  /**
   * @param {!proto.mealeyau.api.users.v1.GetByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.users.v1.GetResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.users.v1.GetByIDRequest,
 *   !proto.mealeyau.api.users.v1.GetResult>}
 */
const methodInfo_UsersService_GetByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.users.v1.GetResult,
  /**
   * @param {!proto.mealeyau.api.users.v1.GetByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.users.v1.GetResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.users.v1.GetByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.users.v1.GetResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.users.v1.GetResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.users.v1.UsersServiceClient.prototype.getByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.users.v1.UsersService/GetByID',
      request,
      metadata || {},
      methodDescriptor_UsersService_GetByID,
      callback);
};


/**
 * @param {!proto.mealeyau.api.users.v1.GetByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.users.v1.GetResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.users.v1.UsersServicePromiseClient.prototype.getByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.users.v1.UsersService/GetByID',
      request,
      metadata || {},
      methodDescriptor_UsersService_GetByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealeyau.api.users.v1.UpdateNamesRequest,
 *   !proto.mealeyau.api.users.v1.UpdateNamesResult>}
 */
const methodDescriptor_UsersService_UpdateNames = new grpc.web.MethodDescriptor(
  '/mealeyau.api.users.v1.UsersService/UpdateNames',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.users.v1.UpdateNamesRequest,
  proto.mealeyau.api.users.v1.UpdateNamesResult,
  /**
   * @param {!proto.mealeyau.api.users.v1.UpdateNamesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.users.v1.UpdateNamesResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.users.v1.UpdateNamesRequest,
 *   !proto.mealeyau.api.users.v1.UpdateNamesResult>}
 */
const methodInfo_UsersService_UpdateNames = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.users.v1.UpdateNamesResult,
  /**
   * @param {!proto.mealeyau.api.users.v1.UpdateNamesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.users.v1.UpdateNamesResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.users.v1.UpdateNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.users.v1.UpdateNamesResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.users.v1.UpdateNamesResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.users.v1.UsersServiceClient.prototype.updateNames =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.users.v1.UsersService/UpdateNames',
      request,
      metadata || {},
      methodDescriptor_UsersService_UpdateNames,
      callback);
};


/**
 * @param {!proto.mealeyau.api.users.v1.UpdateNamesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.users.v1.UpdateNamesResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.users.v1.UsersServicePromiseClient.prototype.updateNames =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.users.v1.UsersService/UpdateNames',
      request,
      metadata || {},
      methodDescriptor_UsersService_UpdateNames);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mealeyau.api.users.v1.UpdateAvatarRequest,
 *   !proto.mealeyau.api.users.v1.UpdateAvatarResult>}
 */
const methodDescriptor_UsersService_UpdateAvatar = new grpc.web.MethodDescriptor(
  '/mealeyau.api.users.v1.UsersService/UpdateAvatar',
  grpc.web.MethodType.UNARY,
  proto.mealeyau.api.users.v1.UpdateAvatarRequest,
  proto.mealeyau.api.users.v1.UpdateAvatarResult,
  /**
   * @param {!proto.mealeyau.api.users.v1.UpdateAvatarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.users.v1.UpdateAvatarResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mealeyau.api.users.v1.UpdateAvatarRequest,
 *   !proto.mealeyau.api.users.v1.UpdateAvatarResult>}
 */
const methodInfo_UsersService_UpdateAvatar = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mealeyau.api.users.v1.UpdateAvatarResult,
  /**
   * @param {!proto.mealeyau.api.users.v1.UpdateAvatarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mealeyau.api.users.v1.UpdateAvatarResult.deserializeBinary
);


/**
 * @param {!proto.mealeyau.api.users.v1.UpdateAvatarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mealeyau.api.users.v1.UpdateAvatarResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mealeyau.api.users.v1.UpdateAvatarResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mealeyau.api.users.v1.UsersServiceClient.prototype.updateAvatar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mealeyau.api.users.v1.UsersService/UpdateAvatar',
      request,
      metadata || {},
      methodDescriptor_UsersService_UpdateAvatar,
      callback);
};


/**
 * @param {!proto.mealeyau.api.users.v1.UpdateAvatarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mealeyau.api.users.v1.UpdateAvatarResult>}
 *     Promise that resolves to the response
 */
proto.mealeyau.api.users.v1.UsersServicePromiseClient.prototype.updateAvatar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mealeyau.api.users.v1.UsersService/UpdateAvatar',
      request,
      metadata || {},
      methodDescriptor_UsersService_UpdateAvatar);
};


module.exports = proto.mealeyau.api.users.v1;

