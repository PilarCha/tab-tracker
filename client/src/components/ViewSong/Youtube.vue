<template lang="html">
  <panel title='Youtube Video'>
    {{youtube}}
    <youtube
    :video-id="youtube"
    :player-width="500"
    :player-height="210">

    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  props: [
    'youtube'
  ],
  components: {
    Panel,
    VueYouTubeEmbed
  }
}
</script>

<style lang="css">
</style>
