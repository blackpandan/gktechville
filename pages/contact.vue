<script>
export default {
    
}
</script>

<template>
    <div class="contact">
        <NavBar></NavBar>
        <div class="controller">
            <h1 class="contact__head">{{$t('ucontact')}}</h1>
            <h2 class="contact__subhead"><span></span> {{$t('question')}}</h2>

            <div class="innerController">
                <form class="contact__form" action="mailto:gktechville@gmail.com">
                    <input type="text" name="name" :placeholder="$t('name')"  class="contact__form-input" />
                    <input type="email" name="email" id="" :placeholder="$t('yemail')" class="contact__form-input" />
                    <textarea name="message" id="" :placeholder="$t('msg')" class="contact__form-input"></textarea>
                    <input type="submit" :value="$t('snd')" class="contact__form-submit">
                </form>

                <div class="contact__add">
                    <p class="contact__add-message">
                        {{$t('tell')}}
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .contact{
        width: 100vw;
        height: 100vh;
        background-color: #0f0f0f;
        overflow: hidden;
        
        &__head{
            font-size: 13vmin;
        color: $primary;
        font-family: "Space Grotesk", sans-serif;
        text-transform: capitalize;
        }

        &__subhead{
            display: flex;
            align-items: center;
            font-size: 10vmin;
            margin: 0 0 0 30vmin;
            color: $chill;
            font-family: "Space Grotesk", sans-serif;
            text-transform: capitalize;

            span{
                display: inline-block;
                background-color: $chill;
                width: 20vmin;
                height: 0.1em;
                margin: 0 0.3em 0 0;
            }
        }

        &__form{
            display: flex;
            flex-direction: column;
            width: 50%;
            &-input{
                border: none;
                padding: 0 0 0.2em 1em;
                border-bottom: 1px solid $chill;
                color: $chill;
                font-size: 3vmin;
                background-color: rgba(255, 255, 255, 0);
                text-transform: capitalize;

                &::placeholder{
                    color: $chill;
                }


                &:not(:first-child){
                    margin: 7vmin 0 0 0;
                }

                &:hover{
                    cursor: $cursor2;
                }

            }

            &-submit{
                margin: 2em 0 0 0;
                font-size: 3vmin;
                padding: 0.2em 0 0.2em 0;
                background-color: #00000000;
                border: 2px solid $chill;
                color: $chill;
                transition: box-shadow 0.4s;

                &:hover{
                    cursor: $cursor2;
                    color: $primary;
                    background-color: $secondary;
                    border: none;
                    box-shadow: 4px 5px 0 $primary;
                }
            }
        }
        
        &__add{
            margin: 0 0 0 10vmin;
            &-message{
                color: $chill;
                font-size: 3.5vmin;
                line-height: 6.5vmin;
            }
        }
    }

    .controller{
        padding: 15vmin 20vmin 0 20vmin;
    }

    .innerController{
        display: flex;
        align-items: flex-start;
        margin: 0 0 0 0;
        padding: 5vmin 12vmin 0 0 ;
    }

    @media only screen and (max-width: 780px){
        .controller{
            padding: 30vmin 10vmin 0 10vmin;
        }

        .contact{
            &__subhead{
                margin: 0 0 0 0vmin;
                font-size: 2em;

                span{
                    width: 1em;
                }
            }

            &__form{
                &-input{
                    font-size: 1em;
                }
                &-submit{
                    padding: 0.6em 0 0.6em 0;
                    font-size: 1em;
                }
            }

            &__add{
                &-message{
                    font-size: 1em;
                }
            }
        }

        .innerController{
            margin: 2em 0 0 0;
        }
    }
</style>