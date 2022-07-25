let player;
let gun;
let zombies = [];

function setup() {
    createCanvas(1500,800);
    background(165,42,42);
    rectMode(CENTER);

    player = new Player(750, 400, 10);
    gun = new Gun (player.xPos, player.yPos+40, [23]);
    for(let i = 0; i<10; i++) {
        let temp = new Zombie(random(1500), random(800), 1);
        zombies.push(temp);
    }
}

function draw() {
    background(165,42,42,100);

    fill(0,0,255);
    rect(player.xPos, player.yPos, 50, 50);
    player.move();

    fill(0);
    rect(player.xPos, player.yPos+40, 10, 30);

    fill(0,255,0);
    for(let i = 0; i<zombies.length; i++) {
        rect(zombies[i].xPos, zombies[i].yPos,50,50);
        zombies[i].follow(player.xPos, player.yPos);
    }
}

function mouseClicked() {

}

// class Bullet {
    
// }