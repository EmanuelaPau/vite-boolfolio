<template>
    <MainTitle class="title-box" :title="mainTitle" :subtitle="subtitle" />
    <div class="container-fluid my_container marginBottom">
        <div class="row my_row">
            <div class="col-12 col-lg-8 p-0 pe-4 video_container">
                <iframe title="YouTube video player" src="https://www.youtube-nocookie.com/embed/BP0k4SdquG0"
                    allowfullscreen="true"></iframe>
            </div>
            <div class="col-12 col-lg-4 p-0 video_suggested">
                <div class="suggested-header">
                    <h1 class="my_sheader-title">New Movie</h1>
                    <p class="mb-0">Plyng 24</p>
                </div>

                <div class="video-list-wrapper">
                    <div v-for="movie in movieList" class="video-card d-flex mb-4">
                        <div class="video-thumb me-3">
                            <img :src="movie.img" :alt="movie.title">
                        </div>
                        <div class="text-container">
                            <h2 class="movie-title">{{ movie.title }}</h2>
                            <p class="views">{{ movie.views }}</p>
                            <div class="text d-flex justify-content-between">
                                <p class=" date">
                                    {{ movie.date }}
                                </p>
                                <p class="date">
                                    2.30.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainTitle from './MainTitle.vue'
export default {
    name: 'MovieVideoContainers',
    props: {
        movieList: 'Object'
    },
    components: {
        MainTitle
    },
    data() {
        return {
            mainTitle: 'Movie Playlist',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesettin',
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

div.my_row {
    // height: 540px;

    div.video_container {
        iframe {
            height: 540px;
            width: 100%;
        }
    }

    div.video_suggested {
        height: 100%;
        background-color: #182028;

        .suggested-header {
            height: 80px;
            padding: 15px;
            border-bottom: 1px solid #060f19;

            .my_sheader-title {
                font-size: 17px;
                margin-bottom: 5px;
            }

            p {
                font-size: 14px;
            }
        }

        .video-list-wrapper {
            padding: 15px;
            height: calc(540px - 80px);
            overflow-y: scroll;

            .video-card {
                width: 100%;
                // background-color: aqua;
                height: 100px;

                .video-thumb {
                    height: 100%;
                    width: 110px;

                    img {
                        height: 100%;
                    }
                }

                .text-container {
                    cursor: pointer;

                    h2 {
                        font-size: 17px;
                        line-height: 25px;
                        transition: all .6s;
                    }

                    h2:hover {
                        color: #13be13;
                    }

                    p.views {
                        font-size: 13px;
                        margin-bottom: 5px;
                    }

                    p.date {
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style> 

