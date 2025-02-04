//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.itc.v1";
export enum DistributionType {
  DISTRIBUTION_TYPE_INSTANT = 0,
  DISTRIBUTION_TYPE_STREAM = 1,
  UNRECOGNIZED = -1,
}
export const DistributionTypeAmino = DistributionType;
export function distributionTypeFromJSON(object: any): DistributionType {
  switch (object) {
    case 0:
    case "DISTRIBUTION_TYPE_INSTANT":
      return DistributionType.DISTRIBUTION_TYPE_INSTANT;
    case 1:
    case "DISTRIBUTION_TYPE_STREAM":
      return DistributionType.DISTRIBUTION_TYPE_STREAM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DistributionType.UNRECOGNIZED;
  }
}
export function distributionTypeToJSON(object: DistributionType): string {
  switch (object) {
    case DistributionType.DISTRIBUTION_TYPE_INSTANT:
      return "DISTRIBUTION_TYPE_INSTANT";
    case DistributionType.DISTRIBUTION_TYPE_STREAM:
      return "DISTRIBUTION_TYPE_STREAM";
    case DistributionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum InteractionType {
  INTERACTION_TYPE_BURN = 0,
  INTERACTION_TYPE_TRANSFER = 1,
  INTERACTION_TYPE_HOLD = 2,
  UNRECOGNIZED = -1,
}
export const InteractionTypeAmino = InteractionType;
export function interactionTypeFromJSON(object: any): InteractionType {
  switch (object) {
    case 0:
    case "INTERACTION_TYPE_BURN":
      return InteractionType.INTERACTION_TYPE_BURN;
    case 1:
    case "INTERACTION_TYPE_TRANSFER":
      return InteractionType.INTERACTION_TYPE_TRANSFER;
    case 2:
    case "INTERACTION_TYPE_HOLD":
      return InteractionType.INTERACTION_TYPE_HOLD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InteractionType.UNRECOGNIZED;
  }
}
export function interactionTypeToJSON(object: InteractionType): string {
  switch (object) {
    case InteractionType.INTERACTION_TYPE_BURN:
      return "INTERACTION_TYPE_BURN";
    case InteractionType.INTERACTION_TYPE_TRANSFER:
      return "INTERACTION_TYPE_TRANSFER";
    case InteractionType.INTERACTION_TYPE_HOLD:
      return "INTERACTION_TYPE_HOLD";
    case InteractionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CampaignStatus {
  CAMPAIGN_STATUS_UNSPECIFIED = 0,
  CAMPAIGN_STATUS_INACTIVE = 1,
  CAMPAIGN_STATUS_ACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const CampaignStatusAmino = CampaignStatus;
export function campaignStatusFromJSON(object: any): CampaignStatus {
  switch (object) {
    case 0:
    case "CAMPAIGN_STATUS_UNSPECIFIED":
      return CampaignStatus.CAMPAIGN_STATUS_UNSPECIFIED;
    case 1:
    case "CAMPAIGN_STATUS_INACTIVE":
      return CampaignStatus.CAMPAIGN_STATUS_INACTIVE;
    case 2:
    case "CAMPAIGN_STATUS_ACTIVE":
      return CampaignStatus.CAMPAIGN_STATUS_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CampaignStatus.UNRECOGNIZED;
  }
}
export function campaignStatusToJSON(object: CampaignStatus): string {
  switch (object) {
    case CampaignStatus.CAMPAIGN_STATUS_UNSPECIFIED:
      return "CAMPAIGN_STATUS_UNSPECIFIED";
    case CampaignStatus.CAMPAIGN_STATUS_INACTIVE:
      return "CAMPAIGN_STATUS_INACTIVE";
    case CampaignStatus.CAMPAIGN_STATUS_ACTIVE:
      return "CAMPAIGN_STATUS_ACTIVE";
    case CampaignStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ClaimType {
  CLAIM_TYPE_FT = 0,
  CLAIM_TYPE_NFT = 1,
  CLAIM_TYPE_FT_AND_NFT = 2,
  UNRECOGNIZED = -1,
}
export const ClaimTypeAmino = ClaimType;
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_FT":
      return ClaimType.CLAIM_TYPE_FT;
    case 1:
    case "CLAIM_TYPE_NFT":
      return ClaimType.CLAIM_TYPE_NFT;
    case 2:
    case "CLAIM_TYPE_FT_AND_NFT":
      return ClaimType.CLAIM_TYPE_FT_AND_NFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_FT:
      return "CLAIM_TYPE_FT";
    case ClaimType.CLAIM_TYPE_NFT:
      return "CLAIM_TYPE_NFT";
    case ClaimType.CLAIM_TYPE_FT_AND_NFT:
      return "CLAIM_TYPE_FT_AND_NFT";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Campaign {
  id: bigint;
  name: string;
  description: string;
  startTime: Timestamp;
  endTime: Timestamp;
  creator: string;
  nftDenomId: string;
  maxAllowedClaims: bigint;
  interaction: InteractionType;
  claimType: ClaimType;
  tokensPerClaim: Coin;
  totalTokens: Coin;
  availableTokens: Coin;
  receivedNftIds: string[];
  nftMintDetails?: NFTDetails;
  distribution?: Distribution;
  mintCount: bigint;
  claimCount: bigint;
}
export interface CampaignProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.Campaign";
  value: Uint8Array;
}
export interface CampaignAmino {
  id?: string;
  name?: string;
  description?: string;
  start_time?: string;
  end_time?: string;
  creator?: string;
  nft_denom_id?: string;
  max_allowed_claims?: string;
  interaction?: InteractionType;
  claim_type?: ClaimType;
  tokens_per_claim?: CoinAmino;
  total_tokens?: CoinAmino;
  available_tokens?: CoinAmino;
  received_nft_ids?: string[];
  nft_mint_details?: NFTDetailsAmino;
  distribution?: DistributionAmino;
  mint_count?: string;
  claim_count?: string;
}
export interface CampaignAminoMsg {
  type: "/OmniFlix.itc.v1.Campaign";
  value: CampaignAmino;
}
export interface Distribution {
  type: DistributionType;
  streamDuration: Duration;
}
export interface DistributionProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.Distribution";
  value: Uint8Array;
}
export interface DistributionAmino {
  type?: DistributionType;
  stream_duration?: DurationAmino;
}
export interface DistributionAminoMsg {
  type: "/OmniFlix.itc.v1.Distribution";
  value: DistributionAmino;
}
export interface NFTDetails {
  denomId: string;
  name: string;
  description: string;
  mediaUri: string;
  previewUri: string;
  royaltyShare: string;
  transferable: boolean;
  extensible: boolean;
  nsfw: boolean;
  data: string;
  uriHash: string;
  startIndex: bigint;
  nameDelimiter: string;
}
export interface NFTDetailsProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.NFTDetails";
  value: Uint8Array;
}
export interface NFTDetailsAmino {
  denom_id?: string;
  name?: string;
  description?: string;
  media_uri?: string;
  preview_uri?: string;
  royalty_share?: string;
  transferable?: boolean;
  extensible?: boolean;
  nsfw?: boolean;
  data?: string;
  uri_hash?: string;
  start_index?: string;
  name_delimiter?: string;
}
export interface NFTDetailsAminoMsg {
  type: "/OmniFlix.itc.v1.NFTDetails";
  value: NFTDetailsAmino;
}
export interface Claim {
  campaignId: bigint;
  address: string;
  nftId: string;
  interaction: InteractionType;
}
export interface ClaimProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.Claim";
  value: Uint8Array;
}
export interface ClaimAmino {
  campaign_id?: string;
  address?: string;
  nft_id?: string;
  interaction?: InteractionType;
}
export interface ClaimAminoMsg {
  type: "/OmniFlix.itc.v1.Claim";
  value: ClaimAmino;
}
function createBaseCampaign(): Campaign {
  return {
    id: BigInt(0),
    name: "",
    description: "",
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    creator: "",
    nftDenomId: "",
    maxAllowedClaims: BigInt(0),
    interaction: 0,
    claimType: 0,
    tokensPerClaim: Coin.fromPartial({}),
    totalTokens: Coin.fromPartial({}),
    availableTokens: Coin.fromPartial({}),
    receivedNftIds: [],
    nftMintDetails: undefined,
    distribution: undefined,
    mintCount: BigInt(0),
    claimCount: BigInt(0),
  };
}
export const Campaign = {
  typeUrl: "/OmniFlix.itc.v1.Campaign",
  encode(message: Campaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.nftDenomId !== "") {
      writer.uint32(58).string(message.nftDenomId);
    }
    if (message.maxAllowedClaims !== BigInt(0)) {
      writer.uint32(64).uint64(message.maxAllowedClaims);
    }
    if (message.interaction !== 0) {
      writer.uint32(72).int32(message.interaction);
    }
    if (message.claimType !== 0) {
      writer.uint32(80).int32(message.claimType);
    }
    if (message.tokensPerClaim !== undefined) {
      Coin.encode(message.tokensPerClaim, writer.uint32(90).fork()).ldelim();
    }
    if (message.totalTokens !== undefined) {
      Coin.encode(message.totalTokens, writer.uint32(98).fork()).ldelim();
    }
    if (message.availableTokens !== undefined) {
      Coin.encode(message.availableTokens, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.receivedNftIds) {
      writer.uint32(114).string(v!);
    }
    if (message.nftMintDetails !== undefined) {
      NFTDetails.encode(message.nftMintDetails, writer.uint32(122).fork()).ldelim();
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(130).fork()).ldelim();
    }
    if (message.mintCount !== BigInt(0)) {
      writer.uint32(136).uint64(message.mintCount);
    }
    if (message.claimCount !== BigInt(0)) {
      writer.uint32(144).uint64(message.claimCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Campaign {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.nftDenomId = reader.string();
          break;
        case 8:
          message.maxAllowedClaims = reader.uint64();
          break;
        case 9:
          message.interaction = reader.int32() as any;
          break;
        case 10:
          message.claimType = reader.int32() as any;
          break;
        case 11:
          message.tokensPerClaim = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.totalTokens = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.availableTokens = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.receivedNftIds.push(reader.string());
          break;
        case 15:
          message.nftMintDetails = NFTDetails.decode(reader, reader.uint32());
          break;
        case 16:
          message.distribution = Distribution.decode(reader, reader.uint32());
          break;
        case 17:
          message.mintCount = reader.uint64();
          break;
        case 18:
          message.claimCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<Campaign>, I>>(object: I): Campaign {
    const message = createBaseCampaign();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Timestamp.fromPartial(object.endTime);
    }
    message.creator = object.creator ?? "";
    message.nftDenomId = object.nftDenomId ?? "";
    if (object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null) {
      message.maxAllowedClaims = BigInt(object.maxAllowedClaims.toString());
    }
    message.interaction = object.interaction ?? 0;
    message.claimType = object.claimType ?? 0;
    if (object.tokensPerClaim !== undefined && object.tokensPerClaim !== null) {
      message.tokensPerClaim = Coin.fromPartial(object.tokensPerClaim);
    }
    if (object.totalTokens !== undefined && object.totalTokens !== null) {
      message.totalTokens = Coin.fromPartial(object.totalTokens);
    }
    if (object.availableTokens !== undefined && object.availableTokens !== null) {
      message.availableTokens = Coin.fromPartial(object.availableTokens);
    }
    message.receivedNftIds = object.receivedNftIds?.map((e) => e) || [];
    if (object.nftMintDetails !== undefined && object.nftMintDetails !== null) {
      message.nftMintDetails = NFTDetails.fromPartial(object.nftMintDetails);
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromPartial(object.distribution);
    }
    if (object.mintCount !== undefined && object.mintCount !== null) {
      message.mintCount = BigInt(object.mintCount.toString());
    }
    if (object.claimCount !== undefined && object.claimCount !== null) {
      message.claimCount = BigInt(object.claimCount.toString());
    }
    return message;
  },
  fromAmino(object: CampaignAmino): Campaign {
    const message = createBaseCampaign();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nft_denom_id !== undefined && object.nft_denom_id !== null) {
      message.nftDenomId = object.nft_denom_id;
    }
    if (object.max_allowed_claims !== undefined && object.max_allowed_claims !== null) {
      message.maxAllowedClaims = BigInt(object.max_allowed_claims);
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = object.interaction;
    }
    if (object.claim_type !== undefined && object.claim_type !== null) {
      message.claimType = object.claim_type;
    }
    if (object.tokens_per_claim !== undefined && object.tokens_per_claim !== null) {
      message.tokensPerClaim = Coin.fromAmino(object.tokens_per_claim);
    }
    if (object.total_tokens !== undefined && object.total_tokens !== null) {
      message.totalTokens = Coin.fromAmino(object.total_tokens);
    }
    if (object.available_tokens !== undefined && object.available_tokens !== null) {
      message.availableTokens = Coin.fromAmino(object.available_tokens);
    }
    message.receivedNftIds = object.received_nft_ids?.map((e) => e) || [];
    if (object.nft_mint_details !== undefined && object.nft_mint_details !== null) {
      message.nftMintDetails = NFTDetails.fromAmino(object.nft_mint_details);
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromAmino(object.distribution);
    }
    if (object.mint_count !== undefined && object.mint_count !== null) {
      message.mintCount = BigInt(object.mint_count);
    }
    if (object.claim_count !== undefined && object.claim_count !== null) {
      message.claimCount = BigInt(object.claim_count);
    }
    return message;
  },
  toAmino(message: Campaign): CampaignAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nft_denom_id = message.nftDenomId === "" ? undefined : message.nftDenomId;
    obj.max_allowed_claims =
      message.maxAllowedClaims !== BigInt(0) ? message.maxAllowedClaims?.toString() : undefined;
    obj.interaction = message.interaction === 0 ? undefined : message.interaction;
    obj.claim_type = message.claimType === 0 ? undefined : message.claimType;
    obj.tokens_per_claim = message.tokensPerClaim ? Coin.toAmino(message.tokensPerClaim) : undefined;
    obj.total_tokens = message.totalTokens ? Coin.toAmino(message.totalTokens) : undefined;
    obj.available_tokens = message.availableTokens ? Coin.toAmino(message.availableTokens) : undefined;
    if (message.receivedNftIds) {
      obj.received_nft_ids = message.receivedNftIds.map((e) => e);
    } else {
      obj.received_nft_ids = message.receivedNftIds;
    }
    obj.nft_mint_details = message.nftMintDetails ? NFTDetails.toAmino(message.nftMintDetails) : undefined;
    obj.distribution = message.distribution ? Distribution.toAmino(message.distribution) : undefined;
    obj.mint_count = message.mintCount !== BigInt(0) ? message.mintCount?.toString() : undefined;
    obj.claim_count = message.claimCount !== BigInt(0) ? message.claimCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CampaignAminoMsg): Campaign {
    return Campaign.fromAmino(object.value);
  },
  fromProtoMsg(message: CampaignProtoMsg): Campaign {
    return Campaign.decode(message.value);
  },
  toProto(message: Campaign): Uint8Array {
    return Campaign.encode(message).finish();
  },
  toProtoMsg(message: Campaign): CampaignProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.Campaign",
      value: Campaign.encode(message).finish(),
    };
  },
};
function createBaseDistribution(): Distribution {
  return {
    type: 0,
    streamDuration: Duration.fromPartial({}),
  };
}
export const Distribution = {
  typeUrl: "/OmniFlix.itc.v1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.streamDuration !== undefined) {
      Duration.encode(message.streamDuration, writer.uint32(18).fork()).ldelim();
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
          message.type = reader.int32() as any;
          break;
        case 2:
          message.streamDuration = Duration.decode(reader, reader.uint32());
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
    message.type = object.type ?? 0;
    if (object.streamDuration !== undefined && object.streamDuration !== null) {
      message.streamDuration = Duration.fromPartial(object.streamDuration);
    }
    return message;
  },
  fromAmino(object: DistributionAmino): Distribution {
    const message = createBaseDistribution();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.stream_duration !== undefined && object.stream_duration !== null) {
      message.streamDuration = Duration.fromAmino(object.stream_duration);
    }
    return message;
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.stream_duration = message.streamDuration ? Duration.toAmino(message.streamDuration) : undefined;
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
      typeUrl: "/OmniFlix.itc.v1.Distribution",
      value: Distribution.encode(message).finish(),
    };
  },
};
function createBaseNFTDetails(): NFTDetails {
  return {
    denomId: "",
    name: "",
    description: "",
    mediaUri: "",
    previewUri: "",
    royaltyShare: "",
    transferable: false,
    extensible: false,
    nsfw: false,
    data: "",
    uriHash: "",
    startIndex: BigInt(0),
    nameDelimiter: "",
  };
}
export const NFTDetails = {
  typeUrl: "/OmniFlix.itc.v1.NFTDetails",
  encode(message: NFTDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.mediaUri !== "") {
      writer.uint32(34).string(message.mediaUri);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(50).string(message.royaltyShare);
    }
    if (message.transferable === true) {
      writer.uint32(56).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(64).bool(message.extensible);
    }
    if (message.nsfw === true) {
      writer.uint32(72).bool(message.nsfw);
    }
    if (message.data !== "") {
      writer.uint32(82).string(message.data);
    }
    if (message.uriHash !== "") {
      writer.uint32(90).string(message.uriHash);
    }
    if (message.startIndex !== BigInt(0)) {
      writer.uint32(96).uint64(message.startIndex);
    }
    if (message.nameDelimiter !== "") {
      writer.uint32(106).string(message.nameDelimiter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NFTDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.mediaUri = reader.string();
          break;
        case 5:
          message.previewUri = reader.string();
          break;
        case 6:
          message.royaltyShare = reader.string();
          break;
        case 7:
          message.transferable = reader.bool();
          break;
        case 8:
          message.extensible = reader.bool();
          break;
        case 9:
          message.nsfw = reader.bool();
          break;
        case 10:
          message.data = reader.string();
          break;
        case 11:
          message.uriHash = reader.string();
          break;
        case 12:
          message.startIndex = reader.uint64();
          break;
        case 13:
          message.nameDelimiter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<NFTDetails>, I>>(object: I): NFTDetails {
    const message = createBaseNFTDetails();
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.mediaUri = object.mediaUri ?? "";
    message.previewUri = object.previewUri ?? "";
    message.royaltyShare = object.royaltyShare ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.nsfw = object.nsfw ?? false;
    message.data = object.data ?? "";
    message.uriHash = object.uriHash ?? "";
    if (object.startIndex !== undefined && object.startIndex !== null) {
      message.startIndex = BigInt(object.startIndex.toString());
    }
    message.nameDelimiter = object.nameDelimiter ?? "";
    return message;
  },
  fromAmino(object: NFTDetailsAmino): NFTDetails {
    const message = createBaseNFTDetails();
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.media_uri !== undefined && object.media_uri !== null) {
      message.mediaUri = object.media_uri;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.royalty_share !== undefined && object.royalty_share !== null) {
      message.royaltyShare = object.royalty_share;
    }
    if (object.transferable !== undefined && object.transferable !== null) {
      message.transferable = object.transferable;
    }
    if (object.extensible !== undefined && object.extensible !== null) {
      message.extensible = object.extensible;
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = object.nsfw;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.start_index !== undefined && object.start_index !== null) {
      message.startIndex = BigInt(object.start_index);
    }
    if (object.name_delimiter !== undefined && object.name_delimiter !== null) {
      message.nameDelimiter = object.name_delimiter;
    }
    return message;
  },
  toAmino(message: NFTDetails): NFTDetailsAmino {
    const obj: any = {};
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.media_uri = message.mediaUri === "" ? undefined : message.mediaUri;
    obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
    obj.royalty_share = message.royaltyShare === "" ? undefined : message.royaltyShare;
    obj.transferable = message.transferable === false ? undefined : message.transferable;
    obj.extensible = message.extensible === false ? undefined : message.extensible;
    obj.nsfw = message.nsfw === false ? undefined : message.nsfw;
    obj.data = message.data === "" ? undefined : message.data;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.start_index = message.startIndex !== BigInt(0) ? message.startIndex?.toString() : undefined;
    obj.name_delimiter = message.nameDelimiter === "" ? undefined : message.nameDelimiter;
    return obj;
  },
  fromAminoMsg(object: NFTDetailsAminoMsg): NFTDetails {
    return NFTDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTDetailsProtoMsg): NFTDetails {
    return NFTDetails.decode(message.value);
  },
  toProto(message: NFTDetails): Uint8Array {
    return NFTDetails.encode(message).finish();
  },
  toProtoMsg(message: NFTDetails): NFTDetailsProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.NFTDetails",
      value: NFTDetails.encode(message).finish(),
    };
  },
};
function createBaseClaim(): Claim {
  return {
    campaignId: BigInt(0),
    address: "",
    nftId: "",
    interaction: 0,
  };
}
export const Claim = {
  typeUrl: "/OmniFlix.itc.v1.Claim",
  encode(message: Claim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.interaction !== 0) {
      writer.uint32(32).int32(message.interaction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Claim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.nftId = reader.string();
          break;
        case 4:
          message.interaction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<Claim>, I>>(object: I): Claim {
    const message = createBaseClaim();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    message.address = object.address ?? "";
    message.nftId = object.nftId ?? "";
    message.interaction = object.interaction ?? 0;
    return message;
  },
  fromAmino(object: ClaimAmino): Claim {
    const message = createBaseClaim();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = object.interaction;
    }
    return message;
  },
  toAmino(message: Claim): ClaimAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.interaction = message.interaction === 0 ? undefined : message.interaction;
    return obj;
  },
  fromAminoMsg(object: ClaimAminoMsg): Claim {
    return Claim.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimProtoMsg): Claim {
    return Claim.decode(message.value);
  },
  toProto(message: Claim): Uint8Array {
    return Claim.encode(message).finish();
  },
  toProtoMsg(message: Claim): ClaimProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.Claim",
      value: Claim.encode(message).finish(),
    };
  },
};
