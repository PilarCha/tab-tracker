<template lang="html">
  <div>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"/>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <youtube :youtube="song.youtubeId"/>
    </v-flex>
  </v-layout>

    <v-layout>
      <v-flex xs6 class="mt-2">
        <tab :song="song"/>
      </v-flex>

    <v-flex xs6 class="ml-2 mt-2">
      <lyrics :song="song"/>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import Tab from './Tab'
import Lyrics from './Lyrics'
import Youtube from './Youtube'
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
