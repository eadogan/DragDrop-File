"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Autobinding(_, _2, descriptor) {
    var orijinalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            return orijinalMethod.bind(this);
        }
    };
    return adjDescriptor;
}
var Project = /** @class */ (function () {
    function Project() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInpuntElement = this.element.querySelector('#title');
        this.descriptionInpuntElement = this.element.querySelector('#description');
        this.peopleInpuntElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    Project.prototype.submitHandler = function (event) {
        event.preventDefault();
        console.log(this.titleInpuntElement.value);
    };
    Project.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler);
    };
    Project.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    __decorate([
        Autobinding
    ], Project.prototype, "submitHandler", null);
    return Project;
}());
var prjInput = new Project();
