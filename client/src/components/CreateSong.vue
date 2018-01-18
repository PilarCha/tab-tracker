<template lang="html">
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">

        <v-text-field
          label="Title"
          type="text"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

          <v-text-field
            label="Artist"
            type="text"
            required
            :rules="[required]"
            v-model="song.artist"
          ></v-text-field>

          <v-text-field
            label="Genre"
            type="text"
            required
            :rules="[required]"
            v-model="song.genre"
          ></v-text-field>

          <v-text-field
            label="Album"
            type="text"
            required
            :rules="[required]"
            v-model="song.album"
          ></v-text-field>

          <v-text-field
            label="Album Image URL"
            type="text"
            required
            :rules="[required]"
            v-model="song.albumImage"
          ></v-text-field>

          <v-text-field
            label="YouTube Id"
            type="text"
            required
            :rules="[required]"
            v-model="song.youtubeId"
          ></v-text-field>

      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song-Structure" class="ml-2">
      <v-text-field
        label="Lyrics"
        type="text"
        required
        :rules="[required]"
        multi-line
        v-model="song.lyrics"
      ></v-text-field>

      <v-text-field
        label="Tab"
        type="text"
        required
        :rules="[required]"
        multi-line
        v-model="song.tab"
      ></v-text-field>
      </panel>

      <div class="danger-alert" v-if="error">{{error}}</div>

      <v-btn
      dark
      class="cyan"
      @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required.',
      error: null
    }
  },
  methods: {
    async create () {
      this.error = null
      const FilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!FilledIn) {
        this.error = 'Please fill in all required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="css">
</style>
