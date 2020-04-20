class UFO extends Asteroid {
    result = 50;
    constructor(ufo) {
        super(ufo, false),
        this.ufo = ufo
    }
    ufoAttack() {
        const element = this;
        const attackInterval = setInterval(() =>{
            const ufoCoordinats = this.getCoordinats();
            const ufoProjectile = new Projectile(document.createElement('div'));
            ufoProjectile.attack(element, 120, helpers.getDegree(ufoCoordinats.Y, ufoCoordinats.X, spaceship.getCoordinats().Y, spaceship.getCoordinats().X));
            if (this.statusInjured) {
                clearInterval(attackInterval);
            }
            ufoProjectile.attackDistance(spaceships, 50, 3);
        }, 2000);
    }
}

