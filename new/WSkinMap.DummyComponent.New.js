define.experiment.dataItem('SKINS.%NAME%Component.New',  function (experimentStrategy) {
    /**%type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;

    return strategy.merge({
        components: {
            'wysiwyg.viewer.components.%NAME%':[
                'skins.viewer.%NAME%Skin'
            ]
        }
    });
});