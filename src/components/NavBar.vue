<template>
  <div>
    <header>
      <a href="" class="logo">Logo</a>
      <div class="rightSide">
        <div class="btns dayNight" @click="dayNight()" ref="dayNight">
          <i class="fas fa-sun"></i>
          <i class="fas fa-moon"></i>
        </div>
        <div class="btns menuToggle" @click="menuToggle()" ref="menuToggle">
          <i class="fas fa-bars"></i>
          <i class="fas fa-times"></i>
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
    },
    menuToggle() {
      this.$refs.menuToggle.classList.toggle("active");
      this.$refs.navbar.classList.toggle("active");
    },
  },
};
</script>
