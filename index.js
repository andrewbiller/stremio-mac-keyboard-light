var async = require("async");
var child = require("child_process");

// Check if we are running on a mac and turn off
function turn_off_light_kb() {
      if (process.platform.match("darwin")){
         child.exec("bin/kbrightness 0");
        return true;
  }
}

// Check if we are running on a mac and set it bright
function turn_on_light_kb() {
      if (process.platform.match("darwin")){
         child.exec("bin/kbrightness 0.4");
        return true;
  }
}

var Stremio = require("stremio-addons");

var manifest = {
    "name": "Mac Keyboard Light",
    "description": "Turn off backlight from mac keyboards when playing content",
    "id": "org.stremio.mackblight",
    "version": require("./package").version,
    "types": ["movie", "series", "channel"],
    "idProperty": "imdb_id",

    // OBSOLETE; used instead of types/idProperty before stremio 4.0
    "filter": { "query.imdb_id": { "$exists": true }, "query.type": { "$in":["series","movie"] } }
};


var methods = { };

var addon = new Stremio.Server({
    "stream.find": turn_off_light_kb,
    "meta.get": turn_off_light_kb,
    "meta.search": turn_on_light_kb,
    "meta.find": turn_on_light_kb
}, { stremioget: true}, manifest);

// Listen to 7099 if we're stand-alone
if (require.main===module) var server = require("http").createServer(function (req, res) {
    addon.middleware(req, res, function() { res.end() })
}).on("listening", function()
{
    console.log("Mac Keyboard Light Addon listening on "+server.address().port);
}).listen(process.env.PORT || 7099);

// Export for local usage
module.exports = addon;
