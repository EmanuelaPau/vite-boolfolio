<template>
    <div class="my_container  wrapper">
        <h1>
            {{ title }}

        </h1>
        <p>
            {{ subtitle }}
        </p>
    </div>
</template>

<script>

export default {
    name: 'Title',
    props: {
        title: 'String',
        subtitle: 'String'
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

div.wrapper {
    margin-bottom: 60px;
    border-left: 2px solid #13be13;
    border-bottom: 1px solid #2b333d;
    padding: 0 10px 10px 10px;

    h1 {
        font-size: 24px;
        font-weight: 700;
    }

    p {
        font-size: 16px;
        font-weight: 300;
        margin: 0;
    }
}
</style> 
