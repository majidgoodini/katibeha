import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  setupComponent(attrs, component) {
    withPluginApi("0.8.7", (api) => {
     });
  },
};
