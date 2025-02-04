//@ts-nocheck
/* eslint-disable */
import { CampaignStatus, Campaign, CampaignAmino, Claim, ClaimAmino } from "./itc";
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.itc.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/OmniFlix.itc.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/OmniFlix.itc.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryCampaignsRequest is the request type for the Query/Campaigns RPC method. */
export interface QueryCampaignsRequest {
  status: CampaignStatus;
  creator: string;
  pagination?: PageRequest;
}
export interface QueryCampaignsRequestProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest";
  value: Uint8Array;
}
/** QueryCampaignsRequest is the request type for the Query/Campaigns RPC method. */
export interface QueryCampaignsRequestAmino {
  status?: CampaignStatus;
  creator?: string;
  pagination?: PageRequestAmino;
}
export interface QueryCampaignsRequestAminoMsg {
  type: "/OmniFlix.itc.v1.QueryCampaignsRequest";
  value: QueryCampaignsRequestAmino;
}
/**
 * QueryCampaignsResponse is the response type for the Query/Campaigns RPC
 * method.
 */
export interface QueryCampaignsResponse {
  campaigns: Campaign[];
  pagination?: PageResponse;
}
export interface QueryCampaignsResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse";
  value: Uint8Array;
}
/**
 * QueryCampaignsResponse is the response type for the Query/Campaigns RPC
 * method.
 */
export interface QueryCampaignsResponseAmino {
  campaigns?: CampaignAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryCampaignsResponseAminoMsg {
  type: "/OmniFlix.itc.v1.QueryCampaignsResponse";
  value: QueryCampaignsResponseAmino;
}
/** QueryCampaignRequest is the request type for the Query/Campaign RPC method. */
export interface QueryCampaignRequest {
  campaignId: bigint;
}
export interface QueryCampaignRequestProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest";
  value: Uint8Array;
}
/** QueryCampaignRequest is the request type for the Query/Campaign RPC method. */
export interface QueryCampaignRequestAmino {
  campaign_id?: string;
}
export interface QueryCampaignRequestAminoMsg {
  type: "/OmniFlix.itc.v1.QueryCampaignRequest";
  value: QueryCampaignRequestAmino;
}
/** QueryCampaignResponse is the response type for the Query/Campaign RPC method. */
export interface QueryCampaignResponse {
  campaign: Campaign;
}
export interface QueryCampaignResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse";
  value: Uint8Array;
}
/** QueryCampaignResponse is the response type for the Query/Campaign RPC method. */
export interface QueryCampaignResponseAmino {
  Campaign?: CampaignAmino;
}
export interface QueryCampaignResponseAminoMsg {
  type: "/OmniFlix.itc.v1.QueryCampaignResponse";
  value: QueryCampaignResponseAmino;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequest {
  campaignId: bigint;
  address: string;
  pagination?: PageRequest;
}
export interface QueryClaimsRequestProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest";
  value: Uint8Array;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestAmino {
  campaign_id?: string;
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryClaimsRequestAminoMsg {
  type: "/OmniFlix.itc.v1.QueryClaimsRequest";
  value: QueryClaimsRequestAmino;
}
export interface QueryClaimsResponse {
  claims: Claim[];
  pagination?: PageResponse;
}
export interface QueryClaimsResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse";
  value: Uint8Array;
}
export interface QueryClaimsResponseAmino {
  claims?: ClaimAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryClaimsResponseAminoMsg {
  type: "/OmniFlix.itc.v1.QueryClaimsResponse";
  value: QueryClaimsResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCampaignsRequest(): QueryCampaignsRequest {
  return {
    status: 0,
    creator: "",
    pagination: undefined,
  };
}
export const QueryCampaignsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest",
  encode(message: QueryCampaignsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCampaignsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCampaignsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCampaignsRequest>, I>>(object: I): QueryCampaignsRequest {
    const message = createBaseQueryCampaignsRequest();
    message.status = object.status ?? 0;
    message.creator = object.creator ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryCampaignsRequestAmino): QueryCampaignsRequest {
    const message = createBaseQueryCampaignsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCampaignsRequest): QueryCampaignsRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCampaignsRequestAminoMsg): QueryCampaignsRequest {
    return QueryCampaignsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCampaignsRequestProtoMsg): QueryCampaignsRequest {
    return QueryCampaignsRequest.decode(message.value);
  },
  toProto(message: QueryCampaignsRequest): Uint8Array {
    return QueryCampaignsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCampaignsRequest): QueryCampaignsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest",
      value: QueryCampaignsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCampaignsResponse(): QueryCampaignsResponse {
  return {
    campaigns: [],
    pagination: undefined,
  };
}
export const QueryCampaignsResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse",
  encode(message: QueryCampaignsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.campaigns) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCampaignsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCampaignsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaigns.push(Campaign.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCampaignsResponse>, I>>(object: I): QueryCampaignsResponse {
    const message = createBaseQueryCampaignsResponse();
    message.campaigns = object.campaigns?.map((e) => Campaign.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryCampaignsResponseAmino): QueryCampaignsResponse {
    const message = createBaseQueryCampaignsResponse();
    message.campaigns = object.campaigns?.map((e) => Campaign.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCampaignsResponse): QueryCampaignsResponseAmino {
    const obj: any = {};
    if (message.campaigns) {
      obj.campaigns = message.campaigns.map((e) => (e ? Campaign.toAmino(e) : undefined));
    } else {
      obj.campaigns = message.campaigns;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCampaignsResponseAminoMsg): QueryCampaignsResponse {
    return QueryCampaignsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCampaignsResponseProtoMsg): QueryCampaignsResponse {
    return QueryCampaignsResponse.decode(message.value);
  },
  toProto(message: QueryCampaignsResponse): Uint8Array {
    return QueryCampaignsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCampaignsResponse): QueryCampaignsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse",
      value: QueryCampaignsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCampaignRequest(): QueryCampaignRequest {
  return {
    campaignId: BigInt(0),
  };
}
export const QueryCampaignRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest",
  encode(message: QueryCampaignRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCampaignRequest>, I>>(object: I): QueryCampaignRequest {
    const message = createBaseQueryCampaignRequest();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    return message;
  },
  fromAmino(object: QueryCampaignRequestAmino): QueryCampaignRequest {
    const message = createBaseQueryCampaignRequest();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    return message;
  },
  toAmino(message: QueryCampaignRequest): QueryCampaignRequestAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCampaignRequestAminoMsg): QueryCampaignRequest {
    return QueryCampaignRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCampaignRequestProtoMsg): QueryCampaignRequest {
    return QueryCampaignRequest.decode(message.value);
  },
  toProto(message: QueryCampaignRequest): Uint8Array {
    return QueryCampaignRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCampaignRequest): QueryCampaignRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest",
      value: QueryCampaignRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCampaignResponse(): QueryCampaignResponse {
  return {
    campaign: Campaign.fromPartial({}),
  };
}
export const QueryCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse",
  encode(message: QueryCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaign !== undefined) {
      Campaign.encode(message.campaign, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaign = Campaign.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCampaignResponse>, I>>(object: I): QueryCampaignResponse {
    const message = createBaseQueryCampaignResponse();
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromPartial(object.campaign);
    }
    return message;
  },
  fromAmino(object: QueryCampaignResponseAmino): QueryCampaignResponse {
    const message = createBaseQueryCampaignResponse();
    if (object.Campaign !== undefined && object.Campaign !== null) {
      message.campaign = Campaign.fromAmino(object.Campaign);
    }
    return message;
  },
  toAmino(message: QueryCampaignResponse): QueryCampaignResponseAmino {
    const obj: any = {};
    obj.Campaign = message.campaign ? Campaign.toAmino(message.campaign) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCampaignResponseAminoMsg): QueryCampaignResponse {
    return QueryCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCampaignResponseProtoMsg): QueryCampaignResponse {
    return QueryCampaignResponse.decode(message.value);
  },
  toProto(message: QueryCampaignResponse): Uint8Array {
    return QueryCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCampaignResponse): QueryCampaignResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse",
      value: QueryCampaignResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryClaimsRequest(): QueryClaimsRequest {
  return {
    campaignId: BigInt(0),
    address: "",
    pagination: undefined,
  };
}
export const QueryClaimsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest",
  encode(message: QueryClaimsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClaimsRequest>, I>>(object: I): QueryClaimsRequest {
    const message = createBaseQueryClaimsRequest();
    if (object.campaignId !== undefined && object.campaignId !== null) {
      message.campaignId = BigInt(object.campaignId.toString());
    }
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryClaimsRequestAmino): QueryClaimsRequest {
    const message = createBaseQueryClaimsRequest();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClaimsRequest): QueryClaimsRequestAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRequestAminoMsg): QueryClaimsRequest {
    return QueryClaimsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRequestProtoMsg): QueryClaimsRequest {
    return QueryClaimsRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRequest): Uint8Array {
    return QueryClaimsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRequest): QueryClaimsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest",
      value: QueryClaimsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    pagination: undefined,
  };
}
export const QueryClaimsResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse",
  encode(message: QueryClaimsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims.push(Claim.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClaimsResponse>, I>>(object: I): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map((e) => Claim.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryClaimsResponseAmino): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map((e) => Claim.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClaimsResponse): QueryClaimsResponseAmino {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map((e) => (e ? Claim.toAmino(e) : undefined));
    } else {
      obj.claims = message.claims;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsResponseAminoMsg): QueryClaimsResponse {
    return QueryClaimsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsResponseProtoMsg): QueryClaimsResponse {
    return QueryClaimsResponse.decode(message.value);
  },
  toProto(message: QueryClaimsResponse): Uint8Array {
    return QueryClaimsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsResponse): QueryClaimsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse",
      value: QueryClaimsResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  Campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse>;
  Campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse>;
  Claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Campaigns = this.Campaigns.bind(this);
    this.Campaign = this.Campaign.bind(this);
    this.Claims = this.Claims.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  Campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse> {
    const data = QueryCampaignsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Campaigns", data);
    return promise.then((data) => QueryCampaignsResponse.decode(new BinaryReader(data)));
  }
  Campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse> {
    const data = QueryCampaignRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Campaign", data);
    return promise.then((data) => QueryCampaignResponse.decode(new BinaryReader(data)));
  }
  Claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
    const data = QueryClaimsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Claims", data);
    return promise.then((data) => QueryClaimsResponse.decode(new BinaryReader(data)));
  }
}
