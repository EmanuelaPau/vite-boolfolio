<template>
    <div class="carousel-wrapper my_container container-fluid p-0 marginBottom">
        <div class="row d-flex ">
            <div class="d-flex">
                <MainTitle class="title-box" :title="mainTitle" :subtitle="subtitle" />
                <div class="arrows-box d-flex justify-content-between">
                    <div @click="slideLeft(movie)"
                        class="my_circle d-flex justify-content-center align-items-center rotate-flip"><i
                            class="fi fi-sr-paper-plane-top "></i></div>
                    <div @click="slideRight(movie)" class="my_circle d-flex justify-content-center align-items-center"><i
                            class="fi fi-sr-paper-plane-top"></i></div>
                </div>
            </div>

            <div class="d-flex cards_wrapper justify-content-start align-items-center">
                <div class=" col-12 col-md-6 col-lg-4 p-0 card_container ">
                    <MovieCard :movie="index <= 1 ? movieList[movieList.length - 1] : movieList[index - 1]" class="off" />
                </div>
                <div class=" col-12 col-md-6 col-lg-4 p-0 card_container ">
                    <MovieCard :movie="movieList[index]" class="my_active" />
                </div>
                <div class=" col-12 col-md-6 col-lg-4 p-0 card_container ">
                    <MovieCard :movie="index === movieList.length - 1 ? movieList[0] : movieList[index + 1]" class="off" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from './NewMovieCard.vue'
import MainTitle from './MainTitle.vue'

export default {
    name: 'MovieCarousel',
    props: {
    },
    components: {
        MovieCard,
        MainTitle
    },
    data() {
        return {
            index: 0,
            mainTitle: 'New Title',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesettin',
            movieList: [

                {
                    img: 'card-6.jpg',
                    title: 'Quisque auctor  Movie in Strack',
                    category: 'Coming Soon',
                    views: '1014',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '4',
                    state: 'on',
                },
                {
                    img: 'card-10.jpg',
                    title: 'New Movie Quisque in Strack',
                    category: 'Latest Movie',
                    views: '748',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '0',
                    state: 'off',
                },
                {
                    img: 'card-3.jpg',
                    title: 'Movie Action Garila English',
                    category: 'Top Rating',
                    views: '376',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '1',
                    state: 'off',
                },
                {
                    img: 'card-11.jpg',
                    title: 'Action Garila English Movie',
                    category: 'TV Series',
                    views: '305',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '0',
                    state: 'off',
                },
                {
                    img: 'card-12.jpg',
                    title: 'Donec English Action movie',
                    category: 'Coming Soon',
                    views: '492',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '10',
                    state: 'off',
                },
                {
                    img: 'card-13.jpg',
                    title: 'English Action movie in Strack',
                    category: 'Latest Movie',
                    views: '280',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '0',
                    state: 'off',
                },
                {
                    img: 'card-14.jpg',
                    title: 'Movie Auctor Quisque in Strack',
                    category: 'Top Rating',
                    views: '306',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '0',
                    state: 'off',
                },
                {
                    img: 'card-15.jpg',
                    title: 'Movie Auctor Quisque in Strack',
                    category: 'TV Series',
                    views: '349',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '1',
                    state: 'off',
                },
                {
                    img: 'card-16.jpg',
                    title: 'Movie Auctor Quisque in Strack',
                    category: 'Coming Soon',
                    views: '373',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '1',
                    state: 'off',
                },
                {
                    img: 'card-6.jpg',
                    title: 'Movie Auctor Quisque in Strack',
                    category: 'Latest Movie',
                    views: '511',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '0',
                    state: 'off',
                },
                {
                    img: 'card-5.jpg',
                    title: 'Movie Auctor Quisque in Strack',
                    category: 'Top Rating',
                    views: '354',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '1',
                    state: 'off',
                },
                {
                    img: 'card-4.jpg',
                    title: 'Nulla Strack New Animate Movie',
                    category: 'TV Series',
                    views: '342',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '0',
                    state: 'off',
                },
                {
                    img: 'card-3.jpg',
                    title: 'Blue Strack New Animate Movie',
                    category: 'Coming Soon',
                    views: '428',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '0',
                    state: 'off',
                },
                {
                    img: 'card-1.jpg',
                    title: 'Animate Blue Strack New Movie',
                    category: 'Latest Movie',
                    views: '367',
                    release: 'February 12, 2016',
                    genre: 'Drama, Action Releas',
                    rating: '0',
                    state: 'off',
                },

            ]
        }
    },
    methods: {
        slideRight(card) {
            if (this.index === this.movieList.length - 1) {
                this.index = 0;
            }
            else {
                this.index++;

                return console.log('right ' + this.index);
            }
        },
        slideLeft(card) {
            if (this.index <= 1) {
                this.index = this.movieList.length - 1;
            }
            else {
                this.index--;
                return console.log('left ' + this.index);
            }
        },
    },
}		
</script>
<style scoped lang="scss">
@use '../../styles/partials/_variables.scss';
@use '../../styles/partials/_mixins.scss';
@use '../../styles/general.scss';

.card_container {
    border-radius: 25px;
    overflow: hidden;

}

.title-box {
    width: 94%;
}

.arrows-box {
    width: 8%;
}

.my_circle {
    width: 35px;
    height: 35px;
    border: 1px solid #2b333d;
    color: #13be13;
    border-radius: 50%;
    cursor: pointer;

    i {
        height: 20px;
        width: 30;
    }
}

.my_circle:hover {
    color: white;
    background-color: #13be13;
}

.cards_wrapper {
    overflow: hidden;
    width: 100%;
    height: 630px;
}

.off {
    filter: grayscale(60%);
    height: 530px;
}

.my_active {
    height: 620px !important;
}
</style> 

