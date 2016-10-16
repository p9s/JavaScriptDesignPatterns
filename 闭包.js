for ( var i = 0, len = nodes.length; i< len; i++ ) {
  ( function(i) {
    nodes[i].onclick = function() {
      console.log( i );
    }
  })( i );
}



var Type = {};

for ( var  i = 0, type; type = [ 'String', 'Array', 'Number' ][i++]) {
  ( function( type ) {
    Type[ 'is' + type ] = function(obj) {
      return Object.prototype.toString.call( obj ) === '[object ' + type  + ']';
    }
  })(type)
}



var mult = function() {
  var a = 1;

  for ( var i = 0, l = arguments.length; i < l; i++ ) {
    a = a * arguments[i];
  }

  return a;
}


var cache = {};

var mult = function() {
  var args = Array.prototype.join.call( arguments, ', ' );
  if ( cache[ args ] ) {
    return cache[ args ];
  }

  var a = 1;
  for ( var i = 0, l = arguments.length; i < l; i++ ) {
    a = a * arguments[i];
  }

  return cache[ args ] = a;
}



var mult = ( function() {
  var cache = {};

  return function() {
    var args = Array.prototype.join.call( arguments, ', ' );
    if  ( args in cache ) {
      return cache[args];
    }

    var a = 1;
    for ( var i = 0, l = arguments.length; i < l; i++ ) {
      a = a * arguments[i];
    }

    return cache[args] = a;
  }
})();



var mult = ( function() {
  var chache = {};

  var caculate = function() {
    var a = 1;

    for ( var i = 0, l = arguments.length; i < l; i++ ) {
      a = a * arguments[i];
    }

    return a;
  };

  return function() {
    var args = Array.prototype.join.call( arguments, ', ' );
    if ( args in cache ) {
      return cache[args];
    }

    return cache[args] = caculate.apply( null, arguments );
  }
})();



var report = function( src ) {
  var img = new Image();
  img.src = src;
};

report( 'http://babala.com/getInfo' );


var report = ( function() {
  var imgs = [];

  return function( src ) {
    var img = new Image();
    imgs.push( img );
    img.src = src;
  }
})();

