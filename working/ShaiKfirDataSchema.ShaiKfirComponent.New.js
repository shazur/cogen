define.experiment.newDataSchema('ShaiKfirDataSchema.ShaiKfirComponent.New', function(){
    return {
        image: {
            src : 'http://static.crab.wixpress.com/media/6c90a0673862c3ba34f0cd12a004aa6f.wix_mp_512'
        },
        label: {
            'type': 'string',
            'enum': ['lo hirgashti klum', 'osim et dromi', 'kus'],
            'default' : 'lo hirgashti klum',
            'description': 'osim et dromi'
        }
    };
});
