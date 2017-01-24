// $(function(){

// 	alert("hey we loaded");

// });

// pass in jQuery and undefined
// keep foo hidden from window object
(function( $, undefined ) {
	var foo = $(".selector");

	foo.show();
})( jQuery );

// var sayRock = function() {
// 	alert("Rock!");
// }();

// //$(document).ready()
// $(function() {
// 	foo = $(".selector");
// 	foo.show();
// });

