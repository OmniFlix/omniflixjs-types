//@ts-nocheck
/* eslint-disable */
import { Fee, FeeAmino, PacketFee, PacketFeeAmino } from "./fee";
import { PacketId, PacketIdAmino } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
export interface MsgRegisterPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee";
  value: Uint8Array;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayeeAmino {
  /** unique port identifier */
  port_id?: string;
  /** unique channel identifier */
  channel_id?: string;
  /** the relayer address */
  relayer?: string;
  /** the payee address */
  payee?: string;
}
export interface MsgRegisterPayeeAminoMsg {
  type: "cosmos-sdk/MsgRegisterPayee";
  value: MsgRegisterPayeeAmino;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {}
export interface MsgRegisterPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse";
  value: Uint8Array;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponseAmino {}
export interface MsgRegisterPayeeResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterPayeeResponse";
  value: MsgRegisterPayeeResponseAmino;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
export interface MsgRegisterCounterpartyPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeAmino {
  /** unique port identifier */
  port_id?: string;
  /** unique channel identifier */
  channel_id?: string;
  /** the relayer address */
  relayer?: string;
  /** the counterparty payee address */
  counterparty_payee?: string;
}
export interface MsgRegisterCounterpartyPayeeAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyPayee";
  value: MsgRegisterCounterpartyPayeeAmino;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {}
export interface MsgRegisterCounterpartyPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponseAmino {}
export interface MsgRegisterCounterpartyPayeeResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse";
  value: MsgRegisterCounterpartyPayeeResponseAmino;
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee: Fee;
  /** the source port unique identifier */
  sourcePortId: string;
  /** the source channel unique identifer */
  sourceChannelId: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}
export interface MsgPayPacketFeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee";
  value: Uint8Array;
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFeeAmino {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: FeeAmino;
  /** the source port unique identifier */
  source_port_id?: string;
  /** the source channel unique identifer */
  source_channel_id?: string;
  /** account address to refund fee if necessary */
  signer?: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers?: string[];
}
export interface MsgPayPacketFeeAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFee";
  value: MsgPayPacketFeeAmino;
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {}
export interface MsgPayPacketFeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse";
  value: Uint8Array;
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponseAmino {}
export interface MsgPayPacketFeeResponseAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeResponse";
  value: MsgPayPacketFeeResponseAmino;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId: PacketId;
  /** the packet fee associated with a particular IBC packet */
  packetFee: PacketFee;
}
export interface MsgPayPacketFeeAsyncProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync";
  value: Uint8Array;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsyncAmino {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packet_id?: PacketIdAmino;
  /** the packet fee associated with a particular IBC packet */
  packet_fee?: PacketFeeAmino;
}
export interface MsgPayPacketFeeAsyncAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeAsync";
  value: MsgPayPacketFeeAsyncAmino;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {}
export interface MsgPayPacketFeeAsyncResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse";
  value: Uint8Array;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponseAmino {}
export interface MsgPayPacketFeeAsyncResponseAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse";
  value: MsgPayPacketFeeAsyncResponseAmino;
}
function createBaseMsgRegisterPayee(): MsgRegisterPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    payee: "",
  };
}
export const MsgRegisterPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
  encode(message: MsgRegisterPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterPayee>, I>>(object: I): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterPayeeAmino): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    }
    return message;
  },
  toAmino(message: MsgRegisterPayee): MsgRegisterPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.payee = message.payee === "" ? undefined : message.payee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeAminoMsg): MsgRegisterPayee {
    return MsgRegisterPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayee): MsgRegisterPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayee",
      value: MsgRegisterPayee.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRegisterPayeeProtoMsg): MsgRegisterPayee {
    return MsgRegisterPayee.decode(message.value);
  },
  toProto(message: MsgRegisterPayee): Uint8Array {
    return MsgRegisterPayee.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPayee): MsgRegisterPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
      value: MsgRegisterPayee.encode(message).finish(),
    };
  },
};
function createBaseMsgRegisterPayeeResponse(): MsgRegisterPayeeResponse {
  return {};
}
export const MsgRegisterPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
  encode(_: MsgRegisterPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgRegisterPayeeResponse>, I>>(_: I): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterPayeeResponseAmino): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  toAmino(_: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeResponseAminoMsg): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRegisterPayeeResponseProtoMsg): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.decode(message.value);
  },
  toProto(message: MsgRegisterPayeeResponse): Uint8Array {
    return MsgRegisterPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRegisterCounterpartyPayee(): MsgRegisterCounterpartyPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    counterpartyPayee: "",
  };
}
export const MsgRegisterCounterpartyPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
  encode(message: MsgRegisterCounterpartyPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayee>, I>>(
    object: I,
  ): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterCounterpartyPayeeAmino): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.counterparty_payee = message.counterpartyPayee === "" ? undefined : message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeAminoMsg): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyPayeeProtoMsg): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.decode(message.value);
  },
  toProto(message: MsgRegisterCounterpartyPayee): Uint8Array {
    return MsgRegisterCounterpartyPayee.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.encode(message).finish(),
    };
  },
};
function createBaseMsgRegisterCounterpartyPayeeResponse(): MsgRegisterCounterpartyPayeeResponse {
  return {};
}
export const MsgRegisterCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
  encode(
    _: MsgRegisterCounterpartyPayeeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayeeResponse>, I>>(
    _: I,
  ): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterCounterpartyPayeeResponseAmino): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  toAmino(_: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeResponseAminoMsg): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyPayeeResponseProtoMsg): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.decode(message.value);
  },
  toProto(message: MsgRegisterCounterpartyPayeeResponse): Uint8Array {
    return MsgRegisterCounterpartyPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgPayPacketFee(): MsgPayPacketFee {
  return {
    fee: Fee.fromPartial({}),
    sourcePortId: "",
    sourceChannelId: "",
    signer: "",
    relayers: [],
  };
}
export const MsgPayPacketFee = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
  encode(message: MsgPayPacketFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFee>, I>>(object: I): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromPartial(object.fee);
    }
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MsgPayPacketFeeAmino): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    if (object.source_port_id !== undefined && object.source_port_id !== null) {
      message.sourcePortId = object.source_port_id;
    }
    if (object.source_channel_id !== undefined && object.source_channel_id !== null) {
      message.sourceChannelId = object.source_channel_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  toAmino(message: MsgPayPacketFee): MsgPayPacketFeeAmino {
    const obj: any = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    obj.source_port_id = message.sourcePortId === "" ? undefined : message.sourcePortId;
    obj.source_channel_id = message.sourceChannelId === "" ? undefined : message.sourceChannelId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAminoMsg): MsgPayPacketFee {
    return MsgPayPacketFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFee): MsgPayPacketFeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFee",
      value: MsgPayPacketFee.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeProtoMsg): MsgPayPacketFee {
    return MsgPayPacketFee.decode(message.value);
  },
  toProto(message: MsgPayPacketFee): Uint8Array {
    return MsgPayPacketFee.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFee): MsgPayPacketFeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
      value: MsgPayPacketFee.encode(message).finish(),
    };
  },
};
function createBaseMsgPayPacketFeeResponse(): MsgPayPacketFeeResponse {
  return {};
}
export const MsgPayPacketFeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
  encode(_: MsgPayPacketFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeResponse>, I>>(_: I): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  fromAmino(_: MsgPayPacketFeeResponseAmino): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  toAmino(_: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeResponseAminoMsg): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeResponseProtoMsg): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeResponse): Uint8Array {
    return MsgPayPacketFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgPayPacketFeeAsync(): MsgPayPacketFeeAsync {
  return {
    packetId: PacketId.fromPartial({}),
    packetFee: PacketFee.fromPartial({}),
  };
}
export const MsgPayPacketFeeAsync = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
  encode(message: MsgPayPacketFeeAsync, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeAsync {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeAsync>, I>>(object: I): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    }
    if (object.packetFee !== undefined && object.packetFee !== null) {
      message.packetFee = PacketFee.fromPartial(object.packetFee);
    }
    return message;
  },
  fromAmino(object: MsgPayPacketFeeAsyncAmino): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    if (object.packet_fee !== undefined && object.packet_fee !== null) {
      message.packetFee = PacketFee.fromAmino(object.packet_fee);
    }
    return message;
  },
  toAmino(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    obj.packet_fee = message.packetFee ? PacketFee.toAmino(message.packetFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncAminoMsg): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeAsyncProtoMsg): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeAsync): Uint8Array {
    return MsgPayPacketFeeAsync.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.encode(message).finish(),
    };
  },
};
function createBaseMsgPayPacketFeeAsyncResponse(): MsgPayPacketFeeAsyncResponse {
  return {};
}
export const MsgPayPacketFeeAsyncResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
  encode(_: MsgPayPacketFeeAsyncResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeAsyncResponse>, I>>(
    _: I,
  ): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  fromAmino(_: MsgPayPacketFeeAsyncResponseAmino): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  toAmino(_: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncResponseAminoMsg): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeAsyncResponseProtoMsg): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeAsyncResponse): Uint8Array {
    return MsgPayPacketFeeAsyncResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the ICS29 Msg service. */
export interface Msg {
  /**
   * RegisterPayee defines a rpc handler method for MsgRegisterPayee
   * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
   * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
   * the source chain from which packets originate as this is where fee distribution takes place. This function may be
   * called more than once by a relayer, in which case, the latest payee is always used.
   */
  RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse>;
  /**
   * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
   * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
   * payee address before relaying. This ensures they will be properly compensated for forward relaying since
   * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
   * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
   */
  RegisterCounterpartyPayee(
    request: MsgRegisterCounterpartyPayee,
  ): Promise<MsgRegisterCounterpartyPayeeResponse>;
  /**
   * PayPacketFee defines a rpc handler method for MsgPayPacketFee
   * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of the packet at the next sequence
   * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
   * initiates the lifecycle of the incentivized packet
   */
  PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
  /**
   * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
   * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of a known packet (i.e. at a particular sequence)
   */
  PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterPayee = this.RegisterPayee.bind(this);
    this.RegisterCounterpartyPayee = this.RegisterCounterpartyPayee.bind(this);
    this.PayPacketFee = this.PayPacketFee.bind(this);
    this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
  }
  RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse> {
    const data = MsgRegisterPayee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterPayee", data);
    return promise.then((data) => MsgRegisterPayeeResponse.decode(new BinaryReader(data)));
  }
  RegisterCounterpartyPayee(
    request: MsgRegisterCounterpartyPayee,
  ): Promise<MsgRegisterCounterpartyPayeeResponse> {
    const data = MsgRegisterCounterpartyPayee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterCounterpartyPayee", data);
    return promise.then((data) => MsgRegisterCounterpartyPayeeResponse.decode(new BinaryReader(data)));
  }
  PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse> {
    const data = MsgPayPacketFee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFee", data);
    return promise.then((data) => MsgPayPacketFeeResponse.decode(new BinaryReader(data)));
  }
  PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse> {
    const data = MsgPayPacketFeeAsync.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFeeAsync", data);
    return promise.then((data) => MsgPayPacketFeeAsyncResponse.decode(new BinaryReader(data)));
  }
}
