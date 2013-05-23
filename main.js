var exec = require('child_process').exec;

var web = '/Users/michael/projects/html-client/web/src/main/javascript/experiments/wysiwyg';
var skn = '/Users/michael/projects/html-client/skins/src/main/javascript/experiments'
var input = process.argv[ 2 ] || 'ShaiKfir';
var tabName = input.replace(/./, function( s ) { return s.toLowerCase()} );

var cmd = 'cp web/*.js tmp && cd tmp && '

cmd += 'for i in *.js; do mv "$i" `echo $i | sed s/Dummy/' + input + '/g`; done && '
cmd += "perl -pi -e 's/TEMPLATE_NAME_/" + input + "/g' *.js && "

var compName = '.' + input + 'Component.New.js';


cmd += 'mv ' + 'ComponentTypes'     + compName + ' ' + web + '/editor/data/presets/ && ';
cmd += 'mv ' + 'WPanelsData'        + compName + ' ' + web + '/editor/data/ && ';
cmd += 'mv ' + 'WEditorData'        + compName + ' ' + web + '/editor/data/ && ';
cmd += 'mv ' + 'WSkinMap'           + compName + ' ' + skn + '/ && ';
cmd += 'mv ' + input + 'Skin'       + compName + ' ' + skn + '/skins/viewer/ && ';
cmd += 'mv ' + input + 'DataSchema' + compName + ' ' + web + '/common/dataTypes/ && ';
cmd += 'mv ' + input + 'Panel'      + compName + ' ' + web + '/editor/components/panels/ && ';
cmd += 'mv ' + input + 'Properties' + compName + ' ' + web + '/common/propertyTypes/ && ';
cmd += 'mv ' + input                + compName + ' ' + web + '/viewer/components/';


exec(cmd, function(err, stdout, stderr) {
  if (err) throw err;
  console.log( 'new ' + input + ' component created')
});

//cp `find /Users/michael/projects/html-client/web/src/main/javascript/experiments/ -name "*Pinterest*"` .