import * as React from 'react';
import GlobalMenuSidebar from './global-menu-sidebar';

export default function GlobalMenu() {
  const data = {
    menu: {
      items: [],
    },
    sidebar: {
      items: [
        { kind: 'link', url: '#top', label: 'Link A1' },
        { kind: 'link', url: '#top', label: 'Link A2' },
        { kind: 'link', url: '#top', label: 'Link A3' },
        { kind: 'link', url: '#top', label: 'Link A4' },
        {
          kind: 'group',
          label: 'Group A5',
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
          items: [
            { kind: 'link', url: '#top', label: 'Link B1' },
            { kind: 'link', url: '#top', label: 'Link B2' },
            { kind: 'link', url: '#top', label: 'Link B3' },
            { kind: 'link', url: '#top', label: 'Link B4' },
            {
              kind: 'group',
              label: 'Group B5',
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
  return (
    <div className="GlobalMenu">
      Global Menu
      <GlobalMenuSidebar items={data.sidebar.items} />
    </div>
  );
}
