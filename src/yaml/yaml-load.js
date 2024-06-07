import fs from "fs";
import yaml from "js-yaml";

const yamlLoad = file => {
  return yaml.load(fs.readFileSync(file, "utf8"));
};

export default yamlLoad;
