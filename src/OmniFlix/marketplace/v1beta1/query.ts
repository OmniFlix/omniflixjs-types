//@ts-nocheck
/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { AuctionStatus, AuctionListing, AuctionListingAmino, Bid, BidAmino } from "./auction";
import { Params, ParamsAmino } from "./params";
import { Listing, ListingAmino } from "./listing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryListingsRequest {
  owner: string;
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryListingsRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest";
  value: Uint8Array;
}
export interface QueryListingsRequestAmino {
  owner?: string;
  price_denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListingsRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest";
  value: QueryListingsRequestAmino;
}
export interface QueryListingsResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse";
  value: Uint8Array;
}
export interface QueryListingsResponseAmino {
  listings?: ListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListingsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse";
  value: QueryListingsResponseAmino;
}
export interface QueryListingRequest {
  id: string;
}
export interface QueryListingRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest";
  value: Uint8Array;
}
export interface QueryListingRequestAmino {
  id?: string;
}
export interface QueryListingRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingRequest";
  value: QueryListingRequestAmino;
}
export interface QueryListingResponse {
  listing?: Listing;
}
export interface QueryListingResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse";
  value: Uint8Array;
}
export interface QueryListingResponseAmino {
  listing?: ListingAmino;
}
export interface QueryListingResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingResponse";
  value: QueryListingResponseAmino;
}
export interface QueryListingsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryListingsByOwnerRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest";
  value: Uint8Array;
}
export interface QueryListingsByOwnerRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListingsByOwnerRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest";
  value: QueryListingsByOwnerRequestAmino;
}
export interface QueryListingsByOwnerResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsByOwnerResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse";
  value: Uint8Array;
}
export interface QueryListingsByOwnerResponseAmino {
  listings?: ListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListingsByOwnerResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse";
  value: QueryListingsByOwnerResponseAmino;
}
export interface QueryListingByNFTIDRequest {
  nftId: string;
}
export interface QueryListingByNFTIDRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest";
  value: Uint8Array;
}
export interface QueryListingByNFTIDRequestAmino {
  nft_id?: string;
}
export interface QueryListingByNFTIDRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest";
  value: QueryListingByNFTIDRequestAmino;
}
export interface QueryListingsByPriceDenomRequest {
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryListingsByPriceDenomRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest";
  value: Uint8Array;
}
export interface QueryListingsByPriceDenomRequestAmino {
  price_denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListingsByPriceDenomRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest";
  value: QueryListingsByPriceDenomRequestAmino;
}
export interface QueryListingsByPriceDenomResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsByPriceDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse";
  value: Uint8Array;
}
export interface QueryListingsByPriceDenomResponseAmino {
  listings?: ListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListingsByPriceDenomResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse";
  value: QueryListingsByPriceDenomResponseAmino;
}
export interface QueryAuctionsRequest {
  status: AuctionStatus;
  owner: string;
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryAuctionsRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest";
  value: Uint8Array;
}
export interface QueryAuctionsRequestAmino {
  status?: AuctionStatus;
  owner?: string;
  price_denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest";
  value: QueryAuctionsRequestAmino;
}
export interface QueryAuctionsResponse {
  auctions: AuctionListing[];
  pagination?: PageResponse;
}
export interface QueryAuctionsResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse";
  value: Uint8Array;
}
export interface QueryAuctionsResponseAmino {
  auctions?: AuctionListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAuctionsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse";
  value: QueryAuctionsResponseAmino;
}
export interface QueryAuctionRequest {
  id: bigint;
}
export interface QueryAuctionRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest";
  value: Uint8Array;
}
export interface QueryAuctionRequestAmino {
  id?: string;
}
export interface QueryAuctionRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest";
  value: QueryAuctionRequestAmino;
}
export interface QueryAuctionResponse {
  auction?: AuctionListing;
}
export interface QueryAuctionResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse";
  value: Uint8Array;
}
export interface QueryAuctionResponseAmino {
  auction?: AuctionListingAmino;
}
export interface QueryAuctionResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse";
  value: QueryAuctionResponseAmino;
}
export interface QueryAuctionsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryAuctionsByOwnerRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest";
  value: Uint8Array;
}
export interface QueryAuctionsByOwnerRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsByOwnerRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest";
  value: QueryAuctionsByOwnerRequestAmino;
}
export interface QueryAuctionByNFTIDRequest {
  nftId: string;
}
export interface QueryAuctionByNFTIDRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest";
  value: Uint8Array;
}
export interface QueryAuctionByNFTIDRequestAmino {
  nft_id?: string;
}
export interface QueryAuctionByNFTIDRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest";
  value: QueryAuctionByNFTIDRequestAmino;
}
export interface QueryAuctionsByPriceDenomRequest {
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryAuctionsByPriceDenomRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest";
  value: Uint8Array;
}
export interface QueryAuctionsByPriceDenomRequestAmino {
  price_denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsByPriceDenomRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest";
  value: QueryAuctionsByPriceDenomRequestAmino;
}
export interface QueryBidsRequest {
  bidder: string;
  pagination?: PageRequest;
}
export interface QueryBidsRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest";
  value: Uint8Array;
}
export interface QueryBidsRequestAmino {
  bidder?: string;
  pagination?: PageRequestAmino;
}
export interface QueryBidsRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest";
  value: QueryBidsRequestAmino;
}
export interface QueryBidsResponse {
  bids: Bid[];
  pagination?: PageResponse;
}
export interface QueryBidsResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse";
  value: Uint8Array;
}
export interface QueryBidsResponseAmino {
  bids?: BidAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBidsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse";
  value: QueryBidsResponseAmino;
}
export interface QueryBidRequest {
  id: bigint;
}
export interface QueryBidRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest";
  value: Uint8Array;
}
export interface QueryBidRequestAmino {
  id?: string;
}
export interface QueryBidRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryBidRequest";
  value: QueryBidRequestAmino;
}
export interface QueryBidResponse {
  bid?: Bid;
}
export interface QueryBidResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse";
  value: Uint8Array;
}
export interface QueryBidResponseAmino {
  bid?: BidAmino;
}
export interface QueryBidResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryBidResponse";
  value: QueryBidResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest",
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest",
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
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse",
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryListingsRequest(): QueryListingsRequest {
  return {
    owner: "",
    priceDenom: "",
    pagination: undefined,
  };
}
export const QueryListingsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest",
  encode(message: QueryListingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.priceDenom = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryListingsRequest>, I>>(object: I): QueryListingsRequest {
    const message = createBaseQueryListingsRequest();
    message.owner = object.owner ?? "";
    message.priceDenom = object.priceDenom ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryListingsRequestAmino): QueryListingsRequest {
    const message = createBaseQueryListingsRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsRequest): QueryListingsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.price_denom = message.priceDenom === "" ? undefined : message.priceDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsRequestAminoMsg): QueryListingsRequest {
    return QueryListingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsRequestProtoMsg): QueryListingsRequest {
    return QueryListingsRequest.decode(message.value);
  },
  toProto(message: QueryListingsRequest): Uint8Array {
    return QueryListingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsRequest): QueryListingsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest",
      value: QueryListingsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryListingsResponse(): QueryListingsResponse {
  return {
    listings: [],
    pagination: undefined,
  };
}
export const QueryListingsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse",
  encode(message: QueryListingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryListingsResponse>, I>>(object: I): QueryListingsResponse {
    const message = createBaseQueryListingsResponse();
    message.listings = object.listings?.map((e) => Listing.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryListingsResponseAmino): QueryListingsResponse {
    const message = createBaseQueryListingsResponse();
    message.listings = object.listings?.map((e) => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsResponse): QueryListingsResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) => (e ? Listing.toAmino(e) : undefined));
    } else {
      obj.listings = message.listings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsResponseAminoMsg): QueryListingsResponse {
    return QueryListingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsResponseProtoMsg): QueryListingsResponse {
    return QueryListingsResponse.decode(message.value);
  },
  toProto(message: QueryListingsResponse): Uint8Array {
    return QueryListingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsResponse): QueryListingsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse",
      value: QueryListingsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryListingRequest(): QueryListingRequest {
  return {
    id: "",
  };
}
export const QueryListingRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest",
  encode(message: QueryListingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingRequest>, I>>(object: I): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryListingRequestAmino): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryListingRequest): QueryListingRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryListingRequestAminoMsg): QueryListingRequest {
    return QueryListingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingRequestProtoMsg): QueryListingRequest {
    return QueryListingRequest.decode(message.value);
  },
  toProto(message: QueryListingRequest): Uint8Array {
    return QueryListingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingRequest): QueryListingRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest",
      value: QueryListingRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryListingResponse(): QueryListingResponse {
  return {
    listing: undefined,
  };
}
export const QueryListingResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse",
  encode(message: QueryListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingResponse>, I>>(object: I): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromPartial(object.listing);
    }
    return message;
  },
  fromAmino(object: QueryListingResponseAmino): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromAmino(object.listing);
    }
    return message;
  },
  toAmino(message: QueryListingResponse): QueryListingResponseAmino {
    const obj: any = {};
    obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingResponseAminoMsg): QueryListingResponse {
    return QueryListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingResponseProtoMsg): QueryListingResponse {
    return QueryListingResponse.decode(message.value);
  },
  toProto(message: QueryListingResponse): Uint8Array {
    return QueryListingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingResponse): QueryListingResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse",
      value: QueryListingResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryListingsByOwnerRequest(): QueryListingsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined,
  };
}
export const QueryListingsByOwnerRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest",
  encode(message: QueryListingsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingsByOwnerRequest>, I>>(
    object: I,
  ): QueryListingsByOwnerRequest {
    const message = createBaseQueryListingsByOwnerRequest();
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryListingsByOwnerRequestAmino): QueryListingsByOwnerRequest {
    const message = createBaseQueryListingsByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByOwnerRequest): QueryListingsByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByOwnerRequestAminoMsg): QueryListingsByOwnerRequest {
    return QueryListingsByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByOwnerRequestProtoMsg): QueryListingsByOwnerRequest {
    return QueryListingsByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryListingsByOwnerRequest): Uint8Array {
    return QueryListingsByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByOwnerRequest): QueryListingsByOwnerRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest",
      value: QueryListingsByOwnerRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryListingsByOwnerResponse(): QueryListingsByOwnerResponse {
  return {
    listings: [],
    pagination: undefined,
  };
}
export const QueryListingsByOwnerResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse",
  encode(message: QueryListingsByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryListingsByOwnerResponse>, I>>(
    object: I,
  ): QueryListingsByOwnerResponse {
    const message = createBaseQueryListingsByOwnerResponse();
    message.listings = object.listings?.map((e) => Listing.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryListingsByOwnerResponseAmino): QueryListingsByOwnerResponse {
    const message = createBaseQueryListingsByOwnerResponse();
    message.listings = object.listings?.map((e) => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByOwnerResponse): QueryListingsByOwnerResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) => (e ? Listing.toAmino(e) : undefined));
    } else {
      obj.listings = message.listings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByOwnerResponseAminoMsg): QueryListingsByOwnerResponse {
    return QueryListingsByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByOwnerResponseProtoMsg): QueryListingsByOwnerResponse {
    return QueryListingsByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryListingsByOwnerResponse): Uint8Array {
    return QueryListingsByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByOwnerResponse): QueryListingsByOwnerResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse",
      value: QueryListingsByOwnerResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryListingByNFTIDRequest(): QueryListingByNFTIDRequest {
  return {
    nftId: "",
  };
}
export const QueryListingByNFTIDRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest",
  encode(message: QueryListingByNFTIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingByNFTIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingByNFTIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingByNFTIDRequest>, I>>(
    object: I,
  ): QueryListingByNFTIDRequest {
    const message = createBaseQueryListingByNFTIDRequest();
    message.nftId = object.nftId ?? "";
    return message;
  },
  fromAmino(object: QueryListingByNFTIDRequestAmino): QueryListingByNFTIDRequest {
    const message = createBaseQueryListingByNFTIDRequest();
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: QueryListingByNFTIDRequest): QueryListingByNFTIDRequestAmino {
    const obj: any = {};
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    return obj;
  },
  fromAminoMsg(object: QueryListingByNFTIDRequestAminoMsg): QueryListingByNFTIDRequest {
    return QueryListingByNFTIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingByNFTIDRequestProtoMsg): QueryListingByNFTIDRequest {
    return QueryListingByNFTIDRequest.decode(message.value);
  },
  toProto(message: QueryListingByNFTIDRequest): Uint8Array {
    return QueryListingByNFTIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingByNFTIDRequest): QueryListingByNFTIDRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest",
      value: QueryListingByNFTIDRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryListingsByPriceDenomRequest(): QueryListingsByPriceDenomRequest {
  return {
    priceDenom: "",
    pagination: undefined,
  };
}
export const QueryListingsByPriceDenomRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest",
  encode(
    message: QueryListingsByPriceDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsByPriceDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByPriceDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListingsByPriceDenomRequest>, I>>(
    object: I,
  ): QueryListingsByPriceDenomRequest {
    const message = createBaseQueryListingsByPriceDenomRequest();
    message.priceDenom = object.priceDenom ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryListingsByPriceDenomRequestAmino): QueryListingsByPriceDenomRequest {
    const message = createBaseQueryListingsByPriceDenomRequest();
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByPriceDenomRequest): QueryListingsByPriceDenomRequestAmino {
    const obj: any = {};
    obj.price_denom = message.priceDenom === "" ? undefined : message.priceDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByPriceDenomRequestAminoMsg): QueryListingsByPriceDenomRequest {
    return QueryListingsByPriceDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByPriceDenomRequestProtoMsg): QueryListingsByPriceDenomRequest {
    return QueryListingsByPriceDenomRequest.decode(message.value);
  },
  toProto(message: QueryListingsByPriceDenomRequest): Uint8Array {
    return QueryListingsByPriceDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByPriceDenomRequest): QueryListingsByPriceDenomRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest",
      value: QueryListingsByPriceDenomRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryListingsByPriceDenomResponse(): QueryListingsByPriceDenomResponse {
  return {
    listings: [],
    pagination: undefined,
  };
}
export const QueryListingsByPriceDenomResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse",
  encode(
    message: QueryListingsByPriceDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsByPriceDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByPriceDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryListingsByPriceDenomResponse>, I>>(
    object: I,
  ): QueryListingsByPriceDenomResponse {
    const message = createBaseQueryListingsByPriceDenomResponse();
    message.listings = object.listings?.map((e) => Listing.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryListingsByPriceDenomResponseAmino): QueryListingsByPriceDenomResponse {
    const message = createBaseQueryListingsByPriceDenomResponse();
    message.listings = object.listings?.map((e) => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByPriceDenomResponse): QueryListingsByPriceDenomResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) => (e ? Listing.toAmino(e) : undefined));
    } else {
      obj.listings = message.listings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByPriceDenomResponseAminoMsg): QueryListingsByPriceDenomResponse {
    return QueryListingsByPriceDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByPriceDenomResponseProtoMsg): QueryListingsByPriceDenomResponse {
    return QueryListingsByPriceDenomResponse.decode(message.value);
  },
  toProto(message: QueryListingsByPriceDenomResponse): Uint8Array {
    return QueryListingsByPriceDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByPriceDenomResponse): QueryListingsByPriceDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse",
      value: QueryListingsByPriceDenomResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    status: 0,
    owner: "",
    priceDenom: "",
    pagination: undefined,
  };
}
export const QueryAuctionsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest",
  encode(message: QueryAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.priceDenom = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsRequest>, I>>(object: I): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.status = object.status ?? 0;
    message.owner = object.owner ?? "";
    message.priceDenom = object.priceDenom ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAuctionsRequestAmino): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsRequest): QueryAuctionsRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.price_denom = message.priceDenom === "" ? undefined : message.priceDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsRequestAminoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsRequestProtoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsRequest): Uint8Array {
    return QueryAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsRequest): QueryAuctionsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest",
      value: QueryAuctionsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
    pagination: undefined,
  };
}
export const QueryAuctionsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse",
  encode(message: QueryAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      AuctionListing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(AuctionListing.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsResponse>, I>>(object: I): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map((e) => AuctionListing.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAuctionsResponseAmino): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map((e) => AuctionListing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsResponse): QueryAuctionsResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) => (e ? AuctionListing.toAmino(e) : undefined));
    } else {
      obj.auctions = message.auctions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsResponseAminoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsResponseProtoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.decode(message.value);
  },
  toProto(message: QueryAuctionsResponse): Uint8Array {
    return QueryAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsResponse): QueryAuctionsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse",
      value: QueryAuctionsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    id: BigInt(0),
  };
}
export const QueryAuctionRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest",
  encode(message: QueryAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionRequest>, I>>(object: I): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
  fromAmino(object: QueryAuctionRequestAmino): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryAuctionRequest): QueryAuctionRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionRequestAminoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionRequestProtoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.decode(message.value);
  },
  toProto(message: QueryAuctionRequest): Uint8Array {
    return QueryAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionRequest): QueryAuctionRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest",
      value: QueryAuctionRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    auction: undefined,
  };
}
export const QueryAuctionResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse",
  encode(message: QueryAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      AuctionListing.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = AuctionListing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionResponse>, I>>(object: I): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = AuctionListing.fromPartial(object.auction);
    }
    return message;
  },
  fromAmino(object: QueryAuctionResponseAmino): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = AuctionListing.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: QueryAuctionResponse): QueryAuctionResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? AuctionListing.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionResponseAminoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionResponseProtoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.decode(message.value);
  },
  toProto(message: QueryAuctionResponse): Uint8Array {
    return QueryAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionResponse): QueryAuctionResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse",
      value: QueryAuctionResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAuctionsByOwnerRequest(): QueryAuctionsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined,
  };
}
export const QueryAuctionsByOwnerRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest",
  encode(message: QueryAuctionsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsByOwnerRequest>, I>>(
    object: I,
  ): QueryAuctionsByOwnerRequest {
    const message = createBaseQueryAuctionsByOwnerRequest();
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAuctionsByOwnerRequestAmino): QueryAuctionsByOwnerRequest {
    const message = createBaseQueryAuctionsByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsByOwnerRequest): QueryAuctionsByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsByOwnerRequestAminoMsg): QueryAuctionsByOwnerRequest {
    return QueryAuctionsByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsByOwnerRequestProtoMsg): QueryAuctionsByOwnerRequest {
    return QueryAuctionsByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsByOwnerRequest): Uint8Array {
    return QueryAuctionsByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsByOwnerRequest): QueryAuctionsByOwnerRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest",
      value: QueryAuctionsByOwnerRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAuctionByNFTIDRequest(): QueryAuctionByNFTIDRequest {
  return {
    nftId: "",
  };
}
export const QueryAuctionByNFTIDRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest",
  encode(message: QueryAuctionByNFTIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionByNFTIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByNFTIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionByNFTIDRequest>, I>>(
    object: I,
  ): QueryAuctionByNFTIDRequest {
    const message = createBaseQueryAuctionByNFTIDRequest();
    message.nftId = object.nftId ?? "";
    return message;
  },
  fromAmino(object: QueryAuctionByNFTIDRequestAmino): QueryAuctionByNFTIDRequest {
    const message = createBaseQueryAuctionByNFTIDRequest();
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: QueryAuctionByNFTIDRequest): QueryAuctionByNFTIDRequestAmino {
    const obj: any = {};
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionByNFTIDRequestAminoMsg): QueryAuctionByNFTIDRequest {
    return QueryAuctionByNFTIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionByNFTIDRequestProtoMsg): QueryAuctionByNFTIDRequest {
    return QueryAuctionByNFTIDRequest.decode(message.value);
  },
  toProto(message: QueryAuctionByNFTIDRequest): Uint8Array {
    return QueryAuctionByNFTIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionByNFTIDRequest): QueryAuctionByNFTIDRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest",
      value: QueryAuctionByNFTIDRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAuctionsByPriceDenomRequest(): QueryAuctionsByPriceDenomRequest {
  return {
    priceDenom: "",
    pagination: undefined,
  };
}
export const QueryAuctionsByPriceDenomRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest",
  encode(
    message: QueryAuctionsByPriceDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsByPriceDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsByPriceDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsByPriceDenomRequest>, I>>(
    object: I,
  ): QueryAuctionsByPriceDenomRequest {
    const message = createBaseQueryAuctionsByPriceDenomRequest();
    message.priceDenom = object.priceDenom ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAuctionsByPriceDenomRequestAmino): QueryAuctionsByPriceDenomRequest {
    const message = createBaseQueryAuctionsByPriceDenomRequest();
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsByPriceDenomRequest): QueryAuctionsByPriceDenomRequestAmino {
    const obj: any = {};
    obj.price_denom = message.priceDenom === "" ? undefined : message.priceDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsByPriceDenomRequestAminoMsg): QueryAuctionsByPriceDenomRequest {
    return QueryAuctionsByPriceDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsByPriceDenomRequestProtoMsg): QueryAuctionsByPriceDenomRequest {
    return QueryAuctionsByPriceDenomRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsByPriceDenomRequest): Uint8Array {
    return QueryAuctionsByPriceDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsByPriceDenomRequest): QueryAuctionsByPriceDenomRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest",
      value: QueryAuctionsByPriceDenomRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    bidder: "",
    pagination: undefined,
  };
}
export const QueryBidsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest",
  encode(message: QueryBidsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidsRequest>, I>>(object: I): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    message.bidder = object.bidder ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsRequest): QueryBidsRequestAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsRequestAminoMsg): QueryBidsRequest {
    return QueryBidsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidsRequestProtoMsg): QueryBidsRequest {
    return QueryBidsRequest.decode(message.value);
  },
  toProto(message: QueryBidsRequest): Uint8Array {
    return QueryBidsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsRequest): QueryBidsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest",
      value: QueryBidsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined,
  };
}
export const QueryBidsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse",
  encode(message: QueryBidsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(Bid.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryBidsResponse>, I>>(object: I): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map((e) => Bid.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map((e) => Bid.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsResponse): QueryBidsResponseAmino {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Bid.toAmino(e) : undefined));
    } else {
      obj.bids = message.bids;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsResponseAminoMsg): QueryBidsResponse {
    return QueryBidsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidsResponseProtoMsg): QueryBidsResponse {
    return QueryBidsResponse.decode(message.value);
  },
  toProto(message: QueryBidsResponse): Uint8Array {
    return QueryBidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsResponse): QueryBidsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse",
      value: QueryBidsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    id: BigInt(0),
  };
}
export const QueryBidRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest",
  encode(message: QueryBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidRequest>, I>>(object: I): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
  fromAmino(object: QueryBidRequestAmino): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryBidRequest): QueryBidRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidRequestAminoMsg): QueryBidRequest {
    return QueryBidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidRequestProtoMsg): QueryBidRequest {
    return QueryBidRequest.decode(message.value);
  },
  toProto(message: QueryBidRequest): Uint8Array {
    return QueryBidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest",
      value: QueryBidRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: undefined,
  };
}
export const QueryBidResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse",
  encode(message: QueryBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidResponse>, I>>(object: I): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromPartial(object.bid);
    }
    return message;
  },
  fromAmino(object: QueryBidResponseAmino): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromAmino(object.bid);
    }
    return message;
  },
  toAmino(message: QueryBidResponse): QueryBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidResponseAminoMsg): QueryBidResponse {
    return QueryBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidResponseProtoMsg): QueryBidResponse {
    return QueryBidResponse.decode(message.value);
  },
  toProto(message: QueryBidResponse): Uint8Array {
    return QueryBidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse",
      value: QueryBidResponse.encode(message).finish(),
    };
  },
};
export interface Query {
  /** Params queries params of the marketplace module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  Listings(request: QueryListingsRequest): Promise<QueryListingsResponse>;
  Listing(request: QueryListingRequest): Promise<QueryListingResponse>;
  ListingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse>;
  ListingsByPriceDenom(request: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponse>;
  ListingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse>;
  /** auction queries */
  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  AuctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse>;
  AuctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse>;
  AuctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse>;
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Listings = this.Listings.bind(this);
    this.Listing = this.Listing.bind(this);
    this.ListingsByOwner = this.ListingsByOwner.bind(this);
    this.ListingsByPriceDenom = this.ListingsByPriceDenom.bind(this);
    this.ListingByNftId = this.ListingByNftId.bind(this);
    this.Auctions = this.Auctions.bind(this);
    this.Auction = this.Auction.bind(this);
    this.AuctionsByOwner = this.AuctionsByOwner.bind(this);
    this.AuctionsByPriceDenom = this.AuctionsByPriceDenom.bind(this);
    this.AuctionByNftId = this.AuctionByNftId.bind(this);
    this.Bids = this.Bids.bind(this);
    this.Bid = this.Bid.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  Listings(request: QueryListingsRequest): Promise<QueryListingsResponse> {
    const data = QueryListingsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Listings", data);
    return promise.then((data) => QueryListingsResponse.decode(new BinaryReader(data)));
  }
  Listing(request: QueryListingRequest): Promise<QueryListingResponse> {
    const data = QueryListingRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Listing", data);
    return promise.then((data) => QueryListingResponse.decode(new BinaryReader(data)));
  }
  ListingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse> {
    const data = QueryListingsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingsByOwner", data);
    return promise.then((data) => QueryListingsByOwnerResponse.decode(new BinaryReader(data)));
  }
  ListingsByPriceDenom(
    request: QueryListingsByPriceDenomRequest,
  ): Promise<QueryListingsByPriceDenomResponse> {
    const data = QueryListingsByPriceDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingsByPriceDenom", data);
    return promise.then((data) => QueryListingsByPriceDenomResponse.decode(new BinaryReader(data)));
  }
  ListingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse> {
    const data = QueryListingByNFTIDRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingByNftId", data);
    return promise.then((data) => QueryListingResponse.decode(new BinaryReader(data)));
  }
  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Auctions", data);
    return promise.then((data) => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Auction", data);
    return promise.then((data) => QueryAuctionResponse.decode(new BinaryReader(data)));
  }
  AuctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionsByOwner", data);
    return promise.then((data) => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  AuctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsByPriceDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionsByPriceDenom", data);
    return promise.then((data) => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  AuctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionByNFTIDRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionByNftId", data);
    return promise.then((data) => QueryAuctionResponse.decode(new BinaryReader(data)));
  }
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Bids", data);
    return promise.then((data) => QueryBidsResponse.decode(new BinaryReader(data)));
  }
  Bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Bid", data);
    return promise.then((data) => QueryBidResponse.decode(new BinaryReader(data)));
  }
}
