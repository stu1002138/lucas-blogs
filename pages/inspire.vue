<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>
<script>
import { app, db } from '@/plugins/firebase'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { connectFirestoreEmulator } from "firebase/firestore";
export default {
   mounted:async ()=>{
     try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    // db.collection('users')
    //   .add({
    //     first: 'Dez',
    //     last: 'Chuang',
    //     gender: 'male'
    //   })
    //   .then(function(docRef) {
    //     console.log('Document written with ID: ', docRef.id)
    //   })
    //   .catch(function(error) {
    //     console.error('Error adding document: ', error)
    //   })
  }
}
</script>