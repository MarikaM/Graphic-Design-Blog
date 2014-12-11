$(function () {
	$('.utility.menus .form button[type="submit"]').on('click', function (event) {
		event.preventDefault()
		$('.utility.menus .form').addClass('active');
	})
});