var Hapi = require("hapi");
var Path = require("path");
var server = new Hapi.Server();

server.views({
  engines: {
    html: require("handlebars")
  },
  path: Path.join(__dirname, "templates"),
  helpersPath: 'helpers'
});

server.connection({
  host: "localhost",
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: "/",
  method: "GET",
  handler: {
    view: "helping.html"
  }
});

server.start();
