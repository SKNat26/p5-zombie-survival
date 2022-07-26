let player; //main player 

let gun;
//let bullets = []; //array of bullets that gets updated if player uses them or reloads
let bullet;
let bulletShot = false;
//let ammoStatus; //displays length of bullets

let zombies = []; //array of existing zombies

function setup() {
    createCanvas(1500,800);
    background(165,42,42);
    rectMode(CENTER);

    player = new Player(750, 400, 10);
    bullet = new Bullet(player.xPos, player.yPos+30);
    
    gun = new Gun (bullet);
    //ammoStatus = bullets.length;

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
    
    if(bulletShot == true && !gun.shoot(mouseX,mouseY)){
        gun.shoot(mouseX,mouseY);
    }
    else if(bulletShot == true && gun.shoot(mouseX,mouseY)) {
        bulletShot = false;
    }
    else {
        gun.createBullets(player.xPos, player.yPos+40);
    }

    fill(0);
    rect(player.xPos, player.yPos+40, 10, 30); // gun (the Gun class doesn't affect this)

    fill(0,255,0);
    for(let i = 0; i<zombies.length; i++) {
        rect(zombies[i].xPos, zombies[i].yPos,50,50);
        zombies[i].follow(player.xPos, player.yPos);
    }

    // fill(255);
    // textSize(30);
    // text("Ammo: " + ammoStatus, 1350, 50);
}

function mouseClicked() {
    bulletShot = true;
}