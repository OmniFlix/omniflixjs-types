//@ts-nocheck
/* eslint-disable */
import { Campaign, CampaignAmino, Claim, ClaimAmino } from "./itc";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "OmniFlix.itc.v1";
/** GenesisState defines the itc module's genesis state. */
export interface GenesisState {
  campaigns: Campaign[];
  nextCampaignNumber: bigint;
  claims: Claim[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the itc module's genesis state. */
export interface GenesisStateAmino {
  campaigns?: CampaignAmino[];
  next_campaign_number?: string;
  claims?: ClaimAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/OmniFlix.itc.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    campaigns: [],
    nextCampaignNumber: BigInt(0),
    claims: [],
    params: Params.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/OmniFlix.itc.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.campaigns) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextCampaignNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextCampaignNumber);
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaigns.push(Campaign.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextCampaignNumber = reader.uint64();
          break;
        case 3:
          message.claims.push(Claim.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.campaigns = object.campaigns?.map((e) => Campaign.fromPartial(e)) || [];
    if (object.nextCampaignNumber !== undefined && object.nextCampaignNumber !== null) {
      message.nextCampaignNumber = BigInt(object.nextCampaignNumber.toString());
    }
    message.claims = object.claims?.map((e) => Claim.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.campaigns = object.campaigns?.map((e) => Campaign.fromAmino(e)) || [];
    if (object.next_campaign_number !== undefined && object.next_campaign_number !== null) {
      message.nextCampaignNumber = BigInt(object.next_campaign_number);
    }
    message.claims = object.claims?.map((e) => Claim.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.campaigns) {
      obj.campaigns = message.campaigns.map((e) => (e ? Campaign.toAmino(e) : undefined));
    } else {
      obj.campaigns = message.campaigns;
    }
    obj.next_campaign_number =
      message.nextCampaignNumber !== BigInt(0) ? message.nextCampaignNumber?.toString() : undefined;
    if (message.claims) {
      obj.claims = message.claims.map((e) => (e ? Claim.toAmino(e) : undefined));
    } else {
      obj.claims = message.claims;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
