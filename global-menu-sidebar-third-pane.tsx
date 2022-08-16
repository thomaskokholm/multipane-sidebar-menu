import * as React from 'react';
export default function GlobalMenuSidebarThirdPane({
  items,
  bgColor,
  expanded = false,
  thirdPaneActiveItem,
  setThirdPaneActiveItem,
}) {
  return (
    <div
      className="GlobalMenuSidebarThirdPane"
      style={{ backgroundColor: bgColor, display: expanded ? 'block' : 'none' }}
    >
      <ul>
        {items &&
          items.map((item, i) => {
            return (
              <li key={i}>
                {item.kind === 'link' && (
                  <a href={item.url} className="link">
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
