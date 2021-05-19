function Autobinding(_: any, _2: string, descriptor: PropertyDescriptor) {
    const orijinalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable:false,
        get() {
            return orijinalMethod.bind(this);
        }
    };
    return adjDescriptor;
}

class Project {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInpuntElement: HTMLInputElement;
    descriptionInpuntElement: HTMLInputElement;
    peopleInpuntElement: HTMLInputElement;
    
    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInpuntElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInpuntElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInpuntElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }

    @Autobinding
    private submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.titleInpuntElement.value);
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new Project();