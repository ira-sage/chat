<template lang="pug">
section.login.mx-auto.d-flex.flex-column.align-items-center.justify-content-center
  form.d-flex.flex-column.align-items-center.justify-content-center(@submit.prevent="login()")
    input.chat-input.pl-2.py-3.mb-3.form-control(placeholder="Никнейм" v-model="name")
    input.chat-input.pl-2.py-3.mb-3.form-control(placeholder="Ссылка на картинку" v-model="img")
    button.btn-lg.chat-btn.py-2.mb-3.btn Войти
  span.mb-3.btn(@click="img = exampleImg; name = 'Человек'") Вставить данные

</template>

<script>
export default {
  data () {
    const exampleImg = '/img/100.jpg'
    return { img: '', name: '', exampleImg }
  },
  methods: {
    login () {
      if (!this.img || !this.name) return
      this.$store.commit('ADD_USER', { img: this.img, name: this.name })
    }
  }
}
</script>

<style lang="scss">
.login {
  height: 500px;
  max-width: 400px;
  border-radius: 20px;
  border: 2px solid $light-lilac;
}
</style>
