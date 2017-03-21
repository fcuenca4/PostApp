Ext.define('PostApp.view.Post',{
    extend: 'Ext.panel.Panel',
    requires: [
        'PostApp.view.Post.PostController',
        'PostApp.model.PostModel'
    ],

    controller: 'post',
    viewModel: {
        type: 'post'
    },
    html: 'Hello, World!!'
});