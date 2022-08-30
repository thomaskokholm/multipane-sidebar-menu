import * as React from 'react';
import { css } from '@emotion/css';

export default function GlobalMenuTopNav({
  items,
  sidebarOpen,
  setSidebarOpen,
  theme,
}) {
  const [activeItem, setActiveItem] = React.useState<string>();

  return (
    <div
      className={`GlobalMenuTopNav ${css`
    background-color: ${theme?.background};
  `}`}
    >
      <button
        className="burgerBtn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <img
        src="https://raw.githubusercontent.com/thomaskokholm/multipane-sidebar-menu/c8a96c385046c48ac1db043190b956e2108dc42d/FIFAPlus_Logo.png"
        width="83px"
        height="21px"
      />
      {items && (
        <nav className="main-links">
          {items.map((item, i) => {
            if (item.entryType === 'link') {
              return (
                <div className="link" key={i}>
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
              );
            } else if (item.entryType === 'group' && item.items) {
              return (
                <div
                  className={`group cursor-pointer ${css`
            color: ${theme?.textColor};
            &:hover {
              color: ${theme?.focusTextColor};
            }
          `}`}
                  onClick={() => {
                    setActiveItem(item.id);
                  }}
                  onMouseEnter={(e) => setActiveItem(item.id)}
                  onMouseLeave={(e) => setActiveItem(undefined)}
                  key={i}
                >
                  <div className="group__label">{item.label}</div>
                  <div
                    className={`sub-links ${css`
                    background-color: ${
                      item.theme.background ?? theme?.background
                    };
                    
                    display: ${activeItem === item.id ? 'flex' : 'none'};
                  `}`}
                  >
                    {item.items &&
                      item.items.map((subItem, j) => {
                        return (
                          <div className="link" key={j}>
                            <a
                              href={subItem.url}
                              className={`link__label ${css`
                    color: ${item.theme?.textColor ?? theme?.textColor};
                    &:hover {
                      color: ${
                        item.theme.focusTextColor ?? theme?.focusTextColor
                      };
                    }
                  `}`}
                            >
                              {subItem.label}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            }
          })}
        </nav>
      )}
    </div>
  );
}
