import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'
import './assets/styles/tailwind.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebookF  } from '@fortawesome/free-brands-svg-icons'
import { faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn  } from '@fortawesome/free-brands-svg-icons'
// /* import specific icons */
// import { faFacebook, faInstagram, faLinkedIn } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faLinkedinIn)

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)
