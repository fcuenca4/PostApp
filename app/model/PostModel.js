Ext.define('PostApp.model.PostModel', {
    extend: 'PostApp.model.entities.Post',
     proxy: {
        type: 'rest',
        url : 'https://jsonplaceholder.typicode.com/posts'
    }
});