//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.streampay.v1";
export enum StreamType {
  STREAM_PAYMENT_TYPE_DELAYED = 0,
  STREAM_PAYMENT_TYPE_CONTINUOUS = 1,
  STREAM_PAYMENT_TYPE_PERIODIC = 2,
  UNRECOGNIZED = -1,
}
export const StreamTypeAmino = StreamType;
export function streamTypeFromJSON(object: any): StreamType {
  switch (object) {
    case 0:
    case "STREAM_PAYMENT_TYPE_DELAYED":
      return StreamType.STREAM_PAYMENT_TYPE_DELAYED;
    case 1:
    case "STREAM_PAYMENT_TYPE_CONTINUOUS":
      return StreamType.STREAM_PAYMENT_TYPE_CONTINUOUS;
    case 2:
    case "STREAM_PAYMENT_TYPE_PERIODIC":
      return StreamType.STREAM_PAYMENT_TYPE_PERIODIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamType.UNRECOGNIZED;
  }
}
export function streamTypeToJSON(object: StreamType): string {
  switch (object) {
    case StreamType.STREAM_PAYMENT_TYPE_DELAYED:
      return "STREAM_PAYMENT_TYPE_DELAYED";
    case StreamType.STREAM_PAYMENT_TYPE_CONTINUOUS:
      return "STREAM_PAYMENT_TYPE_CONTINUOUS";
    case StreamType.STREAM_PAYMENT_TYPE_PERIODIC:
      return "STREAM_PAYMENT_TYPE_PERIODIC";
    case StreamType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum StreamStatus {
  STREAM_PAYMENT_STATUS_ACTIVE = 0,
  STREAM_PAYMENT_STATUS_COMPLETED = 1,
  STREAM_PAYMENT_STATUS_CANCELLED = 2,
  UNRECOGNIZED = -1,
}
export const StreamStatusAmino = StreamStatus;
export function streamStatusFromJSON(object: any): StreamStatus {
  switch (object) {
    case 0:
    case "STREAM_PAYMENT_STATUS_ACTIVE":
      return StreamStatus.STREAM_PAYMENT_STATUS_ACTIVE;
    case 1:
    case "STREAM_PAYMENT_STATUS_COMPLETED":
      return StreamStatus.STREAM_PAYMENT_STATUS_COMPLETED;
    case 2:
    case "STREAM_PAYMENT_STATUS_CANCELLED":
      return StreamStatus.STREAM_PAYMENT_STATUS_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamStatus.UNRECOGNIZED;
  }
}
export function streamStatusToJSON(object: StreamStatus): string {
  switch (object) {
    case StreamStatus.STREAM_PAYMENT_STATUS_ACTIVE:
      return "STREAM_PAYMENT_STATUS_ACTIVE";
    case StreamStatus.STREAM_PAYMENT_STATUS_COMPLETED:
      return "STREAM_PAYMENT_STATUS_COMPLETED";
    case StreamStatus.STREAM_PAYMENT_STATUS_CANCELLED:
      return "STREAM_PAYMENT_STATUS_CANCELLED";
    case StreamStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface StreamPayment {
  id: string;
  sender: string;
  recipient: string;
  totalAmount: Coin;
  streamType: StreamType;
  periods?: Period[];
  cancellable: boolean;
  startTime: Timestamp;
  endTime: Timestamp;
  streamedAmount: Coin;
  lastClaimedAt: Timestamp;
  status: StreamStatus;
}
export interface StreamPaymentProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.StreamPayment";
  value: Uint8Array;
}
export interface StreamPaymentAmino {
  id?: string;
  sender?: string;
  recipient?: string;
  total_amount?: CoinAmino;
  stream_type?: StreamType;
  periods?: PeriodAmino[];
  cancellable?: boolean;
  start_time?: string;
  end_time?: string;
  streamed_amount?: CoinAmino;
  last_claimed_at?: string;
  status?: StreamStatus;
}
export interface StreamPaymentAminoMsg {
  type: "/OmniFlix.streampay.v1.StreamPayment";
  value: StreamPaymentAmino;
}
export interface Period {
  amount: bigint;
  duration: bigint;
}
export interface PeriodProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.Period";
  value: Uint8Array;
}
export interface PeriodAmino {
  amount?: string;
  duration?: string;
}
export interface PeriodAminoMsg {
  type: "/OmniFlix.streampay.v1.Period";
  value: PeriodAmino;
}
function createBaseStreamPayment(): StreamPayment {
  return {
    id: "",
    sender: "",
    recipient: "",
    totalAmount: Coin.fromPartial({}),
    streamType: 0,
    periods: [],
    cancellable: false,
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    streamedAmount: Coin.fromPartial({}),
    lastClaimedAt: Timestamp.fromPartial({}),
    status: 0,
  };
}
export const StreamPayment = {
  typeUrl: "/OmniFlix.streampay.v1.StreamPayment",
  encode(message: StreamPayment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.totalAmount !== undefined) {
      Coin.encode(message.totalAmount, writer.uint32(34).fork()).ldelim();
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
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.streamedAmount !== undefined) {
      Coin.encode(message.streamedAmount, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastClaimedAt !== undefined) {
      Timestamp.encode(message.lastClaimedAt, writer.uint32(90).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StreamPayment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.totalAmount = Coin.decode(reader, reader.uint32());
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
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.streamedAmount = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.lastClaimedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 12:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<StreamPayment>, I>>(object: I): StreamPayment {
    const message = createBaseStreamPayment();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    if (object.totalAmount !== undefined && object.totalAmount !== null) {
      message.totalAmount = Coin.fromPartial(object.totalAmount);
    }
    message.streamType = object.streamType ?? 0;
    message.periods = object.periods?.map((e) => Period.fromPartial(e)) || [];
    message.cancellable = object.cancellable ?? false;
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Timestamp.fromPartial(object.endTime);
    }
    if (object.streamedAmount !== undefined && object.streamedAmount !== null) {
      message.streamedAmount = Coin.fromPartial(object.streamedAmount);
    }
    if (object.lastClaimedAt !== undefined && object.lastClaimedAt !== null) {
      message.lastClaimedAt = Timestamp.fromPartial(object.lastClaimedAt);
    }
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: StreamPaymentAmino): StreamPayment {
    const message = createBaseStreamPayment();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = Coin.fromAmino(object.total_amount);
    }
    if (object.stream_type !== undefined && object.stream_type !== null) {
      message.streamType = object.stream_type;
    }
    message.periods = object.periods?.map((e) => Period.fromAmino(e)) || [];
    if (object.cancellable !== undefined && object.cancellable !== null) {
      message.cancellable = object.cancellable;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.streamed_amount !== undefined && object.streamed_amount !== null) {
      message.streamedAmount = Coin.fromAmino(object.streamed_amount);
    }
    if (object.last_claimed_at !== undefined && object.last_claimed_at !== null) {
      message.lastClaimedAt = Timestamp.fromAmino(object.last_claimed_at);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: StreamPayment): StreamPaymentAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.total_amount = message.totalAmount ? Coin.toAmino(message.totalAmount) : undefined;
    obj.stream_type = message.streamType === 0 ? undefined : message.streamType;
    if (message.periods) {
      obj.periods = message.periods.map((e) => (e ? Period.toAmino(e) : undefined));
    } else {
      obj.periods = message.periods;
    }
    obj.cancellable = message.cancellable === false ? undefined : message.cancellable;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    obj.streamed_amount = message.streamedAmount ? Coin.toAmino(message.streamedAmount) : undefined;
    obj.last_claimed_at = message.lastClaimedAt ? Timestamp.toAmino(message.lastClaimedAt) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: StreamPaymentAminoMsg): StreamPayment {
    return StreamPayment.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamPaymentProtoMsg): StreamPayment {
    return StreamPayment.decode(message.value);
  },
  toProto(message: StreamPayment): Uint8Array {
    return StreamPayment.encode(message).finish();
  },
  toProtoMsg(message: StreamPayment): StreamPaymentProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.StreamPayment",
      value: StreamPayment.encode(message).finish(),
    };
  },
};
function createBasePeriod(): Period {
  return {
    amount: BigInt(0),
    duration: BigInt(0),
  };
}
export const Period = {
  typeUrl: "/OmniFlix.streampay.v1.Period",
  encode(message: Period, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).int64(message.amount);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(16).int64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Period {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.int64();
          break;
        case 2:
          message.duration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<Period>, I>>(object: I): Period {
    const message = createBasePeriod();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration.toString());
    }
    return message;
  },
  fromAmino(object: PeriodAmino): Period {
    const message = createBasePeriod();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message: Period): PeriodAmino {
    const obj: any = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PeriodAminoMsg): Period {
    return Period.fromAmino(object.value);
  },
  fromProtoMsg(message: PeriodProtoMsg): Period {
    return Period.decode(message.value);
  },
  toProto(message: Period): Uint8Array {
    return Period.encode(message).finish();
  },
  toProtoMsg(message: Period): PeriodProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.Period",
      value: Period.encode(message).finish(),
    };
  },
};
