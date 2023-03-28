<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link> 
        <router-link to="/Pedidos">Pedidos</router-link>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: ["logo", "alt"]
}
</script>

<style scoped>
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
    color: rgba(209,21,113,255);
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}
#nav a:hover{
    color:#fff
}


</style>