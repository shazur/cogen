define.experiment.newSkin('skins.viewer.%NAME%Skin.%NAME%Component.New', function(SkinDefinition) {
    var def = SkinDefinition;
    def.inherits('core.managers.skin.BaseSkin2');
    def.skinParams([]);
    def.html('<div skinpart="image"></div><div skinpart="label"></div>');
    def.css([]);
});
