const colours = {
  Primary0: '#AF3A0B', // Primary Colour
  Primary1: '#E37448',
  Primary2: '#D4501C',
  Primary3: '#912900',
  Primary4: '#6B1F00',

  PrimaryText0: '#E37448',

  charcoalDark: '#0d1013',
  charcoalLight: '#171d22',
  charcoalLighter: '#2c3740',
  charcoalLightest: '#41505e',

};

const style = {
  container: {
  },
  calendarSection: {
    border: `solid ${colours.Primary4} 3px`,
    backgroundColor: colours.charcoalLight,
  },
  datePanel: {
    backgroundColor: colours.charcoalLighter,
    display: 'inline-block',
    verticalAlign: 'top',
    maxWidth: '50%',
    margin: '0',
    padding: '0',
  },
  header: {
    backgroundColor: colours.Primary0,
    minHeight: '30px',
    fontSize: '2em',
    fontFamily: 'Impact, sans-serif',
    color: colours.PrimaryText0,
  },
  buttonTransparent: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
  textArea: {
    minWidth: '98%',
    maxWidth: '100%',
    resize: 'none',
  },

  entryListPanel: {
    backgroundColor: colours.charcoalLightest,
    display: 'inline-block',
    margin: '0',
    width: '50%',
    minHeight: '200px',
    clear: 'both',
  },
  calendarItem: {
    componentStyle: {
      listStyleType: 'none',
      display: 'inline-block',
      width: '13.6%',
      textAlign: 'center',
      marginBottom: '5px',
    },
    buttonStyle: {
      border: 'none',
      backgroundColor: 'transparent',
      color: '#ffffff',
    },
  },
};
module.exports.colours = colours;
module.exports.style = style;
