import { createStore } from 'vuex'

import home from './home'
import calendarEvent from './calendarEvent'
import presidium from './presidium'
import experts from './experts'
import banners from './banners'
import auth from './auth'
import events from './events'
import users from './users'
import profile from './profile'
import statistikCurse from './statistikCurse'

export default createStore({
  state: {
  },
   modules: {
      home,
      calendarEvent,
      presidium,
      experts,
     banners,
     auth,
     events,
     users,
     profile,
     statistikCurse
   }
})
