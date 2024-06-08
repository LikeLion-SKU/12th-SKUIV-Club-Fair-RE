const fontSize = {
  xs: '0.6rem',
  s: '0.8rem',
  m: '1rem',
  l: '1.2rem',
  xl: '1.4rem',
};

const deviceSizes = {
  mobile: '480px',
  tablet: '1300px',
  pc: '1300px',
};

const device = {
  mobile: `(max-width : ${deviceSizes.mobile})`,
  tablet: `(max-wdith : ${deviceSizes.tablet})`,
  pc: `(min-width : ${deviceSizes.pc})`,
};

export const theme = {
  fontSize,
  device,
};
