<template>
    <div class="card-container p-0">
        <div class="bg-cover">
            <div class="text-container">
                <div class="rating">
                    <i class="fa-solid fa-star me-2"></i>
                    <span>0/10</span>
                </div>
                <div class="numbers">
                    <p class="mb-0">2.30.00</p>
                </div>
                <div class="play-button"><i class="fa-regular fa-circle-play"></i></div>
                <div class="infos">
                    <h1>{{ movie.title }}</h1>
                    <h2 class="d-inline mb-4">Category: </h2> <span>{{ movie.category }}</span>
                    <p class="mb-0 mt-2">Release: February 12, 2016</p>
                    <p class="mb-0">Genres :Drama, Action Releas</p>
                </div>

            </div>
            <div class="details d-flex justify-content-between">
                <div class="pill round-sx">
                    <p class="m-0">
                        Details
                    </p>
                </div>
                <div class="pill round-dx">
                    <p class="m-0">
                        {{ movie.views }} Views
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-dark"></div>
        <img :src="movie.img" :alt="movie.title">
    </div>
</template>

<script>

export default {
    name: 'NewMovieCard',
    props: {
        movie: 'Object',
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
@use '../../styles/partials/_variables.scss';
@use '../../styles/partials/_mixins.scss';
@use '../../styles/general.scss';

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
                    font-size: 25px;
                    font-weight: 700;
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
            // width: 100%;
            font-size: 14px;
            font-weight: 700;
            padding-top: 50px;


            .pill {
                padding: 0 15px;
                height: 38px;
                cursor: pointer;
                // width: 100px;
                background-color: #060f19;
                display: flex;
                align-items: center;
                transition: all .7s;
            }

            .pill:hover {
                background-color: #13be13;
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

