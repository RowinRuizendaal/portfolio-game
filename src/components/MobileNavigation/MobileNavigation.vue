<template>
<div :class="styles['mobile-navigation']" v-if="!dialougeIsActive">
   <div :class="styles['direction-buttons']">
      <div :class="styles['direction-up']">
         <button id="up" class="test">
            <icon name="chevron-up" />
         </button>
      </div>
      <div :class="styles['direction-down']">
        <button id="down">
            <icon name="chevron-down" />
        </button>
      </div>
      <div :class="styles['direction-left']">
        <button id="left">
            <icon name="chevron-left" />
        </button>
      </div>
      <div :class="styles['direction-right']">
        <button id="right">
            <icon name="chevron-right" />
        </button>
      </div>
   </div>
</div>
</template>


<script lang="ts">
import { defineComponent, useCssModule, onUpdated } from 'vue'
import { useDialougeStore } from '@/stores/dialouge'
import { handleMobileMovementTouchEnd, handleMobileMovementTouchStart } from '@/lib/windowEvents'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'MobileNavigationComponent',
  setup() {
    const styles = useCssModule()

    const store = useDialougeStore()
    const { dialougeIsActive } = storeToRefs(store)

    onUpdated(() => {
        const allButtons = document.querySelectorAll('button')

        allButtons.forEach(button => {
            button.addEventListener('touchstart', (event) => {
                event.preventDefault()
                
                handleMobileMovementTouchStart(button.id)
                
            })
        })

        allButtons.forEach(button => {
            button.addEventListener('touchend', (event) => {
                event.preventDefault();

                handleMobileMovementTouchEnd(button.id);
            })
        })

        allButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                handleMobileMovementTouchStart(button.id);
            })
        })
    })

    return {
        styles,
        dialougeIsActive
    }
  }
})

</script>

<style module lang="css">
@import './MobileNavigation.module.css';
</style>
