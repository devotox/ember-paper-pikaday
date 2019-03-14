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

[DEMO](https://devotox.github.io/ember-paper-pikaday)

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above

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
	useUTC=false
	useISODate=false
	class='flex-100'
	format='YYYY-MM-DD'
	label='Paper Pikaday'
	yearRange='1900,currentYear'
	onChange=(action (mut date))
}}
```

Pikaday Options: [Ember Pikaday](https://github.com/edgycircle/ember-pikaday)
Paper Input Options: [Ember Paper](https://github.com/miguelcobain/ember-paper)

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
