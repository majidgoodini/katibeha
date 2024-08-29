import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { withPluginApi } from "discourse/lib/plugin-api";
import { ajax } from "discourse/lib/ajax";

export default class BeforeTopicList extends Component {
  @tracked items = [];

  constructor() {
    super(...arguments);
    this.loadItems();
  }

  loadItems() {
    withPluginApi("0.8.7", (api) => {
      ajax("https://app.nocodb.com/api/v1/db/public/shared-view/c64f2002-b5dc-48ce-8912-e8f2bfc04713/rows").then((result) => {
        this.items = result.list;
      }).catch((error) => {
        console.error("Failed to fetch items:", error);
      });
    });
  }
}
