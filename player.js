class Player {
    constructor(x, y, speed){
        this.xPos = x;
        this.yPos = y;
        this.speedValue = speed;
    }

    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.xPos -= this.speedValue;
        }
    
        if(keyIsDown(RIGHT_ARROW)) {
            this.xPos += this.speedValue;
        }
    
        if(keyIsDown(UP_ARROW)) {
            this.yPos -= this.speedValue;
        }
    
        if(keyIsDown(DOWN_ARROW)) {
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
