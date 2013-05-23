var exec = require('child_process').exec
    ,colors = require('./node_modules/colors')
    ,web = '/Users/michael/projects/html-client/web/src/main/javascript/experiments/wysiwyg'
    ,skn = '/Users/michael/projects/html-client/skins/src/main/javascript/experiments'
    ,cmd = '', opn = '', mv = '';


function repTmp( src, trg ) {
  return 'perl -pi -e s/'  + src + '/'  + trg + '/g';
}
function doInput( inp ) {

  var input = inp;
  var label = input.replace(/./, function( s ) { return s.toLowerCase()} );
  var compName = '.' + input + 'Component.New.js'

  cmd += 'cp new/*.js tmp && cd tmp && ';
  cmd += 'for i in *.js; do mv "$i" `echo $i | sed s/Dummy/' + input + '/g`; done && ';
  cmd += repTmp( '%NAME%', input ) + ' *.js && ' + repTmp( '%LABEL%', label ) + ' *.js';

  mv += 'mv tmp/' + 'ComponentTypes'     + compName + ' ' + web + '/editor/data/presets/ && ';
  mv += 'mv tmp/' + 'WPanelsData'        + compName + ' ' + web + '/editor/data/ && ';
  mv += 'mv tmp/' + 'WEditorData'        + compName + ' ' + web + '/editor/data/ && ';
  mv += 'mv tmp/' + 'WSkinMap'           + compName + ' ' + skn + '/ && ';
  mv += 'mv tmp/' + input + 'Skin'       + compName + ' ' + skn + '/skins/viewer/ && ';
  mv += 'mv tmp/' + input + 'DataSchema' + compName + ' ' + web + '/common/dataTypes/ && ';
  mv += 'mv tmp/' + input + 'Panel'      + compName + ' ' + web + '/editor/components/panels/ && ';
  mv += 'mv tmp/' + input + 'Properties' + compName + ' ' + web + '/common/propertyTypes/ && ';
  mv += 'mv tmp/' + input                + compName + ' ' + web + '/viewer/components/';
}


function doCommand( command ) {
  exec( command, function( err, stdout, stderr ) {
    if ( err ) throw err;
  });
}

process.stdin.resume();
process.stdin.setEncoding( 'utf8' );


process.stdin.on( 'data', function ( user_input ) {

  var tmp = user_input.match( /name.*=.*\b(.+)\b/ );

  if( tmp ) {

    var nm = tmp.pop();


    doInput( nm );

    console.log( 'Sie sagte:'.green, nm.bold.green );

    process.nextTick( function(){
      console.log( 'Gern geschehen, ich habe es'.green, '\ntype'.yellow + '  move'.bold.magenta + ' to to copy files'.yellow )
    });

    doCommand( cmd );


  } else if ( user_input === 'move\n' ) {

    //console.log( mv )

    //doInput();
    //
    process.nextTick( function(){
      console.log( 'Gern geschehen, Auf Wiedersehen'.cyan );
    });
    doCommand( mv );

  } else if ( user_input === 'q\n' ) {

    console.log( 'Auf Wiedersehen'.cyan )
    process.exit();

  } else {
    console.log( 'Meine Kfirer!'.bold.red + '\n=============' );
    console.log( 'Entschuldigen Sie bitte, dass ich Sie störe,\nkönnen Sie die Frage wiederholen bitte?'.red )

  }

});

console.log( 'type '.yellow + 'name='.magenta + 'Name'.bold.magenta + ' to create new component'.yellow );
console.log( 'or type '.yellow + ' q'.bold.magenta + ' to quit'.yellow );
