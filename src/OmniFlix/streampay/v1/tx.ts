//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { StreamType, Period, PeriodAmino } from "./streampay";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.streampay.v1";
export interface MsgStreamSend {
  sender: string;
  recipient: string;
  amount: Coin;
  duration: Duration;
  streamType: StreamType;
  periods?: Period[];
  cancellable: boolean;
  paymentFee: Coin;
}
export interface MsgStreamSendProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend";
  value: Uint8Array;
}
export interface MsgStreamSendAmino {
  sender?: string;
  recipient?: string;
  amount?: CoinAmino;
  duration?: DurationAmino;
  stream_type?: StreamType;
  periods?: PeriodAmino[];
  cancellable?: boolean;
  payment_fee?: CoinAmino;
}
export interface MsgStreamSendAminoMsg {
  type: "OmniFlix/streampay/MsgStreamSend";
  value: MsgStreamSendAmino;
}
export interface MsgStreamSendResponse {
  streamId: string;
}
export interface MsgStreamSendResponseProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.MsgStreamSendResponse";
  value: Uint8Array;
}
export interface MsgStreamSendResponseAmino {
  stream_id?: string;
}
export interface MsgStreamSendResponseAminoMsg {
  type: "/OmniFlix.streampay.v1.MsgStreamSendResponse";
  value: MsgStreamSendResponseAmino;
}
export interface MsgStopStream {
  streamId: string;
  sender: string;
}
export interface MsgStopStreamProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.MsgStopStream";
  value: Uint8Array;
}
export interface MsgStopStreamAmino {
  stream_id?: string;
  sender?: string;
}
export interface MsgStopStreamAminoMsg {
  type: "OmniFlix/streampay/MsgStopStream";
  value: MsgStopStreamAmino;
}
export interface MsgStopStreamResponse {}
export interface MsgStopStreamResponseProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.MsgStopStreamResponse";
  value: Uint8Array;
}
export interface MsgStopStreamResponseAmino {}
export interface MsgStopStreamResponseAminoMsg {
  type: "/OmniFlix.streampay.v1.MsgStopStreamResponse";
  value: MsgStopStreamResponseAmino;
}
export interface MsgClaimStreamedAmount {
  streamId: string;
  claimer: string;
}
export interface MsgClaimStreamedAmountProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount";
  value: Uint8Array;
}
export interface MsgClaimStreamedAmountAmino {
  stream_id?: string;
  claimer?: string;
}
export interface MsgClaimStreamedAmountAminoMsg {
  type: "OmniFlix/streampay/MsgClaimStream";
  value: MsgClaimStreamedAmountAmino;
}
export interface MsgClaimStreamedAmountResponse {}
export interface MsgClaimStreamedAmountResponseProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmountResponse";
  value: Uint8Array;
}
export interface MsgClaimStreamedAmountResponseAmino {}
export interface MsgClaimStreamedAmountResponseAminoMsg {
  type: "/OmniFlix.streampay.v1.MsgClaimStreamedAmountResponse";
  value: MsgClaimStreamedAmountResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/streampay parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/streampay parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/OmniFlix.streampay.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/OmniFlix.streampay.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgStreamSend(): MsgStreamSend {
  return {
    sender: "",
    recipient: "",
    amount: Coin.fromPartial({}),
    duration: Duration.fromPartial({}),
    streamType: 0,
    periods: [],
    cancellable: false,
    paymentFee: Coin.fromPartial({}),
  };
}
export const MsgStreamSend = {
  typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
  encode(message: MsgStreamSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }
    if (message.streamType !== 0) {
      writer.uint32(40).int32(message.streamType);
    }
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.cancellable === true) {
      writer.uint32(56).bool(message.cancellable);
    }
    if (message.paymentFee !== undefined) {
      Coin.encode(message.paymentFee, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStreamSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStreamSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.streamType = reader.int32() as any;
          break;
        case 6:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;
        case 7:
          message.cancellable = reader.bool();
          break;
        case 8:
          message.paymentFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStreamSend>, I>>(object: I): MsgStreamSend {
    const message = createBaseMsgStreamSend();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    message.streamType = object.streamType ?? 0;
    message.periods = object.periods?.map((e) => Period.fromPartial(e)) || [];
    message.cancellable = object.cancellable ?? false;
    if (object.paymentFee !== undefined && object.paymentFee !== null) {
      message.paymentFee = Coin.fromPartial(object.paymentFee);
    }
    return message;
  },
  fromAmino(object: MsgStreamSendAmino): MsgStreamSend {
    const message = createBaseMsgStreamSend();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.stream_type !== undefined && object.stream_type !== null) {
      message.streamType = object.stream_type;
    }
    message.periods = object.periods?.map((e) => Period.fromAmino(e)) || [];
    if (object.cancellable !== undefined && object.cancellable !== null) {
      message.cancellable = object.cancellable;
    }
    if (object.payment_fee !== undefined && object.payment_fee !== null) {
      message.paymentFee = Coin.fromAmino(object.payment_fee);
    }
    return message;
  },
  toAmino(message: MsgStreamSend): MsgStreamSendAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.stream_type = message.streamType === 0 ? undefined : message.streamType;
    if (message.periods) {
      obj.periods = message.periods.map((e) => (e ? Period.toAmino(e) : undefined));
    } else {
      obj.periods = message.periods;
    }
    obj.cancellable = message.cancellable === false ? undefined : message.cancellable;
    obj.payment_fee = message.paymentFee ? Coin.toAmino(message.paymentFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStreamSendAminoMsg): MsgStreamSend {
    return MsgStreamSend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStreamSend): MsgStreamSendAminoMsg {
    return {
      type: "OmniFlix/streampay/MsgStreamSend",
      value: MsgStreamSend.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgStreamSendProtoMsg): MsgStreamSend {
    return MsgStreamSend.decode(message.value);
  },
  toProto(message: MsgStreamSend): Uint8Array {
    return MsgStreamSend.encode(message).finish();
  },
  toProtoMsg(message: MsgStreamSend): MsgStreamSendProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
      value: MsgStreamSend.encode(message).finish(),
    };
  },
};
function createBaseMsgStreamSendResponse(): MsgStreamSendResponse {
  return {
    streamId: "",
  };
}
export const MsgStreamSendResponse = {
  typeUrl: "/OmniFlix.streampay.v1.MsgStreamSendResponse",
  encode(message: MsgStreamSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStreamSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStreamSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStreamSendResponse>, I>>(object: I): MsgStreamSendResponse {
    const message = createBaseMsgStreamSendResponse();
    message.streamId = object.streamId ?? "";
    return message;
  },
  fromAmino(object: MsgStreamSendResponseAmino): MsgStreamSendResponse {
    const message = createBaseMsgStreamSendResponse();
    if (object.stream_id !== undefined && object.stream_id !== null) {
      message.streamId = object.stream_id;
    }
    return message;
  },
  toAmino(message: MsgStreamSendResponse): MsgStreamSendResponseAmino {
    const obj: any = {};
    obj.stream_id = message.streamId === "" ? undefined : message.streamId;
    return obj;
  },
  fromAminoMsg(object: MsgStreamSendResponseAminoMsg): MsgStreamSendResponse {
    return MsgStreamSendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStreamSendResponseProtoMsg): MsgStreamSendResponse {
    return MsgStreamSendResponse.decode(message.value);
  },
  toProto(message: MsgStreamSendResponse): Uint8Array {
    return MsgStreamSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStreamSendResponse): MsgStreamSendResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.MsgStreamSendResponse",
      value: MsgStreamSendResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgStopStream(): MsgStopStream {
  return {
    streamId: "",
    sender: "",
  };
}
export const MsgStopStream = {
  typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
  encode(message: MsgStopStream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStopStream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStopStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStopStream>, I>>(object: I): MsgStopStream {
    const message = createBaseMsgStopStream();
    message.streamId = object.streamId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgStopStreamAmino): MsgStopStream {
    const message = createBaseMsgStopStream();
    if (object.stream_id !== undefined && object.stream_id !== null) {
      message.streamId = object.stream_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgStopStream): MsgStopStreamAmino {
    const obj: any = {};
    obj.stream_id = message.streamId === "" ? undefined : message.streamId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgStopStreamAminoMsg): MsgStopStream {
    return MsgStopStream.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStopStream): MsgStopStreamAminoMsg {
    return {
      type: "OmniFlix/streampay/MsgStopStream",
      value: MsgStopStream.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgStopStreamProtoMsg): MsgStopStream {
    return MsgStopStream.decode(message.value);
  },
  toProto(message: MsgStopStream): Uint8Array {
    return MsgStopStream.encode(message).finish();
  },
  toProtoMsg(message: MsgStopStream): MsgStopStreamProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
      value: MsgStopStream.encode(message).finish(),
    };
  },
};
function createBaseMsgStopStreamResponse(): MsgStopStreamResponse {
  return {};
}
export const MsgStopStreamResponse = {
  typeUrl: "/OmniFlix.streampay.v1.MsgStopStreamResponse",
  encode(_: MsgStopStreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStopStreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStopStreamResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgStopStreamResponse>, I>>(_: I): MsgStopStreamResponse {
    const message = createBaseMsgStopStreamResponse();
    return message;
  },
  fromAmino(_: MsgStopStreamResponseAmino): MsgStopStreamResponse {
    const message = createBaseMsgStopStreamResponse();
    return message;
  },
  toAmino(_: MsgStopStreamResponse): MsgStopStreamResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStopStreamResponseAminoMsg): MsgStopStreamResponse {
    return MsgStopStreamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStopStreamResponseProtoMsg): MsgStopStreamResponse {
    return MsgStopStreamResponse.decode(message.value);
  },
  toProto(message: MsgStopStreamResponse): Uint8Array {
    return MsgStopStreamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStopStreamResponse): MsgStopStreamResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.MsgStopStreamResponse",
      value: MsgStopStreamResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgClaimStreamedAmount(): MsgClaimStreamedAmount {
  return {
    streamId: "",
    claimer: "",
  };
}
export const MsgClaimStreamedAmount = {
  typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
  encode(message: MsgClaimStreamedAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    if (message.claimer !== "") {
      writer.uint32(18).string(message.claimer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStreamedAmount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStreamedAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        case 2:
          message.claimer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaimStreamedAmount>, I>>(object: I): MsgClaimStreamedAmount {
    const message = createBaseMsgClaimStreamedAmount();
    message.streamId = object.streamId ?? "";
    message.claimer = object.claimer ?? "";
    return message;
  },
  fromAmino(object: MsgClaimStreamedAmountAmino): MsgClaimStreamedAmount {
    const message = createBaseMsgClaimStreamedAmount();
    if (object.stream_id !== undefined && object.stream_id !== null) {
      message.streamId = object.stream_id;
    }
    if (object.claimer !== undefined && object.claimer !== null) {
      message.claimer = object.claimer;
    }
    return message;
  },
  toAmino(message: MsgClaimStreamedAmount): MsgClaimStreamedAmountAmino {
    const obj: any = {};
    obj.stream_id = message.streamId === "" ? undefined : message.streamId;
    obj.claimer = message.claimer === "" ? undefined : message.claimer;
    return obj;
  },
  fromAminoMsg(object: MsgClaimStreamedAmountAminoMsg): MsgClaimStreamedAmount {
    return MsgClaimStreamedAmount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimStreamedAmount): MsgClaimStreamedAmountAminoMsg {
    return {
      type: "OmniFlix/streampay/MsgClaimStream",
      value: MsgClaimStreamedAmount.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgClaimStreamedAmountProtoMsg): MsgClaimStreamedAmount {
    return MsgClaimStreamedAmount.decode(message.value);
  },
  toProto(message: MsgClaimStreamedAmount): Uint8Array {
    return MsgClaimStreamedAmount.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimStreamedAmount): MsgClaimStreamedAmountProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
      value: MsgClaimStreamedAmount.encode(message).finish(),
    };
  },
};
function createBaseMsgClaimStreamedAmountResponse(): MsgClaimStreamedAmountResponse {
  return {};
}
export const MsgClaimStreamedAmountResponse = {
  typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmountResponse",
  encode(_: MsgClaimStreamedAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStreamedAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStreamedAmountResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgClaimStreamedAmountResponse>, I>>(
    _: I,
  ): MsgClaimStreamedAmountResponse {
    const message = createBaseMsgClaimStreamedAmountResponse();
    return message;
  },
  fromAmino(_: MsgClaimStreamedAmountResponseAmino): MsgClaimStreamedAmountResponse {
    const message = createBaseMsgClaimStreamedAmountResponse();
    return message;
  },
  toAmino(_: MsgClaimStreamedAmountResponse): MsgClaimStreamedAmountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimStreamedAmountResponseAminoMsg): MsgClaimStreamedAmountResponse {
    return MsgClaimStreamedAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimStreamedAmountResponseProtoMsg): MsgClaimStreamedAmountResponse {
    return MsgClaimStreamedAmountResponse.decode(message.value);
  },
  toProto(message: MsgClaimStreamedAmountResponse): Uint8Array {
    return MsgClaimStreamedAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimStreamedAmountResponse): MsgClaimStreamedAmountResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmountResponse",
      value: MsgClaimStreamedAmountResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  StreamSend(request: MsgStreamSend): Promise<MsgStreamSendResponse>;
  StopStream(request: MsgStopStream): Promise<MsgStopStreamResponse>;
  ClaimStreamedAmount(request: MsgClaimStreamedAmount): Promise<MsgClaimStreamedAmountResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/streampay module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.StreamSend = this.StreamSend.bind(this);
    this.StopStream = this.StopStream.bind(this);
    this.ClaimStreamedAmount = this.ClaimStreamedAmount.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  StreamSend(request: MsgStreamSend): Promise<MsgStreamSendResponse> {
    const data = MsgStreamSend.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.streampay.v1.Msg", "StreamSend", data);
    return promise.then((data) => MsgStreamSendResponse.decode(new BinaryReader(data)));
  }
  StopStream(request: MsgStopStream): Promise<MsgStopStreamResponse> {
    const data = MsgStopStream.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.streampay.v1.Msg", "StopStream", data);
    return promise.then((data) => MsgStopStreamResponse.decode(new BinaryReader(data)));
  }
  ClaimStreamedAmount(request: MsgClaimStreamedAmount): Promise<MsgClaimStreamedAmountResponse> {
    const data = MsgClaimStreamedAmount.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.streampay.v1.Msg", "ClaimStreamedAmount", data);
    return promise.then((data) => MsgClaimStreamedAmountResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.streampay.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
