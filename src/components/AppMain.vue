<template>
    <main>
        <MovieSlider />
        <MovieCarousel />
        <MovieVideoContainers :movieList="movieList" />
        <MainJumbo />
        <NewMoviesCardContainer :movieList=movieList />
        <SquareCardsContainer />
        <MainMail />
    </main>
</template>

<script>
//  import HelloWorld from './HelloWorld.vue'
import MovieSlider from './Main/MainFullPageSlider.vue'
import MovieCarousel from './Main/MovieCarousel.vue'
import MovieVideoContainers from './Main/MainMovieVideoContainer.vue'
import MainJumbo from './Main/MainJumbo.vue'
import NewMoviesCardContainer from './Main/MainNewMoviesCardContainer.vue'
import MainTitle from './Main/MainTitle.vue'
import SquareCardsContainer from './Main/MainSquareCardsContainer.vue'
import MainMail from './Main/MainMail.vue'
export default {
    name: 'AppMain',
    components: {
        MovieSlider,
        MovieCarousel,
        MovieVideoContainers,
        MainJumbo,
        NewMoviesCardContainer,
        MainTitle,
        SquareCardsContainer,
        MainMail,
    },
    data() {
        return {
            squareCards: {
                big: {
                    title: 'Actor The Concept Movie High Concept Theory see the post',
                    img: 'blog-570x570.jpg',
                    fontSize: 'my_h1-big',
                    date: '14 April, 2020',
                    display: '',
                    margin: ''
                },
                small: [
                    {
                        title: 'consequat Nam lectus nibh aucibus It has turpis',
                        img: 'blog2-570x570.jpg',
                        fontSize: 'my_h1-small',
                        date: '14 April, 2020',
                        display: 'd-none',
                        margin: 'mb-3'
                    },
                    {
                        title: 'consequat Nam lectus nibh aucibus It has turpis',
                        img: 'blog3-570x570.jpg',
                        fontSize: 'my_h1-small',
                        date: '14 April, 2020',
                        display: 'd-none',
                        margin: 'mb-3'
                    },
                    {
                        title: 'consequat Nam lectus nibh aucibus It has turpis',
                        img: 'blog4-570x570.jpg',
                        fontSize: 'my_h1-small',
                        date: '14 April, 2020',
                        display: 'd-none',
                        margin: 'mt-3'
                    },
                    {
                        title: 'consequat Nam lectus nibh aucibus It has turpis',
                        img: 'blog5-570x570.jpg',
                        fontSize: 'my_h1-small',
                        date: '14 April, 2020',
                        display: 'd-none',
                        margin: 'mt-3'
                    },
                ]
            },
            movieList: [
                {
                    img: '1-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '1014',
                    date: 'February 12. 2016 '
                },
                {
                    img: '2-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '748',
                    date: 'February 12. 2016 '
                },
                {
                    img: '3-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '376',
                    date: 'February 12. 2016 '
                },
                {
                    img: '4-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '305',
                    date: 'February 12. 2016 '
                },
                {
                    img: '5-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '492',
                    date: 'February 12. 2016 '
                },
                {
                    img: '6-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '280',
                    date: 'February 12. 2016 '
                },
                {
                    img: '7-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '306',
                    date: 'February 12. 2016 '
                },
                {
                    img: '8-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '349',
                    date: 'February 12. 2016 '
                },
                {
                    img: '9-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '373',
                    date: 'February 12. 2016 '
                },
                {
                    img: '1-150x150.jpg',
                    title: 'Quisque auctor Movie in Strack',
                    views: '511',
                    date: 'February 12. 2016 '
                }
            ],
        }
    },
    methods: {

    },
}		
</script>
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_mixins.scss';
@use '../styles/partials/variables.scss';
</style> 
