import * as React from 'react';
import { useOnResize } from './useOnResize';
export default function GlobalMenuSidebarThirdPane({
  items,
  bgColor,
  expanded = false,
  thirdPaneActiveItem,
  setThirdPaneActiveItem,
}) {
  const windowSize = useOnResize();
  return (
    <div
      className={`GlobalMenuSidebarThirdPane ${
        windowSize.width && windowSize.width > 768 && 'expandable'
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
