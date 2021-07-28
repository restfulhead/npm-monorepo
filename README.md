To install all dependencies run `npm install` from the root.

To build all:
`npm run build -ws`

To build independently:
`npm run build -w @restfulhead/my-lib-b`
`npm run build -w @restfulhead/my-lib-a`
`npm run build -w @restfulhead/my-service`

To run:
`node server-apps/my-service/dist/index.js`

Example to install a new development dependency to an existing workspace:
`npm install -D eslint -ws @restfulhead/my-lib-b`
