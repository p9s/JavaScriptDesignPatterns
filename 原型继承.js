// // WebStom 可以正常运行

// function Person(name) {
//     this.name = name;
// };


// Person.prototype.getName = function () {
//     return this.name;
// };

// var a = new Person('sven');
// console.log( a.name );
// console.log( a.getName() );
// console.log( Person.prototype === Object.getPrototypeOf(a) );



// var objectFactory = function() {
//   var obj = new Object, Constructor = [].shift.call( arguments );

//   obj.__proto__ = Constructor.prototype;
//   var ret = Constructor.apply( obj, arguments );

//   return typeof ret === 'object' ? ret : obj;
// };


// var b = objectFactory( Person, 'sven' );


var obj = { name: 'sven' };
var A = function(){};

A.prototype = obj;

var a = new A();
console.log( a.name );
