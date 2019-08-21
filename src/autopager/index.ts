import baseInterface from '../baseInterface';
import * as _ from 'lodash';

interface autoPager extends baseInterface {
  defaultTarget: Object,
  contentsName: String,
  prevName: String,
  nextName: String,
};

export default class AutoPager implements autoPager {
	public defaultTarget = document.querySelectorAll('[data-modules]');
	public contentsName: String = 'autoPagerContents';
	public prevName: String = 'autoPagerPrev';
  public nextName: String = 'autoPagerNext';

	private target: Object;
	private contents: Object = new Set();
	private prev: Object = new Set();
	private next: Object = new Set();

	constructor ({ props }) {
		this.target = props.target || this.defaultTarget;
		this.prevName = props.prevName || this.prevName;
		this.nextName = props.nextName || this.nextName;
	}

	public atach () {
    async () => {
      await Promise.all();
      _.forEach(this.target, (target: Object) => {
        const datasetModule = target['dataset']['modules'];
        this.setData(target, datasetModule);
      });
    }

    _.forEach(this.contents, (content: Object) => {
      console.log(content);
    });
  }

  protected setData (target, property) {
    switch (property) {
      case this.contentsName:
        this.contents['add'](target);
        break;
      case this.prevName:
        this.prev['add'](target);
        break;
      case this.nextName:
        this.next['add'](target);
        break;
    }
  }
}
