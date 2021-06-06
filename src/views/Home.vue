<template>
  <div>
    <b-jumbotron header="图像识别系统" lead="Image Recognizer">
      <router-link to="recognize">
        <b-button>点此进入</b-button>
      </router-link>
    </b-jumbotron>
    <b-jumbotron header="关于" lead="About this system">
      <router-link to="about">
        <b-button>点此进入</b-button>
      </router-link>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
