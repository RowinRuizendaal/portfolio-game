<template>
  <canvas :class="style.canvas" :height="height" :width="width" ref="canvasRef"></canvas>
</template>

<script lang="ts">
import { useCssModule, onMounted, ref } from 'vue'
import { defineComponent } from 'vue'
import { canvasSizes } from '@/lib/constants'
import { useCanvasStore } from '@/stores/canvas'
import { windowEventAnimateFrame, windowEventKeyDown, windowEventKeyUp } from '@/lib/windowEvents'
import { generateBoundaries } from '@/lib/generateBoundaries'

export default defineComponent({
  name: 'CanvasComponent',
  setup() {
    const store = useCanvasStore()
    const style = useCssModule()
    const canvasRef = ref<HTMLCanvasElement | null>(null)
    const { width, height } = canvasSizes

    onMounted(() => {
      const ctx = canvasRef.value?.getContext('2d')

      if (!ctx || !canvasRef.value) {
        return
      }
      
      store.setCanvasContext(ctx)

      generateBoundaries()
      windowEventAnimateFrame()
      windowEventKeyDown()
      windowEventKeyUp()
    })

    return {
      style,
      width,
      height,
      canvasRef
    }
  }
})
</script>

<style module lang="css">
@import './Canvas.module.css';
</style>
