define.experiment.newComponent('wysiwyg.editor.components.panels.TEMPLATE_NAME_Panel.TEMPLATE_NAME_Component.New', function(componentDefinition){
    /**@type core.managers.component.ComponentDefinition */
    var def = componentDefinition;

    def.inherits('wysiwyg.editor.components.panels.base.AutoPanel');

    def.resources(['W.Resources']);

    def.traits(['core.editor.components.traits.DataPanel']);

    def.dataTypes(['TEMPLATE_NAME_DataSchema']);

    //def.propertiesSchemaType('TEMPLATE_NAME_Properties');

    def.methods({
        initialize: function(compId, viewNode, args){

            this.parent(compId, viewNode, args);
        },

        _createFields: function(){

            var data = this.getDataItem()._schema;
            var radio = data.label.enum.map(function( label ){
                return {
                    label: label,
                    value: label
                }
            });

            this.addInputGroupField(function() {
                this.addRadioButtonsField(this._translate('kekekeke'), radio, 'opt 1', 'opt 2').bindToField('label');
            });

//            this.addInputGroupField(function(){
//                this.addInputField(this._translate('GENERAL_DESCRIPTION'), null, 0, 50, null, null, null).bindToField('description');
//            });
//
//            this.addInputGroupField(function(){
//                this.addComboBox(this._translate('@@@')).bindToProperty('@@@config');
//            });

        }
    });

});
