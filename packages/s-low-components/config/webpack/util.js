exports.formatMFConfig = function (config) {
  const configClone = JSON.parse(JSON.stringify(config));
  // exposes的key需要特殊处理前面加 ./
  Object.keys(configClone.exposes).forEach((key) => {
    const value = configClone.exposes[key];
    configClone.exposes[`./${key}`] = value;
    delete configClone.exposes[key];
  });

  delete configClone.url;

  console.log("configClone", configClone);
  console.log("end");

  return configClone;
};
