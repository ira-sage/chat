<template lang="pug" functional>
.message.mb-2(:class="{ 'message--author': props.isAuthor }")
  .message__name.text-truncate {{ props.isAuthor ? 'Я' : props.name }}:
  =' '
  .message__text.text-break {{ props.message }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    isAuthor: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.message {
  &__name {
    text-align: left;
    font-weight: bold;
  }
  &__text {
    width: 70%;
    background-color: $light-grey;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: -5px 5px 5px 0px #e0e0e0;
    padding: 15px;
    text-align: left;
  }
  &--author &__name {
    color: $lilac;
    text-align: right;
  }
  &--author &__text {
    margin-left: 30%;
    color: white;
    background-color: $lilac;
    box-shadow: 5px 5px 5px 0px #c8bbf5;
  }
}
</style>
