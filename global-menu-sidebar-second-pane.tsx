import * as React from 'react';
import GlobalMenuSidebarThirdPane from './global-menu-sidebar-third-pane';
import { useOnResize } from './useOnResize';
export default function GlobalMenuSidebarSecondPane({
  items,
  bgColor,
  expanded = false,
  secondPaneActiveItem,
  setSecondPaneActiveItem,
}) {
  const [thirdPaneActiveItem, setThirdPaneActiveItem] = React.useState();
  const windowSize = useOnResize();
  const onMouseAction = (e: React.MouseEvent, id: string | undefined) => {
    e.preventDefault();
    if (windowSize.width > 768) {
      setSecondPaneActiveItem(id);
    }
  };

  return (
    <div
      className={`GlobalMenuSidebarSecondPane ${
        windowSize.width && windowSize.width > 768 && 'expandable'
      } `}
      style={{ backgroundColor: bgColor, display: expanded ? 'block' : 'none' }}
    >
      <ul>
        <li className="back-link">
          <a
            href="#top"
            className="link"
            onClick={() => {
              console.log('go back!');
            }}
          >
            &larr; Back
          </a>
        </li>
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
                    onMouseEnter={(e) => onMouseAction(e, item.id)}
                    onMouseLeave={(e) => onMouseAction(e, undefined)}
                  >
                    <span>{item.label} &rarr;</span>
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
