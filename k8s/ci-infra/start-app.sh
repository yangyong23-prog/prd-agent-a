#!/bin/sh
set -e

nginx
exec pnpm --filter @app/server start
