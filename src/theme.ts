const theme = {
  palette: {
    background: {
      body: '#FFFFFF',
      header: '#364051',
    },
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    body: {
      'font-weight': 'normal',
      'font-size': '18px',
    },
  },
};

export default theme;
