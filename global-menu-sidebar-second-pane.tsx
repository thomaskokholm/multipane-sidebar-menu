import * as React from 'react';
import GlobalMenuSidebarThirdPane from './global-menu-sidebar-third-pane';
export default function GlobalMenuSidebarSecondPane({
  items,
  bgColor,
  expanded = false,
  secondPaneActiveItem,
  setSecondPaneActiveItem,
}) {
  const [thirdPaneActiveItem, setThirdPaneActiveItem] = React.useState();
  return (
    <div
      className="GlobalMenuSidebarSecondPane"
      style={{ backgroundColor: bgColor, display: expanded ? 'block' : 'none' }}
    >
      <ul>
        {items &&
          items.map((item, i) => {
            return (
              <li key={i}>
                {item.kind === 'link' && (
                  <a href={item.url} className="link">
                    {item.label}
                  </a>
                )}
                {item.kind === 'group' && (
                  <div
                    className="group cursor-pointer"
                    onClick={() => {
                      setSecondPaneActiveItem(item.id);
                    }}
                  >
                    <span>{item.label}</span>
                    <GlobalMenuSidebarThirdPane
                      bgColor={item.bgColor}
                      items={item.items}
                      expanded={item.id === secondPaneActiveItem}
                      thirdPaneActiveItem={thirdPaneActiveItem}
                      setThirdPaneActiveItem={setThirdPaneActiveItem}
                    />
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
