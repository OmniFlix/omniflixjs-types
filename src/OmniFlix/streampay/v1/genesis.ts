//@ts-nocheck
/* eslint-disable */
import { StreamPayment, StreamPaymentAmino } from "./streampay";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.streampay.v1";
/** GenesisState defines the streampay module's genesis state. */
export interface GenesisState {
  streamPayments: StreamPayment[];
  nextStreamPaymentNumber: bigint;
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the streampay module's genesis state. */
export interface GenesisStateAmino {
  stream_payments?: StreamPaymentAmino[];
  next_stream_payment_number?: string;
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/OmniFlix.streampay.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    streamPayments: [],
    nextStreamPaymentNumber: BigInt(0),
    params: Params.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/OmniFlix.streampay.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.streamPayments) {
      StreamPayment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextStreamPaymentNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextStreamPaymentNumber);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamPayments.push(StreamPayment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextStreamPaymentNumber = reader.uint64();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.streamPayments = object.streamPayments?.map((e) => StreamPayment.fromPartial(e)) || [];
    if (object.nextStreamPaymentNumber !== undefined && object.nextStreamPaymentNumber !== null) {
      message.nextStreamPaymentNumber = BigInt(object.nextStreamPaymentNumber.toString());
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.streamPayments = object.stream_payments?.map((e) => StreamPayment.fromAmino(e)) || [];
    if (object.next_stream_payment_number !== undefined && object.next_stream_payment_number !== null) {
      message.nextStreamPaymentNumber = BigInt(object.next_stream_payment_number);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.streamPayments) {
      obj.stream_payments = message.streamPayments.map((e) => (e ? StreamPayment.toAmino(e) : undefined));
    } else {
      obj.stream_payments = message.streamPayments;
    }
    obj.next_stream_payment_number =
      message.nextStreamPaymentNumber !== BigInt(0) ? message.nextStreamPaymentNumber?.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
