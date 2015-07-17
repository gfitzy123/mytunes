// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'LibraryEntryView',

  template: _.template('<td class="playSong">(<%= artist %>)</td><td><%= title %></td><td class="playSong">P</td><td class="addToQueue"> Q </td>'),

  events: {
    'click .playSong': function() {
      this.model.play();
      this.trigger('enqueue', this.model)
    },
    'click .addToQueue': function(){
      this.model.enqueue();
      console.log('click .addToQueue in LibraryEntryView: Completed this.model.enqueue()')
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
