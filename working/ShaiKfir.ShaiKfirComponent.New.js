/**
 * @class wysiwyg.viewer.components.ShaiKfir.ShaiKfirComponent.New
 */
define.experiment.newComponent('wysiwyg.viewer.components.ShaiKfir.ShaiKfirComponent.New', function(componentDefinition, experimentStrategy){

    /**@type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    //def.propertiesSchemaType('ShaiKfirProperties');
    //def.utilize([]);
    //def.statics({});

    def.inherits('core.components.base.BaseComp');
    def.resources(['W.Config', 'topology']);

    def.dataTypes(['ShaiKfirDataSchema']);
    def.skinParts({
        label: { type: 'htmlElement' },
        image: { type: 'htmlElement' }
    });


    def.fields({
        EDITOR_META_DATA: {
            general: {
                settings: true,
                design: true
            }
        }
    });

    def.methods({
        initialize: function ( compId, viewNode, args ) {
            this.parent(compId, viewNode, args);
        },
        _onRender: function ( e ) {


            var data = this.getDataItem();
            var img = '<img src="' + data._schema.image.src + '"/>';

            this._skinParts.label.set('html', data._data.label);
            this._skinParts.image.set('html', img);
        }
    });
});