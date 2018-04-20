[![Ember Observer Score](http://emberobserver.com/badges/ember-paper-pikaday.svg)](http://emberobserver.com/addons/ember-paper-pikaday)
[![Build Status](https://travis-ci.org/devotox/ember-paper-pikaday.svg)](http://travis-ci.org/devotox/ember-paper-pikaday)
[![Coverage Status](https://codecov.io/gh/devotox/ember-paper-pikaday/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-paper-pikaday)
[![NPM Version](https://badge.fury.io/js/ember-paper-pikaday.svg)](http://badge.fury.io/js/ember-paper-pikaday)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-paper-pikaday.svg)](https://www.npmjs.org/package/ember-paper-pikaday)
[![Dependency Status](https://david-dm.org/poetic/ember-paper-pikaday.svg)](https://david-dm.org/poetic/ember-paper-pikaday)
[![DevDependency Status](https://david-dm.org/poetic/ember-paper-pikaday/dev-status.svg)](https://david-dm.org/poetic/ember-paper-pikaday#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-paper-pikaday.svg)](https://greenkeeper.io/)

ember-paper-pikaday
==============================================================================

Input with Pikaday Calendar addon for [Ember Paper](https://github.com/miguelcobain/ember-paper)

[DEMO](http://devotox.github.io/ember-paper-pikaday)

Installation
------------------------------------------------------------------------------

```
ember install ember-paper-pikaday
```


Usage
------------------------------------------------------------------------------

```handlebars
{{paper-pikaday
	value=date
	class='flex-100'
	label='Paper Pikaday'
	yearRange='1900,currentYear'
	onChange=(action (mut date))
}}
```

Pikaday Options: [Ember Pikaday](https://github.com/edgycircle/ember-pikaday)
Paper Input Options: [Ember Paper](https://github.com/miguelcobain/ember-paper)



Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-paper-pikaday`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
