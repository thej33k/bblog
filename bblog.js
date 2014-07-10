var posts = new Meteor.Collection('posts')
if(Meteor.isClient){
  Template.Blog.events({
    'click .btn': function(handler,temp){
      var v = temp.find('#blogTitle').value
      var c = temp.find('#blogBody').value
      posts.insert({title:v, content:c})
    }

  })
}
