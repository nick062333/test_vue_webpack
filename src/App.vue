<style module>
    div{
        background-color:rgb(199, 124, 32);
    }
</style>

<template>
    <div id="app">
        <h1> {{ msg }} </h1>

        <img src="./assets/logo.png" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '我要的顏色呢!!!!!!!!!'
        }
    }
}
</script>