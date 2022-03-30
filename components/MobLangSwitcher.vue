<script>
export default {
    props:["langs"],
    methods: {
        switchEmitter(value){
            console.log("emitted");
            this.$emit("change", value[0]);
            this.$i18n.locale = value[1];
            this.$emit("close");
        },
        langChange(value){
            
            
        }
    },
}
</script>

<template>
     <ul class="langDrop" @mouseleave="$emit('outside')">
        <div class="langDrop__cont">
        <li v-for="(lang, index ) in langs" :key="index" @click="switchEmitter([lang.flag, lang.local])">
            <div class="langDrop__group" >
                <span :class="['flag-icon', 'flag-icon-'+lang.flag, 'flag-icon-squared']"></span>
                <span class="langDrop__text">{{ lang.name }}</span>
            </div>
        </li>
        </div>
        <i class="fa-solid fa-xmark icon" @click="$emit('close')"></i>
    </ul>
</template>

<style lang="scss" scoped>
.langDrop{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100vh;
    background-color: rgb(34, 33, 33);
    list-style-type: none;
    padding: 6vh 0 0 0;

    &__cont{
            padding: 0 10vw 10vh 10vw;
            border-top: 2px solid black;
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
            padding: 1em 10vw 1em 6vw;
            margin: 1em 0 0 0;
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
            margin: 0 0 0 6vw;
        }
}

.icon{

    color: white;
    position: fixed;
    top: 1vh;
    left: 10vw;
    font-size: 2em;

}



</style>