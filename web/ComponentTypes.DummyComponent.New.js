define.experiment.dataItem('COMPONENT_TYPES.TEMPLATE_NAME_Component.New', function(experimentStrategy){
    /** @type bootstrap.managers.experiments.ExperimentStrategy */
    var strategy = experimentStrategy;

    return strategy.merge({
        'items':{
            'addTEMPLATE_NAME_': {
                component:function() {
                    return {
                        comp:'wysiwyg.viewer.components.TEMPLATE_NAME_',
                        skin:'skins.viewer.TEMPLATE_NAME_Skin',
                        data:{ 'type':'TEMPLATE_NAME_DataSchema'},
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