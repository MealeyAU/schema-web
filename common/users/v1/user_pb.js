// source: common/users/v1/user.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.mealeyau.common.users.v1.User', null, global);
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
proto.mealeyau.common.users.v1.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mealeyau.common.users.v1.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mealeyau.common.users.v1.User.displayName = 'proto.mealeyau.common.users.v1.User';
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
proto.mealeyau.common.users.v1.User.prototype.toObject = function(opt_includeInstance) {
  return proto.mealeyau.common.users.v1.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mealeyau.common.users.v1.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mealeyau.common.users.v1.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    givenName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    familyName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avatarId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.mealeyau.common.users.v1.User}
 */
proto.mealeyau.common.users.v1.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mealeyau.common.users.v1.User;
  return proto.mealeyau.common.users.v1.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mealeyau.common.users.v1.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mealeyau.common.users.v1.User}
 */
proto.mealeyau.common.users.v1.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGivenName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFamilyName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarId(value);
      break;
    case 30:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 31:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
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
proto.mealeyau.common.users.v1.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mealeyau.common.users.v1.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mealeyau.common.users.v1.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mealeyau.common.users.v1.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGivenName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFamilyName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvatarId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.mealeyau.common.users.v1.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.common.users.v1.User} returns this
 */
proto.mealeyau.common.users.v1.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string given_name = 2;
 * @return {string}
 */
proto.mealeyau.common.users.v1.User.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.common.users.v1.User} returns this
 */
proto.mealeyau.common.users.v1.User.prototype.setGivenName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string family_name = 3;
 * @return {string}
 */
proto.mealeyau.common.users.v1.User.prototype.getFamilyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.common.users.v1.User} returns this
 */
proto.mealeyau.common.users.v1.User.prototype.setFamilyName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avatar_id = 4;
 * @return {string}
 */
proto.mealeyau.common.users.v1.User.prototype.getAvatarId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mealeyau.common.users.v1.User} returns this
 */
proto.mealeyau.common.users.v1.User.prototype.setAvatarId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 30;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mealeyau.common.users.v1.User.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 30));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mealeyau.common.users.v1.User} returns this
*/
proto.mealeyau.common.users.v1.User.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mealeyau.common.users.v1.User} returns this
 */
proto.mealeyau.common.users.v1.User.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mealeyau.common.users.v1.User.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 31;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mealeyau.common.users.v1.User.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 31));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mealeyau.common.users.v1.User} returns this
*/
proto.mealeyau.common.users.v1.User.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mealeyau.common.users.v1.User} returns this
 */
proto.mealeyau.common.users.v1.User.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mealeyau.common.users.v1.User.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 31) != null;
};


goog.object.extend(exports, proto.mealeyau.common.users.v1);
