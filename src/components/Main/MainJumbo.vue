<template>
    <div class="wrapper">
        <div class="my_jumbo marginBottom"></div>
        <div class="texts-container">
            <h1 class="txtColorPrimary">Coming Soon Movie</h1>
            <h2>Max Still</h2>

            <div class="text-box">
                <h3>jon player<span class="txtColorPrimary"> & </span> Emily Rose</h3>

                <h4>The countdown is finished!</h4>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Jumbo',
    props: {
    },
    components: {
    },
    data() {
        return {
            // links: [
            //	'gino',
            //	'ciao',
            //	]
        }
    },
    methods() {
    },
}		
</script>
<style scoped lang="scss">
@use '../../styles/partials/_variables.scss';
@use '../../styles/partials/_mixins.scss';
@use '../../styles/general.scss';

div.wrapper {
    position: relative;
}

div.texts-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    padding: 30px;
    text-align: center;
    text-transform: uppercase;

    h1 {
        font-size: 24px;
        font-weight: 700;
    }

    h2 {
        font-size: 70px;
        font-weight: 300;
        ;
    }

    .text-box {
        background-color: #0f1828;
        height: 90px;
        width: 380px;

        h3 {
            font-size: 22px;
            font-weight: 700;
            padding: 10px;
        }

        h4 {
            font-size: 16.8px;
            font-weight: 700;
            padding: 5px;
        }
    }
}

div.my_jumbo {
    background-color: aqua;
    height: 650px;
    background-image: url(coming-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: .5;
}
</style> 
