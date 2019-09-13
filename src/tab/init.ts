import Tab from './index';

export default () => {
  const componentClass: String = 'js-tab'
  const tabHead: NodeList = document.querySelectorAll(`.${componentClass}HeadItem`);
  const tabContents: NodeList = document.querySelectorAll(`.${componentClass}ContentsItem`);
  const tab: Tab = new Tab(tabHead, tabContents);
  tab.atache();
}
