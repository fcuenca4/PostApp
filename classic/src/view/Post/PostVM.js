/**
 * This class is the view model for the Post view of the application.
 */
Ext.define('PostApp.view.Post.PostVM', {
    extend: 'Ext.app.ViewModel',
    requires:[
        'PostApp.store.PostStore'
    ],
    alias: 'viewmodel.PostVM',
    /*formulas:{
        un: 
    }*/
    stores: {
        postDATA: 
        {
                type: 'post',
                autoLoad:true
        }
    } 
});