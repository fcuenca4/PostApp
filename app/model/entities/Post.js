Ext.define('PostApp.model.entities.Post', {
	extend: 'Ext.data.Model',
	idProperty:'id',
	fields :[
		{ name: 'id', type: 'int' },
		{ name: 'body', type: 'string' },
		{ name: 'title', type: 'string' }
			]
});