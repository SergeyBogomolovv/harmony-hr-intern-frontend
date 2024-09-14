import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.escuelajs.co/graphql",
  documents: "src/**/*.gql",
  generates: {
    "src/shared/graphql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
