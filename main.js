/*
This is the main JS code for the game, using features of <canvas>.

It is imported into main.html.
*/


/*
Before we continue, a legend for the game maps:

N = Enter door
X = Exit door
  = Blank cell (normal)
W = Wall (filled in cell: you can't step in it)
D = Down gate (makes it so gravity is down, like a side-scroller)
O = Out gate (makes it so gravity is out, like a Pokemon game or something)
T = Trap (you step on it in Out mode, you die)
S = Spikes (you step on it in Down mode or touch it in Out mode, you die)
[#] = Teleporter (comes in pairs, so 1 goes to 1, 2 to 2, etc.)
*/
var testMap0 = [
    ["N"," "," "," "," "," ","1"," "," "," ","W"," "," "," ","2"," "],
    ["W","W"," ","O"," ","D"," "," "," "," ","W"," "," "," "," "," "],
    [" ","W","T","O"," ","D"," "," "," "," ","S"," "," "," "," "," "],
    [" ","W"," ","T"," ","D"," "," "," "," ","W"," "," "," "," "," "],
    [" ","W"," "," ","T","W","W","S"," "," ","S"," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," ","W"," "," "," "," "," "],
    [" "," "," "," "," "," ","T"," "," ","W","W"," "," "," "," "," "],
    [" "," "," ","2"," "," ","T"," ","W","W"," "," "," "," ","X"," "],
    [" "," "," ","W","W","W","1","W","W"," "," "," "," "," "," "," "],
    ];

function main() {
    // main game function
    // this should be at the end of the file
    var canvas = document.getElementById("game").getContext("2d");
    var activeGameMap; // will point to whatever level is on top at the moment
}

main();
