<template>
  <div>
    <v-toolbar dense>
      <v-toolbar-title>Dashboard Worker</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-toolbar>
    <v-container>
      <v-layout row wrap align-content-space-between>
          <v-flex md6>
            <v-card height="340" width="600">
              <Bar />
            </v-card>
          </v-flex>
          <v-flex md6>
            <v-card height="340" width="600">
              <Bar />
            </v-card>
          </v-flex>
      </v-layout>
      <v-layout row wrap align-content-center>
        <v-flex sm6 lg3>
          <v-card height="250" width="250" >
            <Chart />
          </v-card>
        </v-flex>
        <v-flex sm6 lg3>
          <v-card height="250" width="250" >
            <Chart />
          </v-card>
          </v-flex>
        <v-flex sm6 lg3>
          <v-card height="250" width="250" >
            <Chart />
          </v-card>
        </v-flex>
        <v-flex sm6 lg3>
          <v-card height="250" width="250" >
            <Chart />
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-content-center>
        <v-flex lg12>
          <v-card>
            <Fancy :height="250"/>
          </v-card>
        </v-flex>
      </v-layout>  
    </v-container>
  </div>
</template>
<script>
import Bar from './graphs/Bar.js'
import Chart from './graphs/Chart'
import Fancy from './graphs/FancyGraph'

export default {
  name: 'App',
  components: {
    Bar,
    Chart,
    Fancy,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.v-card {
  margin: 10px
}
</style>