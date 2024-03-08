<template>
    <component :is="icon" />
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import { defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'IconComponent',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const icon = defineAsyncComponent(() => import(`../../assets/${props.name}.svg`))

    return {
        icon,
    }
  }
})

</script>
