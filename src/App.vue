<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "华工百步梯",
    meta: [
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }
    ]
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      transitionName: "slide-left"
    };
  },
  mounted() {
    this.$router.push("/entry");
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  },
  watch: {
    $route(to, from) {
      // 返回主页右滑，否者左滑
      this.transitionName =
        !~to.path.indexOf("home") || ~from.path.indexOf("entry")
          ? "slide-left"
          : "slide-right";
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(100vw, 0);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100vw, 0);
}
</style>
