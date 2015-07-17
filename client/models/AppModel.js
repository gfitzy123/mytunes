// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // {library: library}
    // this.set('library', ???)
    // Library impliclicity assigned in index.html

    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    //Create .on('enqueue') 

    params.library.on('enqueue', function(song){
      //this.set('songQueue', song)
      console.log('AppModel.js: before "add(song)')
      this.get('songQueue').add(song);
      console.log('AppModel.js: after "add(song)')
      // should trigger('change:songQueue')
    }, this);

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);


    // Listens for PIZZA event, removes song from SongQueue collection

    // params.library.on('PIZZA', function(currentSong) {

    //     // Remove song from queue
    //     // Play song at songQueue[0]
    //     console.log('AppModel.js: songQueue length before remove: ', this.get('songQueue').length)
    //     this.get('songQueue').remove(this.get('currentSong'))
    //     console.log('AppModel.js: songQueue length after remove: songQueue', this.get('songQueue').length)
    
    //     console.log('AppModel.js: before set currentSong', this.get('currentSong'))
        
    //     // this.set('currentSong', this.get('songQueue').at(0));

    //     this.set('currentSong', this.get('songQueue').playFirst())
        
    //     console.log('AppModel.js: after set currentSong', this.get('currentSong'))
     


    // }, this);




      }
});
