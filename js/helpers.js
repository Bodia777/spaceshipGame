const helpers = {
    getElementAccess: (selector) => document.querySelector(selector),
    getElementsAccess: (selector) => document.querySelectorAll(selector),
    getCoordinats: function (element) {
        return {
            Y: element.offsetTop,
            X: element.offsetLeft
        }
    },
    radius(element) {
        const radius = (window.getComputedStyle(element, null).getPropertyValue('width').split('p')[0]) / 2;
        return radius;
    },
    rotateObject: function (degree, element) {
        element.style.transform += `rotate(${degree}deg)`;
    },
    getDegree: function(obj1Y1, obj1X1, obj2Y2, obj2X2) {
        const firstSide = (obj2X2 - obj1X1);
        const secondSide = (obj2Y2 - obj1Y1);
        let degreeResult = 180 - (180 / Math.PI * Math.atan2(firstSide, secondSide));
        return degreeResult;
    },
    createElement: function ({
        coordinatY: coordinatY,
        width: width,
        height: height,
        elementParent: elementParent
    }, coordinatX, elementClass) {
        const element = document.createElement('div');
        elementParent.appendChild(element);
        element.classList.add(elementClass);
        element.style.width = width + 'px';
        element.style.height = height + 'px';
        element.style.top = coordinatY + 'px';
        element.style.left = coordinatX + 'px';
        return element
    },
    directionY: null,
    directionX: null,
    rotateResult: 0,
    score: 0
}
