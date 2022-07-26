/*
    This class controls the bullets. The object that follows the player is not controlled by this class
    
    createBullets() - creates bullets in the array passed to the class using rect()
    shoot()  - follows the x,y coords given to it (in this case the mouseX and mouseY)
*/

class Gun {
    constructor(bullet) {
        this.bullet = bullet;
    }
    
    createBullets(x,y) {
        fill(255,255,0);
        ellipse(x, y, 10);
    }

    shoot(x, y) {
        if(this.bullet.xPos<x){
            this.bullet.xPos += this.bullet.speedValue;
        }
        else if(this.bullet.xPos>x) {
            this.bullet.xPos -= this.bullet.speedValue;
        }

        if(this.bullet.yPos<y){
            this.bullet.yPos += this.bullet.speedValue;
        }
        else if(this.bullet.yPos>y) {
            this.bullet.yPos -= this.bullet.speedValue;
        }

        if(this.bullet.xPos == x && this.bullet.yPos == y) {
            return true;
        }
    }
}