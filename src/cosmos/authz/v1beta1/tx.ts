//@ts-nocheck
/* eslint-disable */
import { Grant, GrantAmino } from "./authz";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.authz.v1beta1";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
  granter: string;
  grantee: string;
  grant: Grant;
}
export interface MsgGrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
  value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantAmino {
  granter?: string;
  grantee?: string;
  grant: GrantAmino;
}
export interface MsgGrantAminoMsg {
  type: "cosmos-sdk/MsgGrant";
  value: MsgGrantAmino;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {}
export interface MsgGrantResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse";
  value: Uint8Array;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseAmino {}
export interface MsgGrantResponseAminoMsg {
  type: "cosmos-sdk/MsgGrantResponse";
  value: MsgGrantResponseAmino;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
  grantee: string;
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: Any[];
}
export interface MsgExecProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec";
  value: Uint8Array;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecAmino {
  grantee?: string;
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs?: AnyAmino[];
}
export interface MsgExecAminoMsg {
  type: "cosmos-sdk/MsgExec";
  value: MsgExecAmino;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
  results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse";
  value: Uint8Array;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseAmino {
  results?: string[];
}
export interface MsgExecResponseAminoMsg {
  type: "cosmos-sdk/MsgExecResponse";
  value: MsgExecResponseAmino;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
  granter: string;
  grantee: string;
  msgTypeUrl: string;
}
export interface MsgRevokeProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke";
  value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeAmino {
  granter?: string;
  grantee?: string;
  msg_type_url?: string;
}
export interface MsgRevokeAminoMsg {
  type: "cosmos-sdk/MsgRevoke";
  value: MsgRevokeAmino;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {}
export interface MsgRevokeResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse";
  value: Uint8Array;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseAmino {}
export interface MsgRevokeResponseAminoMsg {
  type: "cosmos-sdk/MsgRevokeResponse";
  value: MsgRevokeResponseAmino;
}
function createBaseMsgGrant(): MsgGrant {
  return {
    granter: "",
    grantee: "",
    grant: Grant.fromPartial({}),
  };
}
export const MsgGrant = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
  encode(message: MsgGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrant>, I>>(object: I): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromPartial(object.grant);
    }
    return message;
  },
  fromAmino(object: MsgGrantAmino): MsgGrant {
    const message = createBaseMsgGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromAmino(object.grant);
    }
    return message;
  },
  toAmino(message: MsgGrant): MsgGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant) : Grant.toAmino(Grant.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgGrantAminoMsg): MsgGrant {
    return MsgGrant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrant): MsgGrantAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrant",
      value: MsgGrant.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgGrantProtoMsg): MsgGrant {
    return MsgGrant.decode(message.value);
  },
  toProto(message: MsgGrant): Uint8Array {
    return MsgGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgGrant): MsgGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
      value: MsgGrant.encode(message).finish(),
    };
  },
};
function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}
export const MsgGrantResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
  encode(_: MsgGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrantResponse>, I>>(_: I): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  toAmino(_: MsgGrantResponse): MsgGrantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGrantResponseAminoMsg): MsgGrantResponse {
    return MsgGrantResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantResponse): MsgGrantResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantResponse",
      value: MsgGrantResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgGrantResponseProtoMsg): MsgGrantResponse {
    return MsgGrantResponse.decode(message.value);
  },
  toProto(message: MsgGrantResponse): Uint8Array {
    return MsgGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
      value: MsgGrantResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgExec(): MsgExec {
  return {
    grantee: "",
    msgs: [],
  };
}
export const MsgExec = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec",
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgExec>, I>>(object: I): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    const message = createBaseMsgExec();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.msgs = object.msgs?.map((e) => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => (e ? Any.toAmino(e) : undefined));
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "cosmos-sdk/MsgExec",
      value: MsgExec.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.encode(message).finish(),
    };
  },
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    results: [],
  };
}
export const MsgExecResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgExecResponse>, I>>(object: I): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map((e) => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => base64FromBytes(e));
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRevoke(): MsgRevoke {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: "",
  };
}
export const MsgRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
  encode(message: MsgRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevoke>, I>>(object: I): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeAmino): MsgRevoke {
    const message = createBaseMsgRevoke();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    return message;
  },
  toAmino(message: MsgRevoke): MsgRevokeAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke {
    return MsgRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevoke",
      value: MsgRevoke.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke {
    return MsgRevoke.decode(message.value);
  },
  toProto(message: MsgRevoke): Uint8Array {
    return MsgRevoke.encode(message).finish();
  },
  toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
      value: MsgRevoke.encode(message).finish(),
    };
  },
};
function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}
export const MsgRevokeResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
  encode(_: MsgRevokeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeResponse>, I>>(_: I): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeResponse): MsgRevokeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeResponse",
      value: MsgRevokeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.decode(message.value);
  },
  toProto(message: MsgRevokeResponse): Uint8Array {
    return MsgRevokeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
      value: MsgRevokeResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the authz Msg service. */
export interface Msg {
  /**
   * Grant grants the provided authorization to the grantee on the granter's
   * account with the provided expiration time. If there is already a grant
   * for the given (granter, grantee, Authorization) triple, then the grant
   * will be overwritten.
   */
  Grant(request: MsgGrant): Promise<MsgGrantResponse>;
  /**
   * Exec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  Exec(request: MsgExec): Promise<MsgExecResponse>;
  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter's account that has been granted to the grantee.
   */
  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Grant = this.Grant.bind(this);
    this.Exec = this.Exec.bind(this);
    this.Revoke = this.Revoke.bind(this);
  }
  Grant(request: MsgGrant): Promise<MsgGrantResponse> {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
    return promise.then((data) => MsgGrantResponse.decode(new BinaryReader(data)));
  }
  Exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
    return promise.then((data) => MsgExecResponse.decode(new BinaryReader(data)));
  }
  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse> {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
    return promise.then((data) => MsgRevokeResponse.decode(new BinaryReader(data)));
  }
}
