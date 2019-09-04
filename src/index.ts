import Vending from './vending/index';
import AutoPager from './autoPager/index';
import Accordion from './accordion/index';

window.addEventListener('DOMContentLoaded', () => {
  // accordion
  interface accordion {
    components: NodeList;
    triggerClass: string;
    targetClass: string;
  }

  const defaultComponents = document.querySelectorAll('.js-accordion');
  const props: accordion = {
    components: defaultComponents,
    triggerClass: 'js-accordionTrigger',
    targetClass: 'js-accordionTarget',
  }

  const accordion: Accordion = new Accordion({ props });
  accordion.atache();


  const vending = new Vending();
  // vending.vending();

  interface autoPager {
    target: Object,
    moduleName: String,
    prevName: String,
    nextName: String,
  };

  const prop: autoPager = {
    target: document.querySelectorAll('[data-modules]'),
    moduleName: 'autoPager',
    prevName: 'autoPagerPrev',
    nextName: 'autoPagerNext',
  };

  const autoPager: AutoPager = new AutoPager({ prop });
  autoPager.atache();
})
