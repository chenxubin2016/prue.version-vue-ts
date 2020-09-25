import { Vue, Component } from "vue-property-decorator";

declare module "vue/types/vue" {
  interface Vue {
    mixinValue: string;
  }
}
@Component
export default class MyMixins extends Vue {
  mixinValue = "hollo world!";
}
