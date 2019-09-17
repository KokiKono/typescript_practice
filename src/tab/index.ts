interface tab {
  atache(): void;
}

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}

export default class Tab implements tab {
  head: NodeList;
  contents: NodeList;
  componetClass: string = 'js-tab';

  constructor (tabHead: NodeList, tabContents: NodeList) {
    this.head = tabHead;
    this.contents = tabContents;
  }

  atache () {
    const tabs = document.querySelectorAll(`.${this.componetClass}`);
    tabs.forEach(item => {
      item.addEventListener('tab-change', (event: CustomEvent) => {
        event.stopPropagation();
        this.__update({
          tabs,
          index: event.detail.index,
        });
      })
    });

    this.head.forEach((head: Node, index: number) => {
      const tabIndex = String(index);
      head.addEventListener('click', (event: HTMLElementEvent<HTMLElement>) => {
        event.currentTarget.dispatchEvent(
          this.__tabChangeEvent(event, tabIndex)
        );
      })
    })
  }

  __update (prop: {tabs, index: string}) {
    const itemActiveClassName = 'Tab__headItem--active';
    const contentsActiveClassName = 'Tab__contentsItem--active';

    this.head.forEach((item: HTMLElement) => {
      item.classList.remove(itemActiveClassName);
    });

    this.contents.forEach((item: HTMLElement) => {
      item.classList.remove(contentsActiveClassName);
    });

    this.head[prop.index].classList.add(itemActiveClassName);
    this.contents[prop.index].classList.add(contentsActiveClassName);
  }

  __tabChangeEvent (event: HTMLElementEvent<HTMLElement>, index: string): CustomEvent {
    return new CustomEvent('tab-change', {
      detail: {
        index: index,
      },
      bubbles: true,
    });
  }
}
