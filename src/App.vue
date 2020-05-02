<template>
  <div id="app">
    <MenuBar/>
    <ItemList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuBar from './components/MenuBar.vue'
import ItemList from './components/ItemList.vue'

@Component({
  components: {
    ItemList,
    MenuBar,
  },
})
export default class App extends Vue {}
</script>


