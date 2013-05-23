define.experiment.newDataSchema('%NAME%DataSchema.%NAME%Component.New', function(){
    return {
        label: {
            'type': 'string',
            'enum': ['one', 'two', 'three'],
            'default' : 'one',
            'description': 'simple data placeholder'
        }
    };
});
