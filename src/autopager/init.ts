import AutoPager from './index'

export default () => {
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
}
