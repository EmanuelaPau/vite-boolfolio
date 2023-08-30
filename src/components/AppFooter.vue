<template>
    <footer class="">
        <!-- About Us  -->
        <div class=" ">
            <div class="container-fluid footer-about">
                <div class="row my_container">
                    <div class="col-12 col-md-6 col-lg-3 px-3">
                        <h1 class="my_h1">
                            About Us
                        </h1>
                        <p class="my_p">
                            Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nam
                            tincidunt metus tristique tristique viverra. Mauris erat ante, egestas vitae dapibus seds.
                        </p>
                        <ul class="list-unstyled d-flex flex-wrap">
                            <li v-for="icon in    socialIcons   " class="me-3 social-icon" :class="icon.color">
                                <a :class="icon.icon" href="">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 px-3">
                        <h1 class="my_h1">
                            Movie Category
                        </h1>
                        <ul class="list-unstyled">
                            <li v-for="li in movieCategory" class="footer-li">
                                <a class="text-decoration-none text-reset" href="">{{ li.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 px-3">
                        <h1 class="my_h1">
                            Information
                        </h1>
                        <ul class="list-unstyled">
                            <li v-for="li in information" class="footer-li">
                                <a class="text-decoration-none text-reset" href="">{{ li.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-3 px-3">
                        <h1 class="my_h1">
                            Recent Posts
                        </h1>
                        <div v-for="cards in recentPosts" class="footer-card d-flex">
                            <img :src="cards.img" alt="">
                            <div class="d-flex flex-wrap align-items-end">
                                <p class="my_p m-0 card-title">{{ cards.title }}</p>
                                <p class="my_p m-0">{{ cards.date }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer-about-back"></div>
        <!-- Footer bottom  -->
        <div class="container-fluid">
            <div class="row my_container py-3">
                <div class="col-6">
                    <ul class="d-flex flex-wrap list-unstyled my_nav m-0">
                        <li v-for="   element    in    footerBottomNav   " class="me-4">
                            <a class="text-reset text-decoration-none" href="">
                                {{ element }}
                            </a>
                        </li>

                    </ul>
                </div>
                <div class="col-6 d-flex flex-wrap justify-content-end px-0">
                    <span class="me-1">
                        © 2020
                    </span>
                    <span class="txtColorPrimary me-1 my_info">
                        <a class="" href="">@Themepul</a>
                    </span>
                    <span>
                        All Rights Reserved.
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'AppFooter',
    props: {
        aboutUs: 'Object',
        movieCategory: 'Object',
        information: 'Object',
        recentPosts: 'Object',
        footerBottomNav: 'Object',
        socialIcons: 'Array',
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
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

.footer-about {
    padding-top: 70px;
    width: 100%;
    line-height: 24px;
    position: relative;
    z-index: 1;
}

div.footer-about:before {
    content: '';
    height: 100%;
    width: 100%;
    background-image: url('ft-bg.jpg');
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    opacity: 0.1;
    z-index: 0;

    position: absolute;
    top: 0;
    right: 0;
}

.footer-li {
    height: 48px;
    font-size: 15px;
    transition: all .8s;
    z-index: 1;
}

.footer-li:hover {
    color: #13be13;
}

.footer-card {
    width: 100%;
    height: 85px;
    margin-bottom: 30px;
    z-index: 1;

    img {
        height: 100%;
        margin-right: 10px;
        z-index: 1;
    }
}

.my_nav li {
    transition: all .8s;
    z-index: 1;
}

.my_nav li:hover {
    color: #13be13;
}

.my_info a {
    transition: all .8s;
    color: #13be13;
    z-index: 1;
}

.my_info a:hover {
    color: white;
}

h1.my_h1 {
    position: relative;
    font-size: 18px;
    margin-bottom: 40px;
    z-index: 1;
}

h1.my_h1:after {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    height: 10px;
    width: 30px;
    border-bottom: 2px solid white;
    z-index: 1;
}

p.my_p {
    font-size: 14px;
    z-index: 1;
    z-index: 1;
}

.social-icon {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #13be13;
    transition: all .7s;

    a {
        color: white;
        text-decoration: none;
    }

    z-index: 1;
}

.social-icon:hover {
    background-color: transparent;
    color: #13be13;

    a {
        color: #13be13;
    }
}

.card-title {
    width: 200px;
    transition: all .7s;
    cursor: pointer;
    z-index: 1;
}

.card-title:hover {
    color: #13be13;
}

// Colors 

.fb-color {
    background-color: #02b0e8;
}

.tw-color {
    background-color: #02b0e8;
}

.ln-color {
    background-color: #00a098;
}

.ig-color {
    background-color: #c22e2a;
}

.pn-color {
    background-color: #b00a1b;
}
</style> 
