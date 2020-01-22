<template>
  <v-app class="white lighten-1">
    <v-div>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Categories</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
    
  </v-toolbar>
  </v-div>
  <v-layout row wrap>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-basic.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Basic</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-scatter.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Scatter-plot</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
        <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-math.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Math</router-link></li>
          </ul>
      </v-btn>
      </div>
     
    </v-flex>

    <v-flex xs12 sm4 text-xs-center>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="70">
            <img class="text-lg-center" src="/avatar-interaction.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>User-interaction</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-line-graph.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Line graph</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
        <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-plot.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Graph and plot</router-link></li>
          </ul>
      </v-btn>
      </div>
      
    </v-flex>

    <v-flex xs12 sm4 text-xs-center>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-animation.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>animation</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-bubble-chart.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Bubble chart</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
        <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-Maps.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Maps</router-link></li>
          </ul>
      </v-btn>
      </div>
      
    </v-flex>
    <v-flex xs12 sm4 text-xs-center>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-Tables.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Tables</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-area-chart.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Area-chart</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-diagram.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Diagrams</router-link></li>
          </ul>
      </v-btn>
      </div>
     
    </v-flex>
     <v-flex xs12 sm4 text-xs-center>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-Tree.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Tree</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-tally-marks.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Telly-Marks</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-network.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Network</router-link></li>
          </ul>
      </v-btn>
      </div>
     
    </v-flex>
    <v-flex xs12 sm4 text-xs-center>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-bar-chart.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Tree</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-flow_map.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Flow map</router-link></li>
          </ul>
      </v-btn>
      </div>
      <div>
       <v-flex class="mt-5">
           <v-div>
            <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-flex class="mt-5">
            </v-flex>
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-hierarchic.png">
          </v-avatar>
          </v-btn>
            </v-tooltip>
            </v-div>
        </v-flex>
  
      <v-btn class="mx-3 my-2 mb-5">
        <ul>
            <li class="grey--text"><router-link to="christopheviau.com/d3list/gallery.html#visualizationType=map" exact>Hierarchic</router-link></li>
          </ul>
      </v-btn>
      </div>
     
    </v-flex>
    
  </v-layout>


  </v-app>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style>
layout,li{
  color:grey,
  
}
  
</style>


