define.experiment.dataItem('SKINS.TEMPLATE_NAME_Component.New',  function (experimentStrategy) {
    /**@type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;

    return strategy.merge({
        components: {
            'wysiwyg.viewer.components.TEMPLATE_NAME_':[
                'skins.viewer.TEMPLATE_NAME_Skin'
            ]
        }
    });
});