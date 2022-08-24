import * as React from 'react';

export default function GlobalMenuBottomNav({ items }) {
  return (
    <div className="GlobalMenuBottomNav">
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
