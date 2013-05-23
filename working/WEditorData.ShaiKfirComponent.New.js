define.experiment.dataItem('ADD_COMPONENT_TABS.ShaiKfirComponent.New',  function (experimentStrategy) {
    /**@type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;
    return strategy.merge({
        items:{
            'shaiKfir': {
               'type'    : 'Button'
              ,'category': 'social'
              ,'iconSrc' : 'buttons/add_social_06.png'
              ,'label'   : 'ShaiKfir'
              ,'command' : 'WEditorCommands.AddComponent'
              ,'order'   : 0
              ,'commandParameter': { 'compType': 'addShaiKfir', 'styleId'  : 'shk1' }
            }
        }
    });
});

define.experiment.dataItem('STYLES.ShaiKfirComponent.New',  function (experimentStrategy) {
    /**@type bootstrap.managers.experiments.ExperimentStrategy*/
    var strategy = experimentStrategy;
    return strategy.merge({
        styleItems:{
            'wysiwyg.viewer.components.ShaiKfir':['shk1']
        }
    });
});

