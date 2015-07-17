// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // attribute of 
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log('SongModel: "play" event triggered')
    this.trigger('play', this);
  },

  // enqueue: function(){
  //   console.log('SongModel: "enqueue" event triggered')
  // 	this.trigger('enqueue', this);
  // },

  // // This function triggers an 'PIZZA' event

  // ended: function(){
  //   console.log('SongModel: "PIZZA" event triggered')
  // 	this.trigger('PIZZA', this)
  // }

});
  