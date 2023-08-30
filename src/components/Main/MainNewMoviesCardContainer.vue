<template>
    <MainTitle class="title-box" :title="mainTitle" :subtitle="subtitle" />
    <div class="my_container marginBottom">
        <nav class="mb-5 p-3 p-lg-0">
            <ul class="list-unstyled d-flex">
                <li @click="reset()" class="active" value="all">All
                </li>
                <li @click="turnOn('Coming Soon')">
                    <span>Coming Soon</span>
                </li>
                <li @click="turnOn('Latest Movie')" value="latest-movie"><span>Latest Movie</span></li>
                <li @click="turnOn('Top Rating')" value="top-rating"><span>Top Rating</span></li>
                <li @click="turnOn('TV Series')" value="top-series"><span>TV Series</span></li>
            </ul>
        </nav>

        <div class="container-fluid wrapper ">
            <div class="row">
                <div v-for="movie in newMovieCard" :movie="movie" class=" col-12 col-md-6 col-lg-4 mb-4"
                    :class="movie.state == 'on' ? 'd-block' : 'd-none'">

                    <NewMovieCard class="mb-2" :movie=movie />

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import NewMovieCard from './NewMovieCard.vue'
import MainTitle from './MainTitle.vue'
export default {
    name: 'MovieVideoContainers',
    props: {
    },
    components: {
        NewMovieCard,
        MainTitle
    },
    data() {
        return {
            mainTitle: 'New Movie',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesettin',
            newMovieCard: [
                {
                    img: 'card-1.jpg',
                    title: 'Hurry Animate Blue Strack New Movie',
                    category: 'Top Rating',
                    release: 'February 12, 2016',
                    genres: 'Drama, Action Releas',
                    views: '426',
                    state: 'on',
                },
                {
                    img: 'card-2.jpg',
                    title: 'Animate Blue Strack New Movie',
                    category: ' Latest Movie',
                    release: 'February 12, 2016',
                    genres: 'Drama, Action Releas',
                    views: '367',
                    state: 'on',
                },
                {
                    img: 'card-3.jpg',
                    title: 'Blue Strack New Animate Movie',
                    category: 'Coming Soon',
                    release: 'February 12, 2016',
                    genres: 'Drama, Action Releas',
                    views: '428',
                    state: 'on',
                },
                {
                    img: 'card-4.jpg',
                    title: 'Nulla Strack New Animate Movie',
                    category: 'TV Series',
                    release: 'February 12, 2016',
                    genres: 'Drama, Action Releas',
                    views: '342',
                    state: 'on',
                },
                {
                    img: 'card-5.jpg',
                    title: 'Quisque in Strack New Movie',
                    category: 'Top Rating',
                    release: 'February 12, 2016',
                    genres: 'Drama, Action Releas',
                    views: '354',
                    state: 'on',
                },
                {
                    img: 'card-6.jpg',
                    title: 'New Movie Quisque in Strack',
                    category: 'Latest Movie',
                    release: 'February 12, 2016',
                    genres: 'Drama, Action Releas',
                    views: '511',
                    state: 'on',
                },
            ],
        }
    },
    methods: {
        turnOn(element) {
            this.newMovieCard.forEach((item) => {
                if (item.category == element) {
                    item.state = 'on';
                }
                else {
                    item.state = 'off';
                }
            })
        },
        reset() {
            this.newMovieCard.forEach((item) => {
                item.state = 'on';
            })
        },
    },
}		
</script>
<style scoped lang="scss">
@use '../../styles/partials/_variables.scss';
@use '../../styles/partials/_mixins.scss';
@use '../../styles/general.scss';

nav {
    height: 40px;

    ul {
        font-size: 18px;

        li {
            margin-right: 35px;
            cursor: pointer;
            transition: all .8s;
        }

        li:hover {
            color: #13be13;

            span:after {
                width: 100%;
            }
        }

        span:after {
            content: "";
            display: table;
            height: 5px;
            width: 0;
            border-bottom: 1px solid #13be13;
            transition: all .5s;
        }

    }
}

div.card-container {
    height: 530px;
    background-color: #13be13;
    overflow: hidden;
    position: relative;

    .bg-cover {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;

        .rating {
            font-size: 14px;
            position: absolute;
            right: 15px;

            i {
                color: #13be13;
            }
        }

        .text-container {
            position: relative;
            height: 80%;
            width: 100%;
            overflow: hidden;
            padding: 20px 10px 20px 20px;
            // background-color: #13be13;

            .numbers {
                padding: 0 15px;
                height: 40px;
                width: 85px;
                border-radius: 0 20px 20px 0;
                background-color: #13be13;
                display: flex;
                align-items: center;
                position: absolute;
                left: 0;
                transform: translateX(-100%);
                transition: all .3s;
            }

            .play-button {
                font-size: 50px;
                position: absolute;
                left: 50%;
                bottom: 410px;
                transform: translateX(-50%);
                transition: all .3s;
                cursor: pointer;
            }

            .play-button:hover {
                color: #13be13;
            }

            .infos {
                position: absolute;
                top: 310px;
                padding: 10px;
                transition: all .7s;

                h1 {
                    font-size: 22px;
                }

                h2 {
                    font-size: 18px;
                    font-weight: 700;
                    margin-top: 15px;
                    margin-right: 8px;
                }

                span {
                    font-size: 14px;
                    font-weight: 700;
                }

                p {
                    font-size: 15px
                }
            }
        }

        .details {
            height: 20%;
            width: 100%;
            font-size: 14px;
            font-weight: 700;
            padding-top: 50px;


            .pill {
                padding: 0 15px;
                height: 38px;
                width: 100px;
                background-color: #060f19;
                display: flex;
                align-items: center;
            }

            .round-sx {
                border-radius: 0 19px 19px 0;
            }

            .round-dx {
                border-radius: 19px 0 0 19px;
            }
        }
    }

    .bg-dark {
        z-index: 1;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: .5;
    }

    img {
        z-index: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all .5s;
    }
}

div.card-container:hover {
    .bg-cover {
        .text-container {
            .numbers {
                transform: translateX(0);
            }

            .play-button {
                bottom: 45%;
            }

            .infos {
                top: 250px;
            }
        }
    }

    .bg-dark {
        background: rgb(29, 29, 29);
        background: linear-gradient(0deg, rgba(29, 29, 29, 0.5130252784707633) 11%, rgba(19, 190, 19, 1) 80%, rgba(34, 194, 34, 1) 100%);
        opacity: .4;
    }

    img {
        scale: 120%;
        object-fit: cover;
    }
}

.active {
    color: #13be13;
}
</style> 

