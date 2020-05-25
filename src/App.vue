<template lang="pug">
main#app.container-fluid
  .row(v-if="$store.state.users.length > 1")
    .col-12.col-lg-6.mt-5
      .col-12.col-lg-12.col-xl-10.mx-auto
        TheChat(:userId="2")
    .col.mt-5
      .col-12.col-lg-12.col-xl-10.mx-auto
        TheChat(:userId="1")
  .row.vh-100.d-flex.align-items-center.justify-content-center(v-else)
    .col
      LoginForm
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'
import TheChat from './components/TheChat'
import LoginForm from './components/LoginForm'

export default {
  name: 'App',
  components: {
    TheChat,
    LoginForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
img {
  display: block;
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 66%;
}

ul, ol {
  list-style: none;
  padding: 0;
}
</style>
