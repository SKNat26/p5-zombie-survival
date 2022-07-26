/*
    class used to control one player with the WASD keys
    controlls the speed of player (might be useful later for powerups) and position of player
    move() - uses ASCII values to update the player's positions
*/

class Player {
    constructor(x, y, speed){
        this.xPos = x;
        this.yPos = y;
        this.speedValue = speed;
    }

    move() {
        if (keyIsDown(65)) {
            this.xPos -= this.speedValue;
        }
    
        if(keyIsDown(68)) {
            this.xPos += this.speedValue;
        }
    
        if(keyIsDown(87)) {
            this.yPos -= this.speedValue;
        }
    
        if(keyIsDown(83)) {
            this.yPos += this.speedValue;
        }

        if(this.xPos>=1500) {
            this.xPos = 0;
        }
        else if(this.xPos<=0) {
            this.xPos = 1500;
        }

        if(this.yPos>=800) {
            this.yPos = 0;
        }
        else if(this.yPos<=0) {
            this.yPos = 800;
        }
    }
}
