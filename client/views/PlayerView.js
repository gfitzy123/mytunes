// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  // ended
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  //Listens for the ended event to occur, 

  events: {
    'ended' : function() {
      console.log('PlayerView: Song has ended')
      this.model.ended();
    }
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }


});
