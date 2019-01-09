$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-image: linear-gradient(to bottom right, #dbffc1, #ffff8b, #d0ecf7, #fedcff, #fdd5de););
	},function() {
		$(this).css("background-color", "#000038");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#F0027E");
	}, function() {
		$(this).css("background-color", "#000038");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
