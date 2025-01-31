//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.onft.v1beta1";
export interface Params {
  denomCreationFee: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  denom_creation_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: Coin.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/OmniFlix.onft.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomCreationFee !== undefined) {
      Coin.encode(message.denomCreationFee, writer.uint32(10).fork()).ldelim();
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
          message.denomCreationFee = Coin.decode(reader, reader.uint32());
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
    if (object.denomCreationFee !== undefined && object.denomCreationFee !== null) {
      message.denomCreationFee = Coin.fromPartial(object.denomCreationFee);
    }
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.denom_creation_fee !== undefined && object.denom_creation_fee !== null) {
      message.denomCreationFee = Coin.fromAmino(object.denom_creation_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.denom_creation_fee = message.denomCreationFee ? Coin.toAmino(message.denomCreationFee) : undefined;
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
      typeUrl: "/OmniFlix.onft.v1beta1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
