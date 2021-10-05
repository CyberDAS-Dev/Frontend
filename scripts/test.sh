#! /usr/bin/env sh

# Exit in case of error
set -e

npm run lint:code
npm run lint:style
npm test