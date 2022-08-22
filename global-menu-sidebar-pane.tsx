import * as React from 'react';
import { useOnResize } from './useOnResize';

export default function GlobalMenuSidebarPane({ items, expanded = false }) {
  const windowSize = useOnResize();
  const bgColor = '#03122b';
  const [firstPaneActiveItem, setFirstPaneActiveItem] =
    React.useState<string>();
  const [secondPaneActiveItem, setSecondPaneActiveItem] =
    React.useState<string>();
  const [thirdPaneActiveItem, setThirdPaneActiveItem] =
    React.useState<string>();

  const setPaneActive = (paneLevel: number, id: string | undefined) => {
    console.log('setPaneActive', paneLevel, id);
    if (paneLevel === 1) {
      setSecondPaneActiveItem(id);
    } else if (paneLevel === 2) {
      setThirdPaneActiveItem(id);
    }
  };

  const onMouseAction = (
    e: React.MouseEvent,
    paneLevel: number,
    id: string | undefined
  ) => {
    e.preventDefault();
    if (windowSize.width && windowSize.width >= 1024) {
      if (paneLevel === 1) {
        setSecondPaneActiveItem(id);
      } else if (paneLevel === 2) {
        setThirdPaneActiveItem(id);
      }
    }
  };

  const PaneItem = ({
    item,
    level,
    idx,
    children,
  }: {
    item: any;
    level: number;
    idx: string;
    children?: React.ReactNode;
  }) => {
    return (
      <li key={idx}>
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
              setPaneActive(level, item.id);
            }}
            onMouseEnter={(e) => onMouseAction(e, level, item.id)}
            onMouseLeave={(e) => onMouseAction(e, level, undefined)}
          >
            <div className="group__label">{item.label}</div>
            <div className="group__arrow"> &rarr;</div>
            {/* NEXT PANE LIST ITEMS */}
            {children}
          </div>
        )}
      </li>
    );
  };

  {
    /* FIRST PANE CONTENT START */
  }
  return (
    <div
      className={`GlobalMenuSidebarPane GlobalMenuSidebarFirstPane ${
        windowSize.width && windowSize.width >= 1024 ? 'expandable' : ''
      } `}
      style={{ backgroundColor: bgColor, display: expanded ? 'block' : 'none' }}
    >
      <ul>
        {items &&
          items.map((firstItem, i) => {
            return (
              <PaneItem item={firstItem} idx={'A' + i} level={1}>
                {/* SECOND PANE CONTENT START */}
                <div
                  className={`GlobalMenuSidebarPane GlobalMenuSidebarSecondPane ${
                    windowSize.width && windowSize.width >= 1024
                      ? 'expandable'
                      : ''
                  } `}
                  style={{
                    backgroundColor: bgColor,
                    display:
                      secondPaneActiveItem &&
                      secondPaneActiveItem === firstItem.id
                        ? 'block'
                        : 'none',
                  }}
                >
                  <ul>
                    {firstItem.items &&
                      firstItem.items.map((secondItem, j) => {
                        return (
                          <PaneItem item={secondItem} idx={'B' + j} level={2}>
                            {/* THIRD PANE CONTENT  START */}
                            <div
                              className={`GlobalMenuSidebarPane GlobalMenuSidebarThirdPane ${
                                windowSize.width && windowSize.width >= 1024
                                  ? 'expandable'
                                  : ''
                              } `}
                              style={{
                                backgroundColor: bgColor,
                                display:
                                  thirdPaneActiveItem &&
                                  thirdPaneActiveItem === secondItem.id
                                    ? 'block'
                                    : 'none',
                              }}
                            >
                              <ul>
                                {secondItem.items &&
                                  secondItem.items.map((thirdItem, k) => {
                                    return (
                                      <PaneItem
                                        item={thirdItem}
                                        idx={'C' + k}
                                        level={3}
                                      />
                                    );
                                  })}
                              </ul>
                            </div>
                            {/* THIRD PANE CONTENT  END */}
                          </PaneItem>
                        );
                      })}
                  </ul>
                </div>
                {/* SECOND PANE CONTENT  END */}
              </PaneItem>
            );
          })}
      </ul>
    </div>
  );
  {
    /* FIRST PANE CONTENT  END */
  }
}
