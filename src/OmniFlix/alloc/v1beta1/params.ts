//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.alloc.v1beta1";
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface WeightedAddressProtoMsg {
  typeUrl: "/OmniFlix.alloc.v1beta1.WeightedAddress";
  value: Uint8Array;
}
export interface WeightedAddressAmino {
  address?: string;
  weight?: string;
}
export interface WeightedAddressAminoMsg {
  type: "/OmniFlix.alloc.v1beta1.WeightedAddress";
  value: WeightedAddressAmino;
}
export interface DistributionProportions {
  stakingRewards: string;
  nftIncentives: string;
  nodeHostsIncentives: string;
  developerRewards: string;
  communityPool: string;
}
export interface DistributionProportionsProtoMsg {
  typeUrl: "/OmniFlix.alloc.v1beta1.DistributionProportions";
  value: Uint8Array;
}
export interface DistributionProportionsAmino {
  staking_rewards?: string;
  nft_incentives?: string;
  node_hosts_incentives?: string;
  developer_rewards?: string;
  community_pool?: string;
}
export interface DistributionProportionsAminoMsg {
  type: "/OmniFlix.alloc.v1beta1.DistributionProportions";
  value: DistributionProportionsAmino;
}
export interface Params {
  /** distribution_proportions defines the proportion of the minted denom */
  distributionProportions: DistributionProportions;
  /** address to receive developer rewards */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /** address to receive nft incentives */
  weightedNftIncentivesReceivers: WeightedAddress[];
  /** address to receive node host incentives */
  weightedNodeHostsIncentivesReceivers: WeightedAddress[];
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.alloc.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /** distribution_proportions defines the proportion of the minted denom */
  distribution_proportions?: DistributionProportionsAmino;
  /** address to receive developer rewards */
  weighted_developer_rewards_receivers?: WeightedAddressAmino[];
  /** address to receive nft incentives */
  weighted_nft_incentives_receivers?: WeightedAddressAmino[];
  /** address to receive node host incentives */
  weighted_node_hosts_incentives_receivers?: WeightedAddressAmino[];
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.alloc.v1beta1.Params";
  value: ParamsAmino;
}
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: "",
  };
}
export const WeightedAddress = {
  typeUrl: "/OmniFlix.alloc.v1beta1.WeightedAddress",
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<WeightedAddress>, I>>(object: I): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedAddressAmino): WeightedAddress {
    const message = createBaseWeightedAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedAddress): WeightedAddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress {
    return WeightedAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress {
    return WeightedAddress.decode(message.value);
  },
  toProto(message: WeightedAddress): Uint8Array {
    return WeightedAddress.encode(message).finish();
  },
  toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg {
    return {
      typeUrl: "/OmniFlix.alloc.v1beta1.WeightedAddress",
      value: WeightedAddress.encode(message).finish(),
    };
  },
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    stakingRewards: "",
    nftIncentives: "",
    nodeHostsIncentives: "",
    developerRewards: "",
    communityPool: "",
  };
}
export const DistributionProportions = {
  typeUrl: "/OmniFlix.alloc.v1beta1.DistributionProportions",
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(message.stakingRewards);
    }
    if (message.nftIncentives !== "") {
      writer.uint32(18).string(message.nftIncentives);
    }
    if (message.nodeHostsIncentives !== "") {
      writer.uint32(26).string(message.nodeHostsIncentives);
    }
    if (message.developerRewards !== "") {
      writer.uint32(34).string(message.developerRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(42).string(message.communityPool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingRewards = reader.string();
          break;
        case 2:
          message.nftIncentives = reader.string();
          break;
        case 3:
          message.nodeHostsIncentives = reader.string();
          break;
        case 4:
          message.developerRewards = reader.string();
          break;
        case 5:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<DistributionProportions>, I>>(object: I): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.stakingRewards = object.stakingRewards ?? "";
    message.nftIncentives = object.nftIncentives ?? "";
    message.nodeHostsIncentives = object.nodeHostsIncentives ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    const message = createBaseDistributionProportions();
    if (object.staking_rewards !== undefined && object.staking_rewards !== null) {
      message.stakingRewards = object.staking_rewards;
    }
    if (object.nft_incentives !== undefined && object.nft_incentives !== null) {
      message.nftIncentives = object.nft_incentives;
    }
    if (object.node_hosts_incentives !== undefined && object.node_hosts_incentives !== null) {
      message.nodeHostsIncentives = object.node_hosts_incentives;
    }
    if (object.developer_rewards !== undefined && object.developer_rewards !== null) {
      message.developerRewards = object.developer_rewards;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    return message;
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.staking_rewards = message.stakingRewards === "" ? undefined : message.stakingRewards;
    obj.nft_incentives = message.nftIncentives === "" ? undefined : message.nftIncentives;
    obj.node_hosts_incentives = message.nodeHostsIncentives === "" ? undefined : message.nodeHostsIncentives;
    obj.developer_rewards = message.developerRewards === "" ? undefined : message.developerRewards;
    obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
    return obj;
  },
  fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions {
    return DistributionProportions.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions {
    return DistributionProportions.decode(message.value);
  },
  toProto(message: DistributionProportions): Uint8Array {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg {
    return {
      typeUrl: "/OmniFlix.alloc.v1beta1.DistributionProportions",
      value: DistributionProportions.encode(message).finish(),
    };
  },
};
function createBaseParams(): Params {
  return {
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedDeveloperRewardsReceivers: [],
    weightedNftIncentivesReceivers: [],
    weightedNodeHostsIncentivesReceivers: [],
  };
}
export const Params = {
  typeUrl: "/OmniFlix.alloc.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.weightedNftIncentivesReceivers) {
      WeightedAddress.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.weightedNodeHostsIncentivesReceivers) {
      WeightedAddress.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 2:
          message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 3:
          message.weightedNftIncentivesReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 4:
          message.weightedNodeHostsIncentivesReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
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
    if (object.distributionProportions !== undefined && object.distributionProportions !== null) {
      message.distributionProportions = DistributionProportions.fromPartial(object.distributionProportions);
    }
    message.weightedDeveloperRewardsReceivers =
      object.weightedDeveloperRewardsReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    message.weightedNftIncentivesReceivers =
      object.weightedNftIncentivesReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    message.weightedNodeHostsIncentivesReceivers =
      object.weightedNodeHostsIncentivesReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
      message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
    }
    message.weightedDeveloperRewardsReceivers =
      object.weighted_developer_rewards_receivers?.map((e) => WeightedAddress.fromAmino(e)) || [];
    message.weightedNftIncentivesReceivers =
      object.weighted_nft_incentives_receivers?.map((e) => WeightedAddress.fromAmino(e)) || [];
    message.weightedNodeHostsIncentivesReceivers =
      object.weighted_node_hosts_incentives_receivers?.map((e) => WeightedAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distribution_proportions = message.distributionProportions
      ? DistributionProportions.toAmino(message.distributionProportions)
      : undefined;
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map((e) =>
        e ? WeightedAddress.toAmino(e) : undefined,
      );
    } else {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers;
    }
    if (message.weightedNftIncentivesReceivers) {
      obj.weighted_nft_incentives_receivers = message.weightedNftIncentivesReceivers.map((e) =>
        e ? WeightedAddress.toAmino(e) : undefined,
      );
    } else {
      obj.weighted_nft_incentives_receivers = message.weightedNftIncentivesReceivers;
    }
    if (message.weightedNodeHostsIncentivesReceivers) {
      obj.weighted_node_hosts_incentives_receivers = message.weightedNodeHostsIncentivesReceivers.map((e) =>
        e ? WeightedAddress.toAmino(e) : undefined,
      );
    } else {
      obj.weighted_node_hosts_incentives_receivers = message.weightedNodeHostsIncentivesReceivers;
    }
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
      typeUrl: "/OmniFlix.alloc.v1beta1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
