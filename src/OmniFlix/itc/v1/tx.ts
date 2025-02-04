//@ts-nocheck
/* eslint-disable */
import {
  InteractionType,
  ClaimType,
  NFTDetails,
  NFTDetailsAmino,
  Distribution,
  DistributionAmino,
} from "./itc";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.itc.v1";
export interface MsgCreateCampaign {
  name: string;
  description: string;
  interaction: InteractionType;
  claimType: ClaimType;
  nftDenomId: string;
  tokensPerClaim: Coin;
  maxAllowedClaims: bigint;
  deposit: Coin;
  nftMintDetails?: NFTDetails;
  startTime: Timestamp;
  duration: Duration;
  distribution?: Distribution;
  creator: string;
  creationFee: Coin;
}
export interface MsgCreateCampaignProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign";
  value: Uint8Array;
}
export interface MsgCreateCampaignAmino {
  name?: string;
  description?: string;
  interaction?: InteractionType;
  claim_type?: ClaimType;
  nft_denom_id?: string;
  tokens_per_claim?: CoinAmino;
  max_allowed_claims?: string;
  deposit?: CoinAmino;
  nft_mint_details?: NFTDetailsAmino;
  start_time?: string;
  duration?: DurationAmino;
  distribution?: DistributionAmino;
  creator?: string;
  creation_fee?: CoinAmino;
}
export interface MsgCreateCampaignAminoMsg {
  type: "OmniFlix/itc/MsgCreateCampaign";
  value: MsgCreateCampaignAmino;
}
export interface MsgCreateCampaignResponse {}
export interface MsgCreateCampaignResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse";
  value: Uint8Array;
}
export interface MsgCreateCampaignResponseAmino {}
export interface MsgCreateCampaignResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgCreateCampaignResponse";
  value: MsgCreateCampaignResponseAmino;
}
export interface MsgCancelCampaign {
  campaignId: bigint;
  creator: string;
}
export interface MsgCancelCampaignProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign";
  value: Uint8Array;
}
export interface MsgCancelCampaignAmino {
  campaign_id?: string;
  creator?: string;
}
export interface MsgCancelCampaignAminoMsg {
  type: "OmniFlix/itc/MsgCancelCampaign";
  value: MsgCancelCampaignAmino;
}
export interface MsgCancelCampaignResponse {}
export interface MsgCancelCampaignResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse";
  value: Uint8Array;
}
export interface MsgCancelCampaignResponseAmino {}
export interface MsgCancelCampaignResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgCancelCampaignResponse";
  value: MsgCancelCampaignResponseAmino;
}
export interface MsgClaim {
  campaignId: bigint;
  nftId: string;
  interaction: InteractionType;
  claimer: string;
}
export interface MsgClaimProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgClaim";
  value: Uint8Array;
}
export interface MsgClaimAmino {
  campaign_id?: string;
  nft_id?: string;
  interaction?: InteractionType;
  claimer?: string;
}
export interface MsgClaimAminoMsg {
  type: "OmniFlix/itc/MsgClaim";
  value: MsgClaimAmino;
}
export interface MsgClaimResponse {}
export interface MsgClaimResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse";
  value: Uint8Array;
}
export interface MsgClaimResponseAmino {}
export interface MsgClaimResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
export interface MsgDepositCampaign {
  campaignId: bigint;
  amount: Coin;
  depositor: string;
}
export interface MsgDepositCampaignProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign";
  value: Uint8Array;
}
export interface MsgDepositCampaignAmino {
  campaign_id?: string;
  amount?: CoinAmino;
  depositor?: string;
}
export interface MsgDepositCampaignAminoMsg {
  type: "OmniFlix/itc/MsgDepositCampaign";
  value: MsgDepositCampaignAmino;
}
export interface MsgDepositCampaignResponse {}
export interface MsgDepositCampaignResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse";
  value: Uint8Array;
}
export interface MsgDepositCampaignResponseAmino {}
export interface MsgDepositCampaignResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgDepositCampaignResponse";
  value: MsgDepositCampaignResponseAmino;
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
   * params defines the x/itc parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams";
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
   * params defines the x/itc parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/OmniFlix.itc.v1.MsgUpdateParams";
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
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse";
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
  type: "/OmniFlix.itc.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgCreateCampaign(): MsgCreateCampaign {
  return {
    name: "",
    description: "",
    interaction: 0,
    claimType: 0,
    nftDenomId: "",
    tokensPerClaim: Coin.fromPartial({}),
    maxAllowedClaims: BigInt(0),
    deposit: Coin.fromPartial({}),
    nftMintDetails: undefined,
    startTime: Timestamp.fromPartial({}),
    duration: Duration.fromPartial({}),
    distribution: undefined,
    creator: "",
    creationFee: Coin.fromPartial({}),
  };
}
export const MsgCreateCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
  encode(message: MsgCreateCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.interaction !== 0) {
      writer.uint32(24).int32(message.interaction);
    }
    if (message.claimType !== 0) {
      writer.uint32(32).int32(message.claimType);
    }
    if (message.nftDenomId !== "") {
      writer.uint32(42).string(message.nftDenomId);
    }
    if (message.tokensPerClaim !== undefined) {
      Coin.encode(message.tokensPerClaim, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxAllowedClaims !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxAllowedClaims);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(66).fork()).ldelim();
    }
    if (message.nftMintDetails !== undefined) {
      NFTDetails.encode(message.nftMintDetails, writer.uint32(74).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(82).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(90).fork()).ldelim();
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(98).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(106).string(message.creator);
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCampaign {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.interaction = reader.int32() as any;
          break;
        case 4:
          message.claimType = reader.int32() as any;
          break;
        case 5:
          message.nftDenomId = reader.string();
          break;
        case 6:
          message.tokensPerClaim = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.maxAllowedClaims = reader.uint64();
          break;
        case 8:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.nftMintDetails = NFTDetails.decode(reader, reader.uint32());
          break;
        case 10:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 11:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 12:
          message.distribution = Distribution.decode(reader, reader.uint32());
          break;
        case 13:
          message.creator = reader.string();
          break;
        case 14:
          message.creationFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateCampaign>, I>>(object: I): MsgCreateCampaign {
    const message = createBaseMsgCreateCampaign();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.interaction = object.interaction ?? 0;
    message.claimType = object.claimType ?? 0;
    message.nftDenomId = object.nftDenomId ?? "";
    if (object.tokensPerClaim !== undefined && object.tokensPerClaim !== null) {
      message.tokensPerClaim = Coin.fromPartial(object.tokensPerClaim);
    }
    if (object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null) {
      message.maxAllowedClaims = BigInt(object.maxAllowedClaims.toString());
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    if (object.nftMintDetails !== undefined && object.nftMintDetails !== null) {
      message.nftMintDetails = NFTDetails.fromPartial(object.nftMintDetails);
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromPartial(object.distribution);
    }
    message.creator = object.creator ?? "";
    if (object.creationFee !== undefined && object.creationFee !== null) {
      message.creationFee = Coin.fromPartial(object.creationFee);
    }
    return message;
  },
  fromAmino(object: MsgCreateCampaignAmino): MsgCreateCampaign {
    const message = createBaseMsgCreateCampaign();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = object.interaction;
    }
    if (object.claim_type !== undefined && object.claim_type !== null) {
      message.claimType = object.claim_type;
    }
    if (object.nft_denom_id !== undefined && object.nft_denom_id !== null) {
      message.nftDenomId = object.nft_denom_id;
    }
    if (object.tokens_per_claim !== undefined && object.tokens_per_claim !== null) {
      message.tokensPerClaim = Coin.fromAmino(object.tokens_per_claim);
    }
    if (object.max_allowed_claims !== undefined && object.max_allowed_claims !== null) {
      message.maxAllowedClaims = BigInt(object.max_allowed_claims);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.nft_mint_details !== undefined && object.nft_mint_details !== null) {
      message.nftMintDetails = NFTDetails.fromAmino(object.nft_mint_details);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromAmino(object.distribution);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.creation_fee !== undefined && object.creation_fee !== null) {
      message.creationFee = Coin.fromAmino(object.creation_fee);
    }
    return message;
  },
  toAmino(message: MsgCreateCampaign): MsgCreateCampaignAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.interaction = message.interaction === 0 ? undefined : message.interaction;
    obj.claim_type = message.claimType === 0 ? undefined : message.claimType;
    obj.nft_denom_id = message.nftDenomId === "" ? undefined : message.nftDenomId;
    obj.tokens_per_claim = message.tokensPerClaim ? Coin.toAmino(message.tokensPerClaim) : undefined;
    obj.max_allowed_claims =
      message.maxAllowedClaims !== BigInt(0) ? message.maxAllowedClaims?.toString() : undefined;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.nft_mint_details = message.nftMintDetails ? NFTDetails.toAmino(message.nftMintDetails) : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.distribution = message.distribution ? Distribution.toAmino(message.distribution) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCampaignAminoMsg): MsgCreateCampaign {
    return MsgCreateCampaign.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateCampaign): MsgCreateCampaignAminoMsg {
    return {
      type: "OmniFlix/itc/MsgCreateCampaign",
      value: MsgCreateCampaign.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgCreateCampaignProtoMsg): MsgCreateCampaign {
    return MsgCreateCampaign.decode(message.value);
  },
  toProto(message: MsgCreateCampaign): Uint8Array {
    return MsgCreateCampaign.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCampaign): MsgCreateCampaignProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
      value: MsgCreateCampaign.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateCampaignResponse(): MsgCreateCampaignResponse {
  return {};
}
export const MsgCreateCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse",
  encode(_: MsgCreateCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCampaignResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgCreateCampaignResponse>, I>>(_: I): MsgCreateCampaignResponse {
    const message = createBaseMsgCreateCampaignResponse();
    return message;
  },
  fromAmino(_: MsgCreateCampaignResponseAmino): MsgCreateCampaignResponse {
    const message = createBaseMsgCreateCampaignResponse();
    return message;
  },
  toAmino(_: MsgCreateCampaignResponse): MsgCreateCampaignResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateCampaignResponseAminoMsg): MsgCreateCampaignResponse {
    return MsgCreateCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCampaignResponseProtoMsg): MsgCreateCampaignResponse {
    return MsgCreateCampaignResponse.decode(message.value);
  },
  toProto(message: MsgCreateCampaignResponse): Uint8Array {
    return MsgCreateCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCampaignResponse): MsgCreateCampaignResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse",
      value: MsgCreateCampaignResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgCancelCampaign(): MsgCancelCampaign {
  return {
    campaignId: BigInt(0),
    creator: "",
  };
}
export const MsgCancelCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
  encode(message: MsgCancelCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelCampaign {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelCampaign>, I>>(object: I): MsgCancelCampaign {
    const message = createBaseMsgCancelCampaign();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCancelCampaignAmino): MsgCancelCampaign {
    const message = createBaseMsgCancelCampaign();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgCancelCampaign): MsgCancelCampaignAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCancelCampaignAminoMsg): MsgCancelCampaign {
    return MsgCancelCampaign.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelCampaign): MsgCancelCampaignAminoMsg {
    return {
      type: "OmniFlix/itc/MsgCancelCampaign",
      value: MsgCancelCampaign.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgCancelCampaignProtoMsg): MsgCancelCampaign {
    return MsgCancelCampaign.decode(message.value);
  },
  toProto(message: MsgCancelCampaign): Uint8Array {
    return MsgCancelCampaign.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelCampaign): MsgCancelCampaignProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
      value: MsgCancelCampaign.encode(message).finish(),
    };
  },
};
function createBaseMsgCancelCampaignResponse(): MsgCancelCampaignResponse {
  return {};
}
export const MsgCancelCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse",
  encode(_: MsgCancelCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCampaignResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgCancelCampaignResponse>, I>>(_: I): MsgCancelCampaignResponse {
    const message = createBaseMsgCancelCampaignResponse();
    return message;
  },
  fromAmino(_: MsgCancelCampaignResponseAmino): MsgCancelCampaignResponse {
    const message = createBaseMsgCancelCampaignResponse();
    return message;
  },
  toAmino(_: MsgCancelCampaignResponse): MsgCancelCampaignResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelCampaignResponseAminoMsg): MsgCancelCampaignResponse {
    return MsgCancelCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelCampaignResponseProtoMsg): MsgCancelCampaignResponse {
    return MsgCancelCampaignResponse.decode(message.value);
  },
  toProto(message: MsgCancelCampaignResponse): Uint8Array {
    return MsgCancelCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelCampaignResponse): MsgCancelCampaignResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse",
      value: MsgCancelCampaignResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgClaim(): MsgClaim {
  return {
    campaignId: BigInt(0),
    nftId: "",
    interaction: 0,
    claimer: "",
  };
}
export const MsgClaim = {
  typeUrl: "/OmniFlix.itc.v1.MsgClaim",
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.interaction !== 0) {
      writer.uint32(24).int32(message.interaction);
    }
    if (message.claimer !== "") {
      writer.uint32(34).string(message.claimer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.interaction = reader.int32() as any;
          break;
        case 4:
          message.claimer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    message.nftId = object.nftId ?? "";
    message.interaction = object.interaction ?? 0;
    message.claimer = object.claimer ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = object.interaction;
    }
    if (object.claimer !== undefined && object.claimer !== null) {
      message.claimer = object.claimer;
    }
    return message;
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.interaction = message.interaction === 0 ? undefined : message.interaction;
    obj.claimer = message.claimer === "" ? undefined : message.claimer;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim {
    return MsgClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaim): MsgClaimAminoMsg {
    return {
      type: "OmniFlix/itc/MsgClaim",
      value: MsgClaim.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim {
    return MsgClaim.decode(message.value);
  },
  toProto(message: MsgClaim): Uint8Array {
    return MsgClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgClaim): MsgClaimProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgClaim",
      value: MsgClaim.encode(message).finish(),
    };
  },
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}
export const MsgClaimResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse",
  encode(_: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgClaimResponse>, I>>(_: I): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
  fromAmino(_: MsgClaimResponseAmino): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
  toAmino(_: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse {
    return MsgClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse {
    return MsgClaimResponse.decode(message.value);
  },
  toProto(message: MsgClaimResponse): Uint8Array {
    return MsgClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgDepositCampaign(): MsgDepositCampaign {
  return {
    campaignId: BigInt(0),
    amount: Coin.fromPartial({}),
    depositor: "",
  };
}
export const MsgDepositCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
  encode(message: MsgDepositCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositCampaign {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDepositCampaign>, I>>(object: I): MsgDepositCampaign {
    const message = createBaseMsgDepositCampaign();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: MsgDepositCampaignAmino): MsgDepositCampaign {
    const message = createBaseMsgDepositCampaign();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: MsgDepositCampaign): MsgDepositCampaignAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    return obj;
  },
  fromAminoMsg(object: MsgDepositCampaignAminoMsg): MsgDepositCampaign {
    return MsgDepositCampaign.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositCampaign): MsgDepositCampaignAminoMsg {
    return {
      type: "OmniFlix/itc/MsgDepositCampaign",
      value: MsgDepositCampaign.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgDepositCampaignProtoMsg): MsgDepositCampaign {
    return MsgDepositCampaign.decode(message.value);
  },
  toProto(message: MsgDepositCampaign): Uint8Array {
    return MsgDepositCampaign.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositCampaign): MsgDepositCampaignProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
      value: MsgDepositCampaign.encode(message).finish(),
    };
  },
};
function createBaseMsgDepositCampaignResponse(): MsgDepositCampaignResponse {
  return {};
}
export const MsgDepositCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse",
  encode(_: MsgDepositCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositCampaignResponse();
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
  fromPartial<I extends Exact<DeepPartial<MsgDepositCampaignResponse>, I>>(_: I): MsgDepositCampaignResponse {
    const message = createBaseMsgDepositCampaignResponse();
    return message;
  },
  fromAmino(_: MsgDepositCampaignResponseAmino): MsgDepositCampaignResponse {
    const message = createBaseMsgDepositCampaignResponse();
    return message;
  },
  toAmino(_: MsgDepositCampaignResponse): MsgDepositCampaignResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositCampaignResponseAminoMsg): MsgDepositCampaignResponse {
    return MsgDepositCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositCampaignResponseProtoMsg): MsgDepositCampaignResponse {
    return MsgDepositCampaignResponse.decode(message.value);
  },
  toProto(message: MsgDepositCampaignResponse): Uint8Array {
    return MsgDepositCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositCampaignResponse): MsgDepositCampaignResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse",
      value: MsgDepositCampaignResponse.encode(message).finish(),
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
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
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
      typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish(),
    };
  },
};
export interface Msg {
  CreateCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
  CancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse>;
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
  DepositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/itc module
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
    this.CreateCampaign = this.CreateCampaign.bind(this);
    this.CancelCampaign = this.CancelCampaign.bind(this);
    this.Claim = this.Claim.bind(this);
    this.DepositCampaign = this.DepositCampaign.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse> {
    const data = MsgCreateCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CreateCampaign", data);
    return promise.then((data) => MsgCreateCampaignResponse.decode(new BinaryReader(data)));
  }
  CancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse> {
    const data = MsgCancelCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CancelCampaign", data);
    return promise.then((data) => MsgCancelCampaignResponse.decode(new BinaryReader(data)));
  }
  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "Claim", data);
    return promise.then((data) => MsgClaimResponse.decode(new BinaryReader(data)));
  }
  DepositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse> {
    const data = MsgDepositCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "DepositCampaign", data);
    return promise.then((data) => MsgDepositCampaignResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
