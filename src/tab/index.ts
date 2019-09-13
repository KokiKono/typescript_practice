interface tab {
  atache(): void;
  // __update(): void;
}

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}

export default class Tab implements tab {
  head: NodeList;
  contents: NodeList;
  componetClass: string = 'componentClass';

  constructor (tabHead: NodeList, tabContents: NodeList) {
    this.head = tabHead;
    this.contents = tabContents;
  }

  atache () {
    const tabs = document.querySelectorAll(`.${this.componetClass}`);
    tabs.forEach(item => {
      item.addEventListener('tab-change', event => {
        event.stopPropagation();
        console.log(event.type)
        this.__update({
          tabs,
          // tabIndex: event.detail.index,
        });
      })
    });

    this.head.forEach((head: Node, index: Number) => {
      head.addEventListener('click', (event: HTMLElementEvent<HTMLElement>) => {

        event.currentTarget.dispatchEvent(
          this.__tabChangeEvent(event, index)
        );
      })
    })
  }

  __update ({}) {

  }

  __tabChangeEvent (event: HTMLElementEvent<HTMLElement>, index: Number): CustomEvent {
    return new CustomEvent('tab-change', {
      detail: {
        index: index,
      },
      bubbles: true,
    });
  }
}
