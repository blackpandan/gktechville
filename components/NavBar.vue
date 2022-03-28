<script>
export default {
    data(){
        return{
        nav: false
        }
    }
}
</script>

<template>
    <nav class="navbar">
        <ul class="navbar__linksLeft" v-if="$device.isDesktopOrTablet">
            <NuxtLink :to="localePath('/')" class="navbar__linksLeft-link navbar--link">{{$t('home')}}</NuxtLink>    
            <NuxtLink :to="localePath('contact')" class="navbar__linksLeft-link navbar--link">{{$t('contact')}}</NuxtLink>    
            <NuxtLink :to="localePath('account')" class="navbar__linksLeft-link navbar--link">{{$t('account')}}</NuxtLink>      
        </ul>

        <ul class="navbar__linksRight" v-else-if="$device.isMobile">
            <NuxtLink :to="localePath('/')" class="navbar__linksLeft-link navbar--link"><i class="fa-solid fa-house"></i></NuxtLink>
            <NuxtLink :to="localePath('contact')" class="navbar__linksLeft-link navbar--link"><i class="fa-solid fa-circle-info"></i></NuxtLink>
            <NuxtLink :to="localePath('account')" class="navbar__linksLeft-link navbar--link"><i class="fa-solid fa-user"></i></NuxtLink>
        </ul> 

        <img src="~/assets/logo.png" class="navbar__logo" />

        <ul class="navbar__linksRight" v-if="$device.isDesktopOrTablet">
            <a href="https://opensea.io/gktechville" target="_blank" class="navbar__linksRight-link navbar__linksRight-seaCover navbar--link navbar--linkGroup">
                <object data="icons/opensea.svg" class="navbar__linksRight-sea"></object>
                <span class="navbar__linksRight-seaText navbar--link">{{$t('opensea')}}</span>
            </a>
            <li class="navbar__linksRight-link navbar__linksRight-downCover navbar--link navbar--linkGroup" @click="nav = !nav">
                <object data="icons/british.svg" class="navbar__linksRight-brit"></object>
                <svg class="navbar__linksRight-down" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.98486 9.74365L0.344238 3.10303C-0.114746 2.64404 -0.114746 1.90186 0.344238 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2759 1.44775C15.7349 1.90674 15.7349 2.64893 15.2759 3.10303L8.63525 9.74365C8.18604 10.2026 7.44385 10.2026 6.98486 9.74365Z" fill="#EFECCA"/>
                </svg>

            </li>  
           <LangSwitcher v-if="nav" @outside="nav = !nav"></LangSwitcher>
        </ul>

        <ul class="navbar__linksRight" v-else-if="$device.isMobile">
            <a href="https://opensea.io/gktechville" target="_blank" class="navbar__linksRight-link navbar__linksRight-seaCover navbar--linkGroup">
                <object data="icons/opensea.svg" class="navbar__linksRight-sea"></object>
            </a>
            <li class="navbar__linksRight-link navbar__linksRight-downCover navbar--linkGroup">
                <object data="icons/british.svg" class="navbar__linksRight-brit"></object>
            </li>  
        </ul>

    </nav>
</template>
    
<style lang="scss" scoped>
    .navbar{
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5em 12vmin 1.5em 12vmin;
        background-color: #ff7b0009;
        width: 100%;
        cursor: $cursor1;
        text-transform: capitalize;

        &__logo{
            position: fixed;
            top: 1em;
            left: 45vw;
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
        }

        &__linksLeft{
            display: flex;
            text-decoration: none;
            list-style-type: none;

            &-link{                

                &:not(:first-child){
                    margin: 0 0 0 4.5vmin;
                }
            }
        }

        &__linksRight{
            display: flex;
            list-style-type: none;
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