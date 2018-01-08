<template lang="html">
  <panel title='Youtube Video'>
    {{youtube}}
    <youtube
    :video-id="youtube"
    :player-width="500"
    :player-height="310">

    </youtube>
  </panel>
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  props: [
    'youtube'
  ],
  components: {
    VueYouTubeEmbed
  }
}
</script>

<style lang="css">
</style>
