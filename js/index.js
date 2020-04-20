const asteroid1 = helpers.createElement({
    coordinatY: -128,
    width: 128,
    height: 128,
    elementParent: helpers.getElementAccess('.container')
}, -128, 'asteroid');
const asteroid2 = helpers.createElement({
    coordinatY: -128,
    width: 128,
    height: 128,
    elementParent: helpers.getElementAccess('.container')
}, window.innerWidth / 2 - 64, 'asteroid');
const asteroid3 = helpers.createElement({
    coordinatY: -128,
    width: 128,
    height: 128,
    elementParent: helpers.getElementAccess('.container')
}, window.innerWidth + 128, 'asteroid');
const asteroid4 = helpers.createElement({
    coordinatY: window.innerHeight + 128,
    width: 128,
    height: 128,
    elementParent: helpers.getElementAccess('.container')
}, -128, 'asteroid');
const asteroid5 = helpers.createElement({
    coordinatY: window.innerHeight + 128,
    width: 128,
    height: 128,
    elementParent: helpers.getElementAccess('.container')
}, window.innerWidth / 2 - 64, 'asteroid');
const asteroid6 = helpers.createElement({
    coordinatY: window.innerHeight + 128,
    width: 128,
    height: 128,
    elementParent: helpers.getElementAccess('.container')
}, window.innerWidth + 128, 'asteroid');
const asteroids = [];
helpers.getElementsAccess('.asteroid').forEach((asteroid) => {
    const asteroidElement = new Asteroid(asteroid, false);
    asteroids.push(asteroidElement);
    if (asteroidElement.getCoordinats().X > 0 && asteroidElement.getCoordinats().Y > 0) {
        asteroidElement.moveUpLeft();
    } else if (asteroidElement.getCoordinats().X > 0 && asteroidElement.getCoordinats().Y < 0) {
        asteroidElement.moveUpRight();
    } else if (asteroidElement.getCoordinats().X < 0 && asteroidElement.getCoordinats().Y < 0) {
        asteroidElement.moveDownRight();
    } else if (asteroidElement.getCoordinats().X < 0 && asteroidElement.getCoordinats().Y > 0) {
        asteroidElement.moveDownLeft();
    }
})
const smallUfo = new UFO(helpers.getElementAccess('.ufo'));
asteroids.push(smallUfo);
const spaceship = new Spaceship(helpers.getElementAccess('.starship'));
const spaceships = [];
spaceships.push(spaceship);
crashInterval = setInterval(() => {
    spaceship.crashChecker();
    if (spaceship.statusInjured) {
        clearInterval(crashInterval);
    }
}, 200)