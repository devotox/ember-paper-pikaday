import moment from 'moment';

import { next } from '@ember/runloop';

import { isEmpty } from '@ember/utils';

import PikadayMixin from 'ember-pikaday/mixins/pikaday';

import PaperInput from 'ember-paper/components/paper-input';

import layout from 'ember-paper/templates/components/paper-input';

const defaultFormat = 'YYYY-MM-DD';

export default PaperInput.extend(PikadayMixin, {
	layout,

	useUTC: false,

	yearRange: '10',

	useISODate: false,

	format: defaultFormat,

	init() {
		this._super(...arguments);
		this.getFormat();
	},

	didInsertElement() {
		if (this.isDestroyed || this.isDestroying) { return; }

		this._super(...arguments);

		let field = this.element.querySelector('input');

		this.set('field', field);

		this.setupPikaday();
	},

	willDestroyElement() {
		if (this.isDestroyed || this.isDestroying) { return; }

		this._super(...arguments);

		this.get('pikaday').destroy();

		this.set('field', null);
	},

	onPikadayOpen() {
		this.onOpen();
	},

	onPikadayClose() {
		if (this.isDestroyed || this.isDestroying) { return; }

		if (this.get('pikaday').getDate() === null 
			|| isEmpty(this.get('field').value)
		) {
			this.onChange('');
		}

		this.onClose();
	},

	getFormat() {
		return this.get('format') 
			|| this.set('format', defaultFormat);
	},

	getSelectedDate() {
		let useUTC = this.get('useUTC');
		let selectedDate = this.get('pikaday').getDate();

		if (useUTC) {
			selectedDate = moment.utc([
				selectedDate.getFullYear(),
				selectedDate.getMonth(),
				selectedDate.getDate()
			]).toDate();
		}

		return selectedDate;
	},

	userSelectedDate() {
		this.actions.handleInput.call(this);
	},

	onOpen() { },
	onClose() { },
	onChange() { },

	actions: {
		handleInput(e) {
			let format = this.getFormat();
			let element = this.get('field');
			let useISODate = this.get('useISODate');

			let selectedDate = this.getSelectedDate();
			let isoDate = moment(selectedDate).format();
			let formattedDate = moment(selectedDate).format(format);

			let value = useISODate ? isoDate : formattedDate;
			value = e && e.target.value || value;

			// setValue below ensures that the input value is the same as this.value
			next(() => !this.isDestroyed && !this.isDestroying && this.setValue(value));

			this.onChange(value);

			this.notifyValidityChange();
			this.set('isNativeInvalid', element && element.validity && element.validity.badInput);
		}
	}
});
