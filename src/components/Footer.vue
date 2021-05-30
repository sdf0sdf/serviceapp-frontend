<template>
  <footer>
    <router-link to="/">Home</router-link>
    &nbsp;
    <router-link to="/about">About</router-link>
    &nbsp;
    <router-link to="/people">People</router-link>
    &nbsp;
    <router-link to="/claims">Claims</router-link>
    &nbsp;
    <router-link to="/claims/new">New</router-link>
  </footer>
</template>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
