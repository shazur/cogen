define.experiment.newDataSchema('TEMPLATE_NAME_DataSchema.TEMPLATE_NAME_Component.New', function(){
    return {
        label: {
            'type': 'string',
            'enum': ['one', 'two', 'three'],
            'default' : 'one',
            'description': 'simple data placeholder'
        }
    };
});
