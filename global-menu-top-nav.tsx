import * as React from 'react';

export default function GlobalMenuTopNav({
  items,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <div className="GlobalMenuTopNav">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        Toggle sidebar
      </button>
      {items && (
        <nav className="main-links">
          {items.map((item) => {
            return <div className="link">{item.label}</div>;
          })}
        </nav>
      )}
    </div>
  );
}
