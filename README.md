![Tests Passing](https://github.com/NicolaWealth/resolved_promise/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fresolved_promise%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `resolve_promise` package provides utility for creating and managing promises that resolve with predefined values (`void`, `undefined`, & `boolean`), simplifying asynchronous operations.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `resolved_promise` package with npm:

`npm install @nicolawealth/resolved_promise`

# Interface
This package exports the object `resolvedPromise` with the following properties, all of which are promises resolved with specific values:
* `resolvedPromise.void`: a promise which resolves with `void`
* `resolvedPromise.undefined`: a promise which resolves with `undefined`
* `resolvedPromise.true`: a promise which resolves with `true`
* `resolvedPromise.false`: a promise which resolves with `false`

# Testing
Tests can be found in `resolved_promise.test.ts` located in `resolved_promise/src` and should be run with sinon, mocha and nyc.
