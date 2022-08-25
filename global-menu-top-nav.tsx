import * as React from 'react';
import GlobalMenuTopSubNav from './global-menu-top-sub-nav';

export default function GlobalMenuTopNav({
  items,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [activeItem, setActiveItem] = React.useState<string>();

  return (
    <div className="GlobalMenuTopNav">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        Toggle sidebar
      </button>
      {items && (
        <nav className="main-links">
          {items.map((item, idx) => {
            if (item.kind === 'link') {
              return (
                <div className="link">
                  <a href={item.url} className="link__label">
                    {item.label}
                  </a>
                </div>
              );
            } else if (item.kind === 'group' && item.items) {
              return (
                <div
                  className="group cursor-pointer"
                  onClick={() => {
                    setActiveItem(item.id);
                  }}
                  onMouseEnter={(e) => setActiveItem(item.id)}
                  onMouseLeave={(e) => setActiveItem(undefined)}
                >
                  <div className="group__label">{item.label}</div>
                  <div
                    className="subnav"
                    style={{
                      display: activeItem === item.id ? 'flex' : 'none',
                    }}
                  >
                    {item.items &&
                      item.items.map((subItem) => {
                        return (
                          <div className="link">
                            <a href={subItem.url} className="link__label">
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
