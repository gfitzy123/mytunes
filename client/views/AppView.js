// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')})

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'

    this.model.on('change:currentSong', function(model){
      console.log('AppView: AppModel currentSong set/triggered change')
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('songQueue').on('add', function(collection){
      console.log('AppView: AppModel Received add event on songQueue model')
      this.songQueueView.render(collection.get('songQueue'));
    }, this);
   
    //On songQueue removal in AppModel, renders the SongQueueView 

    this.model.get('songQueue').on('remove', function(collection){
      console.log('AppView: AppModel Received remove event on songQueue model')
      this.songQueueView.render(collection.get('songQueue'));
    }, this);
  },



  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
