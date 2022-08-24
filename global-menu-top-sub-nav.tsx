import * as React from 'react';

export default function GlobalMenuTopSubNav({ items }) {
  return (
    <div className="GlobalMenuTopSubNav">
      {items && (
        <ul>
          {items.map((item) => {
            return <div className="link">{item.label}</div>;
          })}
        </ul>
      )}
    </div>
  );
}
