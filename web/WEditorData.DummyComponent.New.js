define.experiment.dataItem('ADD_COMPONENT_TABS.TEMPLATE_NAME_Component.New',  function (experimentStrategy) {
    /**@type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;
    return strategy.merge({
        items:{
            'TEMPLATE_NAME_': {
               'type'    : 'Button'
              ,'category': 'social'
              ,'iconSrc' : 'buttons/add_social_06.png'
              ,'label'   : 'TEMPLATE_NAME_'
              ,'command' : 'WEditorCommands.AddComponent'
              ,'order'   : 0
              ,'commandParameter': { 'compType': 'addTEMPLATE_NAME_', 'styleId'  : 'dummy1' }
            }
        }
    });
});

define.experiment.dataItem('STYLES.TEMPLATE_NAME_Component.New',  function (experimentStrategy) {
    /**@type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;
    return strategy.merge({
        styleItems:{
            'wysiwyg.viewer.components.TEMPLATE_NAME_':['dummy1']
        }
    });
});