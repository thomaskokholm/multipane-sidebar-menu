import * as React from 'react';
import GlobalMenuBottomNav from './global-menu-bottom-nav';
import GlobalMenuSidebarPane from './global-menu-sidebar-pane';
import GlobalMenuTopNav from './global-menu-top-nav';

export default function GlobalMenu() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const data = {
    menu: {
      items: [],
    },
    topNav: {
      items: [
        { kind: 'link', url: '#top', label: 'Link T1' },
        {
          kind: 'link',
          url: '#top',
          label: 'Link T2 with a really long long long long label',
        },
        { kind: 'link', url: '#top', label: 'Link T3' },
        { kind: 'link', url: '#top', label: 'Link T4' },
        {
          kind: 'group',
          label: 'Group T5',
          bgColor: '#0a71b4',
          focusColor: '#3b8dc3',
          items: [
            { kind: 'link', url: '#top', label: 'Sub link S1' },
            { kind: 'link', url: '#top', label: 'Sub link S2' },
            { kind: 'link', url: '#top', label: 'Sub link S3' },
            {
              kind: 'link',
              url: '#top',
              label: 'Sub link S4 with a really long long long long label',
            },
            { kind: 'link', url: '#top', label: 'Sub link S5' },
            { kind: 'link', url: '#top', label: 'Sub link S6' },
            {
              kind: 'link',
              url: '#top',
              label: 'Sub link S7 with a really long long long long label',
            },
            { kind: 'link', url: '#top', label: 'Sub link S8' },
            { kind: 'link', url: '#top', label: 'Sub link S9' },
            { kind: 'link', url: '#top', label: 'Sub link S10' },
            { kind: 'link', url: '#top', label: 'Sub link S10' },
          ],
        },
        { kind: 'link', url: '#top', label: 'Link T6' },
        { kind: 'link', url: '#top', label: 'Link T7' },
        { kind: 'link', url: '#top', label: 'Link T8' },
        {
          kind: 'group',
          label: 'Group T9',
          bgColor: '#0a71b4',
          focusColor: '#3b8dc3',
          items: [
            { kind: 'link', url: '#top', label: 'Sub link S1' },
            { kind: 'link', url: '#top', label: 'Sub link S2' },
            { kind: 'link', url: '#top', label: 'Sub link S3' },
            {
              kind: 'link',
              url: '#top',
              label: 'Sub link S4 with a really long long long long label',
            },
            { kind: 'link', url: '#top', label: 'Sub link S5' },
            { kind: 'link', url: '#top', label: 'Sub link S6' },
            {
              kind: 'link',
              url: '#top',
              label: 'Sub link S7 with a really long long long long label',
            },
            { kind: 'link', url: '#top', label: 'Sub link S8' },
            { kind: 'link', url: '#top', label: 'Sub link S9' },
            { kind: 'link', url: '#top', label: 'Sub link S10' },
            { kind: 'link', url: '#top', label: 'Sub link S10' },
          ],
        },
        { kind: 'link', url: '#top', label: 'Link T10' },
        { kind: 'link', url: '#top', label: 'Link T11' },
      ],
    },
    bottomNav: {
      items: [
        { kind: 'link', url: '#top', label: 'Link S1' },
        {
          kind: 'link',
          url: '#top',
          label: 'Link S2 with a really long long long long label',
        },
        { kind: 'link', url: '#top', label: 'Link S3' },
        { kind: 'link', url: '#top', label: 'Link S4' },
        { kind: 'link', url: '#top', label: 'Link 54' },
      ],
    },
    sidebar: {
      backLabel: 'Back',
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
        { kind: 'link', url: '#top', label: 'Link A11' },
        { kind: 'link', url: '#top', label: 'Link A12' },
        { kind: 'link', url: '#top', label: 'Link A13' },
        { kind: 'link', url: '#top', label: 'Link A14' },
        { kind: 'link', url: '#top', label: 'Link A15' },
        { kind: 'link', url: '#top', label: 'Link A16' },
        { kind: 'link', url: '#top', label: 'Link A17' },
        { kind: 'link', url: '#top', label: 'Link A18' },
        { kind: 'link', url: '#top', label: 'Link A19' },
        { kind: 'link', url: '#top', label: 'Link A20' },
      ],
    },
  };

  const topNavItems = data.topNav.items;

  data.topNav.items.map((item, i) => {
    item['id'] = 'A' + i;
    if (item.kind === 'group' && item.items) {
      item.items.map((item, j) => {
        item['id'] = 'B' + j;
      });
    }
  });

  const bottomNavItems = data.bottomNav.items;
  data.bottomNav.items.map((item, i) => {
    item['id'] = 'A' + i;
  });

  const sidebarItems = data.sidebar.items;
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

  console.log('items', data);

  return (
    <div className="GlobalMenu">
      <GlobalMenuTopNav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        items={topNavItems}
      />

      <GlobalMenuSidebarPane expanded={sidebarOpen} items={sidebarItems} />
      <GlobalMenuBottomNav items={bottomNavItems} />
    </div>
  );
}
