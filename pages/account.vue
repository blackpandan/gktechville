<script>
export default {
    head: {
        title: "gktech - register"
    }
}
</script>

<template>
    <div class="controller">
        <NavBar />

        <div class="innerController">
            <section class="upperText">
                <h1 class="upperText__header">{{$t('create')}}<span class="upperText__header-dot">.</span></h1>
                <div class="upperText__message">
                    <span class="upperText__message-text">{{$t('alaccount')}}</span>
                    <NuxtLink to="login" class="upperText__message-login">{{$t('login')}}</NuxtLink>
                </div>
            </section>
            <section class="lowerPart">
                <form class="lowerPart__form">
                    <input type="text" name="first_name" :placeholder="$t('fname')" id="first_name" class="lowerPart__form-input" />
                    <input type="text" name="last_name" :placeholder="$t('lname')" id="last_name" class="lowerPart__form-input" />
                    <input type="email" name="Email" :placeholder="$t('email')" id="email" class="lowerPart__form-input" />
                    <input type="password" name="Password" :placeholder="$t('password')" id="password" class="lowerPart__form-input" />
                    <input type="submit" :value="$t('create')" class="lowerPart__form-submit" />
                </form>
            </section>
        </div>
    </div>    
</template>

<style lang="scss" scoped>
    .controller{
        width: 100vw;
        height: 100vh;
    }

    .innerController{
       margin: 0 0 0 0; 
       padding: 20vmin 0 0 12vmin;
       width: 100vw;
       height: 100vh;
    }

    .upperText{

        &__header{
            color: lighten($color: $back, $amount: 60);
            font-size: 7vmin;
            text-transform: capitalize;

            &-dot{
                color: $secondary;
                margin: 0 0 0 1vmin;
            }
        }

        &__message{
            padding: 1vmin 0 6vmin 0;
            &-text{
                color: lighten($color: $back, $amount: 20);
                font-size: 3vmin;
                text-transform: capitalize;
            }

            &-login{
                text-decoration: none;
                color: darken($color: $secondary, $amount: 8);
                padding: 0 0 0 1vmin;
                letter-spacing: 0.11em;
                text-transform: capitalize;
            }
        }
    }

    .lowerPart{
        &__form{
            display: flex;
            flex-direction: column;
            width: 30vw;

            &-input{
                padding: 1.8vmin 0 1.8vmin 2vmin;
                font-size: 0.9em;
                border: none;
                border-radius: 1.2em;
                background-color: lighten($color: $back, $amount: 15);
                color: lighten($color: $secondary, $amount: 10);
                letter-spacing: 0.09em;
                cursor: $cursor2;
                outline: none;
                text-transform: capitalize;

                &::placeholder{
                    color: lighten($back, 60);
                    opacity: 1;
                }

                &:not(:first-child){
                    margin: 2vmin 0 0 0;
                }

                &:focus{
                    border: 2px solid $secondary;
                }
            }

            &-submit{
                padding: 1.5vmin 3vmin 1.5vmin 3vmin;
                width: fit-content;
                border: none;
                border-radius: 1.2em;
                border: 1px solid lighten($back, 60);
                background-color: rgba(0, 0, 0, 0);
                color: lighten($back, 60);
                font-size: 0.95em;
                margin: 6vmin 0 0 0;
                letter-spacing: 0.1em;

                &:hover{
                    color: $primary;
                    background-color: $secondary;
                    border: none;
                    cursor: $cursor2;
                }
            }

        }
    }

    @media only screen and (max-width:780px){
        .innerController{
            padding: 35vmin 0 0 6vmin;
        }

        .upperText{
            &__header{
                font-size: 2.2em;
            }

            &__message{
                &-text{
                    font-size: 1em;
                }
            }
        }

        .lowerPart{
            &__form{
                width: 50vw;
                margin: 1em 0 0 0;

                &-input{
                    padding: 0.8em 0 0.8em 1.6em;

                    &:not(:first-child){
                        margin: 0.8em 0 0 0 ;
                    }
                }

                &-submit{
                    margin: 2em 0 0 0;
                    padding: 0.8em 2em 0.8em 2em;
                }
            }
        }
    }
</style>