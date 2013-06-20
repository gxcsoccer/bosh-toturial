var nxb = require("node-xmpp-bosh"),
	server = nxb.start_bosh(),
	express = require('express'),
	app = express();

app.use(express.static(__dirname));

app.listen(8080);
