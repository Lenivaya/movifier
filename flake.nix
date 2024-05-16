{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    prisma-utils.url = "github:VanCoding/nix-prisma-utils";

    treefmt-nix.url = "github:numtide/treefmt-nix";
    treefmt-nix.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs @ {
    nixpkgs,
    flake-parts,
    prisma-utils,
    treefmt-nix,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;}
    {
      imports = [
        treefmt-nix.flakeModule
      ];

      systems = nixpkgs.lib.systems.flakeExposed;
      perSystem = {
        pkgs,
        self',
        lib,
        ...
      }:
      #  let
      # https://github.com/VanCoding/nix-prisma-utils/issues/5
      # prisma =
      #   (prisma-utils.lib.prisma-factory {
      #     nixpkgs = pkgs;
      #     prisma-fmt-hash = "sha256-4zsJv0PW8FkGfiiv/9g0y5xWNjmRWD8Q2l2blSSBY3s="; # just copy these hashes for now, and then change them when nix complains about the mismatch
      #     query-engine-hash = "sha256-6ILWB6ZmK4ac6SgAtqCkZKHbQANmcqpWO92U8CfkFzw=";
      #     libquery-engine-hash = "sha256-n9IimBruqpDJStlEbCJ8nsk8L9dDW95ug+gz9DHS1Lc=";
      #     schema-engine-hash = "sha256-j38xSXOBwAjIdIpbSTkFJijby6OGWCoAx+xZyms/34Q=";
      #   })
      #   .fromPnpmLock
      #   ./backend/pnpm-lock.yaml;
      # in
      {
        devShells = let
          bareMinimum = with pkgs; [corepack just];
        in {
          default = pkgs.mkShell {
            nativeBuildInputs =
              bareMinimum
              ++ (with pkgs; [
                prisma-engines
                openssl
              ]);
            # shellHook = prisma.shellHook;
            shellHook = ''
              export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine"
              export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine"
              export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
              export PRISMA_FMT_BINARY="${pkgs.prisma-engines}/bin/prisma-fmt"
              export PATH="$PWD/backend/node_modules/.bin/:$PATH"
            '';
          };

          ci-format = pkgs.mkShell {
            nativeBuildInputs = with pkgs; [corepack];
          };

          ci-reviewdog = pkgs.mkShell {
            nativeBuildInputs = with pkgs; [
              corepack
              nodejs_22
            ];
          };
        };

        treefmt = {
          projectRootFile = "flake.nix";

          programs = {
            alejandra.enable = true;
            yamlfmt.enable = true;
            csharpier.enable = true;
            # Manage using ci instead
            # prettier.enable = true;
          };
        };
      };
    };
}
