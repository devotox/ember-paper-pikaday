import moment from 'moment';

import { isEmpty } from '@ember/utils';

import PikadayMixin from 'ember-pikaday/mixins/pikaday';

import PaperInput from 'ember-paper/components/paper-input';

import layout from 'ember-paper/templates/components/paper-input';

const defaultFormat = 'YYYY-MM-DD';

export default PaperInput.extend(PikadayMixin, {
	layout,

	useUTC: false,

	yearRange: '10',

	format: defaultFormat,

	init() {
		this._super(...arguments);
		this.get('format') || this.set('format', defaultFormat);
	},

	didInsertElement() {
		if (this.isDestroyed) { return; }

		this._super(...arguments);

		let field = this.$('input').get(0);

		this.set('field', field);

		this.setupPikaday();
	},

	willDestroyElement() {
		if (this.isDestroyed) { return; }

		this._super(...arguments);

		this.get('pikaday').destroy();

		this.set('field', null);
	},

	userSelectedDate() {
		var selectedDate = this.get('pikaday').getDate();

		if (this.get('useUTC')) {
			selectedDate = moment.utc([
				selectedDate.getFullYear(),
				selectedDate.getMonth(),
				selectedDate.getDate()
			]).toDate();
		}

		let format = this.get('format') || this.set('format', defaultFormat);
		let formattedDate = moment(selectedDate).format(format);
		this.sendAction('onChange', formattedDate); // eslint-disable-line
	},

	onPikadayOpen() {
		this.sendAction('onOpen'); // eslint-disable-line
	},

	onPikadayClose() {
		if (this.isDestroyed) { return; }

		if (this.get('pikaday').getDate() === null
			|| isEmpty(this.$(this.field).val())
		) {
			this.sendAction('onChange', ''); // eslint-disable-line
		}

		this.sendAction('onClose'); // eslint-disable-line
	}
});
