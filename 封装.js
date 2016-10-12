var myObject = ( function() {
  var __name = 'sven';  // private variable

  return {
    getName: function() {
      return __name;
    }
  };

})();


console.log( myObject.getName() );
console.log( myObject.__name );

