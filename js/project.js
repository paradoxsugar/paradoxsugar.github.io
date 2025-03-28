function whenDOMReady() {
	window.addEventListener('load', function() {
		if (location.pathname == '/project/') waterfall('#todolist');
	});
}
whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// 清单函数适配pjax

