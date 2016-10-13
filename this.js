// this 的指向

// 1. 作为对象的方法调用
var obj = {
  a: 1,
  getA: function() {
    alert( this === obj );
    alert( this.a );
  }
};


obj.getA();


// 2. 作为普通函数调用
window.name = 'globalName';
var getName = function() {
  return this.name;
};

console.log( getName() );

// or

window.name = 'globalName';
var myObject = {
  name: 'sven',
  getName: function() {
    return this.name;
  }
};

var getName = myObject.getName;
console.log( getName() );


// 3. 构造器调用

var MyClass = function() {
  this.name = 'sven';
};

var obj = new MyClass();
console.log( obj.name );  // output 'sven'


var MyClass = function() {
  this.name = 'sven';
  return {
    name: 'anne'
  }
};

var obj = new MyClass();
console.log( obj.name ); // output 'anne'


var MyClass = {
  this.name = 'sven';
  return 'anne';
};

var obj = new MyClass();
console.log( obj.name );  // output: 'sven'


// 4. Function.prototype.call or Function.prototype.apply 调用
var obj1 = {
  name: 'sven',
  getName: function() {
    return this.name;
  }
};

var obj2 = {
  name: 'anne'
};

console.log( obj1.getName() ); // output: sven
console.log( obj1.getName.call( obj2 ) ); // output: anne
