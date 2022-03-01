import randomString from "random-string";
console.log(randomString());

samp.on(EVENT_PLAYER_CONNECT, (playerid) => {
    samp.callNative('SendClientMessage', 'iis', playerid, 0xff00ffff, "Welcome to the server player " + playerid);
});