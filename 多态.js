// var makeSound = function( animal ) {
//   if ( animal instanceof Duck ) {
//     console.log( '嘎嘎嘎' );
//   }else if ( animal instanceof Chicken ) {
//     console.log( '咯咯咯' );
//   }

// };


// var Duck = function() {};
// var Chicken = function() {};

// makeSound( new Duck() );
// makeSound( new Chicken() );


var makeSound = function( animal ) {
  animal.sound();
};


var Duck = function(){};
Duck.prototype.sound = function() {
  console.log( '嘎嘎嘎' );
};

var Chicken = function() {};
Chicken.prototype.sound = function() {
  console.log( '咯咯咯' );
};

makeSound( new Duck() );
makeSound( new Chicken() );

var googleMap = {
  show: function() {
    console.log( '开始渲染google地图' );
  }
};

var baiduMap = {
  show: function() {
    console.log( '开始渲染Baidu地图' );
  }
};

var sosoMap = {
  show: function() {
    console.log( '开始渲染Soso地图' );
  }
};

// var renderMap = function() {
//   googleMap.show();
// };

var renderMap = function( map ) {
  if ( map.show instanceof Function ) {
    map.show();
  }
};

renderMap( googleMap );
renderMap( baiduMap );
renderMap( sosoMap );





