import { createStore } from 'vuex'

import home from './home'
import calendarEvent from './calendarEvent'
import presidium from './presidium'
import experts from './experts'
import banners from './banners'
import auth from './auth'
import events from './events'
import users from './users'

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters: {
    getToken (state) {
      return state.token
    },
  },
   modules: {
      home,
      calendarEvent,
      presidium,
      experts,
     banners,
     auth,
     events,
     users
   }
})
