<template>
    <div class="my_container my_mail d-flex flex-wrap justify-content-center align-items-center marginBottom">
        <div class="container-fluid">
            <div class="row d-flex justify-content-between flex-wrap">
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <input type="text" placeholder="First Name">
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <input type="text" placeholder="Last Name">
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <input type="text" placeholder="Email Address">
                </div>
            </div>
        </div>
        <button class="my-button">Subscribe</button>
    </div>
</template>

<script>

export default {
    name: 'MainMail',
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

div.my_mail {
    // background-color: aqua;
    height: 415px;
    background-image: url(form-bg-1.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 70px;

    input {
        // background-color: transparent;
        border: 1px solid white;
        background-color: transparent;
        color: white;
        height: 60px;
        width: 100%;
        border-radius: 30px;
        padding: 20px;
    }

    .my-button {
        background-color: black;
        color: white;
        width: 150px;
        height: 60px;
        border-radius: 30px;
        padding: 20px;
        border: none;
        font-weight: 600;
        font-size: 16px;
    }
}
</style> 
