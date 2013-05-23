define.experiment.dataItem('SKINS.ShaiKfirComponent.New',  function (experimentStrategy) {
    /**@type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;

    return strategy.merge({
        components: {
            'wysiwyg.viewer.components.ShaiKfir':[
                'skins.viewer.ShaiKfirSkin'
            ]
        }
    });
});