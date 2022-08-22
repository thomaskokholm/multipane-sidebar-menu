import * as React from 'react';
export default function GlobalMenuSidebarThirdPane({
  items,
  bgColor,
  expanded = false,
  expandable = false,
  thirdPaneActiveItem,
  setThirdPaneActiveItem,
}) {
  return (
    <div
      className={`GlobalMenuSidebarPane GlobalMenuSidebarThirdPane ${
        expandable && 'expandable'
      } `}
      style={{ backgroundColor: bgColor, display: expanded ? 'block' : 'none' }}
    >
      <ul>
        <li className="back-link">
          <a
            href="#top"
            className="link"
            onClick={() => {
              console.log('go back!');
            }}
          >
            &larr; Back
          </a>
        </li>
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
