<script>
export default {
    data(){
        return{
            langs: [
                {name:"English", flag:"gb", local: "en"},
                {name:"Afrikaans", flag:"za", local: "af"},
                {name:"Albanian", flag:"al", local:"sq"},
                {name:"Arabic", flag:"ae", local: "ar"},
                {name:"Bangla", flag:"bd", local: "bn"},
                {name:"Chinese", flag:"cn", local: "zh"},
                {name:"Dutch", flag:"bq", local: "nl"},
                {name:"Filipino", flag:"ph", local: "fil"},
                {name:"French", flag:"fr", local: "fr"},
                {name:"Germany", flag:"de", local: "de"},
                {name:"Greek", flag:"gr", local: "el"},
                {name:"Hebrew", flag:"il", local: "he"},
                {name:"Hindi", flag:"in", local: "hi"},
                {name:"Indonesian", flag:"id", local: "id"},
                {name:"Italian", flag:"it", local: "it"},
                {name:"Japanese", flag:"jp", local: "ja"},
                {name:"Korean", flag:"kr", local: "ko"},
                {name:"Persian", flag:"ir", local: "fa"},
                {name:"Polish", flag:"pl", local: "pl"},
                {name:"Portuguese", flag:"pt", local: "pt"},
                {name:"Rusian", flag:"ru", local: "ru"},
                {name:"Romanian", flag:"ro", local: "ro"},
                {name:"Spanish", flag:"es", local: "es"},
                {name:"Thai", flag:"th", local: "th"},
                {name:"Turkish", flag:"tr", local: "tr"},
                {name:"Ukranian", flag:"ua", local: "uk"},
                {name:"Vietnamese", flag:"vn", local: "vi"},
            ]
        }
    }
}
</script>

<template>
    <ul class="langDrop" @mouseleave="$emit('outside')">
        <div class="langDrop__cont">
        <li v-for="(lang, index ) in langs" :key="index">
            <NuxtLink :to="switchLocalePath(lang.local)" class="langDrop__group">
                <span :class="['flag-icon', 'flag-icon-'+lang.flag, 'flag-icon-squared']"></span>
                <span class="langDrop__text">{{ lang.name }}</span>
            </NuxtLink>
        </li>
        </div>
    </ul>
</template>

<style lang="scss" scoped>
    .langDrop{
        position: absolute;
        top: 3em;
        right: -6vmin;
        background-color: rgb(15, 15, 15);
        padding: 1vw 0.1vw 1em 1.5vw;
        list-style-type: none;
        height: 50vh;
        width: fit-content;
        

        &__cont{
            padding: 0 1vw 0 0;
            height: 100%;
            overflow: auto;
    &::-webkit-scrollbar{
        box-shadow: 0px 0px 6px inset black;
                background-color: rgb(24, 24, 24);
            }

              &::-webkit-scrollbar-thumb{
                background-color: rgb(0, 0, 0);
            }
            
        }

        &li > :last-child{
                margin-bottom: 2em;
            }

        &__group{
            padding: 0.7em 2vw 0.7em 2vw;
            margin: 0.5em 0 0 0;
            border-radius: 1em;
            background-color: black;
            display: flex;
            text-decoration: none;
            color: $secondary;

            &:hover{
                background-color: $primary;
            }
           
        }

        &__text{
            margin: 0 0 0 2vw;
        }
    }
</style>