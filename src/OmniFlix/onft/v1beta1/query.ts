//@ts-nocheck
/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Collection, CollectionAmino, Denom, DenomAmino, ONFT, ONFTAmino, Owner, OwnerAmino } from "./onft";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.onft.v1beta1";
export interface QueryCollectionRequest {
  denomId: string;
  pagination?: PageRequest;
}
export interface QueryCollectionRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest";
  value: Uint8Array;
}
export interface QueryCollectionRequestAmino {
  denom_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryCollectionRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryCollectionRequest";
  value: QueryCollectionRequestAmino;
}
export interface QueryCollectionResponse {
  collection?: Collection;
  pagination?: PageResponse;
}
export interface QueryCollectionResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse";
  value: Uint8Array;
}
export interface QueryCollectionResponseAmino {
  collection?: CollectionAmino;
  pagination?: PageResponseAmino;
}
export interface QueryCollectionResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryCollectionResponse";
  value: QueryCollectionResponseAmino;
}
export interface QueryIBCCollectionRequest {
  hash: string;
  pagination?: PageRequest;
}
export interface QueryIBCCollectionRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest";
  value: Uint8Array;
}
export interface QueryIBCCollectionRequestAmino {
  hash?: string;
  pagination?: PageRequestAmino;
}
export interface QueryIBCCollectionRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest";
  value: QueryIBCCollectionRequestAmino;
}
export interface QueryDenomRequest {
  denomId: string;
}
export interface QueryDenomRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest";
  value: Uint8Array;
}
export interface QueryDenomRequestAmino {
  denom_id?: string;
}
export interface QueryDenomRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryDenomRequest";
  value: QueryDenomRequestAmino;
}
export interface QueryDenomResponse {
  denom?: Denom;
}
export interface QueryDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse";
  value: Uint8Array;
}
export interface QueryDenomResponseAmino {
  denom?: DenomAmino;
}
export interface QueryDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryDenomResponse";
  value: QueryDenomResponseAmino;
}
export interface QueryIBCDenomRequest {
  hash: string;
}
export interface QueryIBCDenomRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest";
  value: Uint8Array;
}
export interface QueryIBCDenomRequestAmino {
  hash?: string;
}
export interface QueryIBCDenomRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest";
  value: QueryIBCDenomRequestAmino;
}
export interface QueryDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  owner: string;
}
export interface QueryDenomsRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest";
  value: Uint8Array;
}
export interface QueryDenomsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  owner?: string;
}
export interface QueryDenomsRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryDenomsRequest";
  value: QueryDenomsRequestAmino;
}
export interface QueryDenomsResponse {
  denoms: Denom[];
  pagination?: PageResponse;
}
export interface QueryDenomsResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse";
  value: Uint8Array;
}
export interface QueryDenomsResponseAmino {
  denoms?: DenomAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDenomsResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryDenomsResponse";
  value: QueryDenomsResponseAmino;
}
export interface QueryONFTRequest {
  denomId: string;
  id: string;
}
export interface QueryONFTRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest";
  value: Uint8Array;
}
export interface QueryONFTRequestAmino {
  denom_id?: string;
  id?: string;
}
export interface QueryONFTRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryONFTRequest";
  value: QueryONFTRequestAmino;
}
export interface QueryONFTResponse {
  onft?: ONFT;
}
export interface QueryONFTResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse";
  value: Uint8Array;
}
export interface QueryONFTResponseAmino {
  onft?: ONFTAmino;
}
export interface QueryONFTResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryONFTResponse";
  value: QueryONFTResponseAmino;
}
export interface QueryIBCDenomONFTRequest {
  hash: string;
  id: string;
}
export interface QueryIBCDenomONFTRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest";
  value: Uint8Array;
}
export interface QueryIBCDenomONFTRequestAmino {
  hash?: string;
  id?: string;
}
export interface QueryIBCDenomONFTRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest";
  value: QueryIBCDenomONFTRequestAmino;
}
export interface QueryOwnerONFTsRequest {
  denomId: string;
  owner: string;
  pagination?: PageRequest;
}
export interface QueryOwnerONFTsRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest";
  value: Uint8Array;
}
export interface QueryOwnerONFTsRequestAmino {
  denom_id?: string;
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOwnerONFTsRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest";
  value: QueryOwnerONFTsRequestAmino;
}
export interface QueryOwnerONFTsResponse {
  owner?: Owner;
  pagination?: PageResponse;
}
export interface QueryOwnerONFTsResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse";
  value: Uint8Array;
}
export interface QueryOwnerONFTsResponseAmino {
  owner?: OwnerAmino;
  pagination?: PageResponseAmino;
}
export interface QueryOwnerONFTsResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse";
  value: QueryOwnerONFTsResponseAmino;
}
export interface QueryOwnerIBCDenomONFTsRequest {
  hash: string;
  owner: string;
  pagination?: PageRequest;
}
export interface QueryOwnerIBCDenomONFTsRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest";
  value: Uint8Array;
}
export interface QueryOwnerIBCDenomONFTsRequestAmino {
  hash?: string;
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOwnerIBCDenomONFTsRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest";
  value: QueryOwnerIBCDenomONFTsRequestAmino;
}
export interface QuerySupplyRequest {
  denomId: string;
  owner: string;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest";
  value: Uint8Array;
}
export interface QuerySupplyRequestAmino {
  denom_id?: string;
  owner?: string;
}
export interface QuerySupplyRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
export interface QuerySupplyResponse {
  amount: bigint;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse";
  value: Uint8Array;
}
export interface QuerySupplyResponseAmino {
  amount?: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
export interface QueryIBCDenomSupplyRequest {
  hash: string;
  owner: string;
}
export interface QueryIBCDenomSupplyRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest";
  value: Uint8Array;
}
export interface QueryIBCDenomSupplyRequestAmino {
  hash?: string;
  owner?: string;
}
export interface QueryIBCDenomSupplyRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest";
  value: QueryIBCDenomSupplyRequestAmino;
}
export interface OwnerONFTCollection {
  denom: Denom;
  onfts: ONFT[];
}
export interface OwnerONFTCollectionProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection";
  value: Uint8Array;
}
export interface OwnerONFTCollectionAmino {
  denom?: DenomAmino;
  onfts?: ONFTAmino[];
}
export interface OwnerONFTCollectionAminoMsg {
  type: "/OmniFlix.onft.v1beta1.OwnerONFTCollection";
  value: OwnerONFTCollectionAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return {
    denomId: "",
    pagination: undefined,
  };
}
export const QueryCollectionRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest",
  encode(message: QueryCollectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryCollectionRequest>, I>>(object: I): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.denomId = object.denomId ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryCollectionRequestAmino): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCollectionRequest): QueryCollectionRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionRequestAminoMsg): QueryCollectionRequest {
    return QueryCollectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionRequestProtoMsg): QueryCollectionRequest {
    return QueryCollectionRequest.decode(message.value);
  },
  toProto(message: QueryCollectionRequest): Uint8Array {
    return QueryCollectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionRequest): QueryCollectionRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest",
      value: QueryCollectionRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return {
    collection: undefined,
    pagination: undefined,
  };
}
export const QueryCollectionResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse",
  encode(message: QueryCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
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
  fromPartial<I extends Exact<DeepPartial<QueryCollectionResponse>, I>>(object: I): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryCollectionResponseAmino): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromAmino(object.collection);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCollectionResponse): QueryCollectionResponseAmino {
    const obj: any = {};
    obj.collection = message.collection ? Collection.toAmino(message.collection) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionResponseAminoMsg): QueryCollectionResponse {
    return QueryCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionResponseProtoMsg): QueryCollectionResponse {
    return QueryCollectionResponse.decode(message.value);
  },
  toProto(message: QueryCollectionResponse): Uint8Array {
    return QueryCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionResponse): QueryCollectionResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse",
      value: QueryCollectionResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryIBCCollectionRequest(): QueryIBCCollectionRequest {
  return {
    hash: "",
    pagination: undefined,
  };
}
export const QueryIBCCollectionRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest",
  encode(message: QueryIBCCollectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCCollectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryIBCCollectionRequest>, I>>(
    object: I,
  ): QueryIBCCollectionRequest {
    const message = createBaseQueryIBCCollectionRequest();
    message.hash = object.hash ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryIBCCollectionRequestAmino): QueryIBCCollectionRequest {
    const message = createBaseQueryIBCCollectionRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIBCCollectionRequest): QueryIBCCollectionRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIBCCollectionRequestAminoMsg): QueryIBCCollectionRequest {
    return QueryIBCCollectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIBCCollectionRequestProtoMsg): QueryIBCCollectionRequest {
    return QueryIBCCollectionRequest.decode(message.value);
  },
  toProto(message: QueryIBCCollectionRequest): Uint8Array {
    return QueryIBCCollectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIBCCollectionRequest): QueryIBCCollectionRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest",
      value: QueryIBCCollectionRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomRequest(): QueryDenomRequest {
  return {
    denomId: "",
  };
}
export const QueryDenomRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest",
  encode(message: QueryDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomRequest>, I>>(object: I): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
  fromAmino(object: QueryDenomRequestAmino): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    return message;
  },
  toAmino(message: QueryDenomRequest): QueryDenomRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRequestAminoMsg): QueryDenomRequest {
    return QueryDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRequestProtoMsg): QueryDenomRequest {
    return QueryDenomRequest.decode(message.value);
  },
  toProto(message: QueryDenomRequest): Uint8Array {
    return QueryDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRequest): QueryDenomRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest",
      value: QueryDenomRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomResponse(): QueryDenomResponse {
  return {
    denom: undefined,
  };
}
export const QueryDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse",
  encode(message: QueryDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomResponse>, I>>(object: I): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    }
    return message;
  },
  fromAmino(object: QueryDenomResponseAmino): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromAmino(object.denom);
    }
    return message;
  },
  toAmino(message: QueryDenomResponse): QueryDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomResponseAminoMsg): QueryDenomResponse {
    return QueryDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomResponseProtoMsg): QueryDenomResponse {
    return QueryDenomResponse.decode(message.value);
  },
  toProto(message: QueryDenomResponse): Uint8Array {
    return QueryDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomResponse): QueryDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse",
      value: QueryDenomResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryIBCDenomRequest(): QueryIBCDenomRequest {
  return {
    hash: "",
  };
}
export const QueryIBCDenomRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest",
  encode(message: QueryIBCDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCDenomRequest>, I>>(object: I): QueryIBCDenomRequest {
    const message = createBaseQueryIBCDenomRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryIBCDenomRequestAmino): QueryIBCDenomRequest {
    const message = createBaseQueryIBCDenomRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: QueryIBCDenomRequest): QueryIBCDenomRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryIBCDenomRequestAminoMsg): QueryIBCDenomRequest {
    return QueryIBCDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIBCDenomRequestProtoMsg): QueryIBCDenomRequest {
    return QueryIBCDenomRequest.decode(message.value);
  },
  toProto(message: QueryIBCDenomRequest): Uint8Array {
    return QueryIBCDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIBCDenomRequest): QueryIBCDenomRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest",
      value: QueryIBCDenomRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return {
    pagination: undefined,
    owner: "",
  };
}
export const QueryDenomsRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest",
  encode(message: QueryDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsRequest>, I>>(object: I): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryDenomsRequestAmino): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryDenomsRequest): QueryDenomsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsRequestAminoMsg): QueryDenomsRequest {
    return QueryDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsRequestProtoMsg): QueryDenomsRequest {
    return QueryDenomsRequest.decode(message.value);
  },
  toProto(message: QueryDenomsRequest): Uint8Array {
    return QueryDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsRequest): QueryDenomsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest",
      value: QueryDenomsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return {
    denoms: [],
    pagination: undefined,
  };
}
export const QueryDenomsResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse",
  encode(message: QueryDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryDenomsResponse>, I>>(object: I): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map((e) => Denom.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryDenomsResponseAmino): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map((e) => Denom.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomsResponse): QueryDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => (e ? Denom.toAmino(e) : undefined));
    } else {
      obj.denoms = message.denoms;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsResponseAminoMsg): QueryDenomsResponse {
    return QueryDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsResponseProtoMsg): QueryDenomsResponse {
    return QueryDenomsResponse.decode(message.value);
  },
  toProto(message: QueryDenomsResponse): Uint8Array {
    return QueryDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsResponse): QueryDenomsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse",
      value: QueryDenomsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryONFTRequest(): QueryONFTRequest {
  return {
    denomId: "",
    id: "",
  };
}
export const QueryONFTRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest",
  encode(message: QueryONFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryONFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryONFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryONFTRequest>, I>>(object: I): QueryONFTRequest {
    const message = createBaseQueryONFTRequest();
    message.denomId = object.denomId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryONFTRequestAmino): QueryONFTRequest {
    const message = createBaseQueryONFTRequest();
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryONFTRequest): QueryONFTRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryONFTRequestAminoMsg): QueryONFTRequest {
    return QueryONFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryONFTRequestProtoMsg): QueryONFTRequest {
    return QueryONFTRequest.decode(message.value);
  },
  toProto(message: QueryONFTRequest): Uint8Array {
    return QueryONFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryONFTRequest): QueryONFTRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest",
      value: QueryONFTRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryONFTResponse(): QueryONFTResponse {
  return {
    onft: undefined,
  };
}
export const QueryONFTResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse",
  encode(message: QueryONFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.onft !== undefined) {
      ONFT.encode(message.onft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryONFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onft = ONFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryONFTResponse>, I>>(object: I): QueryONFTResponse {
    const message = createBaseQueryONFTResponse();
    if (object.onft !== undefined && object.onft !== null) {
      message.onft = ONFT.fromPartial(object.onft);
    }
    return message;
  },
  fromAmino(object: QueryONFTResponseAmino): QueryONFTResponse {
    const message = createBaseQueryONFTResponse();
    if (object.onft !== undefined && object.onft !== null) {
      message.onft = ONFT.fromAmino(object.onft);
    }
    return message;
  },
  toAmino(message: QueryONFTResponse): QueryONFTResponseAmino {
    const obj: any = {};
    obj.onft = message.onft ? ONFT.toAmino(message.onft) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryONFTResponseAminoMsg): QueryONFTResponse {
    return QueryONFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryONFTResponseProtoMsg): QueryONFTResponse {
    return QueryONFTResponse.decode(message.value);
  },
  toProto(message: QueryONFTResponse): Uint8Array {
    return QueryONFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryONFTResponse): QueryONFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse",
      value: QueryONFTResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryIBCDenomONFTRequest(): QueryIBCDenomONFTRequest {
  return {
    hash: "",
    id: "",
  };
}
export const QueryIBCDenomONFTRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest",
  encode(message: QueryIBCDenomONFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCDenomONFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCDenomONFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCDenomONFTRequest>, I>>(
    object: I,
  ): QueryIBCDenomONFTRequest {
    const message = createBaseQueryIBCDenomONFTRequest();
    message.hash = object.hash ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryIBCDenomONFTRequestAmino): QueryIBCDenomONFTRequest {
    const message = createBaseQueryIBCDenomONFTRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryIBCDenomONFTRequest): QueryIBCDenomONFTRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryIBCDenomONFTRequestAminoMsg): QueryIBCDenomONFTRequest {
    return QueryIBCDenomONFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIBCDenomONFTRequestProtoMsg): QueryIBCDenomONFTRequest {
    return QueryIBCDenomONFTRequest.decode(message.value);
  },
  toProto(message: QueryIBCDenomONFTRequest): Uint8Array {
    return QueryIBCDenomONFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIBCDenomONFTRequest): QueryIBCDenomONFTRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest",
      value: QueryIBCDenomONFTRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryOwnerONFTsRequest(): QueryOwnerONFTsRequest {
  return {
    denomId: "",
    owner: "",
    pagination: undefined,
  };
}
export const QueryOwnerONFTsRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest",
  encode(message: QueryOwnerONFTsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerONFTsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerONFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryOwnerONFTsRequest>, I>>(object: I): QueryOwnerONFTsRequest {
    const message = createBaseQueryOwnerONFTsRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryOwnerONFTsRequestAmino): QueryOwnerONFTsRequest {
    const message = createBaseQueryOwnerONFTsRequest();
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOwnerONFTsRequest): QueryOwnerONFTsRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerONFTsRequestAminoMsg): QueryOwnerONFTsRequest {
    return QueryOwnerONFTsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerONFTsRequestProtoMsg): QueryOwnerONFTsRequest {
    return QueryOwnerONFTsRequest.decode(message.value);
  },
  toProto(message: QueryOwnerONFTsRequest): Uint8Array {
    return QueryOwnerONFTsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerONFTsRequest): QueryOwnerONFTsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest",
      value: QueryOwnerONFTsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryOwnerONFTsResponse(): QueryOwnerONFTsResponse {
  return {
    owner: undefined,
    pagination: undefined,
  };
}
export const QueryOwnerONFTsResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse",
  encode(message: QueryOwnerONFTsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerONFTsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerONFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = Owner.decode(reader, reader.uint32());
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
  fromPartial<I extends Exact<DeepPartial<QueryOwnerONFTsResponse>, I>>(object: I): QueryOwnerONFTsResponse {
    const message = createBaseQueryOwnerONFTsResponse();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromPartial(object.owner);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryOwnerONFTsResponseAmino): QueryOwnerONFTsResponse {
    const message = createBaseQueryOwnerONFTsResponse();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromAmino(object.owner);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOwnerONFTsResponse): QueryOwnerONFTsResponseAmino {
    const obj: any = {};
    obj.owner = message.owner ? Owner.toAmino(message.owner) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerONFTsResponseAminoMsg): QueryOwnerONFTsResponse {
    return QueryOwnerONFTsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerONFTsResponseProtoMsg): QueryOwnerONFTsResponse {
    return QueryOwnerONFTsResponse.decode(message.value);
  },
  toProto(message: QueryOwnerONFTsResponse): Uint8Array {
    return QueryOwnerONFTsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerONFTsResponse): QueryOwnerONFTsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse",
      value: QueryOwnerONFTsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryOwnerIBCDenomONFTsRequest(): QueryOwnerIBCDenomONFTsRequest {
  return {
    hash: "",
    owner: "",
    pagination: undefined,
  };
}
export const QueryOwnerIBCDenomONFTsRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest",
  encode(
    message: QueryOwnerIBCDenomONFTsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerIBCDenomONFTsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerIBCDenomONFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.owner = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryOwnerIBCDenomONFTsRequest>, I>>(
    object: I,
  ): QueryOwnerIBCDenomONFTsRequest {
    const message = createBaseQueryOwnerIBCDenomONFTsRequest();
    message.hash = object.hash ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryOwnerIBCDenomONFTsRequestAmino): QueryOwnerIBCDenomONFTsRequest {
    const message = createBaseQueryOwnerIBCDenomONFTsRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOwnerIBCDenomONFTsRequest): QueryOwnerIBCDenomONFTsRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerIBCDenomONFTsRequestAminoMsg): QueryOwnerIBCDenomONFTsRequest {
    return QueryOwnerIBCDenomONFTsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerIBCDenomONFTsRequestProtoMsg): QueryOwnerIBCDenomONFTsRequest {
    return QueryOwnerIBCDenomONFTsRequest.decode(message.value);
  },
  toProto(message: QueryOwnerIBCDenomONFTsRequest): Uint8Array {
    return QueryOwnerIBCDenomONFTsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerIBCDenomONFTsRequest): QueryOwnerIBCDenomONFTsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest",
      value: QueryOwnerIBCDenomONFTsRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    denomId: "",
    owner: "",
  };
}
export const QuerySupplyRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest",
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(object: I): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: BigInt(0),
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(object: I): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    return message;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryIBCDenomSupplyRequest(): QueryIBCDenomSupplyRequest {
  return {
    hash: "",
    owner: "",
  };
}
export const QueryIBCDenomSupplyRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest",
  encode(message: QueryIBCDenomSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIBCDenomSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCDenomSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCDenomSupplyRequest>, I>>(
    object: I,
  ): QueryIBCDenomSupplyRequest {
    const message = createBaseQueryIBCDenomSupplyRequest();
    message.hash = object.hash ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryIBCDenomSupplyRequestAmino): QueryIBCDenomSupplyRequest {
    const message = createBaseQueryIBCDenomSupplyRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryIBCDenomSupplyRequest): QueryIBCDenomSupplyRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryIBCDenomSupplyRequestAminoMsg): QueryIBCDenomSupplyRequest {
    return QueryIBCDenomSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIBCDenomSupplyRequestProtoMsg): QueryIBCDenomSupplyRequest {
    return QueryIBCDenomSupplyRequest.decode(message.value);
  },
  toProto(message: QueryIBCDenomSupplyRequest): Uint8Array {
    return QueryIBCDenomSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIBCDenomSupplyRequest): QueryIBCDenomSupplyRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest",
      value: QueryIBCDenomSupplyRequest.encode(message).finish(),
    };
  },
};
function createBaseOwnerONFTCollection(): OwnerONFTCollection {
  return {
    denom: Denom.fromPartial({}),
    onfts: [],
  };
}
export const OwnerONFTCollection = {
  typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection",
  encode(message: OwnerONFTCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.onfts) {
      ONFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OwnerONFTCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerONFTCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.onfts.push(ONFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<OwnerONFTCollection>, I>>(object: I): OwnerONFTCollection {
    const message = createBaseOwnerONFTCollection();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    }
    message.onfts = object.onfts?.map((e) => ONFT.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OwnerONFTCollectionAmino): OwnerONFTCollection {
    const message = createBaseOwnerONFTCollection();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromAmino(object.denom);
    }
    message.onfts = object.onfts?.map((e) => ONFT.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OwnerONFTCollection): OwnerONFTCollectionAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    if (message.onfts) {
      obj.onfts = message.onfts.map((e) => (e ? ONFT.toAmino(e) : undefined));
    } else {
      obj.onfts = message.onfts;
    }
    return obj;
  },
  fromAminoMsg(object: OwnerONFTCollectionAminoMsg): OwnerONFTCollection {
    return OwnerONFTCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerONFTCollectionProtoMsg): OwnerONFTCollection {
    return OwnerONFTCollection.decode(message.value);
  },
  toProto(message: OwnerONFTCollection): Uint8Array {
    return OwnerONFTCollection.encode(message).finish();
  },
  toProtoMsg(message: OwnerONFTCollection): OwnerONFTCollectionProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection",
      value: OwnerONFTCollection.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest",
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
      typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest",
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
  typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse",
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
      typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
export interface Query {
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  IBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse>;
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  IBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse>;
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  ONFT(request: QueryONFTRequest): Promise<QueryONFTResponse>;
  IBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse>;
  OwnerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse>;
  OwnerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse>;
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  IBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse>;
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Collection = this.Collection.bind(this);
    this.IBCCollection = this.IBCCollection.bind(this);
    this.Denom = this.Denom.bind(this);
    this.IBCDenom = this.IBCDenom.bind(this);
    this.Denoms = this.Denoms.bind(this);
    this.ONFT = this.ONFT.bind(this);
    this.IBCDenomONFT = this.IBCDenomONFT.bind(this);
    this.OwnerONFTs = this.OwnerONFTs.bind(this);
    this.OwnerIBCDenomONFTs = this.OwnerIBCDenomONFTs.bind(this);
    this.Supply = this.Supply.bind(this);
    this.IBCDenomSupply = this.IBCDenomSupply.bind(this);
    this.Params = this.Params.bind(this);
  }
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Collection", data);
    return promise.then((data) => QueryCollectionResponse.decode(new BinaryReader(data)));
  }
  IBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryIBCCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCCollection", data);
    return promise.then((data) => QueryCollectionResponse.decode(new BinaryReader(data)));
  }
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Denom", data);
    return promise.then((data) => QueryDenomResponse.decode(new BinaryReader(data)));
  }
  IBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryIBCDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenom", data);
    return promise.then((data) => QueryDenomResponse.decode(new BinaryReader(data)));
  }
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Denoms", data);
    return promise.then((data) => QueryDenomsResponse.decode(new BinaryReader(data)));
  }
  ONFT(request: QueryONFTRequest): Promise<QueryONFTResponse> {
    const data = QueryONFTRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "ONFT", data);
    return promise.then((data) => QueryONFTResponse.decode(new BinaryReader(data)));
  }
  IBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse> {
    const data = QueryIBCDenomONFTRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenomONFT", data);
    return promise.then((data) => QueryONFTResponse.decode(new BinaryReader(data)));
  }
  OwnerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse> {
    const data = QueryOwnerONFTsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "OwnerONFTs", data);
    return promise.then((data) => QueryOwnerONFTsResponse.decode(new BinaryReader(data)));
  }
  OwnerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse> {
    const data = QueryOwnerIBCDenomONFTsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "OwnerIBCDenomONFTs", data);
    return promise.then((data) => QueryOwnerONFTsResponse.decode(new BinaryReader(data)));
  }
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Supply", data);
    return promise.then((data) => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  IBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse> {
    const data = QueryIBCDenomSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenomSupply", data);
    return promise.then((data) => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
