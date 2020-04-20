class Projectile {
    degree = null;
    constructor(projectile) {
        this.projectile = projectile;
    }
    getCoordinats() {
        const element = this.projectile;
        return helpers.getCoordinats.call(FlyingObjects, element)
    }
    attack(element, speed, angle) {
        this.projectile.classList.add('projectile');
        this.projectile.style.top = element.getCoordinats().Y - 1 + 'px';
        this.projectile.style.left = element.getCoordinats().X + 8 + 'px';
        helpers.getElementAccess('.container').appendChild(this.projectile);
        this.projectile.style.top = this.projectile.offsetTop - (5 * Math.cos(helpers.rotateResult * 0.0175)) + 'px';
        const degree = angle;
        const attackInterval = setInterval(() => {
            this.projectile.style.top = this.projectile.offsetTop - (35 * Math.cos(degree * 0.0175)) + 'px';
            this.projectile.style.left = this.projectile.offsetLeft + (35 * Math.sin(degree * 0.0175)) + 'px';
            try {
                if (this.projectile.offsetTop <= 0 || this.projectile.offsetTop >= window.innerHeight || this.projectile.offsetLeft <= 0 || this.projectile.offsetLeft >= window.innerWidth) {
                    clearInterval(attackInterval);
                    this.projectile.parentElement.removeChild(this.projectile);
                }
            } catch (e) {}
        }, speed)
        this.degree = degree;
    }
    attackDistance(elements, timer, line) {
        const distanceInterval = setInterval(() => {
            for (const element of elements) {
                const lengthX = Math.abs(this.getCoordinats().X - (element.getCoordinats().X + element.radius()));
                const lengthY = Math.abs(this.getCoordinats().Y - (element.getCoordinats().Y + element.radius()));
                const distance = Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2));
                try {
                    if (distance <= (element.radius() + line) && element.statusInjured === false) {
                        clearInterval(distanceInterval);
                        element.crashStatus();
                        this.projectile.parentElement.removeChild(this.projectile);
                    }
                } catch (e) {}
                if (this.projectile.offsetTop <= 0 || this.projectile.offsetTop >= window.innerHeight || this.projectile.offsetLeft <= 0 || this.projectile.offsetLeft >= window.innerWidth) {
                    clearInterval(distanceInterval);
                }
            }
        }, timer)
    }
}
