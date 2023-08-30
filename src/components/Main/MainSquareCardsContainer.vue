<template>
    <MainTitle class="title-box" :title="mainTitle" :subtitle="subtitle" />
    <div class="my_container marginBottom">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-12 col-lg-6 p-3">
                    <MainSquareCards class="" :bigCardName=squareCards.big.title :bigCardImg=squareCards.big.img
                        :bigCardFont=squareCards.big.fontSize :bigCardDate="squareCards.big.date"
                        :bigCardDisplay="squareCards.big.display" :smallCard=squareCards.small
                        :bigCardMargin="squareCards.big.margin" :card="squareCards" />
                </div>

                <div class="col-12 col-lg-6 d-flex flex-wrap p-0">
                    <div v-for="card in squareCards.small" class="col-lg-6 col-12 p-3">
                        <MainSquareCards :bigCardName=card.title :bigCardImg=card.img :bigCardFont=card.fontSize
                            :bigCardDate="card.date" :bigCardDisplay="card.display" :bigCardMargin="card.margin" />
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import MainTitle from './MainTitle.vue'
import MainSquareCards from './MainSquareCards.vue';
export default {
    name: 'SquareCardsContainer',
    props: {

    },
    components: {
        MainTitle,
        MainSquareCards,
        MainSquareCards,
    },
    data() {
        return {
            mainTitle: 'Latest News',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesettin',
            squareCards: {
                big: {
                    title: 'Actor The Concept Movie High Concept Theory see the post',
                    img: 'blog-570x570.jpg',
                    fontSize: 'my_h1-big',
                    date: '14 April, 2020',
                    display: '',
                    margin: '',
                    showShare: 'off'
                },
                small: [
                    {
                        title: 'consequat Nam lectus nibh aucibus It has turpis',
                        img: 'blog2-570x570.jpg',
                        fontSize: 'my_h1-small',
                        date: '14 April, 2020',
                        display: 'd-none',
                        margin: 'mb-3',
                        showShare: 'off'
                    },
                    {
                        title: 'consequat Nam lectus nibh aucibus It has turpis',
                        img: 'blog3-570x570.jpg',
                        fontSize: 'my_h1-small',
                        date: '14 April, 2020',
                        display: 'd-none',
                        margin: 'mb-3',
                        showShare: 'off'
                    },
                    {
                        title: 'consequat Nam lectus nibh aucibus It has turpis',
                        img: 'blog4-570x570.jpg',
                        fontSize: 'my_h1-small',
                        date: '14 April, 2020',
                        display: 'd-none',
                        margin: 'mt-3',
                        showShare: 'off'
                    },
                    {
                        title: 'consequat Nam lectus nibh aucibus It has turpis',
                        img: 'blog5-570x570.jpg',
                        fontSize: 'my_h1-small',
                        date: '14 April, 2020',
                        display: 'd-none',
                        margin: 'mt-3',
                        showShare: 'off'
                    },
                ]
            }
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

.my_h1-big {
    font-size: 22px;
    margin: 30px;
}

.my_h1-small {
    font-size: 16px;
    margin: 30px 30px 18px 30px;
}

div.card-item {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
    overflow: hidden;

    div.date {
        position: absolute;
        top: 30px;
        right: 0;
        transform: translateX(100%);
        z-index: 2;
        padding: 10px 20px 10px 10px;
        width: 140px;
        height: 40px;
        text-align: end;

        display: flex;
        align-items: center;
        justify-content: end;
        border-radius: 20px 0 0 20px;

        transition: all .5s;

        p {
            margin-bottom: 0;
        }
    }

    div.text-box {
        position: absolute;
        bottom: 0;
        z-index: 2;

        h1 {
            font-weight: 700;
            cursor: pointer;
        }

        .pill {
            font-size: 14px;
            font-weight: 700;
            padding: 10px 20px 10px 20px;
            background-color: #060f19;
            width: 80px;
            height: 40px;
            margin-bottom: 20px;
            border-radius: 0 20px 20px 0;
            transition: all .8s;
            cursor: pointer;
        }

        .pill:hover {
            background-color: #13be13;
        }

        nav {
            margin-right: 30px;

            ul {
                li {
                    margin-right: 10px;
                    font-size: 14px;
                    cursor: pointer;
                }
            }
        }
    }


    img {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all .8s;
    }


    .gradient {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: .5;
        z-index: 1;
        transition: all .9s;
    }
}

.share {
    position: absolute;
    bottom: 30px;
    right: 0;
    transform: translateX(100%);
    z-index: 2;
    padding: 5px;
    width: 200px;
    height: 50px;
    text-align: end;

    display: flex;
    align-items: center;
    justify-content: end;
    border-radius: 25px 0 0 25px;

    transition: all .5s;

    .social {
        display: flex;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        background-color: black;
        margin-left: 10px;
        cursor: pointer;
        transition: all .6s;

        i {
            margin: auto;
        }
    }

    .social:hover {
        background-color: white;
        color: black;
    }
}

.card-item:hover {
    .gradient {
        background: rgb(29, 29, 29);
        background: linear-gradient(0deg, rgba(29, 29, 29, 0.5130252784707633) 11%, rgba(19, 190, 19, 1) 80%, rgba(34, 194, 34, 1) 100%);
    }

    div.date {
        transform: translateX(0);
    }

    img {
        transform: scale(1.2);
    }
}
</style> 

