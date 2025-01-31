//@ts-nocheck
/* eslint-disable */
import { MsgStreamSend, MsgStopStream, MsgClaimStreamedAmount, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/OmniFlix.streampay.v1.MsgStreamSend": {
    aminoType: "OmniFlix/streampay/MsgStreamSend",
    toAmino: MsgStreamSend.toAmino,
    fromAmino: MsgStreamSend.fromAmino,
  },
  "/OmniFlix.streampay.v1.MsgStopStream": {
    aminoType: "OmniFlix/streampay/MsgStopStream",
    toAmino: MsgStopStream.toAmino,
    fromAmino: MsgStopStream.fromAmino,
  },
  "/OmniFlix.streampay.v1.MsgClaimStreamedAmount": {
    aminoType: "OmniFlix/streampay/MsgClaimStream",
    toAmino: MsgClaimStreamedAmount.toAmino,
    fromAmino: MsgClaimStreamedAmount.fromAmino,
  },
  "/OmniFlix.streampay.v1.MsgUpdateParams": {
    aminoType: "/OmniFlix.streampay.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
};
