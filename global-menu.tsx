import * as React from 'react';
import GlobalMenuSidebarFirstPane from './global-menu-sidebar-first-pane';

export default function GlobalMenu() {
  const [firstPaneActiveItem, setFirstPaneActiveItem] = React.useState();

  const data = {
    menu: {
      items: [],
    },
    sidebar: {
      items: [
        { kind: 'link', url: '#top', label: 'Link A1' },
        {
          kind: 'link',
          url: '#top',
          label: 'Link A2 fdsf dsf ds fds f dsf ds f fd sf fds fdsf',
        },
        { kind: 'link', url: '#top', label: 'Link A3' },
        { kind: 'link', url: '#top', label: 'Link A4' },
        {
          kind: 'group',
          label: 'Group A5',
          bgColor: '#0a71b4',
          items: [
            { kind: 'link', url: '#top', label: 'Link B1' },
            { kind: 'link', url: '#top', label: 'Link B2' },
            { kind: 'link', url: '#top', label: 'Link B3' },
            { kind: 'link', url: '#top', label: 'Link B4' },
          ],
        },
        { kind: 'link', url: '#top', label: 'Link A6' },
        {
          kind: 'group',
          label: 'Group A7',
          bgColor: '#0a71b4',
          items: [
            { kind: 'link', url: '#top', label: 'Link B1' },
            { kind: 'link', url: '#top', label: 'Link B2' },
            { kind: 'link', url: '#top', label: 'Link B3' },
            { kind: 'link', url: '#top', label: 'Link B4' },
            {
              kind: 'group',
              label: 'Group B5',
              bgColor: '#0a71b4',
              items: [
                { kind: 'link', url: '#top', label: 'Link C1' },
                { kind: 'link', url: '#top', label: 'Link C2' },
                { kind: 'link', url: '#top', label: 'Link C3' },
                { kind: 'link', url: '#top', label: 'Link C4' },
              ],
            },
          ],
        },
        { kind: 'link', url: '#top', label: 'Link A8' },
        {
          kind: 'group',
          label: 'Group A9',
          bgColor: '#0a71b4',
          items: [
            { kind: 'link', url: '#top', label: 'Link C1' },
            { kind: 'link', url: '#top', label: 'Link C2' },
            { kind: 'link', url: '#top', label: 'Link C3' },
            { kind: 'link', url: '#top', label: 'Link C4' },
          ],
        },
      ],
    },
  };

  data.sidebar.items.map((item, i) => {
    item['id'] = 'A' + i;
    if (item.kind === 'group' && item.items) {
      item.items.map((item, j) => {
        item['id'] = 'B' + j;
        if (item.kind === 'group' && item.items) {
          item.items.map((item, k) => {
            item['id'] = 'C' + k;
          });
        }
      });
    }
  });

  console.log('items', data.sidebar.items);

  return (
    <div className="GlobalMenu">
      Global Menu
      <GlobalMenuSidebarFirstPane
        items={data.sidebar.items}
        firstPaneActiveItem={firstPaneActiveItem}
        setFirstPaneActiveItem={setFirstPaneActiveItem}
      />
    </div>
  );
}
