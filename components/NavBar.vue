<script>
export default {
    
}
</script>

<template>
    <nav class="navbar">
        <ul class="navbar__linksLeft">
            <li class="navbar__linksLeft-link navbar--link">Home</li>    
            <li class="navbar__linksLeft-link navbar--link">Contact</li>    
            <li class="navbar__linksLeft-link navbar--link">Account</li>      
        </ul>
        <ul class="navbar__linksRight">
            <li class="navbar__linksRight-link navbar--link navbar--linkGroup">
                <object data="icons/opensea.svg" class="navbar__linksRight-sea"></object>
                <span class="navbar__linksRight-seaText navbar--link">opensea</span>
            </li>
            <li class="navbar__linksRight-link navbar--link navbar--linkGroup">
                <object data="icons/british.svg" class="navbar__linksRight-brit"></object>
                <object data="icons/down.svg" class="navbar__linksRight-down"></object>
            </li>  
        </ul>    
    </nav>
</template>
    
<style lang="scss" scoped>
    .navbar{
        display: flex;
        justify-content: space-between;
        padding: 1.5em 5em 1.5em 5em;
        background-color: #ff7b0009;


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
                    }
                }
                &down{
                    width: 1em;
                    height: 1em;
                    margin: 0 0 0 0.4em;
                    pointer-events: none;
                }
            }

        }

        &--link{
            font-size:0.9em;
            letter-spacing: 0.1em;
            cursor: pointer; 
            color: blue;

            &:hover{
                color: $secondary;
            }

            &Group{
                display: flex;
                align-items: center;
            }
        }
    }
</style>