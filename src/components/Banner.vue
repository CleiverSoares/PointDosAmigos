<template>
    <div id="main-banner">
        <h1>Point dos Amigos</h1>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
#main-banner{
    background-image: url('/public/img/burger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

#main-banner h1{
    color: rgba(209,21,113,255);
    text-align: center;
    font-size: 60px;
    background-color: #222;
    padding: 20px 40px;
    border-radius: 5px;
}

</style>