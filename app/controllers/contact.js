import Ember from 'ember';

export default Ember.Controller.extend({

	isMessageValid: Ember.computed.gte('model.message.length', 5),
	isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
	isActive: Ember.computed.and('isValid', 'isMessageValid'),
	isDisabled: Ember.computed.not('isActive'),

	// actions: {

	// 	sendMessage() {
	// 		alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
	// 		this.set('responseMessage', `Your message has been sent`);
	// 		this.set('emailAddress', '');
	// 		this.set('message', '');
	// 	}
		
	// }

});
