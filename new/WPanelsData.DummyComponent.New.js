define.experiment.dataItem('PROPERTY_PANELS.%NAME%Component.New', function(experimentStrategy){
    /** %type bootstrap.managers.experiments.ExperimentStrategy */
    var strategy = experimentStrategy;

    return strategy.merge({
        'items':[{
            'dataType': '%NAME%DataSchema',
            'compType': 'wysiwyg.viewer.components.%NAME%',
            'panelCompType': 'wysiwyg.editor.components.panels.%NAME%Panel',
            'panelSkinType': 'wysiwyg.editor.skins.panels.base.AutoPanelSkin'
        }]
    });

});