<template>
  <div>
    <CanvasComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CanvasComponent from '@/components/Canvas'

export default defineComponent({
  name: 'App',
  components: {
    CanvasComponent
  },
  setup() {
    return {
    }
  }
})

</script>