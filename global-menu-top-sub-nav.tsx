import * as React from 'react';

export default function GlobalMenuTopSubNav({ items }) {
  return (
    <div className="GlobalMenuTopSubNav">
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
