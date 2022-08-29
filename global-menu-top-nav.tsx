import * as React from 'react';

export default function GlobalMenuTopNav({
  items,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [activeItem, setActiveItem] = React.useState<string>();

  return (
    <div className="GlobalMenuTopNav">
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
      {items && (
        <nav className="main-links">
          {items.map((item, i) => {
            if (item.entryType === 'link') {
              return (
                <div className="link" key={i}>
                  <a href={item.url} className="link__label">
                    {item.label}
                  </a>
                </div>
              );
            } else if (item.entryType === 'group' && item.items) {
              return (
                <div
                  className="group cursor-pointer"
                  onClick={() => {
                    setActiveItem(item.id);
                  }}
                  onMouseEnter={(e) => setActiveItem(item.id)}
                  onMouseLeave={(e) => setActiveItem(undefined)}
                  key={i}
                >
                  <div className="group__label">{item.label}</div>
                  <div
                    className="sub-links"
                    style={{
                      display: activeItem === item.id ? 'flex' : 'none',
                    }}
                  >
                    {item.items &&
                      item.items.map((subItem, j) => {
                        return (
                          <div className="link" key={j}>
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
