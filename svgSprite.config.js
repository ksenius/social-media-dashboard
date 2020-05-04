const path = require('path');

module.exports = {
  getSymbolId: (filePath) => {
    return path.basename(filePath, '.svg');
  },
};
