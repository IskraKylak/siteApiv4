import { createStore } from 'vuex'

import home from './home'
import calendarEvent from './calendarEvent'
import presidium from './presidium'
import experts from './experts'
import banners from './banners'
import auth from './auth'

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
   modules: {
      home,
      calendarEvent,
      presidium,
      experts,
     banners,
     auth
   }
})
