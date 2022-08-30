import * as React from 'react';
import { useOnResize } from './useOnResize';
import { css, cx } from '@emotion/css';

interface NavigationThemme {
  background: string;
  textColor: string;
  focusTextColor: string;
  primary: string;
  secondary: string;
}

export default function GlobalMenuSidebarPane({
  items,
  theme,
  expanded = false,
}) {
  const windowSize = useOnResize();
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
    theme,
    idx,
    children,
  }: {
    item: any;
    level: number;

    theme?: NavigationThemme;
    idx: string;
    children?: React.ReactNode;
  }) => {
    return (
      <li
        key={idx}
        className={`${css`
      background-color: ${theme?.background};
    `}`}
      >
        {item.entryType === 'link' && (
          <div className={`link`}>
            <a
              href={item.url}
              className={`link__label ${css`
          color: ${theme?.textColor};
          &:hover {
            color: ${theme?.focusTextColor};
          }
        `}`}
            >
              {item.label}
            </a>
          </div>
        )}
        {item.entryType === 'group' && (
          <div
            className={`group cursor-pointer ${css`
            color: ${theme?.textColor};
            &:hover {
              color: ${theme?.focusTextColor};
            }
          `}`}
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
    theme,
    className,
    children,
  }: {
    idx?: string;
    expanded: boolean;
    theme?: NavigationThemme;
    className?: string | Array<string>;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={`GlobalMenuSidebarPane ${className} ${
          windowSize.width && windowSize.width >= 1024 ? 'expandable' : ''
        } ${css`
        background-color: ${theme?.background};
        color: ${theme?.textColor};
        display: ${expanded ? 'block' : 'none'};
      `}`}
        key={idx ?? idx}
      >
        <ul>{children}</ul>
      </div>
    );
  };

  return (
    <Pane
      idx="0"
      expanded={expanded}
      className="GlobalMenuSidebarFirstPane"
      theme={theme}
    >
      {items &&
        items.map((firstItem, i) => {
          return (
            <PaneItem
              item={firstItem}
              key={'A' + i}
              idx={'A' + i}
              level={1}
              theme={firstItem.theme ?? theme}
            >
              <Pane
                key={'A' + i}
                idx={'A' + i}
                className="GlobalMenuSidebarSecondPane"
                theme={firstItem.theme ?? theme}
                expanded={
                  secondPaneActiveItem && secondPaneActiveItem === firstItem.id
                }
              >
                {firstItem.items &&
                  firstItem.items.map((secondItem, j) => {
                    return (
                      <PaneItem
                        item={secondItem}
                        idx={'B' + j}
                        key={'B' + j}
                        level={2}
                        theme={secondItem.theme ?? firstItem.theme ?? theme}
                      >
                        <Pane
                          key={'B' + j}
                          idx={'B' + j}
                          className="GlobalMenuSidebarThirdPane"
                          theme={secondItem.theme ?? firstItem.theme ?? theme}
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
                                  theme={
                                    thirdItem.theme ??
                                    secondItem.theme ??
                                    firstItem.theme ??
                                    theme
                                  }
                                />
                              );
                            })}
                        </Pane>
                      </PaneItem>
                    );
                  })}
              </Pane>
            </PaneItem>
          );
        })}
    </Pane>
  );
}
