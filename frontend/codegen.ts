import { type CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/lib/graphql/__generated__/graphql.ts': {
      schema: './client-schema.graphql',
      // preset: 'client',
      presetConfig: {
        gqlTagName: 'gql'
      },
      config: {
        useIndexSignature: true,
        // dedupeFragments: true,
        withHooks: true,
        withComponent: false,
        withHOC: false,
        useTypeImports: true,
        enumsAsTypes: true
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
        'typescript-react-apollo',
        'typescript-apollo-client-helpers'
      ]
    }
  },
  ignoreNoDocuments: true
}

export default config
