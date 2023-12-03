<template>
    <div>
        <div class="all">
            <div class="weathercard">
            <h1>{{ weather.channel.field1 }}</h1>
            <h1>{{  }}</h1>
         </div>
         <div class="weathercard">
            <h1>{{ weather.channel.field2 }}</h1>
         </div>
        <div>
            <h1>{{ weather.channel.field3 }}</h1>
        </div>
        <div>
            <h1>{{ weather.channel.field4 }}</h1>
        </div>
        <div>
            <h1>{{ weather.channel.field5 }}</h1>
        </div>
        </div>
         
        
        <p v-for="(item,index) of weather.feeds">{{index}} {{ item }}</p>     
    </div>
  </template>
  
  <script>
import {app as app} from '../../firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { arrayUnion, getFirestore ,updateDoc} from "firebase/firestore";
import { doc, setDoc,addDoc,collection } from "firebase/firestore"; 
import axios from 'axios';
const storage = getStorage(app);
const db = getFirestore(app);

  export default {
   name:'weather',
   data(){
      return{
        weather:{
            channel:{},
            feeds:[]
        },
        weatherdata:[],
        current:null
      }
   },
   methods:{
async test(){
        const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
        const movies = await response.json()
        
         this.weather.channel = movies.channel
         this.weather.feeds = movies.feeds
         this.weatherdata.push(this.weather)
         console.log(this.weatherdata)
         this.current = movies.feeds.pop()
         console.log(current);
   },
},
   created(){

     this.test()
    
   }
  }
  </script>
  
  <style>
  .weathercard{
     width: 30%;
     height: 200px;
     background-color: white;
  }
  .all{
    display: grid;
    grid-template-columns: repeat(3,1fr);
  }
  </style>