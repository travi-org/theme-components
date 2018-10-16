import React from 'react';

const styles = {
  fontFamily: 'Permanent Marker,Franklin Gothic Demi Cond,sans-serif',
  color: '#fff',
  textShadow: '5px 5px 5px #111'
};

export default function Logo() {
  return (
    <span style={styles}>
      Travi
    </span>
  );
}

Logo.displayName = 'Logo';
