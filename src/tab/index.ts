interface tab {
  attach(): void;
}

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}

type Heads = ReturnType<typeof document.querySelectorAll>;

export default class Tab implements tab {
  heads: Heads;
  contents: NodeList;
  componetClass: string = 'js-tab';

  constructor (tabHeads: Heads, tabContents: Contents) {
    this.heads = tabHeads;
    this.contents = tabContents;
  }

  attach () {
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

    this.heads.forEach((head: Node, index: number) => {
      const tabIndex = String(index);
      head.addEventListener('click', (event: HTMLElementEvent<HTMLElement>) => {
        event.currentTarget.dispatchEvent(
          this.__setTabChangeListener(tabIndex, event)
        );
      })
    })
  }

  private __update (prop: {tabs, index: string}) {
    const itemActiveClassName = 'Tab__headItem--active';
    const contentsActiveClassName = 'Tab__contentsItem--active';

    this.heads.forEach((item) => {
      item.classList.remove(itemActiveClassName);
    });

    this.contents.forEach((item: HTMLElement) => {
      item.classList.remove(contentsActiveClassName);
    });

    this.heads[prop.index].classList.add(itemActiveClassName);
    this.contents[prop.index].classList.add(contentsActiveClassName);
  }

  private __setTabChangeListener (index: string, event: HTMLElementEvent<HTMLElement>): CustomEvent {
    return new CustomEvent('tab-change', {
      detail: {
        index,
        event,
      },
      bubbles: true,
    });
  }
}
