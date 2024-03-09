<template>
  <div :class="styles.dialouge" v-if="dialougeIsActive">
    <div :class="styles.content">
      <p :class="styles.paragraph">
        {{ translatedString }}
      </p>
      <button @click="handleButtonClick" :class="styles.button">
        <p class="bold">{{ $t('controls.continue') }}</p>
        <icon name="chevron-down" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useCssModule } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDialougeStore } from '@/stores/dialouge'
import type { PropsProperties } from './type'
import { storeToRefs } from 'pinia'
import { music } from '@/lib/music'

export default defineComponent({
  name: 'DialougeComponent',
  props: {
    dialougeText: {
      type: Array as () => PropsProperties,
      required: true
    }
  },
  setup(props) {
    const styles = useCssModule()

    // translations
    const { t } = useI18n()
    const { dialougeText } = reactive(props)

    // store
    const store = useDialougeStore()
    const { toggleDialouge } = store
    const { dialougeIsActive } = storeToRefs(store)

    // setup for dialouge
    let index = 1
    let translatedString = ref(t(dialougeText[0].text))

    const handleButtonClick = () => {
      const totalDialougeLength = dialougeText.length - 1

      if (index < totalDialougeLength) {
        index++
        music.TextBox.play()
        return (translatedString.value = t(dialougeText[index].text))
      }

      // reset index and close dialouge
      toggleDialouge()

      return (index = 0)
    }

    return {
      styles,
      handleButtonClick,
      translatedString,
      dialougeIsActive
    }
  }
})
</script>

<style module lang="css">
@import './Dialouge.module.css';
</style>
