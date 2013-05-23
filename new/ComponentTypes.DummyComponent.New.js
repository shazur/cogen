define.experiment.dataItem('COMPONENT_TYPES.%NAME%Component.New', function(experimentStrategy){
    /** %type bootstrap.managers.experiments.ExperimentStrategy */
    var strategy = experimentStrategy;

    return strategy.merge({
        'items':{
            'add%NAME%': {
                component:function() {
                    return {
                        comp:'wysiwyg.viewer.components.%NAME%',
                        skin:'skins.viewer.%NAME%Skin',
                        data:{ 'type':'%NAME%DataSchema'},
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