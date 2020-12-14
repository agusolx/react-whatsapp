let connection = PropertiesService.getDocumentProperties().getProperty(
  "connection"
);
let msg = PropertiesService.getDocumentProperties().getProperty("msg");

const saveConfiguration = config => {
  let docProps = PropertiesService.getDocumentProperties();
  Object.keys(config).forEach(function(key) {
    docProps.setProperty(key, config[key]);
  });
};