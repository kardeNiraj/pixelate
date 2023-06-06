import React from 'react';

function Card(props) {
  const classes =
    'shadow-lg bg-white rounded-3xl p-5 hover:shadow-2xl hover:mb-5' +
    props.className;
  return (
    <div>
      <article className={classes}>{props.children}</article>
    </div>
  );
}

export default Card;
