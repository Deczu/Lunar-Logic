var tmp = [];
var occurRate = [];
console.log("PepeSad")

function setup() {
    alter = createInput('AABBCCCCBDDDADB', 'text');
    input = alter.value();
    alter.style('font-size', '30px');
    alter.changed(setInput);
    createCanvas(800, 250);
    fill(255);
    textSize(30);
    frameRate(1);
}

function draw() {
    background(220);
    background(0);
    solve();
}


function setInput() {
    createCanvas(800, 250);
    fill(255);
    textSize(30)
    input = alter.value();
}



function solve() {
    var tmp = [];
    var occurRate = [];
    text("↑↑Click title for my solution↑↑", 20, 40);
    text("For new input. Alter input box and press enter.", 20, 100);
    text(input, 20, 180);

    //this for loop counts occur rates of the same letter in a row
    //and creates array of it
    for (var i = 0; i < input.length; i++) {
        this.count = 0;
        if (input[i] === input[i + 1]) {
            j = i;
            this.letter = input[i];
            for (j; j < input.length; j++) {
                if (this.letter == input[j]) this.count += 1;
                if (this.letter != input[j]) break;
            }
            occurRate = append(occurRate, this.count);
            i = i + this.count - 1;
        } else {
            occurRate = append(occurRate, 1);
        }
    }
    j = 0;
    var k = 0;
    //this loop looks for occur Rate of letters if its smallet than 3 then it is added to tmp array
    //otherwise it skips increses index in appending loop that rewrites array
    //so it skips the letters of occurRate that is 3 or greater :D
    for (var i = 0; i < occurRate.length; i++) {
        if (occurRate[i] < 3) {
            j = j + occurRate[i];
            for (k; k < j; k++) tmp = append(tmp, input[k]);
            k = j;
        }
        if (occurRate[i] > 2) {
            j = j + occurRate[i];
            k = j;
        }

    }
    input = tmp;
    if (max(occurRate) < 2) input = alter.value();
}