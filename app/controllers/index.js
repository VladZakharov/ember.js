import Ember from 'ember';

export default Ember.Controller.extend({

	headerMessage: 'Coming Soon',
	responseMessage: '',

	isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),

	// actions: {

	// 	saveInvitation: function() {

 //            const email = this.get('emailAddress');

 //            const newInvitation = this.store.createRecord('invitation', {
 //                email: email
 //            });

 //            newInvitation.save().then((response) => {
 //                this.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
 //                this.set('emailAddress', '');
 //            });
 //        }

	// }

	// actualEmailAddress: Ember.computed('emailAddress', function() { 
	// 	console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
	// }),

	// emailAddressChanged: Ember.observer('emailAddress', function() { 
	//     console.log('observer is called', this.get('emailAddress')); 
	// })

});
