
# How to

Setup:

- `npm install typescript -g`
- `npm install`

Expected output (without `tsconfig-paths/register`):

`$ npm start`

`{ escape: [Function: qsEscape] }`

Actual output (with `tsconfig-paths/register`):

`$ npm test`

`{ escape: undefined }`


Reason: having certain kind of `paths` mapping in `tsconfig.json` makes the patched version of module resolution in `tsconfig-paths` prefer modules from `node_modules` over native modules. `tsconfig-paths` does not seem to take native modules into account at all (and personally not clear on how this could be achieved cleanly).

