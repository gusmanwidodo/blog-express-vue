<template>
  <div>
    <div :class="$style.links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style module>
.links {
  margin: 16px 0 56px;
}
</style>

<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>
