samp.on(EVENT_PLAYER_CONNECT, (playerid) => {
    let name = samp.callNative("GetPlayerName", "iSi", playerid, 24);
    samp.callNative("SendClientMessageToAll", "is", -1, "{006600}[JOIN] {ffffff}" + name + " bergabung ke dalam server.");
});