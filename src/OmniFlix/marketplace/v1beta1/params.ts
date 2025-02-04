//@ts-nocheck
/* eslint-disable */
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
export interface Params {
  saleCommission: string;
  distribution: Distribution;
  bidCloseDuration: Duration;
  maxAuctionDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  sale_commission?: string;
  distribution?: DistributionAmino;
  bid_close_duration?: DurationAmino;
  max_auction_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.Params";
  value: ParamsAmino;
}
export interface Distribution {
  staking: string;
  communityPool: string;
}
export interface DistributionProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution";
  value: Uint8Array;
}
export interface DistributionAmino {
  staking?: string;
  community_pool?: string;
}
export interface DistributionAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.Distribution";
  value: DistributionAmino;
}
function createBaseParams(): Params {
  return {
    saleCommission: "",
    distribution: Distribution.fromPartial({}),
    bidCloseDuration: Duration.fromPartial({}),
    maxAuctionDuration: Duration.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.saleCommission !== "") {
      writer.uint32(10).string(message.saleCommission);
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(18).fork()).ldelim();
    }
    if (message.bidCloseDuration !== undefined) {
      Duration.encode(message.bidCloseDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxAuctionDuration !== undefined) {
      Duration.encode(message.maxAuctionDuration, writer.uint32(34).fork()).ldelim();
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
          message.saleCommission = reader.string();
          break;
        case 2:
          message.distribution = Distribution.decode(reader, reader.uint32());
          break;
        case 3:
          message.bidCloseDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxAuctionDuration = Duration.decode(reader, reader.uint32());
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
    message.saleCommission = object.saleCommission ?? "";
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromPartial(object.distribution);
    }
    if (object.bidCloseDuration !== undefined && object.bidCloseDuration !== null) {
      message.bidCloseDuration = Duration.fromPartial(object.bidCloseDuration);
    }
    if (object.maxAuctionDuration !== undefined && object.maxAuctionDuration !== null) {
      message.maxAuctionDuration = Duration.fromPartial(object.maxAuctionDuration);
    }
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.sale_commission !== undefined && object.sale_commission !== null) {
      message.saleCommission = object.sale_commission;
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromAmino(object.distribution);
    }
    if (object.bid_close_duration !== undefined && object.bid_close_duration !== null) {
      message.bidCloseDuration = Duration.fromAmino(object.bid_close_duration);
    }
    if (object.max_auction_duration !== undefined && object.max_auction_duration !== null) {
      message.maxAuctionDuration = Duration.fromAmino(object.max_auction_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.sale_commission = message.saleCommission === "" ? undefined : message.saleCommission;
    obj.distribution = message.distribution ? Distribution.toAmino(message.distribution) : undefined;
    obj.bid_close_duration = message.bidCloseDuration
      ? Duration.toAmino(message.bidCloseDuration)
      : undefined;
    obj.max_auction_duration = message.maxAuctionDuration
      ? Duration.toAmino(message.maxAuctionDuration)
      : undefined;
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
function createBaseDistribution(): Distribution {
  return {
    staking: "",
    communityPool: "",
  };
}
export const Distribution = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.communityPool !== "") {
      writer.uint32(18).string(message.communityPool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;
        case 2:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<Distribution>, I>>(object: I): Distribution {
    const message = createBaseDistribution();
    message.staking = object.staking ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromAmino(object: DistributionAmino): Distribution {
    const message = createBaseDistribution();
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    return message;
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.staking = message.staking === "" ? undefined : message.staking;
    obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
    return obj;
  },
  fromAminoMsg(object: DistributionAminoMsg): Distribution {
    return Distribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProtoMsg): Distribution {
    return Distribution.decode(message.value);
  },
  toProto(message: Distribution): Uint8Array {
    return Distribution.encode(message).finish();
  },
  toProtoMsg(message: Distribution): DistributionProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution",
      value: Distribution.encode(message).finish(),
    };
  },
};
