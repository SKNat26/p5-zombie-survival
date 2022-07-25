class Zombie {
    constructor(x, y, speed){
        this.xPos = x;
        this.yPos = y;
        this.speedValue = speed;
    }

    follow(x, y) {
        if(this.xPos<x){
            this.xPos += this.speedValue;
        }
        else if(this.xPos>x) {
            this.xPos -= this.speedValue;
        }

        if(this.yPos<y){
            this.yPos += this.speedValue;
        }
        else if(this.yPos>y) {
            this.yPos -= this.speedValue;
        }
    }
}