// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>THE QUEUE</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },


  //Create putOnQueue function. Do something. Call this.render

  putOnQueue: function(song) {
  	debugger;
  	// app.songQueue.collection.add(song);
  	this.render();
  }





});
