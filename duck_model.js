var duck = {
  duckSining: function(){
    console.log( 'ga ga ga' );
  }
};


var chicken = {
  duckSining: function() {
    console.log( 'ga ga ga' );
  }
};

var choir = [];

var joinChoir = function( animal ) {
  if ( animal && typeof animal.duckSining === 'function' ) {
    choir.push( animal);
    console.log( 'Success joined!' );
    console.log( 'Choir members: ' + choir.length );
  }
};

joinChoir( duck );
joinChoir( chicken );

