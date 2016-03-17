import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.findAll('invitation');
	},

	actions: {

    removeInv(i) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        i.destroyRecord();
      }
    }
  }

});
