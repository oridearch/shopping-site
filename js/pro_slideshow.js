$(window).load(function() {
	$("#pro_li_img img").click(function(){
		var img_src = $(this).attr("src");
		$("#pro_display_img img").attr("src", img_src);
	});
});