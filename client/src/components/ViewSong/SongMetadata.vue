<template lang="html">
  <panel title="Song">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
            {{song.title}}
        </div>
        <div class="song-artist">
            {{song.artist}}
        </div>
        <div class="song-genre">
            {{song.genre}}
        </div>
        <v-btn
        dark
        class="cyan"
        :to="{
          name: 'song-edit',
           params () {
             return {
               songId: song.id
             }
           }
        }">
          Edit Song
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImage" /><br>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>

export default {
  props: [
    'song'
  ]
}
</script>

<style lang="css">
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}
.album-image{
  width: 70%;
  margin: 0 auto;
}
textarea{
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
