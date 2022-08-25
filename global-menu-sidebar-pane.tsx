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

  const Pane = ({
    idx,
    expanded = false,
    bgColor = '#03122b',
    className,
    children,
  }: {
    idx?: string;
    expanded: boolean;
    bgColor?: string;
    className?: string | Array<string>;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={`GlobalMenuSidebarPane ${className} ${
          windowSize.width && windowSize.width >= 1024 ? 'expandable' : ''
        } `}
        style={{
          backgroundColor: bgColor,
          display: expanded ? 'block' : 'none',
        }}
        key={idx ?? idx}
      >
        <ul>{children}</ul>
      </div>
    );
  };

  {
    /* FIRST PANE CONTENT START */
  }
  return (
    <Pane idx="0" expanded={expanded} className="GlobalMenuSidebarFirstPane">
      {items &&
        items.map((firstItem, i) => {
          return (
            <PaneItem item={firstItem} key={'A' + i} idx={'A' + i} level={1}>
              {/* SECOND PANE CONTENT START */}

              <Pane
                key={'A' + i}
                idx={'A' + i}
                className="GlobalMenuSidebarSecondPane"
                expanded={
                  secondPaneActiveItem && secondPaneActiveItem === firstItem.id
                }
              >
                {firstItem.items &&
                  firstItem.items.map((secondItem, j) => {
                    return (
                      <PaneItem item={secondItem} idx={'B' + j} level={2}>
                        {/* THIRD PANE CONTENT  START */}
                        <Pane
                          key={'B' + j}
                          idx={'B' + j}
                          className="GlobalMenuSidebarThirdPane"
                          expanded={
                            thirdPaneActiveItem &&
                            thirdPaneActiveItem === secondItem.id
                          }
                        >
                          {secondItem.items &&
                            secondItem.items.map((thirdItem, k) => {
                              return (
                                <PaneItem
                                  key={'C' + k}
                                  item={thirdItem}
                                  idx={'C' + k}
                                  level={3}
                                />
                              );
                            })}
                        </Pane>
                        {/* THIRD PANE CONTENT  END */}
                      </PaneItem>
                    );
                  })}
              </Pane>
              {/* SECOND PANE CONTENT  END */}
            </PaneItem>
          );
        })}
    </Pane>
  );
  {
    /* FIRST PANE CONTENT  END */
  }
}
