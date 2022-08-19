import * as React from 'react';
import GlobalMenuSidebarSecondPane from './global-menu-sidebar-second-pane';

export default function GlobalMenuSidebarFirstPane({
  items,
  bgColor,
  expanded = false,
  expandable = false,
  firstPaneActiveItem,
  setFirstPaneActiveItem,
}) {
  const [secondPaneActiveItem, setSecondPaneActiveItem] = React.useState();

  const onMouseAction = (e: React.MouseEvent, id: string | undefined) => {
    e.preventDefault();
    if (expandable) {
      setFirstPaneActiveItem(id);
    }
  };

  return (
    <div
      className={`GlobalMenuSidebarFirstPane ${expandable && 'expandable'} `}
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
                  <span
                    className="group cursor-pointer"
                    onClick={() => {
                      setFirstPaneActiveItem(item.id);
                    }}
                    onMouseEnter={(e) => onMouseAction(e, item.id)}
                    onMouseLeave={(e) => onMouseAction(e, undefined)}
                  >
                    <span>{item.label} &rarr;</span>
                    <GlobalMenuSidebarSecondPane
                      secondPaneActiveItem={secondPaneActiveItem}
                      setSecondPaneActiveItem={setSecondPaneActiveItem}
                      expanded={item.id === firstPaneActiveItem}
                      expandable={expandable}
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
