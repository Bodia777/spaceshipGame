class FlyingObjects {
    constructor(element) {
        this.element = element;
    }
    getCoordinats() {
        const element = this.element;
        return helpers.getCoordinats.call(FlyingObjects, element)
    }
    radius() {
        const element = this.element;
        return helpers.radius.call(FlyingObjects, element);
    }
    topBorder() {
        if (this.element.offsetTop <= 0 - this.radius()) this.element.style.top = window.innerHeight + this.radius() + 'px';
    }
    downBorder() {
        if (this.element.offsetTop >= window.innerHeight + this.radius()) this.element.style.top = - this.radius() + 'px';
    }
    leftBorder() {
        if (this.element.offsetLeft <= 0 - this.radius()) this.element.style.left = window.innerWidth + this.radius() + 'px';
    }
    rightBorder() {
        if (this.element.offsetLeft >= window.innerWidth + this.radius()) this.element.style.left = - this.radius() + 'px';
    }
}