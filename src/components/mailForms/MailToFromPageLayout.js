import React from 'react';

export default function MailToFromPageLayout(prop) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };

  return (
    <div>
      {prop.children[0]}
      <div style={style}>
        {prop.children[1]}
        {prop.children[1]}
        {prop.children[1]}
      </div>
    </div>
  );
}
