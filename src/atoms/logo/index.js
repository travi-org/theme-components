import React from 'react';
import brand from '@travi/brand';

const styles = {
  fontFamily: `${brand.typefaces.logo.name}, ${brand.typefaces.logo.fallback}`,
  color: '#fff',
  textShadow: '5px 5px 5px #111'
};

export default function Logo() {
  return (
    <span css={styles}>
      Travi
    </span>
  );
}

Logo.displayName = 'Logo';
