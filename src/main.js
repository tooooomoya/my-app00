import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import store from './store'
import router from './router'

const app = createApp(App).use(router).use(store)
//ルータとVuexを有効化してappオブジェクトを生成

app.config.globalProperties.$http=(url, opts)=>fetch(url, opts)
//http経由でfetchを呼び出せるように、アプリ全体のメソッド（プロパティの名前は$http）としておく。

installElementPlus(app)
//ElementPlusを有効化

app.mount('#app')