/*!
 * jQuery XXSPubSub
 * Copyright (c) 2012 Denis Ciccale (@tdecs)
 * Released under MIT license (https://raw.github.com/dciccale/xxspubsub/master/LICENSE.txt)
 * requires jQuery 1.7+ (http://jquery.com)
 */
(function($, o) {

  o = $({});

  $.subscribe = function(e, h) {
    o.on.call(o, e, h);
  };

  $.unsubscribe = function(e, h) {
    o.off.call(o, e, h);
  };

  $.publish = function(e, h) {
    o.trigger.call(o, e, h);
  };

}(jQuery));