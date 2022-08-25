import * as React from 'react';

export default function GlobalMenuBottomNav({ items }) {
  return (
    <div className="GlobalMenuBottomNav">
      {items && (
        <nav className="main-links">
          {items.map((item, i) => {
            return (
              <div className="link" key={i}>
                {item.label}
              </div>
            );
          })}
        </nav>
      )}
    </div>
  );
}
