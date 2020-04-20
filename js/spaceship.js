class Spaceship extends FlyingObjects {
    statusInjured = false;
    constructor(spaceshipSelector) {
        super(spaceshipSelector),
            this.spaceshipSelector = spaceshipSelector
    }
    up() {
        const startYUp = setInterval(() => {
            this.spaceshipSelector.style.top = this.spaceshipSelector.offsetTop - 1 + 'px';
            this.topBorder();
        }, 50)
        addEventListener('keyup', function (event) {
            if (event.code === ARROWUP || event.code === ARROWDOWN) {
                clearInterval(startYUp);
            }
        })
    }
    doubleUp() {
        const startYDoubleUp = setInterval(() => {
            this.spaceshipSelector.style.top = this.spaceshipSelector.offsetTop - 2 + 'px';
            this.topBorder();
        }, 25)
        addEventListener('keyup', function (event) {
            if (event.code === ARROWDOWN) {
                clearInterval(startYDoubleUp);
            }
        })
    }
    stopUp() {
        this.spaceshipSelector.style.top = this.spaceshipSelector.offsetTop + 'px';
    }
    down() {
        const startYDown = setInterval(() => {
            this.spaceshipSelector.style.top = this.spaceshipSelector.offsetTop + 1 + 'px';
            this.downBorder();
        }, 50)
        addEventListener('keyup', function (event) {
            if (event.code === ARROWUP || event.code === ARROWDOWN) {
                clearInterval(startYDown);
            }
        })
    }
    doubleDown() {
        const startYDoubleDown = setInterval(() => {
            this.spaceshipSelector.style.top = this.spaceshipSelector.offsetTop + 2 + 'px';
            this.downBorder();
        }, 25)
        addEventListener('keyup', function (event) {
            if (event.code === ARROWUP) {
                clearInterval(startYDoubleDown);
            }
        })
    }
    stopLeft() {
        this.spaceshipSelector.style.left = this.spaceshipSelector.offsetLeft + 'px';
    }
    left() {
        const startXLeft = setInterval(() => {
            this.spaceshipSelector.style.left = this.spaceshipSelector.offsetLeft - 1 + 'px';
            this.leftBorder();
        }, 50)
        addEventListener('keyup', function (event) {
            if (event.code === ARROWRIGHT || event.code === ARROWLEFT) {
                clearInterval(startXLeft);
            }
        })
    }
    doubleLeft() {
        const startXDoubleLeft = setInterval(() => {
            this.spaceshipSelector.style.left = this.spaceshipSelector.offsetLeft - 2 + 'px';
            this.leftBorder();
        }, 25)
        addEventListener('keyup', function (event) {
            if (event.code === ARROWRIGHT) {
                clearInterval(startXDoubleLeft);
            }
        })
    }
    right() {
        const startXRight = setInterval(() => {
            this.spaceshipSelector.style.left = this.spaceshipSelector.offsetLeft + 1 + 'px';
            this.rightBorder();
        }, 50)
        addEventListener('keyup', function (event) {
            if (event.code === ARROWRIGHT || event.code === ARROWLEFT) {
                clearInterval(startXRight);
            }
        })
    }
    doubleRight() {
        const startXDoubleRight = setInterval(() => {
            this.spaceshipSelector.style.left = this.spaceshipSelector.offsetLeft + 2 + 'px';
            this.rightBorder();
        }, 25)
        addEventListener('keyup', function (event) {
            if (event.code === ARROWLEFT) {
                clearInterval(startXDoubleRight);
            }
        })
    }
    turnRight() {
        this.spaceshipSelector.style.transform += ROTATERIGHT;
    }
    turnLeft() {
        this.spaceshipSelector.style.transform += ROTATELEFT;
    }
    crashStatus() {
        this.statusInjured = true;
    }
    crashChecker() {
        for (const asteroidElement of asteroids) {
            const lengthX = Math.abs(this.getCoordinats().X + this.radius() - (asteroidElement.getCoordinats().X + asteroidElement.radius()));
            const lengthY = Math.abs(this.getCoordinats().Y + this.radius() - (asteroidElement.getCoordinats().Y + asteroidElement.radius()));
            const crashDistance = Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2));
            if (crashDistance <= (this.radius() + asteroidElement.radius())) {
                this.statusInjured = true;
            }
            if (this.statusInjured) {
                helpers.getElementAccess('.exitBlock').style.top = 0 + 'px';
                helpers.getElementAccess('h3').innerHTML = helpers.score;
            }
        }
    }
}
