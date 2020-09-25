<template>
  <div>
    <p>{{ title }}</p>
    <div class="btn" ref="mybtn" @click="changeBtnColor">{{ btnName }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Ref } from "vue-property-decorator";
import myMixins from "@/mixins/mixinTest.ts";
import { getParams } from "../assets/ts/common/utils";

@Component({
  mixins: [myMixins]
})
export default class Test extends Vue {
  title = "myTest";
  name = this.$route.query.name || "";
  btnName = "我是按钮";

  created() {
    this.title += 1;
    console.log(getParams(window.location.href, "age"));
  }

  get myTitle() {
    return this.title + Date.now();
  }

  @Watch("title", { deep: true, immediate: true })
  handelChangeTitle(value: string) {
    console.log("新数据" + value);
  }

  @Ref("mybtn") btn!: HTMLDivElement;

  changeBtnColor() {
    this.btn.style.color = "#eb0000";
  }
}
</script>

<style scoped></style>
