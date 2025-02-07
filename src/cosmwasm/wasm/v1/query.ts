//@ts-nocheck
/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  ContractInfo,
  ContractInfoAmino,
  ContractCodeHistoryEntry,
  ContractCodeHistoryEntryAmino,
  Model,
  ModelAmino,
  AccessConfig,
  AccessConfigAmino,
  Params,
  ParamsAmino,
} from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
export const protobufPackage = "cosmwasm.wasm.v1";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}
export interface QueryContractInfoRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest";
  value: Uint8Array;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestAmino {
  /** address is the address of the contract to query */
  address?: string;
}
export interface QueryContractInfoRequestAminoMsg {
  type: "wasm/QueryContractInfoRequest";
  value: QueryContractInfoRequestAmino;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo: ContractInfo;
}
export interface QueryContractInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse";
  value: Uint8Array;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseAmino {
  /** address is the address of the contract */
  address?: string;
  contract_info: ContractInfoAmino;
}
export interface QueryContractInfoResponseAminoMsg {
  type: "wasm/QueryContractInfoResponse";
  value: QueryContractInfoResponseAmino;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractHistoryRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestAmino {
  /** address is the address of the contract to query */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryContractHistoryRequestAminoMsg {
  type: "wasm/QueryContractHistoryRequest";
  value: QueryContractHistoryRequestAmino;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
  entries: ContractCodeHistoryEntry[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractHistoryResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseAmino {
  entries: ContractCodeHistoryEntryAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryContractHistoryResponseAminoMsg {
  type: "wasm/QueryContractHistoryResponse";
  value: QueryContractHistoryResponseAmino;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
  /** grpc-gateway_out does not support Go style CodeID */
  codeId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractsByCodeRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest";
  value: Uint8Array;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestAmino {
  /** grpc-gateway_out does not support Go style CodeID */
  code_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryContractsByCodeRequestAminoMsg {
  type: "wasm/QueryContractsByCodeRequest";
  value: QueryContractsByCodeRequestAmino;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractsByCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse";
  value: Uint8Array;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseAmino {
  /** contracts are a set of contract addresses */
  contracts?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryContractsByCodeResponseAminoMsg {
  type: "wasm/QueryContractsByCodeResponse";
  value: QueryContractsByCodeResponseAmino;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest";
  value: Uint8Array;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestAmino {
  /** address is the address of the contract */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllContractStateRequestAminoMsg {
  type: "wasm/QueryAllContractStateRequest";
  value: QueryAllContractStateRequestAmino;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
  models: Model[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse";
  value: Uint8Array;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseAmino {
  models: ModelAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllContractStateResponseAminoMsg {
  type: "wasm/QueryAllContractStateResponse";
  value: QueryAllContractStateResponseAmino;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}
export interface QueryRawContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest";
  value: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestAmino {
  /** address is the address of the contract */
  address?: string;
  query_data?: string;
}
export interface QueryRawContractStateRequestAminoMsg {
  type: "wasm/QueryRawContractStateRequest";
  value: QueryRawContractStateRequestAmino;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}
export interface QueryRawContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse";
  value: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseAmino {
  /** Data contains the raw store data */
  data?: string;
}
export interface QueryRawContractStateResponseAminoMsg {
  type: "wasm/QueryRawContractStateResponse";
  value: QueryRawContractStateResponseAmino;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  queryData: Uint8Array;
}
export interface QuerySmartContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest";
  value: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestAmino {
  /** address is the address of the contract */
  address?: string;
  /** QueryData contains the query data passed to the contract */
  query_data?: any;
}
export interface QuerySmartContractStateRequestAminoMsg {
  type: "wasm/QuerySmartContractStateRequest";
  value: QuerySmartContractStateRequestAmino;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
export interface QuerySmartContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse";
  value: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseAmino {
  /** Data contains the json data returned from the smart contract */
  data?: any;
}
export interface QuerySmartContractStateResponseAminoMsg {
  type: "wasm/QuerySmartContractStateResponse";
  value: QuerySmartContractStateResponseAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodeID */
  codeId: bigint;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest";
  value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestAmino {
  /** grpc-gateway_out does not support Go style CodeID */
  code_id?: string;
}
export interface QueryCodeRequestAminoMsg {
  type: "wasm/QueryCodeRequest";
  value: QueryCodeRequestAmino;
}
/** QueryCodeInfoRequest is the request type for the Query/CodeInfo RPC method */
export interface QueryCodeInfoRequest {
  /** grpc-gateway_out does not support Go style CodeID */
  codeId: bigint;
}
export interface QueryCodeInfoRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoRequest";
  value: Uint8Array;
}
/** QueryCodeInfoRequest is the request type for the Query/CodeInfo RPC method */
export interface QueryCodeInfoRequestAmino {
  /** grpc-gateway_out does not support Go style CodeID */
  code_id?: string;
}
export interface QueryCodeInfoRequestAminoMsg {
  type: "wasm/QueryCodeInfoRequest";
  value: QueryCodeInfoRequestAmino;
}
/** QueryCodeInfoResponse is the response type for the Query/CodeInfo RPC method */
export interface QueryCodeInfoResponse {
  codeId: bigint;
  creator: string;
  checksum: Uint8Array;
  instantiatePermission: AccessConfig;
}
export interface QueryCodeInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoResponse";
  value: Uint8Array;
}
/** QueryCodeInfoResponse is the response type for the Query/CodeInfo RPC method */
export interface QueryCodeInfoResponseAmino {
  code_id?: string;
  creator?: string;
  checksum?: string;
  instantiate_permission: AccessConfigAmino;
}
export interface QueryCodeInfoResponseAminoMsg {
  type: "wasm/QueryCodeInfoResponse";
  value: QueryCodeInfoResponseAmino;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
  codeId: bigint;
  creator: string;
  dataHash: Uint8Array;
  instantiatePermission: AccessConfig;
}
export interface CodeInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse";
  value: Uint8Array;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseAmino {
  code_id: string;
  creator?: string;
  data_hash?: string;
  instantiate_permission: AccessConfigAmino;
}
export interface CodeInfoResponseAminoMsg {
  type: "wasm/CodeInfoResponse";
  value: CodeInfoResponseAmino;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
  codeInfo?: CodeInfoResponse;
  data: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse";
  value: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseAmino {
  code_info?: CodeInfoResponseAmino;
  data: string;
}
export interface QueryCodeResponseAminoMsg {
  type: "wasm/QueryCodeResponse";
  value: QueryCodeResponseAmino;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryCodesRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest";
  value: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryCodesRequestAminoMsg {
  type: "wasm/QueryCodesRequest";
  value: QueryCodesRequestAmino;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse";
  value: Uint8Array;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseAmino {
  code_infos: CodeInfoResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryCodesResponseAminoMsg {
  type: "wasm/QueryCodesResponse";
  value: QueryCodesResponseAmino;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPinnedCodesRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest";
  value: Uint8Array;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPinnedCodesRequestAminoMsg {
  type: "wasm/QueryPinnedCodesRequest";
  value: QueryPinnedCodesRequestAmino;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
  codeIds: bigint[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPinnedCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse";
  value: Uint8Array;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseAmino {
  code_ids?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPinnedCodesResponseAminoMsg {
  type: "wasm/QueryPinnedCodesResponse";
  value: QueryPinnedCodesResponseAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "wasm/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "wasm/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
  /** CreatorAddress is the address of contract creator */
  creatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractsByCreatorRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequestAmino {
  /** CreatorAddress is the address of contract creator */
  creator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryContractsByCreatorRequestAminoMsg {
  type: "wasm/QueryContractsByCreatorRequest";
  value: QueryContractsByCreatorRequestAmino;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
  /** ContractAddresses result set */
  contractAddresses: string[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractsByCreatorResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponseAmino {
  /** ContractAddresses result set */
  contract_addresses?: string[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryContractsByCreatorResponseAminoMsg {
  type: "wasm/QueryContractsByCreatorResponse";
  value: QueryContractsByCreatorResponseAmino;
}
/**
 * QueryWasmLimitsConfigRequest is the request type for the
 * Query/WasmLimitsConfig RPC method.
 */
export interface QueryWasmLimitsConfigRequest {}
export interface QueryWasmLimitsConfigRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigRequest";
  value: Uint8Array;
}
/**
 * QueryWasmLimitsConfigRequest is the request type for the
 * Query/WasmLimitsConfig RPC method.
 */
export interface QueryWasmLimitsConfigRequestAmino {}
export interface QueryWasmLimitsConfigRequestAminoMsg {
  type: "wasm/QueryWasmLimitsConfigRequest";
  value: QueryWasmLimitsConfigRequestAmino;
}
/**
 * QueryWasmLimitsConfigResponse is the response type for the
 * Query/WasmLimitsConfig RPC method. It contains the JSON encoded limits for
 * static validation of Wasm files.
 */
export interface QueryWasmLimitsConfigResponse {
  config: string;
}
export interface QueryWasmLimitsConfigResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigResponse";
  value: Uint8Array;
}
/**
 * QueryWasmLimitsConfigResponse is the response type for the
 * Query/WasmLimitsConfig RPC method. It contains the JSON encoded limits for
 * static validation of Wasm files.
 */
export interface QueryWasmLimitsConfigResponseAmino {
  config?: string;
}
export interface QueryWasmLimitsConfigResponseAminoMsg {
  type: "wasm/QueryWasmLimitsConfigResponse";
  value: QueryWasmLimitsConfigResponseAmino;
}
/**
 * QueryBuildAddressRequest is the request type for the Query/BuildAddress RPC
 * method.
 */
export interface QueryBuildAddressRequest {
  /** CodeHash is the hash of the code */
  codeHash: string;
  /** CreatorAddress is the address of the contract instantiator */
  creatorAddress: string;
  /** Salt is a hex encoded salt */
  salt: string;
  /**
   * InitArgs are optional json encoded init args to be used in contract address
   * building if provided
   */
  initArgs: Uint8Array;
}
export interface QueryBuildAddressRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressRequest";
  value: Uint8Array;
}
/**
 * QueryBuildAddressRequest is the request type for the Query/BuildAddress RPC
 * method.
 */
export interface QueryBuildAddressRequestAmino {
  /** CodeHash is the hash of the code */
  code_hash?: string;
  /** CreatorAddress is the address of the contract instantiator */
  creator_address?: string;
  /** Salt is a hex encoded salt */
  salt?: string;
  /**
   * InitArgs are optional json encoded init args to be used in contract address
   * building if provided
   */
  init_args?: string;
}
export interface QueryBuildAddressRequestAminoMsg {
  type: "wasm/QueryBuildAddressRequest";
  value: QueryBuildAddressRequestAmino;
}
/**
 * QueryBuildAddressResponse is the response type for the Query/BuildAddress RPC
 * method.
 */
export interface QueryBuildAddressResponse {
  /** Address is the contract address */
  address: string;
}
export interface QueryBuildAddressResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressResponse";
  value: Uint8Array;
}
/**
 * QueryBuildAddressResponse is the response type for the Query/BuildAddress RPC
 * method.
 */
export interface QueryBuildAddressResponseAmino {
  /** Address is the contract address */
  address?: string;
}
export interface QueryBuildAddressResponseAminoMsg {
  type: "wasm/QueryBuildAddressResponse";
  value: QueryBuildAddressResponseAmino;
}
function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: "",
  };
}
export const QueryContractInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
  encode(message: QueryContractInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractInfoRequest>, I>>(
    object: I,
  ): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryContractInfoRequestAmino): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryContractInfoRequest): QueryContractInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryContractInfoRequestAminoMsg): QueryContractInfoRequest {
    return QueryContractInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestAminoMsg {
    return {
      type: "wasm/QueryContractInfoRequest",
      value: QueryContractInfoRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryContractInfoRequestProtoMsg): QueryContractInfoRequest {
    return QueryContractInfoRequest.decode(message.value);
  },
  toProto(message: QueryContractInfoRequest): Uint8Array {
    return QueryContractInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
      value: QueryContractInfoRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: "",
    contractInfo: ContractInfo.fromPartial({}),
  };
}
export const QueryContractInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
  encode(message: QueryContractInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractInfoResponse>, I>>(
    object: I,
  ): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    }
    return message;
  },
  fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.contract_info !== undefined && object.contract_info !== null) {
      message.contractInfo = ContractInfo.fromAmino(object.contract_info);
    }
    return message;
  },
  toAmino(message: QueryContractInfoResponse): QueryContractInfoResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.contract_info = message.contractInfo
      ? ContractInfo.toAmino(message.contractInfo)
      : ContractInfo.toAmino(ContractInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryContractInfoResponseAminoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseAminoMsg {
    return {
      type: "wasm/QueryContractInfoResponse",
      value: QueryContractInfoResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.decode(message.value);
  },
  toProto(message: QueryContractInfoResponse): Uint8Array {
    return QueryContractInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
      value: QueryContractInfoResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QueryContractHistoryRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
  encode(message: QueryContractHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryContractHistoryRequest>, I>>(
    object: I,
  ): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryContractHistoryRequestAmino): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractHistoryRequest): QueryContractHistoryRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractHistoryRequestAminoMsg): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestAminoMsg {
    return {
      type: "wasm/QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryContractHistoryRequestProtoMsg): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.decode(message.value);
  },
  toProto(message: QueryContractHistoryRequest): Uint8Array {
    return QueryContractHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryContractHistoryResponse(): QueryContractHistoryResponse {
  return {
    entries: [],
    pagination: undefined,
  };
}
export const QueryContractHistoryResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
  encode(message: QueryContractHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryContractHistoryResponse>, I>>(
    object: I,
  ): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map((e) => ContractCodeHistoryEntry.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryContractHistoryResponseAmino): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map((e) => ContractCodeHistoryEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractHistoryResponse): QueryContractHistoryResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? ContractCodeHistoryEntry.toAmino(e) : undefined));
    } else {
      obj.entries = message.entries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractHistoryResponseAminoMsg): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseAminoMsg {
    return {
      type: "wasm/QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryContractHistoryResponseProtoMsg): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.decode(message.value);
  },
  toProto(message: QueryContractHistoryResponse): Uint8Array {
    return QueryContractHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: BigInt(0),
    pagination: undefined,
  };
}
export const QueryContractsByCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
  encode(message: QueryContractsByCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
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
  fromPartial<I extends Exact<DeepPartial<QueryContractsByCodeRequest>, I>>(
    object: I,
  ): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryContractsByCodeRequestAmino): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCodeRequestAminoMsg): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAminoMsg {
    return {
      type: "wasm/QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryContractsByCodeRequestProtoMsg): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.decode(message.value);
  },
  toProto(message: QueryContractsByCodeRequest): Uint8Array {
    return QueryContractsByCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contracts: [],
    pagination: undefined,
  };
}
export const QueryContractsByCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
  encode(message: QueryContractsByCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
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
  fromPartial<I extends Exact<DeepPartial<QueryContractsByCodeResponse>, I>>(
    object: I,
  ): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map((e) => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryContractsByCodeResponseAmino): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map((e) => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e);
    } else {
      obj.contracts = message.contracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCodeResponseAminoMsg): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAminoMsg {
    return {
      type: "wasm/QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryContractsByCodeResponseProtoMsg): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.decode(message.value);
  },
  toProto(message: QueryContractsByCodeResponse): Uint8Array {
    return QueryContractsByCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QueryAllContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
  encode(message: QueryAllContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryAllContractStateRequest>, I>>(
    object: I,
  ): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAllContractStateRequestAmino): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContractStateRequest): QueryAllContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContractStateRequestAminoMsg): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestAminoMsg {
    return {
      type: "wasm/QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAllContractStateRequestProtoMsg): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.decode(message.value);
  },
  toProto(message: QueryAllContractStateRequest): Uint8Array {
    return QueryAllContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return {
    models: [],
    pagination: undefined,
  };
}
export const QueryAllContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
  encode(message: QueryAllContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryAllContractStateResponse>, I>>(
    object: I,
  ): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map((e) => Model.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAllContractStateResponseAmino): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map((e) => Model.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContractStateResponse): QueryAllContractStateResponseAmino {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map((e) => (e ? Model.toAmino(e) : undefined));
    } else {
      obj.models = message.models;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContractStateResponseAminoMsg): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseAminoMsg {
    return {
      type: "wasm/QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAllContractStateResponseProtoMsg): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.decode(message.value);
  },
  toProto(message: QueryAllContractStateResponse): Uint8Array {
    return QueryAllContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array(),
  };
}
export const QueryRawContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
  encode(message: QueryRawContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRawContractStateRequest>, I>>(
    object: I,
  ): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryRawContractStateRequestAmino): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.query_data !== undefined && object.query_data !== null) {
      message.queryData = bytesFromBase64(object.query_data);
    }
    return message;
  },
  toAmino(message: QueryRawContractStateRequest): QueryRawContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.query_data = message.queryData ? base64FromBytes(message.queryData) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRawContractStateRequestAminoMsg): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestAminoMsg {
    return {
      type: "wasm/QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryRawContractStateRequestProtoMsg): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.decode(message.value);
  },
  toProto(message: QueryRawContractStateRequest): Uint8Array {
    return QueryRawContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return {
    data: new Uint8Array(),
  };
}
export const QueryRawContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
  encode(message: QueryRawContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRawContractStateResponse>, I>>(
    object: I,
  ): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryRawContractStateResponseAmino): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryRawContractStateResponse): QueryRawContractStateResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRawContractStateResponseAminoMsg): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseAminoMsg {
    return {
      type: "wasm/QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryRawContractStateResponseProtoMsg): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.decode(message.value);
  },
  toProto(message: QueryRawContractStateResponse): Uint8Array {
    return QueryRawContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array(),
  };
}
export const QuerySmartContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
  encode(
    message: QuerySmartContractStateRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySmartContractStateRequest>, I>>(
    object: I,
  ): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QuerySmartContractStateRequestAmino): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.query_data !== undefined && object.query_data !== null) {
      message.queryData = toUtf8(JSON.stringify(object.query_data));
    }
    return message;
  },
  toAmino(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.query_data = message.queryData ? JSON.parse(fromUtf8(message.queryData)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySmartContractStateRequestAminoMsg): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAminoMsg {
    return {
      type: "wasm/QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QuerySmartContractStateRequestProtoMsg): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.decode(message.value);
  },
  toProto(message: QuerySmartContractStateRequest): Uint8Array {
    return QuerySmartContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return {
    data: new Uint8Array(),
  };
}
export const QuerySmartContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
  encode(
    message: QuerySmartContractStateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySmartContractStateResponse>, I>>(
    object: I,
  ): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QuerySmartContractStateResponseAmino): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = toUtf8(JSON.stringify(object.data));
    }
    return message;
  },
  toAmino(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAmino {
    const obj: any = {};
    obj.data = message.data ? JSON.parse(fromUtf8(message.data)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySmartContractStateResponseAminoMsg): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAminoMsg {
    return {
      type: "wasm/QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QuerySmartContractStateResponseProtoMsg): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.decode(message.value);
  },
  toProto(message: QuerySmartContractStateResponse): Uint8Array {
    return QuerySmartContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: BigInt(0),
  };
}
export const QueryCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodeRequest>, I>>(object: I): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    return message;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: QueryCodeRequest): QueryCodeRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest {
    return QueryCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeRequest): QueryCodeRequestAminoMsg {
    return {
      type: "wasm/QueryCodeRequest",
      value: QueryCodeRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCodeInfoRequest(): QueryCodeInfoRequest {
  return {
    codeId: BigInt(0),
  };
}
export const QueryCodeInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoRequest",
  encode(message: QueryCodeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodeInfoRequest>, I>>(object: I): QueryCodeInfoRequest {
    const message = createBaseQueryCodeInfoRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    return message;
  },
  fromAmino(object: QueryCodeInfoRequestAmino): QueryCodeInfoRequest {
    const message = createBaseQueryCodeInfoRequest();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: QueryCodeInfoRequest): QueryCodeInfoRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeInfoRequestAminoMsg): QueryCodeInfoRequest {
    return QueryCodeInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeInfoRequest): QueryCodeInfoRequestAminoMsg {
    return {
      type: "wasm/QueryCodeInfoRequest",
      value: QueryCodeInfoRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCodeInfoRequestProtoMsg): QueryCodeInfoRequest {
    return QueryCodeInfoRequest.decode(message.value);
  },
  toProto(message: QueryCodeInfoRequest): Uint8Array {
    return QueryCodeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeInfoRequest): QueryCodeInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoRequest",
      value: QueryCodeInfoRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCodeInfoResponse(): QueryCodeInfoResponse {
  return {
    codeId: BigInt(0),
    creator: "",
    checksum: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({}),
  };
}
export const QueryCodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoResponse",
  encode(message: QueryCodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(26).bytes(message.checksum);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.checksum = reader.bytes();
          break;
        case 4:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodeInfoResponse>, I>>(object: I): QueryCodeInfoResponse {
    const message = createBaseQueryCodeInfoResponse();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.creator = object.creator ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
    return message;
  },
  fromAmino(object: QueryCodeInfoResponseAmino): QueryCodeInfoResponse {
    const message = createBaseQueryCodeInfoResponse();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message: QueryCodeInfoResponse): QueryCodeInfoResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    obj.instantiate_permission = message.instantiatePermission
      ? AccessConfig.toAmino(message.instantiatePermission)
      : AccessConfig.toAmino(AccessConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryCodeInfoResponseAminoMsg): QueryCodeInfoResponse {
    return QueryCodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeInfoResponse): QueryCodeInfoResponseAminoMsg {
    return {
      type: "wasm/QueryCodeInfoResponse",
      value: QueryCodeInfoResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCodeInfoResponseProtoMsg): QueryCodeInfoResponse {
    return QueryCodeInfoResponse.decode(message.value);
  },
  toProto(message: QueryCodeInfoResponse): Uint8Array {
    return QueryCodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeInfoResponse): QueryCodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoResponse",
      value: QueryCodeInfoResponse.encode(message).finish(),
    };
  },
};
function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: BigInt(0),
    creator: "",
    dataHash: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({}),
  };
}
export const CodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
  encode(message: CodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        case 6:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<CodeInfoResponse>, I>>(object: I): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array();
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
    return message;
  },
  fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.dataHash = bytesFromBase64(object.data_hash);
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message: CodeInfoResponse): CodeInfoResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId?.toString() : "0";
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.data_hash = message.dataHash ? base64FromBytes(message.dataHash) : undefined;
    obj.instantiate_permission = message.instantiatePermission
      ? AccessConfig.toAmino(message.instantiatePermission)
      : AccessConfig.toAmino(AccessConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: CodeInfoResponseAminoMsg): CodeInfoResponse {
    return CodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: CodeInfoResponse): CodeInfoResponseAminoMsg {
    return {
      type: "wasm/CodeInfoResponse",
      value: CodeInfoResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse {
    return CodeInfoResponse.decode(message.value);
  },
  toProto(message: CodeInfoResponse): Uint8Array {
    return CodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
      value: CodeInfoResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    data: new Uint8Array(),
  };
}
export const QueryCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodeResponse>, I>>(object: I): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfoResponse.fromPartial(object.codeInfo);
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.code_info !== undefined && object.code_info !== null) {
      message.codeInfo = CodeInfoResponse.fromAmino(object.code_info);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code_info = message.codeInfo ? CodeInfoResponse.toAmino(message.codeInfo) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : "";
    return obj;
  },
  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeResponse): QueryCodeResponseAminoMsg {
    return {
      type: "wasm/QueryCodeResponse",
      value: QueryCodeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCodesRequest(): QueryCodesRequest {
  return {
    pagination: undefined,
  };
}
export const QueryCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
  encode(message: QueryCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodesRequest>, I>>(object: I): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryCodesRequestAmino): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCodesRequest): QueryCodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodesRequestAminoMsg): QueryCodesRequest {
    return QueryCodesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodesRequest): QueryCodesRequestAminoMsg {
    return {
      type: "wasm/QueryCodesRequest",
      value: QueryCodesRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCodesRequestProtoMsg): QueryCodesRequest {
    return QueryCodesRequest.decode(message.value);
  },
  toProto(message: QueryCodesRequest): Uint8Array {
    return QueryCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesRequest): QueryCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
      value: QueryCodesRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: [],
    pagination: undefined,
  };
}
export const QueryCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
  encode(message: QueryCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryCodesResponse>, I>>(object: I): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map((e) => CodeInfoResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.code_infos?.map((e) => CodeInfoResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCodesResponse): QueryCodesResponseAmino {
    const obj: any = {};
    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map((e) => (e ? CodeInfoResponse.toAmino(e) : undefined));
    } else {
      obj.code_infos = message.codeInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodesResponseAminoMsg): QueryCodesResponse {
    return QueryCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodesResponse): QueryCodesResponseAminoMsg {
    return {
      type: "wasm/QueryCodesResponse",
      value: QueryCodesResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse {
    return QueryCodesResponse.decode(message.value);
  },
  toProto(message: QueryCodesResponse): Uint8Array {
    return QueryCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
      value: QueryCodesResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryPinnedCodesRequest(): QueryPinnedCodesRequest {
  return {
    pagination: undefined,
  };
}
export const QueryPinnedCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
  encode(message: QueryPinnedCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
  fromPartial<I extends Exact<DeepPartial<QueryPinnedCodesRequest>, I>>(object: I): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryPinnedCodesRequestAmino): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedCodesRequestAminoMsg): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAminoMsg {
    return {
      type: "wasm/QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryPinnedCodesRequestProtoMsg): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.decode(message.value);
  },
  toProto(message: QueryPinnedCodesRequest): Uint8Array {
    return QueryPinnedCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryPinnedCodesResponse(): QueryPinnedCodesResponse {
  return {
    codeIds: [],
    pagination: undefined,
  };
}
export const QueryPinnedCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
  encode(message: QueryPinnedCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
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
  fromPartial<I extends Exact<DeepPartial<QueryPinnedCodesResponse>, I>>(
    object: I,
  ): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map((e) => BigInt(e.toString())) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryPinnedCodesResponseAmino): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.code_ids?.map((e) => BigInt(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAmino {
    const obj: any = {};
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map((e) => e.toString());
    } else {
      obj.code_ids = message.codeIds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedCodesResponseAminoMsg): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAminoMsg {
    return {
      type: "wasm/QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryPinnedCodesResponseProtoMsg): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.decode(message.value);
  },
  toProto(message: QueryPinnedCodesResponse): Uint8Array {
    return QueryPinnedCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
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
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "wasm/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
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
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "wasm/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryContractsByCreatorRequest(): QueryContractsByCreatorRequest {
  return {
    creatorAddress: "",
    pagination: undefined,
  };
}
export const QueryContractsByCreatorRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
  encode(
    message: QueryContractsByCreatorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorAddress = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryContractsByCreatorRequest>, I>>(
    object: I,
  ): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = object.creatorAddress ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryContractsByCreatorRequestAmino): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    if (object.creator_address !== undefined && object.creator_address !== null) {
      message.creatorAddress = object.creator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestAmino {
    const obj: any = {};
    obj.creator_address = message.creatorAddress === "" ? undefined : message.creatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCreatorRequestAminoMsg): QueryContractsByCreatorRequest {
    return QueryContractsByCreatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestAminoMsg {
    return {
      type: "wasm/QueryContractsByCreatorRequest",
      value: QueryContractsByCreatorRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryContractsByCreatorRequestProtoMsg): QueryContractsByCreatorRequest {
    return QueryContractsByCreatorRequest.decode(message.value);
  },
  toProto(message: QueryContractsByCreatorRequest): Uint8Array {
    return QueryContractsByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
      value: QueryContractsByCreatorRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryContractsByCreatorResponse(): QueryContractsByCreatorResponse {
  return {
    contractAddresses: [],
    pagination: undefined,
  };
}
export const QueryContractsByCreatorResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
  encode(
    message: QueryContractsByCreatorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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
  fromPartial<I extends Exact<DeepPartial<QueryContractsByCreatorResponse>, I>>(
    object: I,
  ): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryContractsByCreatorResponseAmino): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contract_addresses?.map((e) => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contract_addresses = message.contractAddresses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCreatorResponseAminoMsg): QueryContractsByCreatorResponse {
    return QueryContractsByCreatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseAminoMsg {
    return {
      type: "wasm/QueryContractsByCreatorResponse",
      value: QueryContractsByCreatorResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryContractsByCreatorResponseProtoMsg): QueryContractsByCreatorResponse {
    return QueryContractsByCreatorResponse.decode(message.value);
  },
  toProto(message: QueryContractsByCreatorResponse): Uint8Array {
    return QueryContractsByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
      value: QueryContractsByCreatorResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryWasmLimitsConfigRequest(): QueryWasmLimitsConfigRequest {
  return {};
}
export const QueryWasmLimitsConfigRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigRequest",
  encode(_: QueryWasmLimitsConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmLimitsConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmLimitsConfigRequest();
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
  fromPartial<I extends Exact<DeepPartial<QueryWasmLimitsConfigRequest>, I>>(
    _: I,
  ): QueryWasmLimitsConfigRequest {
    const message = createBaseQueryWasmLimitsConfigRequest();
    return message;
  },
  fromAmino(_: QueryWasmLimitsConfigRequestAmino): QueryWasmLimitsConfigRequest {
    const message = createBaseQueryWasmLimitsConfigRequest();
    return message;
  },
  toAmino(_: QueryWasmLimitsConfigRequest): QueryWasmLimitsConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryWasmLimitsConfigRequestAminoMsg): QueryWasmLimitsConfigRequest {
    return QueryWasmLimitsConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryWasmLimitsConfigRequest): QueryWasmLimitsConfigRequestAminoMsg {
    return {
      type: "wasm/QueryWasmLimitsConfigRequest",
      value: QueryWasmLimitsConfigRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryWasmLimitsConfigRequestProtoMsg): QueryWasmLimitsConfigRequest {
    return QueryWasmLimitsConfigRequest.decode(message.value);
  },
  toProto(message: QueryWasmLimitsConfigRequest): Uint8Array {
    return QueryWasmLimitsConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWasmLimitsConfigRequest): QueryWasmLimitsConfigRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigRequest",
      value: QueryWasmLimitsConfigRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryWasmLimitsConfigResponse(): QueryWasmLimitsConfigResponse {
  return {
    config: "",
  };
}
export const QueryWasmLimitsConfigResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigResponse",
  encode(message: QueryWasmLimitsConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== "") {
      writer.uint32(10).string(message.config);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmLimitsConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmLimitsConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWasmLimitsConfigResponse>, I>>(
    object: I,
  ): QueryWasmLimitsConfigResponse {
    const message = createBaseQueryWasmLimitsConfigResponse();
    message.config = object.config ?? "";
    return message;
  },
  fromAmino(object: QueryWasmLimitsConfigResponseAmino): QueryWasmLimitsConfigResponse {
    const message = createBaseQueryWasmLimitsConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = object.config;
    }
    return message;
  },
  toAmino(message: QueryWasmLimitsConfigResponse): QueryWasmLimitsConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config === "" ? undefined : message.config;
    return obj;
  },
  fromAminoMsg(object: QueryWasmLimitsConfigResponseAminoMsg): QueryWasmLimitsConfigResponse {
    return QueryWasmLimitsConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryWasmLimitsConfigResponse): QueryWasmLimitsConfigResponseAminoMsg {
    return {
      type: "wasm/QueryWasmLimitsConfigResponse",
      value: QueryWasmLimitsConfigResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryWasmLimitsConfigResponseProtoMsg): QueryWasmLimitsConfigResponse {
    return QueryWasmLimitsConfigResponse.decode(message.value);
  },
  toProto(message: QueryWasmLimitsConfigResponse): Uint8Array {
    return QueryWasmLimitsConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWasmLimitsConfigResponse): QueryWasmLimitsConfigResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigResponse",
      value: QueryWasmLimitsConfigResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryBuildAddressRequest(): QueryBuildAddressRequest {
  return {
    codeHash: "",
    creatorAddress: "",
    salt: "",
    initArgs: new Uint8Array(),
  };
}
export const QueryBuildAddressRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressRequest",
  encode(message: QueryBuildAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeHash !== "") {
      writer.uint32(10).string(message.codeHash);
    }
    if (message.creatorAddress !== "") {
      writer.uint32(18).string(message.creatorAddress);
    }
    if (message.salt !== "") {
      writer.uint32(26).string(message.salt);
    }
    if (message.initArgs.length !== 0) {
      writer.uint32(34).bytes(message.initArgs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBuildAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBuildAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.string();
          break;
        case 2:
          message.creatorAddress = reader.string();
          break;
        case 3:
          message.salt = reader.string();
          break;
        case 4:
          message.initArgs = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBuildAddressRequest>, I>>(
    object: I,
  ): QueryBuildAddressRequest {
    const message = createBaseQueryBuildAddressRequest();
    message.codeHash = object.codeHash ?? "";
    message.creatorAddress = object.creatorAddress ?? "";
    message.salt = object.salt ?? "";
    message.initArgs = object.initArgs ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryBuildAddressRequestAmino): QueryBuildAddressRequest {
    const message = createBaseQueryBuildAddressRequest();
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.codeHash = object.code_hash;
    }
    if (object.creator_address !== undefined && object.creator_address !== null) {
      message.creatorAddress = object.creator_address;
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt;
    }
    if (object.init_args !== undefined && object.init_args !== null) {
      message.initArgs = bytesFromBase64(object.init_args);
    }
    return message;
  },
  toAmino(message: QueryBuildAddressRequest): QueryBuildAddressRequestAmino {
    const obj: any = {};
    obj.code_hash = message.codeHash === "" ? undefined : message.codeHash;
    obj.creator_address = message.creatorAddress === "" ? undefined : message.creatorAddress;
    obj.salt = message.salt === "" ? undefined : message.salt;
    obj.init_args = message.initArgs ? base64FromBytes(message.initArgs) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBuildAddressRequestAminoMsg): QueryBuildAddressRequest {
    return QueryBuildAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBuildAddressRequest): QueryBuildAddressRequestAminoMsg {
    return {
      type: "wasm/QueryBuildAddressRequest",
      value: QueryBuildAddressRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryBuildAddressRequestProtoMsg): QueryBuildAddressRequest {
    return QueryBuildAddressRequest.decode(message.value);
  },
  toProto(message: QueryBuildAddressRequest): Uint8Array {
    return QueryBuildAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBuildAddressRequest): QueryBuildAddressRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressRequest",
      value: QueryBuildAddressRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryBuildAddressResponse(): QueryBuildAddressResponse {
  return {
    address: "",
  };
}
export const QueryBuildAddressResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressResponse",
  encode(message: QueryBuildAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBuildAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBuildAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBuildAddressResponse>, I>>(
    object: I,
  ): QueryBuildAddressResponse {
    const message = createBaseQueryBuildAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryBuildAddressResponseAmino): QueryBuildAddressResponse {
    const message = createBaseQueryBuildAddressResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryBuildAddressResponse): QueryBuildAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBuildAddressResponseAminoMsg): QueryBuildAddressResponse {
    return QueryBuildAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBuildAddressResponse): QueryBuildAddressResponseAminoMsg {
    return {
      type: "wasm/QueryBuildAddressResponse",
      value: QueryBuildAddressResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryBuildAddressResponseProtoMsg): QueryBuildAddressResponse {
    return QueryBuildAddressResponse.decode(message.value);
  },
  toProto(message: QueryBuildAddressResponse): Uint8Array {
    return QueryBuildAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBuildAddressResponse): QueryBuildAddressResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressResponse",
      value: QueryBuildAddressResponse.encode(message).finish(),
    };
  },
};
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
  /** ContractHistory gets the contract code history */
  ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
  /** ContractsByCode lists all smart contracts for a code id */
  ContractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
  /** AllContractState gets all raw store data for a single contract */
  AllContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
  /** RawContractState gets single key from the raw store data of a contract */
  RawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
  /** SmartContractState get smart query result from the contract */
  SmartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
  /** Code gets the binary code and metadata for a single wasm code */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Codes gets the metadata for all stored wasm codes */
  Codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
  /** CodeInfo gets the metadata for a single wasm code */
  CodeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
  /** PinnedCodes gets the pinned code ids */
  PinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
  /** Params gets the module params */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ContractsByCreator gets the contracts by creator */
  ContractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
  /**
   * WasmLimitsConfig gets the configured limits for static validation of Wasm
   * files, encoded in JSON.
   */
  WasmLimitsConfig(request?: QueryWasmLimitsConfigRequest): Promise<QueryWasmLimitsConfigResponse>;
  /** BuildAddress builds a contract address */
  BuildAddress(request: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ContractInfo = this.ContractInfo.bind(this);
    this.ContractHistory = this.ContractHistory.bind(this);
    this.ContractsByCode = this.ContractsByCode.bind(this);
    this.AllContractState = this.AllContractState.bind(this);
    this.RawContractState = this.RawContractState.bind(this);
    this.SmartContractState = this.SmartContractState.bind(this);
    this.Code = this.Code.bind(this);
    this.Codes = this.Codes.bind(this);
    this.CodeInfo = this.CodeInfo.bind(this);
    this.PinnedCodes = this.PinnedCodes.bind(this);
    this.Params = this.Params.bind(this);
    this.ContractsByCreator = this.ContractsByCreator.bind(this);
    this.WasmLimitsConfig = this.WasmLimitsConfig.bind(this);
    this.BuildAddress = this.BuildAddress.bind(this);
  }
  ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then((data) => QueryContractInfoResponse.decode(new BinaryReader(data)));
  }
  ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then((data) => QueryContractHistoryResponse.decode(new BinaryReader(data)));
  }
  ContractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then((data) => QueryContractsByCodeResponse.decode(new BinaryReader(data)));
  }
  AllContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then((data) => QueryAllContractStateResponse.decode(new BinaryReader(data)));
  }
  RawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then((data) => QueryRawContractStateResponse.decode(new BinaryReader(data)));
  }
  SmartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then((data) => QuerySmartContractStateResponse.decode(new BinaryReader(data)));
  }
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then((data) => QueryCodeResponse.decode(new BinaryReader(data)));
  }
  Codes(
    request: QueryCodesRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryCodesResponse> {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then((data) => QueryCodesResponse.decode(new BinaryReader(data)));
  }
  CodeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse> {
    const data = QueryCodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "CodeInfo", data);
    return promise.then((data) => QueryCodeInfoResponse.decode(new BinaryReader(data)));
  }
  PinnedCodes(
    request: QueryPinnedCodesRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryPinnedCodesResponse> {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then((data) => QueryPinnedCodesResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  ContractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse> {
    const data = QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
    return promise.then((data) => QueryContractsByCreatorResponse.decode(new BinaryReader(data)));
  }
  WasmLimitsConfig(request: QueryWasmLimitsConfigRequest = {}): Promise<QueryWasmLimitsConfigResponse> {
    const data = QueryWasmLimitsConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "WasmLimitsConfig", data);
    return promise.then((data) => QueryWasmLimitsConfigResponse.decode(new BinaryReader(data)));
  }
  BuildAddress(request: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse> {
    const data = QueryBuildAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "BuildAddress", data);
    return promise.then((data) => QueryBuildAddressResponse.decode(new BinaryReader(data)));
  }
}
