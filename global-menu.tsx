import * as React from 'react';
import GlobalMenuSidebarFirstPane from './global-menu-sidebar-first-pane';
import GlobalMenuSidebarPane from './global-menu-sidebar-pane';
import { useOnResize } from './useOnResize';

export default function GlobalMenu() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [firstPaneActiveItem, setFirstPaneActiveItem] = React.useState();

  //const windowSize = useOnResize();

  const data = {
    menu: {
      items: [],
    },
    sidebar: {
      bgColor: '#03122b',
      focusColor: '#0a71b4',
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
          focusColor: '#3b8dc3',
          items: [
            { kind: 'link', url: '#top', label: 'Link B1' },
            { kind: 'link', url: '#top', label: 'Link B2' },
            {
              kind: 'group',
              label:
                'Group B3 jd sfjkj kf dsfjfjkf df dg d gfd gfd gsdff ergfd gf dg ',
              bgColor: '#3b8dc3',
              focusColor: '#0a71b4',
              items: [
                { kind: 'link', url: '#top', label: 'Link C1' },
                { kind: 'link', url: '#top', label: 'Link C2' },
                { kind: 'link', url: '#top', label: 'Link C3' },
                { kind: 'link', url: '#top', label: 'Link C4' },
                { kind: 'link', url: '#top', label: 'Link C5' },
                { kind: 'link', url: '#top', label: 'Link C6' },
              ],
            },
          ],
        },
        { kind: 'link', url: '#top', label: 'Link A6' },
        {
          kind: 'group',
          label: 'Group A7',
          bgColor: '#0a71b4',
          focusColor: '#3b8dc3',
          items: [
            { kind: 'link', url: '#top', label: 'Link B1' },
            { kind: 'link', url: '#top', label: 'Link B2' },
            { kind: 'link', url: '#top', label: 'Link B3' },
            { kind: 'link', url: '#top', label: 'Link B4' },
            {
              kind: 'group',
              label: 'Group B5',
              bgColor: '#3b8dc3',
              focusColor: '#0a71b4',
              items: [
                { kind: 'link', url: '#top', label: 'Link C1' },
                { kind: 'link', url: '#top', label: 'Link C2' },
                { kind: 'link', url: '#top', label: 'Link C3' },
              ],
            },
          ],
        },
        { kind: 'link', url: '#top', label: 'Link A8' },
        {
          kind: 'group',
          label: 'Group A9',
          bgColor: '#3b8dc3',
          focusColor: '#0a71b4',
          items: [
            { kind: 'link', url: '#top', label: 'Link C1' },
            { kind: 'link', url: '#top', label: 'Link C2' },
            { kind: 'link', url: '#top', label: 'Link C3' },
            { kind: 'link', url: '#top', label: 'Link C4' },
            { kind: 'link', url: '#top', label: 'Link C5' },
          ],
        },
        {
          kind: 'group',
          label: 'Group A10',
          bgColor: '#3b8dc3',
          focusColor: '#0a71b4',
          items: [
            { kind: 'link', url: '#top', label: 'Link C1' },
            { kind: 'link', url: '#top', label: 'Link C2' },
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

  const items = data.sidebar.items;

  console.log('items', data);

  return (
    <div className="GlobalMenu">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        Toggle sidebar
      </button>
      <GlobalMenuSidebarPane expanded={sidebarOpen} items={items} />
    </div>
  );
}
