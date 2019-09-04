interface accordion {
  atache(): void;
}

enum AccordionClass {
  component = 'js-accordion',
  trigger = 'js-accordionTrigger',
  targets = 'js-accordionTargets',
}

export default class Accordion implements accordion {
  public components: NodeList;
  public triggers: NodeList;
  public targets: NodeList;

  public triggerClass: string;
  public targetClass: string;

  private readonly defaultComponentsClass: string = AccordionClass.component;
  private readonly defaultTriggerClass: string = AccordionClass.trigger;
  private readonly defaultTargetClass: string = AccordionClass.targets;

  public readonly defaultComponents = document.querySelectorAll(this.defaultComponentsClass);

  constructor ({ props }) {
    this.components = props.components || this.defaultComponents;
    this.triggerClass = props.triggerClass || this.defaultTriggerClass;
    this.targetClass = props.targetClass || this.defaultTargetClass;
  }

  atache () {
    this.components.forEach((component: HTMLElement) => {      
      const trigger = component.querySelector(`.${this.triggerClass}`);
      const target = component.querySelector(`.${this.targetClass}`);

      trigger.addEventListener('click', () => {
        target.classList.toggle('Accordion__target--visible')
      })
    })
  }
}
