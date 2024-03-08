<template>
  <div>
    <CanvasComponent />
    <DialougeComponent :dialougeText="dialouge" />
    <MobileNavigationComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CanvasComponent from '@/components/Canvas'
import DialougeComponent from '@/components/Dialouge'
import MobileNavigationComponent from '@/components/MobileNavigation'
import { intro } from './lib/dialogues';
import { music } from '@/lib/music'

export default defineComponent({
  name: 'App',
  components: {
    CanvasComponent,
    DialougeComponent,
    MobileNavigationComponent
  },
  setup() {
    const isActive = true
    const { dialouge } = intro
    let isPlayingMusic = false

    window.addEventListener('click', () => {
      if (!isPlayingMusic) {
        isPlayingMusic = true
        return music.Map.play()
      }
    })

    return {
      isActive,
      dialouge
    }
  }
})

</script>