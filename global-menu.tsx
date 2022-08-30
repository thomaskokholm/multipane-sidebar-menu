import * as React from 'react';
import GlobalMenuBottomNav from './global-menu-bottom-nav';
import GlobalMenuSidebarPane from './global-menu-sidebar-pane';
import GlobalMenuTopNav from './global-menu-top-nav';

// dark blue = #03122B
// grey = #A5ACBB
// purple = #550065
export default function GlobalMenu() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const data = {
    topNav: {
      theme: {
        background: '#0a71b4',
        textColor: '#A5ACBB',
        focusTextColor: '#ffffff',
        primary: '#3b8dc3',
        secondary: '#0a71b4',
      },
      quickLinks: [
        { entryType: 'link', url: '#top', label: 'Link Q1', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link Q1', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link Q1', target: '_self' },
      ],
      items: [
        { entryType: 'link', url: '#top', label: 'Link T1', target: '_self' },
        {
          entryType: 'link',
          url: '#top',
          label: 'Link T2 with a really long long long long label',
          target: '_self',
        },
        { entryType: 'link', url: '#top', label: 'Link T3', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link T4', target: '_self' },
        {
          entryType: 'group',
          label: 'Group T5',
          theme: {
            background: '#550065',
            textColor: '#ccb2d1',
            focusTextColor: '#ffffff',
            primary: '#3b8dc3',
            secondary: '#0a71b4',
          },
          items: [
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S1',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S2',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S3',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S4 with a really long long long long label',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S5',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S6',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S7 with a really long long long long label',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S8',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S9',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S10',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S10',
              target: '_self',
            },
          ],
        },
        { entryType: 'link', url: '#top', label: 'Link T6', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link T7', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link T8', target: '_self' },
        {
          entryType: 'group',
          label: 'Group T9',
          theme: {
            background: '#0a71b4',
            textColor: '#A5ACBB',
            focusTextColor: '#ffffff',
            primary: '#3b8dc3',
            secondary: '#0a71b4',
          },
          items: [
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S1',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S2',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S3',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S4 with a really long long long long label',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S5',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S6',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S7 with a really long long long long label',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S8',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S9',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S10',
              target: '_self',
            },
            {
              entryType: 'link',
              url: '#top',
              label: 'Sub link S10',
              target: '_self',
            },
          ],
        },
        { entryType: 'link', url: '#top', label: 'Link T10', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link T11', target: '_self' },
      ],
    },
    bottomNav: {
      theme: {
        background: '#0a71b4',
        textColor: '#A5ACBB',
        focusTextColor: '#ffffff',
        primary: '#3b8dc3',
        secondary: '#0a71b4',
      },
      items: [
        { entryType: 'link', url: '#top', label: 'Link S1', target: '_self' },
        {
          entryType: 'link',
          url: '#top',
          label: 'Link S2 with a really long long long long label',
          target: '_self',
        },
        { entryType: 'link', url: '#top', label: 'Link S3', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link S4', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link 54', target: '_self' },
      ],
    },
    burgerMenu: {
      theme: {
        background: '#03122B',
        textColor: '#A5ACBB',
        focusTextColor: '#FFFFFF',
        primary: '#3b8dc3',
        secondary: '#0a71b4',
      },
      backLabel: 'Back',
      items: [
        { entryType: 'link', url: '#top', label: 'Link A1', target: '_self' },
        {
          entryType: 'link',
          url: '#top',
          label: 'Link A2 fdsf dsf ds fds f dsf ds f fd sf fds fdsf',
          target: '_self',
        },
        { entryType: 'link', url: '#top', label: 'Link A3', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A4', target: '_self' },
        {
          entryType: 'group',
          label: 'Group A5',
          theme: {
            background: '#550065',
            textColor: '#f3b2ff',
            focusTextColor: '#ffffff',
            primary: '#3b8dc3',
            secondary: '#0a71b4',
          },
          items: [
            { entryType: 'link', url: '#top', label: 'Link B1', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link B2', target: '_self' },
            {
              entryType: 'group',
              label:
                'Group B3 jd sfjkj kf dsfjfjkf df dg d gfd gfd gsdff ergfd gf dg ',
              theme: {
                background: '#663399',
                textColor: '#f3b2ff',
                focusTextColor: '#ffffff',
                primary: '#3b8dc3',
                secondary: '#0a71b4',
              },
              items: [
                { entryType: 'link', url: '#top', label: 'Link C1', target: '_self' },
                { entryType: 'link', url: '#top', label: 'Link C2', target: '_self' },
                { entryType: 'link', url: '#top', label: 'Link C3', target: '_self' },
                { entryType: 'link', url: '#top', label: 'Link C4', target: '_self' },
                { entryType: 'link', url: '#top', label: 'Link C5', target: '_self' },
                { entryType: 'link', url: '#top', label: 'Link C6', target: '_self' },
              ],
            },
          ],
        },
        { entryType: 'link', url: '#top', label: 'Link A6', target: '_self' },
        {
          entryType: 'group',
          label: 'Group A7',
          theme: {
            background: '#0a71b4',
            textColor: '#9bd7ff',
            focusTextColor: '#ffffff',
            primary: '#3b8dc3',
            secondary: '#0a71b4',
          },
          items: [
            { entryType: 'link', url: '#top', label: 'Link B1', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link B2', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link B3', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link B4', target: '_self' },
            {
              entryType: 'group',
              label: 'Group B5',
              theme: {
                background: '#0a71b4',
                textColor: '#9bd7ff',
                focusTextColor: '#ffffff',
                primary: '#3b8dc3',
                secondary: '#0a71b4',
              },
              items: [
                { entryType: 'link', url: '#top', label: 'Link C1', target: '_self' },
                { entryType: 'link', url: '#top', label: 'Link C2', target: '_self' },
                { entryType: 'link', url: '#top', label: 'Link C3', target: '_self' },
              ],
            },
          ],
        },
        { entryType: 'link', url: '#top', label: 'Link A8', target: '_self' },
        {
          entryType: 'group',
          label: 'Group A9',
          theme: {
            background: '#03122B',
            textColor: '#A5ACBB',
            focusTextColor: '#ffffff',
            primary: '#3b8dc3',
            secondary: '#0a71b4',
          },
          items: [
            { entryType: 'link', url: '#top', label: 'Link C1', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link C2', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link C3', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link C4', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link C5', target: '_self' },
          ],
        },
        {
          entryType: 'group',
          label: 'Group A10',
          theme: {
            background: '#03122B',
            textColor: '#A5ACBB',
            focusTextColor: '#ffffff',
            primary: '#3b8dc3',
            secondary: '#0a71b4',
          },
          items: [
            { entryType: 'link', url: '#top', label: 'Link C1', target: '_self' },
            { entryType: 'link', url: '#top', label: 'Link C2', target: '_self' },
          ],
        },
        { entryType: 'link', url: '#top', label: 'Link A11', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A12', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A13', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A14', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A15', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A16', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A17', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A18', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A19', target: '_self' },
        { entryType: 'link', url: '#top', label: 'Link A20', target: '_self' },
      ],
    },
  };

  const topNavItems = data.topNav.items;

  data.topNav.items.map((item, i) => {
    item['id'] = 'A' + i;
    if (item.entryType === 'group' && item.items) {
      item.items.map((item, j) => {
        item['id'] = 'B' + j;
      });
    }
  });

  const bottomNavItems = data.bottomNav.items;
  data.bottomNav.items.map((item, i) => {
    item['id'] = 'A' + i;
  });

  const sidebarItems = data.burgerMenu.items;
  data.burgerMenu.items.map((item, i) => {
    item['id'] = 'A' + i;
    if (item.entryType === 'group' && item.items) {
      item.items.map((item, j) => {
        item['id'] = 'B' + j;
        if (item.entryType === 'group' && item.items) {
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
        theme={data.topNav.theme}
      />

      <GlobalMenuSidebarPane
        expanded={sidebarOpen}
        items={sidebarItems}
        theme={data.burgerMenu.theme}
      />
      <GlobalMenuBottomNav items={bottomNavItems} theme={data.topNav.theme} />
    </div>
  );
}
