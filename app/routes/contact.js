import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.createRecord('contact');
	},

	actions: {

	    sendMessage(m) {
	    	m.save().then(() => {
	    		this.controller.set('responseMessage', `Your message has been sent`);
				this.controller.set('model.email', '');
				this.controller.set('model.message', '');
				setTimeout(() => {
					this.transitionTo('index');
				}, 2000);
	    	});
	    },

	  //   willTransition() {
			// this.controller.get('model').rollbackAttributes();
	  //   }
	}

});
