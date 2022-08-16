import * as React from 'react';

export default function GlobalMenuSidebar({ items }) {
  return (
    <div className="GlobalMenuSidebar">
      Global Menu Sidebar
      <ul>
        {items &&
          items.map((item, i) => {
            return (
              <li key={i}>
                {item.kind === 'link' && <a href={item.url}>{item.label}</a>}
                {item.kind === 'group' && <a href={item.url}>{item.label}</a>}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
