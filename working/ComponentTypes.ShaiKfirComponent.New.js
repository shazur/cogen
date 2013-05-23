define.experiment.dataItem('COMPONENT_TYPES.ShaiKfirComponent.New', function(experimentStrategy){
    /** @type bootstrap.managers.experiments.ExperimentStrategy */
    var strategy = experimentStrategy;

    return strategy.merge({
        'items':{
            'addShaiKfir': {
                component:function() {
                    return {
                        comp:'wysiwyg.viewer.components.ShaiKfir',
                        skin:'skins.viewer.ShaiKfirSkin',
                        data:{ 'type':'ShaiKfirDataSchema'},
                        layout:{
                            "width":200,
                            "height":200
                        }
                    };
                }
            }
        }
    });

});