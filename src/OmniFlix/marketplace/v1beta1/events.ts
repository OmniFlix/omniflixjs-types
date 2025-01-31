//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.marketplace.v1beta1";
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventListNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT";
  value: Uint8Array;
}
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFTAmino {
  id?: string;
  nft_id?: string;
  denom_id?: string;
  owner?: string;
}
export interface EventListNFTAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventListNFT";
  value: EventListNFTAmino;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListing {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventEditListingProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing";
  value: Uint8Array;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListingAmino {
  id?: string;
  nft_id?: string;
  denom_id?: string;
  owner?: string;
}
export interface EventEditListingAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventEditListing";
  value: EventEditListingAmino;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventDeListNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT";
  value: Uint8Array;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFTAmino {
  id?: string;
  nft_id?: string;
  denom_id?: string;
  owner?: string;
}
export interface EventDeListNFTAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventDeListNFT";
  value: EventDeListNFTAmino;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
  buyer: string;
}
export interface EventBuyNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT";
  value: Uint8Array;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFTAmino {
  id?: string;
  nft_id?: string;
  denom_id?: string;
  owner?: string;
  buyer?: string;
}
export interface EventBuyNFTAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventBuyNFT";
  value: EventBuyNFTAmino;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuction {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
  minPrice: string;
}
export interface EventCreateAuctionProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction";
  value: Uint8Array;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuctionAmino {
  id?: string;
  nft_id?: string;
  denom_id?: string;
  owner?: string;
  min_price?: string;
}
export interface EventCreateAuctionAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventCreateAuction";
  value: EventCreateAuctionAmino;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuction {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventCancelAuctionProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction";
  value: Uint8Array;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuctionAmino {
  id?: string;
  nft_id?: string;
  denom_id?: string;
  owner?: string;
}
export interface EventCancelAuctionAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventCancelAuction";
  value: EventCancelAuctionAmino;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBid {
  auctionId: string;
  nftId: string;
  denomId: string;
  bidder: string;
  amount: string;
}
export interface EventPlaceBidProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid";
  value: Uint8Array;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBidAmino {
  auction_id?: string;
  nft_id?: string;
  denom_id?: string;
  bidder?: string;
  amount?: string;
}
export interface EventPlaceBidAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventPlaceBid";
  value: EventPlaceBidAmino;
}
function createBaseEventListNFT(): EventListNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
  };
}
export const EventListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT",
  encode(message: EventListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventListNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventListNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<EventListNFT>, I>>(object: I): EventListNFT {
    const message = createBaseEventListNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventListNFTAmino): EventListNFT {
    const message = createBaseEventListNFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventListNFT): EventListNFTAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventListNFTAminoMsg): EventListNFT {
    return EventListNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventListNFTProtoMsg): EventListNFT {
    return EventListNFT.decode(message.value);
  },
  toProto(message: EventListNFT): Uint8Array {
    return EventListNFT.encode(message).finish();
  },
  toProtoMsg(message: EventListNFT): EventListNFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT",
      value: EventListNFT.encode(message).finish(),
    };
  },
};
function createBaseEventEditListing(): EventEditListing {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
  };
}
export const EventEditListing = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing",
  encode(message: EventEditListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEditListing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<EventEditListing>, I>>(object: I): EventEditListing {
    const message = createBaseEventEditListing();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventEditListingAmino): EventEditListing {
    const message = createBaseEventEditListing();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventEditListing): EventEditListingAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventEditListingAminoMsg): EventEditListing {
    return EventEditListing.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEditListingProtoMsg): EventEditListing {
    return EventEditListing.decode(message.value);
  },
  toProto(message: EventEditListing): Uint8Array {
    return EventEditListing.encode(message).finish();
  },
  toProtoMsg(message: EventEditListing): EventEditListingProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing",
      value: EventEditListing.encode(message).finish(),
    };
  },
};
function createBaseEventDeListNFT(): EventDeListNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
  };
}
export const EventDeListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT",
  encode(message: EventDeListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeListNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeListNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<EventDeListNFT>, I>>(object: I): EventDeListNFT {
    const message = createBaseEventDeListNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventDeListNFTAmino): EventDeListNFT {
    const message = createBaseEventDeListNFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventDeListNFT): EventDeListNFTAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventDeListNFTAminoMsg): EventDeListNFT {
    return EventDeListNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeListNFTProtoMsg): EventDeListNFT {
    return EventDeListNFT.decode(message.value);
  },
  toProto(message: EventDeListNFT): Uint8Array {
    return EventDeListNFT.encode(message).finish();
  },
  toProtoMsg(message: EventDeListNFT): EventDeListNFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT",
      value: EventDeListNFT.encode(message).finish(),
    };
  },
};
function createBaseEventBuyNFT(): EventBuyNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
    buyer: "",
  };
}
export const EventBuyNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT",
  encode(message: EventBuyNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBuyNFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuyNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<EventBuyNFT>, I>>(object: I): EventBuyNFT {
    const message = createBaseEventBuyNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  },
  fromAmino(object: EventBuyNFTAmino): EventBuyNFT {
    const message = createBaseEventBuyNFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    return message;
  },
  toAmino(message: EventBuyNFT): EventBuyNFTAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    return obj;
  },
  fromAminoMsg(object: EventBuyNFTAminoMsg): EventBuyNFT {
    return EventBuyNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBuyNFTProtoMsg): EventBuyNFT {
    return EventBuyNFT.decode(message.value);
  },
  toProto(message: EventBuyNFT): Uint8Array {
    return EventBuyNFT.encode(message).finish();
  },
  toProtoMsg(message: EventBuyNFT): EventBuyNFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT",
      value: EventBuyNFT.encode(message).finish(),
    };
  },
};
function createBaseEventCreateAuction(): EventCreateAuction {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
    minPrice: "",
  };
}
export const EventCreateAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction",
  encode(message: EventCreateAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.minPrice !== "") {
      writer.uint32(42).string(message.minPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.minPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateAuction>, I>>(object: I): EventCreateAuction {
    const message = createBaseEventCreateAuction();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.minPrice = object.minPrice ?? "";
    return message;
  },
  fromAmino(object: EventCreateAuctionAmino): EventCreateAuction {
    const message = createBaseEventCreateAuction();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.min_price !== undefined && object.min_price !== null) {
      message.minPrice = object.min_price;
    }
    return message;
  },
  toAmino(message: EventCreateAuction): EventCreateAuctionAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.min_price = message.minPrice === "" ? undefined : message.minPrice;
    return obj;
  },
  fromAminoMsg(object: EventCreateAuctionAminoMsg): EventCreateAuction {
    return EventCreateAuction.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateAuctionProtoMsg): EventCreateAuction {
    return EventCreateAuction.decode(message.value);
  },
  toProto(message: EventCreateAuction): Uint8Array {
    return EventCreateAuction.encode(message).finish();
  },
  toProtoMsg(message: EventCreateAuction): EventCreateAuctionProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction",
      value: EventCreateAuction.encode(message).finish(),
    };
  },
};
function createBaseEventCancelAuction(): EventCancelAuction {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
  };
}
export const EventCancelAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction",
  encode(message: EventCancelAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<EventCancelAuction>, I>>(object: I): EventCancelAuction {
    const message = createBaseEventCancelAuction();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventCancelAuctionAmino): EventCancelAuction {
    const message = createBaseEventCancelAuction();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventCancelAuction): EventCancelAuctionAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventCancelAuctionAminoMsg): EventCancelAuction {
    return EventCancelAuction.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelAuctionProtoMsg): EventCancelAuction {
    return EventCancelAuction.decode(message.value);
  },
  toProto(message: EventCancelAuction): Uint8Array {
    return EventCancelAuction.encode(message).finish();
  },
  toProtoMsg(message: EventCancelAuction): EventCancelAuctionProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction",
      value: EventCancelAuction.encode(message).finish(),
    };
  },
};
function createBaseEventPlaceBid(): EventPlaceBid {
  return {
    auctionId: "",
    nftId: "",
    denomId: "",
    bidder: "",
    amount: "",
  };
}
export const EventPlaceBid = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid",
  encode(message: EventPlaceBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== "") {
      writer.uint32(10).string(message.auctionId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPlaceBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPlaceBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.denomId = reader.string();
          break;
        case 4:
          message.bidder = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<EventPlaceBid>, I>>(object: I): EventPlaceBid {
    const message = createBaseEventPlaceBid();
    message.auctionId = object.auctionId ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventPlaceBidAmino): EventPlaceBid {
    const message = createBaseEventPlaceBid();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = object.auction_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventPlaceBid): EventPlaceBidAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId === "" ? undefined : message.auctionId;
    obj.nft_id = message.nftId === "" ? undefined : message.nftId;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventPlaceBidAminoMsg): EventPlaceBid {
    return EventPlaceBid.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPlaceBidProtoMsg): EventPlaceBid {
    return EventPlaceBid.decode(message.value);
  },
  toProto(message: EventPlaceBid): Uint8Array {
    return EventPlaceBid.encode(message).finish();
  },
  toProtoMsg(message: EventPlaceBid): EventPlaceBidProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid",
      value: EventPlaceBid.encode(message).finish(),
    };
  },
};
