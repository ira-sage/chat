<template lang="pug">
section.chat.p-3
  .row
    .col-12.col-md-4
      .chat__users
        ul
          li.mt-2(v-for="chat in $store.getters.chatsByUser(userId)" :key="chat.id" @click="chatId = chat.id")
            BaseAvatar(v-bind="chat" :active="chat.id === chatId")
    .col
      .chat__area
        .chat__messages.p-2.mb-2(ref="messagesArea")
          ul(v-if="chatId")
            li(v-for="message, index in $store.getters.chatMessages(chatId, userId)" :key="index")
              BaseMessage(v-bind="message")
        form.chat__form.input-group(@submit.prevent="send()")
          input.chat-input.form-control(placeholder="Написать сообщение..." v-model="message")
          .input-group-append
            button.chat-btn.btn Отправить
</template>

<script>
import BaseAvatar from './BaseAvatar'
import BaseMessage from './BaseMessage'

export default {
  components: { BaseAvatar, BaseMessage },
  props: {
    userId: {
      type: Number,
      default: 1
    }
  },
  data () {
    const chats = this.$store.getters.chatsByUser(this.userId)
    return { chatId: chats[0].id, message: '' }
  },
  updated () {
    const messagesArea = this.$refs.messagesArea
    messagesArea.scrollTop = messagesArea.scrollHeight
  },
  methods: {
    send () {
      if (!this.message) return
      this.$store.commit('SEND_MESSAGE', { message: this.message, userId: this.userId, chatId: this.chatId })
      this.message = ''
    }
  }
}
</script>

<style lang="scss">
.chat {
  min-height: 400px;
  border: 2px solid $light-lilac;
  border-radius: 20px;
  position: relative;
  &__messages {
    height: 300px;
    overflow-y: auto;
  }
}
</style>
