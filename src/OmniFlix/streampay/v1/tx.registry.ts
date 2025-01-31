//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStreamSend, MsgStopStream, MsgClaimStreamedAmount, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/OmniFlix.streampay.v1.MsgStreamSend", MsgStreamSend],
  ["/OmniFlix.streampay.v1.MsgStopStream", MsgStopStream],
  ["/OmniFlix.streampay.v1.MsgClaimStreamedAmount", MsgClaimStreamedAmount],
  ["/OmniFlix.streampay.v1.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    streamSend(value: MsgStreamSend) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
        value: MsgStreamSend.encode(value).finish(),
      };
    },
    stopStream(value: MsgStopStream) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
        value: MsgStopStream.encode(value).finish(),
      };
    },
    claimStreamedAmount(value: MsgClaimStreamedAmount) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
        value: MsgClaimStreamedAmount.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    streamSend(value: MsgStreamSend) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
        value,
      };
    },
    stopStream(value: MsgStopStream) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
        value,
      };
    },
    claimStreamedAmount(value: MsgClaimStreamedAmount) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
        value,
      };
    },
  },
  fromPartial: {
    streamSend(value: MsgStreamSend) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
        value: MsgStreamSend.fromPartial(value),
      };
    },
    stopStream(value: MsgStopStream) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
        value: MsgStopStream.fromPartial(value),
      };
    },
    claimStreamedAmount(value: MsgClaimStreamedAmount) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
        value: MsgClaimStreamedAmount.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
