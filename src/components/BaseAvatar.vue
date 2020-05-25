<template lang="pug" functional>
.avatar.p-2.d-flex.align-items-center(:class="{ 'avatar--active': props.active }")
  img.mr-3(:src="props.img" width="50")
  span.text-truncate {{ props.name }}
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.avatar {
  position: relative;
  opacity: .6;
  transition: .8s;
  &::before {
    content: '';
    width: 0;
    height: 100%;
    background: linear-gradient(97deg, rgba(226,226,226,0.4682247899159664) 10%, rgba(255,255,255,0.8995973389355743) 72%);
    border-bottom: 1px solid #dedede;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: .8s;
  }
  &:hover, &--active {
    opacity: 1;
    cursor: pointer;
    &::before {
      width: 100%;
    }
  }
}
</style>
