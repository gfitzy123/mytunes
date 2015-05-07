// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  tagName: "table",

  initialize: function() {
    this.render();
  },

  events: {
    'ended' : function() {
      console.log('entered events in SongQueueView')
     
    }
  },

  render: function(song){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>THE QUEUE</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },
});
