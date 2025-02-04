//@ts-nocheck
/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { StreamPayment, StreamPaymentAmino } from "./streampay";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.streampay.v1";
export interface QueryStreamPaymentsRequest {
  sender: string;
  recipient: string;
  pagination?: PageRequest;
}
export interface QueryStreamPaymentsRequestProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsRequest";
  value: Uint8Array;
}
export interface QueryStreamPaymentsRequestAmino {
  sender?: string;
  recipient?: string;
  pagination?: PageRequestAmino;
}
export interface QueryStreamPaymentsRequestAminoMsg {
  type: "/OmniFlix.streampay.v1.QueryStreamPaymentsRequest";
  value: QueryStreamPaymentsRequestAmino;
}
export interface QueryStreamPaymentsResponse {
  streamPayments: StreamPayment[];
  pagination?: PageResponse;
}
export interface QueryStreamPaymentsResponseProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsResponse";
  value: Uint8Array;
}
export interface QueryStreamPaymentsResponseAmino {
  stream_payments?: StreamPaymentAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryStreamPaymentsResponseAminoMsg {
  type: "/OmniFlix.streampay.v1.QueryStreamPaymentsResponse";
  value: QueryStreamPaymentsResponseAmino;
}
export interface QueryStreamPaymentRequest {
  id: string;
}
export interface QueryStreamPaymentRequestProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentRequest";
  value: Uint8Array;
}
export interface QueryStreamPaymentRequestAmino {
  id?: string;
}
export interface QueryStreamPaymentRequestAminoMsg {
  type: "/OmniFlix.streampay.v1.QueryStreamPaymentRequest";
  value: QueryStreamPaymentRequestAmino;
}
export interface QueryStreamPaymentResponse {
  streamPayment?: StreamPayment;
}
export interface QueryStreamPaymentResponseProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentResponse";
  value: Uint8Array;
}
export interface QueryStreamPaymentResponseAmino {
  stream_payment?: StreamPaymentAmino;
}
export interface QueryStreamPaymentResponseAminoMsg {
  type: "/OmniFlix.streampay.v1.QueryStreamPaymentResponse";
  value: QueryStreamPaymentResponseAmino;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/OmniFlix.streampay.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.streampay.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/OmniFlix.streampay.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryStreamPaymentsRequest(): QueryStreamPaymentsRequest {
  return {
    sender: "",
    recipient: "",
    pagination: undefined,
  };
}
export const QueryStreamPaymentsRequest = {
  typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsRequest",
  encode(message: QueryStreamPaymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamPaymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamPaymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
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
  fromPartial<I extends Exact<DeepPartial<QueryStreamPaymentsRequest>, I>>(
    object: I,
  ): QueryStreamPaymentsRequest {
    const message = createBaseQueryStreamPaymentsRequest();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryStreamPaymentsRequestAmino): QueryStreamPaymentsRequest {
    const message = createBaseQueryStreamPaymentsRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStreamPaymentsRequest): QueryStreamPaymentsRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStreamPaymentsRequestAminoMsg): QueryStreamPaymentsRequest {
    return QueryStreamPaymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamPaymentsRequestProtoMsg): QueryStreamPaymentsRequest {
    return QueryStreamPaymentsRequest.decode(message.value);
  },
  toProto(message: QueryStreamPaymentsRequest): Uint8Array {
    return QueryStreamPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamPaymentsRequest): QueryStreamPaymentsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsRequest",
      value: QueryStreamPaymentsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryStreamPaymentsResponse(): QueryStreamPaymentsResponse {
  return {
    streamPayments: [],
    pagination: undefined,
  };
}
export const QueryStreamPaymentsResponse = {
  typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsResponse",
  encode(message: QueryStreamPaymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.streamPayments) {
      StreamPayment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamPaymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamPayments.push(StreamPayment.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryStreamPaymentsResponse>, I>>(
    object: I,
  ): QueryStreamPaymentsResponse {
    const message = createBaseQueryStreamPaymentsResponse();
    message.streamPayments = object.streamPayments?.map((e) => StreamPayment.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryStreamPaymentsResponseAmino): QueryStreamPaymentsResponse {
    const message = createBaseQueryStreamPaymentsResponse();
    message.streamPayments = object.stream_payments?.map((e) => StreamPayment.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStreamPaymentsResponse): QueryStreamPaymentsResponseAmino {
    const obj: any = {};
    if (message.streamPayments) {
      obj.stream_payments = message.streamPayments.map((e) => (e ? StreamPayment.toAmino(e) : undefined));
    } else {
      obj.stream_payments = message.streamPayments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStreamPaymentsResponseAminoMsg): QueryStreamPaymentsResponse {
    return QueryStreamPaymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamPaymentsResponseProtoMsg): QueryStreamPaymentsResponse {
    return QueryStreamPaymentsResponse.decode(message.value);
  },
  toProto(message: QueryStreamPaymentsResponse): Uint8Array {
    return QueryStreamPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamPaymentsResponse): QueryStreamPaymentsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsResponse",
      value: QueryStreamPaymentsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryStreamPaymentRequest(): QueryStreamPaymentRequest {
  return {
    id: "",
  };
}
export const QueryStreamPaymentRequest = {
  typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentRequest",
  encode(message: QueryStreamPaymentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamPaymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamPaymentRequest();
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
  fromPartial<I extends Exact<DeepPartial<QueryStreamPaymentRequest>, I>>(
    object: I,
  ): QueryStreamPaymentRequest {
    const message = createBaseQueryStreamPaymentRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryStreamPaymentRequestAmino): QueryStreamPaymentRequest {
    const message = createBaseQueryStreamPaymentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryStreamPaymentRequest): QueryStreamPaymentRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryStreamPaymentRequestAminoMsg): QueryStreamPaymentRequest {
    return QueryStreamPaymentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamPaymentRequestProtoMsg): QueryStreamPaymentRequest {
    return QueryStreamPaymentRequest.decode(message.value);
  },
  toProto(message: QueryStreamPaymentRequest): Uint8Array {
    return QueryStreamPaymentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamPaymentRequest): QueryStreamPaymentRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentRequest",
      value: QueryStreamPaymentRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryStreamPaymentResponse(): QueryStreamPaymentResponse {
  return {
    streamPayment: undefined,
  };
}
export const QueryStreamPaymentResponse = {
  typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentResponse",
  encode(message: QueryStreamPaymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.streamPayment !== undefined) {
      StreamPayment.encode(message.streamPayment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamPaymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamPaymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamPayment = StreamPayment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamPaymentResponse>, I>>(
    object: I,
  ): QueryStreamPaymentResponse {
    const message = createBaseQueryStreamPaymentResponse();
    if (object.streamPayment !== undefined && object.streamPayment !== null) {
      message.streamPayment = StreamPayment.fromPartial(object.streamPayment);
    }
    return message;
  },
  fromAmino(object: QueryStreamPaymentResponseAmino): QueryStreamPaymentResponse {
    const message = createBaseQueryStreamPaymentResponse();
    if (object.stream_payment !== undefined && object.stream_payment !== null) {
      message.streamPayment = StreamPayment.fromAmino(object.stream_payment);
    }
    return message;
  },
  toAmino(message: QueryStreamPaymentResponse): QueryStreamPaymentResponseAmino {
    const obj: any = {};
    obj.stream_payment = message.streamPayment ? StreamPayment.toAmino(message.streamPayment) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStreamPaymentResponseAminoMsg): QueryStreamPaymentResponse {
    return QueryStreamPaymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamPaymentResponseProtoMsg): QueryStreamPaymentResponse {
    return QueryStreamPaymentResponse.decode(message.value);
  },
  toProto(message: QueryStreamPaymentResponse): Uint8Array {
    return QueryStreamPaymentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamPaymentResponse): QueryStreamPaymentResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentResponse",
      value: QueryStreamPaymentResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.streampay.v1.QueryParamsRequest",
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
      typeUrl: "/OmniFlix.streampay.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}
export const QueryParamsResponse = {
  typeUrl: "/OmniFlix.streampay.v1.QueryParamsResponse",
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
      typeUrl: "/OmniFlix.streampay.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  StreamingPayments(request: QueryStreamPaymentsRequest): Promise<QueryStreamPaymentsResponse>;
  StreamingPayment(request: QueryStreamPaymentRequest): Promise<QueryStreamPaymentResponse>;
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.StreamingPayments = this.StreamingPayments.bind(this);
    this.StreamingPayment = this.StreamingPayment.bind(this);
    this.Params = this.Params.bind(this);
  }
  StreamingPayments(request: QueryStreamPaymentsRequest): Promise<QueryStreamPaymentsResponse> {
    const data = QueryStreamPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.streampay.v1.Query", "StreamingPayments", data);
    return promise.then((data) => QueryStreamPaymentsResponse.decode(new BinaryReader(data)));
  }
  StreamingPayment(request: QueryStreamPaymentRequest): Promise<QueryStreamPaymentResponse> {
    const data = QueryStreamPaymentRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.streampay.v1.Query", "StreamingPayment", data);
    return promise.then((data) => QueryStreamPaymentResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.streampay.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
