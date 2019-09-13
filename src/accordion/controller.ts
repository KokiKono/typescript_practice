import Accordion from './index';

export default () => {
  const defaultComponents = document.querySelectorAll('.js-accordion');
  if (defaultComponents) {
    interface accordion {
      components: NodeList;
      triggerClass: string;
      targetClass: string;
    }
  
    const props: accordion = {
      components: defaultComponents,
      triggerClass: 'js-accordionTrigger',
      targetClass: 'js-accordionTarget',
    }
  
    const accordion: Accordion = new Accordion({ props });
    accordion.atache();
  }
}
