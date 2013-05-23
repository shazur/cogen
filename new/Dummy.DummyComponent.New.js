/**
 * %class wysiwyg.viewer.components.%NAME%.%NAME%Component.New
 */
define.experiment.newComponent('wysiwyg.viewer.components.%NAME%.%NAME%Component.New', function(componentDefinition, experimentStrategy){

    /**%type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    //def.propertiesSchemaType('%NAME%Properties');
    //def.utilize([]);
    //def.statics({});

    def.inherits('core.components.base.BaseComp');
    def.resources(['W.Config', 'topology']);

    def.dataTypes(['%NAME%DataSchema']);
    def.skinParts({
        label: { type: 'htmlElement' },
        image: { type: 'htmlElement' }
    });


    def.fields({
        EDITOR_META_DATA: {
            general: {
                settings: true,
                design: false
            }
        }
    });

    def.methods({
        initialize: function ( compId, viewNode, args ) {
            this.parent(compId, viewNode, args);
        },
        _onRender: function ( e ) {
            var data = this.getDataItem();
            this._skinParts.label.set('html', data._data.label);

        }
    });
});