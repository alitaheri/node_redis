var client = require("./util").getClient();
client.unref();
client.flushdb(function () {
    require("./commands/append");
    require("./commands/auth");
    // require("./commands/bgrewriteaof");
    // require("./commands/bgsave");
    require("./commands/bitcount");
    require("./commands/bitpos");
    require("./commands/client");
    require("./commands/eval");
    require("./commands/evalsha");
    require("./commands/get");
    require("./commands/incr");
    require("./commands/multi");
    require("./commands/select");
    require("./commands/set");
});