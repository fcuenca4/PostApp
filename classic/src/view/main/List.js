/**
 * This view is an example list of people.
 */
Ext.define('PostApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'PostApp.store.PostStore'
    ],

    title: 'PostStore',

    bind: {
        store: '{postDATA}'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Body', dataIndex: 'body', flex: 1 }
    ],

   /* listeners: {
        select: 'onItemSelected'
    }*/
});
