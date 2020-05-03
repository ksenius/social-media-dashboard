const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data.json', 'utf-8'));

module.exports = {
  locals: {
    site: data.site,
    mainHeading: data.mainHeading,
    totalFollowers: data.totalFollowers,
    overviewHeading: data.overviewHeading,
    cards: data.cards,
  },
};
