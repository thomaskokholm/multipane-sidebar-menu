import * as React from 'react';
import GlobalMenuSidebarSecondPane from './global-menu-sidebar-second-pane';

export default function GlobalMenuSidebarFirstPane({
  items,
  firstPaneActiveItem,
  setFirstPaneActiveItem,
}) {
  const [secondPaneActiveItem, setSecondPaneActiveItem] = React.useState();
  return (
    <div className="GlobalMenuSidebarFirstPane">
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
                  <span
                    className="group cursor-pointer"
                    onClick={() => {
                      setFirstPaneActiveItem(item);
                    }}
                  >
                    <span>{item.label}</span>
                    <GlobalMenuSidebarSecondPane
                      secondPaneActiveItem={secondPaneActiveItem}
                      setSecondPaneActiveItem={setSecondPaneActiveItem}
                      expanded={item.id === firstPaneActiveItem.id}
                      bgColor={item.bgColor}
                      items={item.items}
                    />
                  </span>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
