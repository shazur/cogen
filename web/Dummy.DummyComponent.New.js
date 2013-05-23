/**
 * @class wysiwyg.viewer.components.TEMPLATE_NAME_.TEMPLATE_NAME_Component.New
 */
define.experiment.newComponent('wysiwyg.viewer.components.TEMPLATE_NAME_.TEMPLATE_NAME_Component.New', function(componentDefinition, experimentStrategy){

    /**@type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    //def.propertiesSchemaType('TEMPLATE_NAME_Properties');
    //def.utilize([]);
    //def.statics({});

    def.inherits('core.components.base.BaseComp');
    def.resources(['W.Config', 'topology']);

    def.dataTypes(['TEMPLATE_NAME_DataSchema']);
    def.skinParts({
        label: { type: 'htmlElement' }
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