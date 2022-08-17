import * as React from 'react';
import GlobalMenuSidebarSecondPane from './global-menu-sidebar-second-pane';
import { useOnResize } from './useOnResize';

export default function GlobalMenuSidebarFirstPane({
  items,
  bgColor,
  expanded = false,
  firstPaneActiveItem,
  setFirstPaneActiveItem,
}) {
  const [secondPaneActiveItem, setSecondPaneActiveItem] = React.useState();
  const windowSize = useOnResize();

  const onMouseAction = (e: React.MouseEvent, id: string | undefined) => {
    e.preventDefault();
    if (windowSize.width > 768) {
      setFirstPaneActiveItem(id);
    }
  };

  return (
    <div
      className={`GlobalMenuSidebarFirstPane ${
        windowSize.width > 768 && 'expandable'
      } `}
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
