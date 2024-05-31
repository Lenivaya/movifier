default:
 just --list

# Frontend
frontend-develop:
    cd frontend; pnpm run dev

frontend-graphql-schema-watch:
    cd frontend; watchexec --restart --exts ts,tsx -- pnpm run code:graphql:gen
