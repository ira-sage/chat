import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats: [
      {
        id: 1,
        messages: [],
        usersId: [1, 2]
      },
      {
        id: 2,
        messages: [],
        usersId: [2]
      }
    ],
    users: [
      { id: 1, name: 'Ivan', img: 'https://vokrug.tv/pic/person/8/1/1/c/811c3723af673749301a3a01f2dbf85c.jpg' }
    ]
  },
  getters: {
    chatsByUser: state => id => { // возвращает чаты пользователя по его id
      return state.chats
        .filter(chat => chat.usersId.includes(id))
        .map(chat => {
          let companionId = chat.usersId.find(userId => userId !== id)
          if (!companionId) companionId = id // если нет компаньона, то собеседник он себе сам
          const { name, img } = state.users.find(u => u.id === companionId)
          return { id: chat.id, name, img }
        })
    },
    chatMessages: state => (chatId, userId) => { // получить сообщения чата по его id и добавляет авторство по id автора
      const chat = state.chats.find(chat => chat.id === chatId)
      return chat.messages.map(m => {
        const { id, name, img } = state.users.find(user => user.id === m.userId)
        const isAuthor = userId === id
        return { message: m.message, name, img, isAuthor }
      })
    }
  },
  mutations: {
    SEND_MESSAGE (state, { message, userId, chatId }) {
      const index = state.chats.reduce((p, c, index) => c.id === chatId ? index : p, 0)
      state.chats[index].messages.push({ message, userId })
    },
    ADD_USER (state, { img, name }) {
      state.users.push({ id: state.users.length + 1, img, name })
    }
  }
})
