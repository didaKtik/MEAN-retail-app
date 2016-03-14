var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');

module.exports = function(wagner) {
  
  // TODO: Make Stripe depend on the Config service and use its `stripeKey`
  // property to get the Stripe API key.
  wagner.factory('Stripe', function(Config) {
    return Stripe(Config.stripeKey);
  });

  // The callback passed to wagner.factory (in second position) or wagner.invoke (in first position)
  // are automatically invoked by wagner, with at their disposal all the services already defined,
  // and these services don't need to be explicitly passed! But they need to be in the argument list
  // of the function definition.
  wagner.factory('fx', fx);

  wagner.factory('Config', function() {
    return JSON.parse(fs.readFileSync('./config.json').toString());
  });
};
