import Tab from './index';

export default () => {
  const componentClass: String = 'js-tab'
  const tabHead: NodeList = document.querySelectorAll(`.${componentClass}HeadItem`);
  const tabContents: NodeList = document.querySelectorAll(`.${componentClass}ContentsItem`);
  const tab: Tab = new Tab(tabHead, tabContents);
  tab.attach();

  const tabHead2: NodeList = document.querySelectorAll(`.${componentClass}HeadItem2`);
  const tab2: Tab = new Tab(tabHead2, tabContents);
  tab2.attach();
}
