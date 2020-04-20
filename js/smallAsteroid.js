class SmallAsteroid extends Asteroid {
    result = 20;
    constructor(smallAsteroid, directionOfMovement, halfOfAsteroid) {
        
        super(smallAsteroid, false),
            this.newAsteroid = smallAsteroid,
            this.directionOfMovement = directionOfMovement,
            this.pieceOfAsteroid = halfOfAsteroid
    }
    moveSmallAsteroid() {
        if (this.directionOfMovement === MOVEMENT_UPLEFT || this.directionOfMovement === MOVEMENT_UPRIGHT) {
            if (this.pieceOfAsteroid === 'leftAsteroid') this.moveUpLeft();
            else this.moveUpRight();
        } else {
            if (this.pieceOfAsteroid === 'leftAsteroid') this.moveDownLeft();
            else this.moveDownRight();
        }
    }
}