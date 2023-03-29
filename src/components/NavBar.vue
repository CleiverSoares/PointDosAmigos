<template>
  <div id="nav">
    <router-link class="link-nav" to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>
    <router-link class="link-nav " to="/">Home</router-link>
    <router-link class="link-nav" to="/Pedidos">Pedidos</router-link>
  </div>
</template>

<script>
export default {
    name: "NavBar",
  props: ["logo", "alt"],

  
      
//           var header = document.getElementById("nav");
//   var btns = header.getElementsByClassName("nav-link");
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }
    }
</script>

<style scoped>

.link-nav:active{
    color: #fff;
    text-decoration: overline !important;
}
#nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 90px;
  width: 100%;
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 60px;
  border-radius: 50%;
}

#nav a {
  color: rgba(209, 21, 113, 255);
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}
#nav a:hover {
  color: #fff;
}
</style>