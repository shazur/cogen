define.experiment.dataItem('ADD_COMPONENT_TABS.%NAME%Component.New',  function (experimentStrategy) {
    /**%type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;
    return strategy.merge({
        items:{
            '%LABEL%': {
               'type'    : 'Button'
              ,'category': 'social'
              ,'iconSrc' : 'buttons/add_social_06.png'
              ,'label'   : '%NAME%'
              ,'command' : 'WEditorCommands.AddComponent'
              ,'order'   : 0
              ,'commandParameter': { 'compType': 'add%NAME%', 'styleId'  : 'dummy1' }
            }
        }
    });
});

define.experiment.dataItem('STYLES.%NAME%Component.New',  function (experimentStrategy) {
    /**%type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;
    return strategy.merge({
        styleItems:{
            'wysiwyg.viewer.components.%NAME%':['dummy1']
        }
    });
});