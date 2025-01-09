import { Button } from "primevue";
import type { Plugin } from "vue";

const components = {
    Button
}

export const setupUILib: Plugin = {
    install(app, options) {
        Object.entries(components).forEach(([key, val]) => {
            app.component(key, val)
        })
    }
}