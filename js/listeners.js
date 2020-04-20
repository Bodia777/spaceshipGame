addEventListener('keyup', function (event) {
    switch(event.code){
        case ARROWUP: 
            if (helpers.directionY === UP || helpers.directionY === DOUBLEUP) {
                spaceship.doubleUp();
                helpers.directionY = DOUBLEUP;
            } else if (helpers.directionY === null) {
                spaceship.up();
                helpers.directionY = UP;
            } else if (helpers.directionY === DOWN) {
                spaceship.stopUp();
                helpers.directionY = null;
            } else if (helpers.directionY === DOUBLEDOWN) {
                spaceship.down();
                helpers.directionY = DOWN;
            }
            break;
        case ARROWDOWN:
            if (helpers.directionY === DOUBLEUP) {
                spaceship.up();
                helpers.directionY = UP;
            } else if (helpers.directionY === UP) {
                spaceship.stopUp();
                helpers.directionY = null;
            } else if (helpers.directionY === null) {
                spaceship.down();
                helpers.directionY = DOWN;
            } else if (helpers.directionY === DOWN) {
                spaceship.doubleDown();
                helpers.directionY = DOUBLEDOWN;
            }
            break;
        case ARROWLEFT:
            if (helpers.directionX === LEFT) {
                spaceship.doubleLeft();
                helpers.directionX = DOUBLELEFT;
            } else if (helpers.directionX === null) {
                spaceship.left();
                helpers.directionX = LEFT;
            } else if (helpers.directionX === RIGHT) {
                spaceship.stopLeft();
                helpers.directionX = null;
            } else if (helpers.directionX === DOUBLERIGHT) {
                spaceship.right();
                helpers.directionX = RIGHT;
            }
            break;
        case ARROWRIGHT:
            if (helpers.directionX === DOUBLELEFT) {
                spaceship.left();
                helpers.directionX = LEFT;
            } else if (helpers.directionX === LEFT) {
                spaceship.stopLeft();
                helpers.directionX = null;
            } else if (helpers.directionX === null) {
                spaceship.right();
                helpers.directionX = RIGHT;
            } else if (helpers.directionX === RIGHT) {
                spaceship.doubleRight();
                helpers.directionX = DOUBLERIGHT;
            }
            break;
        case TURNRIGHT:
            spaceship.turnRight();
            helpers.rotateResult += 30;
            helpers.rotateResult === 360 ? helpers.rotateResult = 0 : helpers.rotateResult;
            break;
        case TURNLEFT:
            spaceship.turnLeft();
            helpers.rotateResult -= 30;
            helpers.rotateResult === -30 ? helpers.rotateResult = 330 : helpers.rotateResult;
            break;
        case ATTACK:
            let projectile = new Projectile(document.createElement('div'));
            projectile.attack(spaceship, 50, helpers.rotateResult);
            projectile.attackDistance(asteroids, 49, 0);
            break;
    }
});


