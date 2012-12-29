document.addEventListener('DOMContentLoaded', function () {
	window.setTimeout(function() { window.close(); }, 5000);
	$("#disableNotification").click(disableNotification);
});
function disableNotification() {
	localStorage['syncnotify'] = 'false';
	window.close();	
}