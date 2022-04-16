<script>
export default {
    data(){
        return{
        nav: false,
        mnav: false,
        activeLang: "gb",
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
            ],
        height: null
        }
    },
    methods: {
        langSwitch(event){
            this.activeLang = event;
        },
        getHeight(){
            this.height = this.$refs.nav.scrollHeight;
            console.log(this.height)
        }
    },
    mounted(){
        // console.log(this.$refs.nav.scrollHeight);
        console.log("fromNavBar");
        this.getHeight();
        this.$emit("height", this.height)
    }
}
</script>

<template>
    <nav class="navbar" ref="nav" >
        <ul class="navbar__linksLeft" v-if="$device.isDesktopOrTablet">
            <NuxtLink :to="localePath('/')" class="navbar__linksLeft-link navbar--link">{{$t('home')}}</NuxtLink>    
            <NuxtLink :to="localePath('contact')" class="navbar__linksLeft-link navbar--link">{{$t('contact')}}</NuxtLink>    
            <NuxtLink :to="localePath('account')" class="navbar__linksLeft-link navbar--link">{{$t('account')}}</NuxtLink>      
            <a href="#drops" class="navbar__linksLeft-link navbar--link">{{$t('benefits')}}</a>      
        </ul>

        <ul class="navbar__linksRight" v-else-if="$device.isMobile">
            <NuxtLink :to="localePath('/')" class="navbar__linksLeft-link navbar--link"><i class="fa-solid fa-house"></i></NuxtLink>
            <NuxtLink :to="localePath('contact')" class="navbar__linksLeft-link navbar--link"><i class="fa-solid fa-circle-info"></i></NuxtLink>
            <NuxtLink :to="localePath('account')" class="navbar__linksLeft-link navbar--link"><i class="fa-solid fa-user"></i></NuxtLink>
        </ul> 

        <img src="~/assets/logo.png" class="navbar__logo" />

        <ul class="navbar__linksRight" v-if="$device.isDesktopOrTablet">
            <NuxtLink :to="localePath('account')" class="navbar__linksLeft-link navbar--link">{{$t('roadmap')}}</NuxtLink>      
            <a href="https://opensea.io/gktechville" target="_blank" class="navbar__linksRight-link navbar__linksRight-seaCover navbar--link navbar--linkGroup">
                <object data="icons/opensea.svg" class="navbar__linksRight-sea"></object>
                <span class="navbar__linksRight-seaText navbar--link">{{$t('opensea')}}</span>
            </a>
            <li class="navbar__linksRight-link navbar__linksRight-downCover navbar--link navbar--linkGroup" @click="nav = !nav">
                <span :class="['flag-icon','navbar__linksRight-brit', 'flag-icon-'+activeLang, 'flag-icon-squared']"></span>
                <svg class="navbar__linksRight-down" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.98486 9.74365L0.344238 3.10303C-0.114746 2.64404 -0.114746 1.90186 0.344238 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2759 1.44775C15.7349 1.90674 15.7349 2.64893 15.2759 3.10303L8.63525 9.74365C8.18604 10.2026 7.44385 10.2026 6.98486 9.74365Z" fill="#EFECCA"/>
                </svg>

            </li>  
           <LangSwitcher v-if="nav" @outside="nav = !nav" :langs="langs" @change="langSwitch"></LangSwitcher>
        </ul>

        <ul class="navbar__linksRight" v-else-if="$device.isMobile">
            <a href="https://opensea.io/gktechville" target="_blank" class="navbar__linksRight-link navbar__linksRight-seaCover navbar--linkGroup">
                <object data="icons/opensea.svg" class="navbar__linksRight-sea"></object>
            </a>
            <li class="navbar__linksRight-link navbar__linksRight-downCover navbar--linkGroup" @click="mnav = !mnav">
                <span :class="['flag-icon','navbar__linksRight-brit', 'flag-icon-'+activeLang, 'flag-icon-squared']"></span>
            </li>  
        </ul>
           <MobLangSwitcher v-if="mnav" :langs="langs" @change="langSwitch" @close="mnav = !mnav"></MobLangSwitcher>

    </nav>
</template>
    
<style lang="scss" scoped>
    .navbar{
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5em 12vmin 1.5em 12vmin;
        background-color: #0000008f;
        width: 100%;
        cursor: $cursor1;
        text-transform: capitalize;

        &__logo{
            position: fixed;
            top: 1em;
            left: 50%;
            transform: translate(-50%);
            // margin: 0 auto 0 auto ;
            right: 0;
            width: 12vmin;
        }



        &--link{
            font-size:0.9em;
            letter-spacing: 0.1em;
            cursor: $cursor2; 
            color: $primary;
            text-decoration: none;

            &:hover{
                color: $secondary;
            }

            &Group{
                display: flex;
                align-items: center;
            }

            & i{
                color: white;
            }
        }

        &__linksLeft{
            display: flex;
            text-decoration: none;
            list-style-type: none;
            align-items: center;

            &-link{                

                &:not(:first-child){
                    margin: 0 0 0 4.5vmin;
                }
            }
        }

        &__linksRight{
            display: flex;
            list-style-type: none;
            align-items: center;
            position: relative;
            // justify-content: center;
            // align-items: center;

            &-link{
                &:not(:first-child){
                    margin: 0 0 0 4.5vmin;
                }
            }

            &-{
                &brit{
                width: 1.5em;
                height: 1.5em;
                pointer-events: none;
                }
                &sea{
                    width: 2em;
                    height: 2em;
                    pointer-events: none;

                    &Text{
                        margin: 0 0 0 0.5em;
                        font-size: 1em;
                    }

                    &Cover{
                        &:hover{
                            cursor: $cursor2;
                            & .navbar__linksRight-seaText{
                                color: $secondary;
                            }
                        }
                    }
                }
                &down{
                    width: 1em;
                    height: 1em;
                    margin: 0 0 0 0.4em;
                    // pointer-events: none;

                    &Cover{
                        &:hover{
                            cursor: $cursor2;
                            & .navbar__linksRight-down{
                             & path{
                            fill: $secondary !important;
                            }
                            }
                        }
                    }
                }
            }

        }

       
    }

    @media only screen and (max-width: 780px) {

        .navbar{
            padding-left:6vmin;
            padding-right:6vmin; 

            &__logo{
               width: 15vmin; 
            }

            &--link{
                font-size: 1.2em;
            }

            &__linksLeft{
                &-link{                

                &:not(:first-child){
                    margin: 0 0 0 3vmin;
                }
            }
            }

            &__linksRight{
                &-link{                
                    font-size: 0.8em;


                &:not(:first-child){
                    margin: 0 0 0 4vmin;
                }
            }
            }
        }
        
    }
</style>