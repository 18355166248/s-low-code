module.exports = {
  setFirstUpperCase: (name = '') => {
    return name[0].toUpperCase() + name.substr(1);
  },
};
