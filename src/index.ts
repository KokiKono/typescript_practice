import Vending from './vending/index';
import AutoPager from './autoPager/index';

window.addEventListener('DOMContentLoaded', () => {
	const vending = new Vending();
	// vending.vending();

	interface autoPager {
		target: Object,
		moduleName: String,
		prevName: String,
		nextName: String,
	};

	const props: autoPager = {
		target: document.querySelectorAll('[data-modules]'),
		moduleName: 'autoPager',
		prevName: 'autoPagerPrev',
		nextName: 'autoPagerNext',
	};

	const autoPager: AutoPager = new AutoPager({ props });
	autoPager.atach();
})
