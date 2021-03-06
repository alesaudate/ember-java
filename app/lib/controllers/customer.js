require('ejr/core');

App.CustomersController = Ember.ArrayController.extend({
  content: App.Customer.find(),

  delete: function(model) {
    model.deleteRecord();
    model.get('transaction').commit();
  }

});

App.CustomerController = App.TransactionalController.extend({

  modelType: App.Customer,

  didCreate: function(record) {
    App.Router.router.transitionTo('customer', this.get('content'));
  }

});