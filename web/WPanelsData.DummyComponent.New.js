define.experiment.dataItem('PROPERTY_PANELS.TEMPLATE_NAME_Component.New', function(experimentStrategy){
    /** @type bootstrap.managers.experiments.ExperimentStrategy */
    var strategy = experimentStrategy;

    return strategy.merge({
        'items':[{
            'dataType': 'TEMPLATE_NAME_DataSchema',
            'compType': 'wysiwyg.viewer.components.TEMPLATE_NAME_',
            'panelCompType': 'wysiwyg.editor.components.panels.TEMPLATE_NAME_Panel',
            'panelSkinType': 'wysiwyg.editor.skins.panels.base.AutoPanelSkin'
        }]
    });

});