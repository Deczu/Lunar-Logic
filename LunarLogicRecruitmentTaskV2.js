var tmp = [];

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
    text("↑↑Click title for my solution↑↑", 20, 40);
    text("For new input. Alter input box and press enter.", 20, 100);
    text(input, 20, 180);
    this.count = 0;
    this.letter = input[0];
    //this loop just rewrites input to tmp array
    for (var i = 0; i < input.length; i++) {
        this.letter = input[i]
        if (this.letter === input[i]) {
            this.count = 0;
            this.j = i;
            for (this.j; this.j < input.length; this.j++) {
                if (this.letter === input[this.j]) {
                    this.count += 1;
                } else {
                    if (this.count > 2) i = this.j;
                    break;
                }
            }
        }

        if (this.j === input.length && this.count === this.j) {
            tmp = [];
            break;
        } else {
            tmp = append(tmp, input[i]);
        }

    }
    input = tmp;
}