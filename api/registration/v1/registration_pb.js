// source: api/registration/v1/registration.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_users_v1_user_pb = require('../../../common/users/v1/user_pb.js');
goog.object.extend(proto, common_users_v1_user_pb);
goog.exportSymbol('proto.mealeyau.api.registration.v1.RegisterRequest', null, global);
goog.exportSymbol('proto.mealeyau.api.registration.v1.RegisterResult', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mealeyau.api.registration.v1.RegisterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mealeyau.api.registration.v1.RegisterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mealeyau.api.registration.v1.RegisterRequest.displayName = 'proto.mealeyau.api.registration.v1.RegisterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mealeyau.api.registration.v1.RegisterResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mealeyau.api.registration.v1.RegisterResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mealeyau.api.registration.v1.RegisterResult.displayName = 'proto.mealeyau.api.registration.v1.RegisterResult';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mealeyau.api.registration.v1.RegisterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mealeyau.api.registration.v1.RegisterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mealeyau.api.registration.v1.RegisterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    givenName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    familyName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mealeyau.api.registration.v1.RegisterRequest}
 */
proto.mealeyau.api.registration.v1.RegisterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mealeyau.api.registration.v1.RegisterRequest;
  return proto.mealeyau.api.registration.v1.RegisterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mealeyau.api.registration.v1.RegisterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mealeyau.api.registration.v1.RegisterRequest}
 */
proto.mealeyau.api.registration.v1.RegisterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGivenName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFamilyName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mealeyau.api.registration.v1.RegisterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mealeyau.api.registration.v1.RegisterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mealeyau.api.registration.v1.RegisterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGivenName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFamilyName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.api.registration.v1.RegisterRequest} returns this
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.api.registration.v1.RegisterRequest} returns this
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string given_name = 3;
 * @return {string}
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.api.registration.v1.RegisterRequest} returns this
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.setGivenName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string family_name = 4;
 * @return {string}
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.getFamilyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.api.registration.v1.RegisterRequest} returns this
 */
proto.mealeyau.api.registration.v1.RegisterRequest.prototype.setFamilyName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.toObject = function(opt_includeInstance) {
  return proto.mealeyau.api.registration.v1.RegisterResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mealeyau.api.registration.v1.RegisterResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mealeyau.api.registration.v1.RegisterResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refreshToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: (f = msg.getUser()) && common_users_v1_user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mealeyau.api.registration.v1.RegisterResult}
 */
proto.mealeyau.api.registration.v1.RegisterResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mealeyau.api.registration.v1.RegisterResult;
  return proto.mealeyau.api.registration.v1.RegisterResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mealeyau.api.registration.v1.RegisterResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mealeyau.api.registration.v1.RegisterResult}
 */
proto.mealeyau.api.registration.v1.RegisterResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshToken(value);
      break;
    case 3:
      var value = new common_users_v1_user_pb.User;
      reader.readMessage(value,common_users_v1_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mealeyau.api.registration.v1.RegisterResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mealeyau.api.registration.v1.RegisterResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mealeyau.api.registration.v1.RegisterResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_users_v1_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string access_token = 1;
 * @return {string}
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.api.registration.v1.RegisterResult} returns this
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_token = 2;
 * @return {string}
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.getRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.api.registration.v1.RegisterResult} returns this
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.setRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional mealeyau.common.users.v1.User user = 3;
 * @return {?proto.mealeyau.common.users.v1.User}
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.getUser = function() {
  return /** @type{?proto.mealeyau.common.users.v1.User} */ (
    jspb.Message.getWrapperField(this, common_users_v1_user_pb.User, 3));
};


/**
 * @param {?proto.mealeyau.common.users.v1.User|undefined} value
 * @return {!proto.mealeyau.api.registration.v1.RegisterResult} returns this
*/
proto.mealeyau.api.registration.v1.RegisterResult.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mealeyau.api.registration.v1.RegisterResult} returns this
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mealeyau.api.registration.v1.RegisterResult.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.mealeyau.api.registration.v1);