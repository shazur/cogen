define.experiment.dataItem('PROPERTY_PANELS.ShaiKfirComponent.New', function(experimentStrategy){
    /** @type bootstrap.managers.experiments.ExperimentStrategy */
    var strategy = experimentStrategy;

    return strategy.merge({
        'items':[{
            'dataType': 'ShaiKfirDataSchema',
            'compType': 'wysiwyg.viewer.components.ShaiKfir',
            'panelCompType': 'wysiwyg.editor.components.panels.ShaiKfirPanel',
            'panelSkinType': 'wysiwyg.editor.skins.panels.base.AutoPanelSkin'
        }]
    });

});