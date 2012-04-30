# XXSPubSub
# Copyright (c) 2012 Denis Ciccale (@tdecs)
# Released under MIT license (https://raw.github.com/dciccale/xxspubsub/master/LICENSE.txt)
(() ->
  channels = {}

  @.publish = (channel, data) ->
    subscribes = channels[channel] || []
    l = subscribes.length

    while (l--)
      subscribes[l].apply(@, data || []);

  @.subscribe = (channel, handler) ->
    (channels[channel] = channels[channel] || []).push(handler)
    return [channel, handler]

  @.unsubscribe = (handle) ->
    subscribes = channels[handle[0]]
    l = subscribes.length

    while (l--)
      if (subscribes[l] == handle[1])
        subscribes.splice(l, 1)
).call(this)