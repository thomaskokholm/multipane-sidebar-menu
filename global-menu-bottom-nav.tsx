import * as React from 'react';
import { css } from '@emotion/css';

export default function GlobalMenuBottomNav({ items, theme }) {
  return (
    <div
      className={`GlobalMenuBottomNav ${css`
  background-color: ${theme?.background};
`}`}
    >
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
