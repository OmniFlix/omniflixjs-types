# OmniFlixJS Types

OmniFlixJS Types makes it easy to compose and broadcast OmniFlix messages with
TypeScript support, providing all the necessary type definitions for the
OmniFlix blockchain ecosystem.

## Installation

```sh
npm install omniflixjs-types
```

## Table of contents

- [OmniFlixJS Types](#omniflixjs-types)
  - [Installation](#installation)
  - [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Importing Messages](#importing-messages)
    - [Configuring Network and Wallet](#configuring-network-and-wallet)
    - [Setup Registry and Client](#setup-registry-and-client)
    - [Prepare Message](#prepare-message)
    - [Broadcast Transaction](#broadcast-transaction)
    - [Composing Messages](#composing-messages)
      - [ONFT](#onft)
      - [Marketplace](#marketplace)
      - [ITC](#itc)
      - [StreamPay](#streampay)
      - [Factory Tokens](#factory-tokens)
    - [Requirements](#requirements)
    - [Credits](#credits)

## Usage

### RPC Clients

#### Importing Messages
```typescript
import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgMintONFT } from "omniflixjs-types/OmniFlix/onft/v1beta1/tx.js";
```

#### Configuring Network and Wallet
```typescript
const rpcUrl = "https://rpc.testnet.omniflix.network";
const prefix = "omniflix";
const mnemonic = "sponsor wife virtual glow shallow danger invite uncover salute guide toddler empty turtle seat people cruise high upon approve topple anxiety alley nose review";

// Initialize wallet from mnemonic
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
  prefix: prefix,
});
const [firstAccount] = await wallet.getAccounts();
const address = firstAccount.address;
```

#### Setup Registry and Client
```typescript
// Register message types
const registry = new Registry();
registry.register("/OmniFlix.onft.v1beta1.MsgMintONFT", MsgMintONFT);

// Initialize signing client
const client = await SigningStargateClient.connectWithSigner(rpcUrl, wallet, {
  registry,
});

// Query example
const nfts = await client.omniflix.onft.v1beta1.nfts({
  owner: "omniflix1address",
});
```

#### Prepare Message
```typescript
const nft = MsgMintONFT.fromPartial({
  id: "onft8e93f7612c4d47d39b28f5a6a0e1c483",
  denomId: "onftdenom12a9c3b847ef549ab934ed2d1b8e67f04",
  metadata: {
    name: "NFT - Package testing 5",
    description: "OmniFlix Channel Testing Asset",
    mediaUri: "ipfs://QmWUjGzruSwEkuSCyC7qWmkDv3c26dMRL1RCmMp2TNQwov/1",
    previewUri: "ipfs://QmWUjGzruSwEkuSCyC7qWmkDv3c26dMRL1RCmMp2TNQwov/1",
  },
  data: "{}",
  transferable: true,
  extensible: true,
  nsfw: false,
  royaltyShare: "10000000000000000",
  sender: "sender-address",
  recipient: "recipient-address",
});
```

#### Broadcast Transaction
```typescript
const result = await client.signAndBroadcast(
  address,
  [
    {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
      value: nft,
    },
  ],
  { amount: [{ denom: "uflix", amount: "50000" }], gas: "2000000" },
);
```

### Composing Messages

#### ONFT
The ONFT (OmniFlix NFT) module allows you to create, mint, transfer and burn NFTs on the OmniFlix Network. It provides comprehensive functionality for managing NFT collections (denoms) and individual NFTs.

```typescript
import {
  MsgMintONFT,
  MsgTransferONFT,
  MsgBurnONFT,
  MsgCreateDenom,
  MsgUpdateDenom,
  MsgTransferDenom,
} from "omniflixjs-types/OmniFlix/onft/v1beta1/tx.js";
```

#### Marketplace
The Marketplace module enables NFT trading through direct listings and auctions. Users can list NFTs for sale, create auctions, place bids, and execute purchases.

```typescript
import {
  MsgListNFT,
  MsgEditListing,
  MsgDelistNFT,
  MsgBuyNFT,
  MsgCreateAuction,
  MsgCancelAuction,
  MsgPlaceBid,
} from "omniflixjs-types/OmniFlix/marketplace/v1beta1/tx.js";
```

#### ITC
The ITC (Incentivized TestNet Campaign) module manages testnet incentive campaigns. It allows creating campaigns, depositing rewards, and claiming rewards by participants who complete campaign tasks.

```typescript
import {
    MsgCreateCampaign,
  MsgCancelCampaign,
  MsgClaim,
  MsgDepositCampaign
} from "omniflixjs-types/OmniFlix/itc/v1/tx.js";
```

#### StreamPay
The StreamPay module enables continuous token streaming between addresses. It allows creating payment streams that gradually transfer tokens over a specified duration, with options to stop streams and claim streamed amounts.

```typescript
import {
  MsgStreamSend,
  MsgStopStream,
  MsgClaimStreamedAmount,
  MsgUpdateParams
} from "omniflixjs-types/OmniFlix/streampay/v1beta1/tx.js";

// Create stream
 const stream = MsgStreamSend.fromPartial({
            sender: "sender-address",
            recipient: "recipient-address",
            amount: {
                denom: "uflix",
                amount: "10000000"
            },
            duration: {seconds: 43497, nanos: 0},
            streamType: StreamType.STREAM_PAYMENT_TYPE_DELAYED,
            periods: [],
            cancellable: true,
            paymentFee: {
                denom: "uflix",
                amount: "100000"
            }
        });
```

#### Factory Tokens
The Factory Tokens module (based on Osmosis tokenfactory) allows creating and managing custom tokens. Users can create new denominations, mint/burn tokens, and manage token metadata.

```typescript
import {
  MsgCreateDenom,
  MsgMint,
  MsgBurn,
  MsgChangeAdmin,
  MsgSetDenomMetadata,
  MsgForceTransfer,
  MsgUpdateParams,
} from "omniflixjs-types/osmosis/tokenfactory/v1beta1/tx.js";
```

## Requirements

- @cosmjs/stargate
- @cosmjs/proto-signing

## Credits

Built by OmniFlix Network
