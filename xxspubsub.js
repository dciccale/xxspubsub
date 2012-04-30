/*!
 * XXSPubSub
 * Copyright (c) 2012 Denis Ciccale (@tdecs)
 * Released under MIT license (https://raw.github.com/dciccale/xxspubsub/master/LICENSE.txt)
 */
(function (root) {

  // subscribes hash
  var channels = {};

  /*\
   * publish
   [ method ]
   * Publish data to a specified channel
   > Arguments
   - channel (string)
   - data (array)
   > Usage
   | publish('some/channel', ['Denis', 'Ciccale']);
  \*/
  root.publish = function (channel, data) {
    var subscribes = channels[channel] || [],
      l = subscribes.length;

    while (l--) {
      subscribes[l].apply(root, data || []);
    }
  };

  /*\
   * subscribe
   [ method ]
   * Subscribe a handler to a specified channel
   > Arguments
   - channel (string) the channel to subscribe to
   - handler (function) the function to execute when it's channel is published recieving the @publish data
   > Usage
   | var handle = subscribe('some/channel', function (name, lastName) {
   |   console.log(name + ' ' + lastName);
   | });
  \*/
  root.subscribe = function (channel, handler) {
    (channels[channel] = channels[channel] || []).push(handler);
    return [channel, handler];
  };

  /*\
   * unsubscribe
   [ method ]
   * Unsubscribe a handler from a specified channel
   > Arguments
   - handle (array) the array that is returned from the @subscribe function
   > Usage
   | // the handle variable is defined on the subscribe example
   | unsubscribe(handle);
  \*/
  root.unsubscribe = function (handle) {
    var subscribes = channels[handle[0]],
      l = subscribes.length;

    while (l--) {
      if (subscribes[l] === handle[1]) {
        subscribes.splice(l, 1);
      }
    }
  };
}(this));