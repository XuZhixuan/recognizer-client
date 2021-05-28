<template>
  <b-navbar ixed="top" type="light" variant="light">
    <b-navbar-brand href="#">Recon</b-navbar-brand>
    <b-collapse is-nav>
      <b-navbar-nav>
        <router-link to="/recognize" class="nav-link">图像识别</router-link>
        <router-link to="about" class="nav-link">关于</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  border-color: #e7e7e7;
  box-shadow: 0px 1px 11px 2px rgba(42, 42, 42, 0.1);
  border-top: 4px solid #00b5ad;
  border-bottom: 1px solid #e8e8e8;
}
</style>
