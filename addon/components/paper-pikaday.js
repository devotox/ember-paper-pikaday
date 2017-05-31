import Ember from 'ember';
import PikadayMixin from 'ember-pikaday/mixins/pikaday';
import PaperInput from 'ember-paper/components/paper-input';
import layout from 'ember-paper/templates/components/paper-input';

const { isEmpty } = Ember;

export default PaperInput.extend(PikadayMixin, {
	layout,

	format: 'YYYY-MM-DD',

	didInsertElement() {
		if (this.isDestroyed) { return; }

		this._super(...arguments);
		this.set('field', this.element.children[1]);
		this.setupPikaday();
	},

	willDestroyElement() {
		if (this.isDestroyed) { return; }

		this._super(...arguments);
		this.get('pikaday').destroy();
		this.set('field', null);
	},

	onPikadayOpen() {
		this.sendAction('onOpen');
	},

	onPikadayClose() {
		if (this.isDestroyed) { return; }

		if (this.get('pikaday').getDate() === null
			|| isEmpty(this.$(this.field).val())
		) {
			this.set('value', null);
		}

		this.sendAction('onChange', this.field.value);
	}
});
