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
	private contents: Object[] = [];
	private prev: Object[] = [];
	private next: Object[] = [];

	constructor ({ prop }) {
		this.target = prop.target || this.defaultTarget;
		this.prevName = prop.prevName || this.prevName;
		this.nextName = prop.nextName || this.nextName;
	}

	public atache () {
    _.forEach(this.target, (target: Object) => {
      const datasetModule = target['dataset']['modules'];
      this.setData(target, datasetModule);
    });

    _.forEach(this.contents, (content: Object) => {
      console.log(content);
    });

  }

  protected setData (target, property) {
    switch (property) {
      case this.contentsName:
        this.contents.push(target);
        break;
      case this.prevName:
        this.prev.push(target);
        break;
      case this.nextName:
        this.next.push(target);
        break;
    }
  }
}
