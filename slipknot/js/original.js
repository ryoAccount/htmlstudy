$(function() {
	$('#gototop').hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#gototop').fadeIn();
		} else {
			$('#gototop').fadeOut();
		}
	});

	 $('#gototop').click(function () {
		$('body').animate({
			scrollTop: 0
		}, 500);
		return false;
	 });
});

$(function(){
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function() {
		// スクロールの速度
		var speed = 500; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body').animate({
			scrollTop:position
		}, speed, 'swing');
		return false;
	});
});

/* spMenu */
function drawerMenu() {
	$('#splink').slideToggle();
	$('#hamburger').toggleClass('active');
}

