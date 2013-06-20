var BOSH_SERVICE = 'http://localhost:5280/http-bind/';
var connection = null;

$(document).ready(function() {
	connection = new Strophe.Connection(BOSH_SERVICE);
	connection.connect("sendinguser@127.0.0.1", "sendingpass", onConnect);
});

function onConnect(status) {
	$('#notifications').html('<p class="welcome">Hello! Any new posts will appear below.</p>');
	connection.addHandler(notifyUser, null, 'message', null, null, null);
	connection.send($pres().tree());
}

function notifyUser(msg) {
	if (msg.getAttribute('from') == "testuser@127.0.0.1/pingstream") {
		var elems = msg.getElementsByTagName('body');
		var body = elems[0];
		$('#notifications').append(Strophe.getText(body));
	}
	return true;
}