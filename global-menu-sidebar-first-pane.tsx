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
      className={`GlobalMenuSidebarPane GlobalMenuSidebarFirstPane ${
        expandable && 'expandable'
      } `}
      style={{ backgroundColor: bgColor, display: expanded ? 'block' : 'none' }}
    >
      <ul>
        {items &&
          items.map((item, i) => {
            return (
              <li key={i}>
                {item.kind === 'link' && (
                  <div className="link">
                    <a href={item.url} className="link__label">
                      {item.label}
                    </a>
                  </div>
                )}
                {item.kind === 'group' && (
                  <div
                    className="group cursor-pointer"
                    onClick={() => {
                      setFirstPaneActiveItem(item.id);
                    }}
                    onMouseEnter={(e) => onMouseAction(e, item.id)}
                    onMouseLeave={(e) => onMouseAction(e, undefined)}
                  >
                    <div className="group__label">{item.label}</div>
                    <div className="group__arrow"> &rarr;</div>
                    <GlobalMenuSidebarSecondPane
                      secondPaneActiveItem={secondPaneActiveItem}
                      setSecondPaneActiveItem={setSecondPaneActiveItem}
                      expanded={item.id === firstPaneActiveItem}
                      expandable={expandable}
                      bgColor={item.bgColor}
                      items={item.items}
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
