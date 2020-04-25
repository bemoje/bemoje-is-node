# @bemoje/is-node

Browser-safely returns whether the current process is a node-js process.

#### Version

<span><a href="https://npmjs.org/@bemoje/is-node" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-node" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-node" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-node.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-node" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-node.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-node" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-node" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-node/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-node" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-node
npm install --save @bemoje/is-node
npm install --save-dev @bemoje/is-node
```

## Usage

```javascript
import isNode from '@bemoje/is-node'

/**
 * USE IN NODE ENVIRONMENT
 */
isNode()
//=> true

/**
 * SAFELY USE IN BROWSER ENVIRONMENT
 */
isNode()
//=> false

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### isNode

Browser-safely returns whether the current process is a node-js process.

##### Returns
**[boolean][2]** 

[1]: #isnode

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean