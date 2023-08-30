<template>
    <div class="">
        <!-- Header top -->
        <div class="line">
            <div class="container-fluid">
                <div class="row py-3 my_container m-auto d-flex flex-wrap justify-content-between">

                    <!-- Mail -->
                    <div class="header-mail col-lg-3 col-6">
                        <i class="fa-regular fa-envelope me-1"></i>
                        <span>Superhit Top Movie </span>
                        <span class="txtColorPrimary">** King Star **</span>
                    </div>
                    <!-- Socials buttons -->
                    <div class="header-socials col-lg-8 col-md-3 col-6 d-flex justify-content-end">
                        <a class="text-reset " href=""><i class="fa-brands fa-facebook-f mx-2 facebook"></i></a>
                        <a class="text-reset " href=""> <i class="fa-brands fa-twitter mx-2 twitter"></i></a>
                        <a class="text-reset " href=""><i class="fa-brands fa-linkedin-in mx-2 linkedin"></i></a>
                        <a class="text-reset " href=""><i class="fa-brands fa-instagram mx-2 instagram"></i></a>
                        <a class="text-reset " href=""><i class="fa-brands fa-google-plus-g mx-2 google"></i></a>
                    </div>

                    <!-- Login -->
                    <div class="header-login col-lg-1 d-none d-lg-block">
                        <a class="text-reset text-decoration-none" href="#">
                            <i class="fa-solid fa-lock me-2"></i>
                            <span>Login</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <!-- header search  -->
        <div class="header-search line py-3">
            <div class="container-fluid">
                <div
                    class="row my_container m-auto d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <div class="col-5 d-flex justify-content-center justify-content-lg-start ">
                        <img id="my_logo" src="cropped-logo.png" alt="">
                    </div>
                    <div class="col-7 py-3 px-0 d-flex d-none d-md-flex justify-content-center justify-content-lg-end">
                        <div class="my_searchbar d-flex">
                            <input class="my_input bgColorSecondary" type="search" placeholder="Search ..."
                                aria-label="Search">
                            <button class="my_search-button bgColorPrimary" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- header nav -->
        <div class=" my_nav-font px-3 px-lg-0 ">
            <nav class="my_container navbar navbar-expand-lg py-4 ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="dropDown in navDropdown" class="nav-item dropdown show position-relative"
                            @mouseover="$emit('show', dropDown)" @mouseleave="$emit('hide', dropDown)">
                            <a class="text-reset text-decoration-none dropdown-toggle me-3" href="#" role="button"
                                id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ dropDown.name }}
                            </a>

                            <div class="my_dropdown-menu position-absolute"
                                :class="dropDown.state == 'hide' ? 'd-none' : 'd-block'" aria-labelledby="dropdownMenuLink">
                                <a v-for="element in dropDown.list" class="dropdown-item mb-2 my_dd-item" href="#">{{
                                    element }}</a>

                            </div>
                        </li>
                        <li v-for="nav in navLi" class="nav-item">
                            <a class="text-reset text-decoration-none me-3" :href="nav.link">{{ nav.name }}</a>
                        </li>

                    </ul>
                </div>
                <div class="position-relative">
                    <div class="basket-items-notification bgColorPrimary">
                        <p class="m-0 text-center m-auto">0</p>
                    </div>
                    <i class="fa-solid fa-basket-shopping basket-icon">
                    </i>
                </div>
            </nav>

        </div>
    </div>
</template>

<script>
//  import HelloWorld from './HelloWorld.vue'

export default {
    name: 'AppHeader',
    props: {
        navDropdown: 'Array',
        navLi: 'Array',
    },
    components: {
    },
    data() {
        return {

        }
    },
    methods() {
    },

}		
</script>
<style scoped lang="scss">
@use '../styles/partials/variables.scss';
@use '../styles/partials/_mixins.scss';

div.line {
    border-bottom: 1px solid #2b333d;
}

.header-mail {

    span,
    i {
        font-size: 14px;
    }
}

.header-socials {

    i.facebook:hover,
    i.twitter:hover,
    i.linkedin:hover,
    i.instagram:hover,
    i.google:hover {
        color: #13be13;

    }

    i {
        transition: all .8s;
        font-size: 14px;
    }

    i.facebook {
        color: #3b5998;
    }

    i.twitter {
        color: #00acee;
    }

    i.linkedin {
        color: #0e76a8;
    }

    i.instagram {
        color: #c8232c;
    }

    i.google {
        color: #db4a39;
    }
}

.header-login {

    i,
    span {
        font-size: 14px;
    }
}

img#my_logo {
    width: 185px;
    cursor: pointers;
}

div.header-search {
    // height: 125px;

    .my_searchbar {
        height: 50px;

        .my_input {
            width: 250px;
            color: #2b333d;
            border: 1px solid #2b333d;
            border-left: none;
            padding: 1rem;
        }

        .my_search-button {
            border: none;
            width: 85px;
            color: white;
            font-weight: 600;
        }
    }
}

.my_nav-font {
    font-size: 18px !important;
    font-weight: 700 !important;
}

.my_dd-item {
    font-size: 14px;
    transition: all .3s;
}

.my_dd-item:hover {
    color: #13be13;
}

.basket-items-notification {
    font-size: 12px;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    display: flex;

    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-50%);
}

.basket-icon {
    font-size: 15px;
}

.navbar-nav li {
    margin-right: 11px;
}

.my_dropdown-menu {
    z-index: 1;
    width: 200px;
    background-color: #060f19;
    padding: 40px 10px 20px 10px;
}
</style> 
