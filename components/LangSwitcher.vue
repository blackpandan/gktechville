<script>
export default {
    data(){
        return{
           
        }
    },
    methods: {
        switchEmitter(value){
            console.log("emitted");
            this.$emit("change", value)
        }
    },
    props: ["langs"],
    created(){
        // console.log(this.$i18n.locales)
    }
}
</script>

<template>
    <ul class="langDrop" @mouseleave="$emit('outside')">
        <div class="langDrop__cont">
        <li v-for="(lang, index ) in langs" :key="index" @click="switchEmitter(lang.flag)">
            <div @click="$i18n.locale = lang.local" class="langDrop__group" >
                <span :class="['flag-icon', 'flag-icon-'+lang.flag, 'flag-icon-squared']"></span>
                <span class="langDrop__text">{{ lang.name }}</span>
            </div>
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