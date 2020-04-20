class Asteroid extends FlyingObjects {
    result = 10;
    smallAsteroid = null;
    directionOfMovement = null;
    constructor(asteroid, statusInjured) {
        super(asteroid),
            this.asteroid = asteroid
            this.statusInjured = statusInjured
    }
    setStatusInjured(status) {
        this.statusInjured = status;
    }
    halfOfAsteroid(coordinatXResult, classOfElement) {
        const coordinatX = coordinatXResult;
        const radius = this.radius();
        const coordinatY = this.getCoordinats().Y;
        const elementParent = this.asteroid.parentElement;
        this.smallAsteroid = helpers.createElement.call(Asteroid, {
            coordinatY: coordinatY,
            width: radius,
            height: (radius * 2),
            elementParent: elementParent
        }, coordinatX, classOfElement);
    }
    rotateHalfOfAsteroid(degree) {
        const halfAsteroid = this.smallAsteroid;
        helpers.rotateObject(degree, halfAsteroid);
    }
    fragmentation() {
        if (this.radius() > 16) {
            this.halfOfAsteroid((this.getCoordinats().X + this.radius()), 'rightAsteroid');
            this.rotateHalfOfAsteroid(45);
            this.transformHalfAsteroidToSmallAsteroid();
            this.halfOfAsteroid(this.getCoordinats().X, 'leftAsteroid');
            this.rotateHalfOfAsteroid(-45);
            this.transformHalfAsteroidToSmallAsteroid();
            this.asteroid.parentElement.removeChild(this.asteroid);
            helpers.score += this.result; 
        } else {
            this.asteroid.parentElement.removeChild(this.asteroid);
            helpers.score += (this.result + 10);
        }
        const asteroidCounter = asteroids.filter((element) => {
            if(element.statusInjured) return element;
        })
        if (asteroidCounter.length === 35) {
            smallUfo.moveDownRight();
            smallUfo.ufoAttack();
        }
        if (asteroidCounter.length === 43) {
            helpers.getElementAccess('h2').innerHTML = WINNERPHRASE;
            helpers.getElementAccess('.exitBlock').style.top = 0 + 'px';
            helpers.getElementAccess('h3').innerHTML = helpers.score;
        }
    }
    transformHalfAsteroidToSmallAsteroid() {
        let halfOfAsteroid = null;
        if (this.smallAsteroid.classList.contains('leftAsteroid')) {
            halfOfAsteroid = 'leftAsteroid';
            this.smallAsteroid.classList.replace('leftAsteroid', 'asteroid');
        } else {
            halfOfAsteroid = 'rightAsteroid';
            this.smallAsteroid.classList.replace('rightAsteroid', 'asteroid');
        }
        this.smallAsteroid.style.height = this.smallAsteroid.style.width;
        const smallAsteroid = new SmallAsteroid(this.smallAsteroid, this.directionOfMovement, halfOfAsteroid);
        asteroids.push(smallAsteroid);
        smallAsteroid.moveSmallAsteroid();
    }
    crashStatus(){
        this.setStatusInjured(true);
        this.fragmentation();
    }
    moveUpLeft() {
        const moveUpLeftInterval = setInterval(() => {
            this.asteroid.style.top = this.asteroid.offsetTop - 2 + 'px';
            this.asteroid.style.left = this.asteroid.offsetLeft - 2 + 'px';
            this.directionOfMovement = MOVEMENT_UPLEFT;
            this.topBorder();
            this.leftBorder();
            if (this.statusInjured) clearInterval(moveUpLeftInterval);
        }, 25)
    }
    moveUpRight() {
        const moveUpRightInterval = setInterval(() => {
            this.asteroid.style.top = this.asteroid.offsetTop - 2 + 'px';
            this.asteroid.style.left = this.asteroid.offsetLeft + 2 + 'px';
            this.directionOfMovement = MOVEMENT_UPRIGHT;
            this.topBorder();
            this.rightBorder();
            if (this.statusInjured) clearInterval(moveUpRightInterval);
        }, 25)
    }
    moveDownRight() {
        const moveDownRightInterval = setInterval(() => {
            this.asteroid.style.top = this.asteroid.offsetTop + 2 + 'px';
            this.asteroid.style.left = this.asteroid.offsetLeft + 2 + 'px';
            this.directionOfMovement = MOVEMENT_DOWNRIGHT;
            this.rightBorder();
            this.downBorder();
            if (this.statusInjured) clearInterval(moveDownRightInterval);
        }, 25)
    }
    moveDownLeft() {
        const moveDownLeftInterval = setInterval(() => {
            this.asteroid.style.top = this.asteroid.offsetTop + 2 + 'px';
            this.asteroid.style.left = this.asteroid.offsetLeft - 2 + 'px';
            this.directionOfMovement = MOVEMENT_DOWNLEFT;
            this.downBorder();
            this.leftBorder();
            if (this.statusInjured) clearInterval(moveDownLeftInterval);
        }, 25)
    }
}


