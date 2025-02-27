#!/usr/bin/env node

const { join } = require("path");
const { writeFileSync } = require("fs");
const telescope = require("@cosmology/telescope").default;

const outPath = join(__dirname, "/../src");
telescope({
  protoDirs: [
    "protos/cosmos-sdk/proto",
    "protos/omniflixhub/proto",
    "protos/streampay/proto",
    "protos/wasmd/proto",
    "protos/ibc-go/proto",
    "protos/ics23/proto",
    "protos/proto",
  ],
  outPath: outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      disableAll: true,
    },
    eslintDisable: {
      disableAll: true,
    },
    bundle: {
      enabled: false,
    },
    interfaces: {
      enabled: false,
    },
    prototypes: {
      includePackageVar: true,
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      addTypeUrlToObjects: true,
      // Those are causing trouble in CosmJS testing (https://github.com/cosmology-tech/telescope/issues/489)
      addTypeUrlToDecoders: false,
      excluded: {
        protos: [
          "cosmos/autocli/v1/options.proto",
          "cosmos/autocli/v1/query.proto",
          "cosmos/authz/v1beta1/event.proto",
          "cosmos/base/reflection/v2alpha1/reflection.proto",
          "cosmos/crypto/secp256r1/keys.proto",
          "ibc/core/port/v1/query.proto",
          "ibc/lightclients/solomachine/v2/solomachine.proto",
          "tendermint/libs/bits/types.proto",
          "google/api/httpbody.proto",
          "tendermint/blockchain/types.proto",
          "tendermint/consensus/types.proto",
          "tendermint/consensus/wal.proto",
          "tendermint/mempool/types.proto",
          "tendermint/p2p/conn.proto",
          "tendermint/p2p/pex.proto",
          "tendermint/privval/types.proto",
          "tendermint/rpc/grpc/types.proto",
          "tendermint/state/types.proto",
          "tendermint/statesync/types.proto",
          "tendermint/store/types.proto",
          "tendermint/types/canonical.proto",
          "tendermint/types/events.proto",
        ],
      },
      methods: {
        // There are users who need those functions. CosmJS does not need them directly.
        // See https://github.com/cosmos/cosmjs/pull/1329
        fromJSON: false,
        toJSON: false,

        encode: true,
        decode: true,
        fromPartial: true,

        fromAmino: true,
        toAmino: true,
        fromProto: true,
        toProto: true,
      },
      typingsFormat: {
        useDeepPartial: true,
        useExact: true,
        timestamp: "timestamp",
        duration: "duration",
        customTypes: {
          useCosmosSDKDec: false,
        },
        num64: "bigint",
      },
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      inline: true,
      extensions: false,
      camelCase: false,
      enabledServices: ["Msg", "Query", "Service", "ReflectionService", "ABCIApplication"],
    },
    aaminoEncoding: {
      enabled: true,
    },
  },
}).then(
  () => {
    // Create index.ts
    const index_ts = `
    // Auto-generated, see scripts/codegen.js!

    // Exports we want to provide at the root of the "omniflixjs-types" package

    export { DeepPartial, Exact } from "./helpers";
    `;
    writeFileSync(`${outPath}/index.ts`, index_ts);

    console.log("✨ All Done!");
  },
  (e) => {
    console.error(e);
    process.exit(1);
  },
);
