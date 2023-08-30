<template>
    <div class="wrapper marginBottom d-flex justify-content-between align-items-center">
        <button class="arrows d-none d-md-block rotate-flip" @click="index < 2 ? index = 2 : index--"><i
                class="fi fi-sr-paper-plane-top rotate-flip"></i></button>
        <div class="info d-flex justify-content-center justify-content-lg-end">
            <div class="info-container">
                <p>Welcome To Our Movie Site</p>
                <h1>Our special <span>movies</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industrioy. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s, when an unknown</p>
                <button>Read More</button>
            </div>
        </div>
        <button class="arrows d-none d-md-block" @click="index > 1 ? index = 1 : index++"><i
                class="fi fi-sr-paper-plane-top"></i></button>
        <img :class="index == 2 ? 'opacity-100' : 'opacity-0'" src="slider2.jpg" alt="">
        <img :class="index == 1 ? 'opacity-100' : 'opacity-0'" src="slider.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'MovieSlider',
    props: {
    },
    components: {
    },
    data() {
        return {
            index: '1'
        }
    },
    methods: {

        moveToNextSlide() {

        },
    },
}		
</script>
<style scoped lang="scss">
@use '../../styles/partials/_variables.scss';
@use '../../styles/partials/_mixins.scss';
@use '../../styles/general.scss';

.wrapper {
    width: 100%;
    height: 730px;
    position: relative;

    img {
        // z-index: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: right;
        transition: all .7s;
    }

    .arrows {
        z-index: 1;
        margin: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 30px;
        border: none;
        background-color: transparent;
        opacity: 0;
        color: white;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: all .5s;
    }

    .arrows:hover {
        z-index: 1;
        background-color: rgba(35, 35, 35, 0.299);
        color: #13be13;
    }

    .margin-left {
        margin-left: 300px;
    }

    .info-container {
        width: 450px;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info {
        z-index: 1;
        width: 750px;


        h1 {
            text-transform: uppercase;
            font-size: 50px;
            font-weight: 300;
            width: 500px
        }

        span {
            color: #13be13;
            ;
        }

        p {
            font-size: 14px;
            margin-bottom: 10px;
        }

        button {
            border: none;
            color: white;
            background-color: #13be13;
            padding: 10px 18px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 700;
            transition: all .3s;
        }

        button:hover {
            background-color: white;
            color: black;

        }
    }
}

.wrapper:hover {
    .arrows {
        opacity: 1;
    }
}
</style> 

