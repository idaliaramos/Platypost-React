import React from 'react';
// import NavigationComponent from '../nav/NavigationComponent';

export default function MailPageLayout(props) {
  const style = {
    // display: 'flex',
    // flexDirection: 'row'
    // flexWrap: 'wrap'
    // display: 'flex',
    // justify-content: 'center'
  };

  return (
    <div>
      {/* {props.children[0]} */}
      {/* <div style={style}> */}
      {props.children[1]}
      {props.children[2]}
    </div>
  );
}
