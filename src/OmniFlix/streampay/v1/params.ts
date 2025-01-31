//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.streampay.v1";
export interface Params {
  streamPaymentFeePercentage: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  stream_payment_fee_percentage?: string;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.streampay.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    streamPaymentFeePercentage: "",
  };
}
export const Params = {
  typeUrl: "/OmniFlix.streampay.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.streamPaymentFeePercentage !== "") {
      writer.uint32(10).string(message.streamPaymentFeePercentage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamPaymentFeePercentage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.streamPaymentFeePercentage = object.streamPaymentFeePercentage ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.stream_payment_fee_percentage !== undefined && object.stream_payment_fee_percentage !== null) {
      message.streamPaymentFeePercentage = object.stream_payment_fee_percentage;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.stream_payment_fee_percentage =
      message.streamPaymentFeePercentage === "" ? undefined : message.streamPaymentFeePercentage;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
