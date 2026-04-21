import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/styles/reset.scss"
import components from "@/components/UI"

const app = createApp(App)

components.forEach((component) => {
  if (component.name) {
    app.component(component.name, component)
  }
})

app.use(router)

app.mount("#app")
