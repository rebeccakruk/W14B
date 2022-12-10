import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import GamePage from '@/views/GamePage'


Vue.use(VueRouter)

const routes = [
        {
          path : "/",
          component : LoginPage,
          meta: [
            {
            title: "Login Page"
            },
      ]
          },
          {
          path : "/Game-page",
          component : GamePage,
          meta:[
            {
            title: "Game Page",
            },
      ]
  },
]
  

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  // Get meta-tags
  let metaTags = document.querySelectorAll('meta');
  // Loop through tags and remove each
  for (let tag of metaTags){
    tag.remove();
  }
  let newTags = to.meta;
  document.querySelector('title').innerText = newTags[0].title;

  for (let i = 1; i < newTags.length; i++) {
    document.querySelector(`head`).insertAdjacentHTML(`afterbegin`, `
                            <meta name="${newTags[i].name}" content="${newTags[i].description}"`)
  }
// to;
document.querySelector(`head`).insertAdjacentHTML(`afterbegin`, `
                      <meta charset="utf-8">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      <meta name="viewport" content="width=device-width,initial-scale=1.0">
                      `);
// from;
next();
})

export default router
