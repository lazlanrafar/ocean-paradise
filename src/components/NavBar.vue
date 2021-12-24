<template>
  <div>
    <header>
      <a href="" class="logo">Logo</a>
      <div class="rightSide">
        <div class="btns dayNight" @click="dayNight()" ref="dayNight">
          <i class="fas fa-sun ic"></i>
          <i class="fas fa-moon ic"></i>
        </div>
        <div class="btns menuToggle" @click="menuToggle()" ref="menuToggle">
          <i class="fas fa-bars ic"></i>
          <i class="fas fa-times ic"></i>
        </div>
      </div>
    </header>

    <nav>
      <ul class="navbar" ref="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Package</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    dayNight() {
      this.$refs.dayNight.classList.toggle("active");
      this.$store.state.body.classList.toggle("dark");
    },
    menuToggle() {
      this.$refs.menuToggle.classList.toggle("active");
      this.$refs.navbar.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/navbar.scss";
</style>
