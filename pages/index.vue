<script>
export default {
  name: 'IndexPage'
}
</script>

<template>
  <div class="controller">
  <header class="header">
    <NavBar></NavBar>  
  </header>
  <video playsinline disablePictureInPicture autoplay muted loop class="backVideo" poster="vids/star.webp">
    <source src="vids/solar.webm" type="video/webm" >
    <source src="vids/solar.mp4" type="video/mp4" >
  </video>
  <main class="main">
    <section class="landing">
      <div>
        <p class="main__text-header">
          <span class="main__text-headerText">{{$t('learn')}}</span>
        </p>
        <p class="main__text-about main--text">{{$t('abt')}}</p>
        <p class="main__text-normal main--text">{{$t('crypto')}}</p>
        <p class="main__text-normal main--text">{{$t('meta')}}</p>
        <p class="main__text-normal main--text">{{$t('nft')}}</p>
        <NuxtLink to="account" ><button class="button button--register">{{$t('reg')}}</button></NuxtLink>
      </div>
      <div class="main__links">
        <a href="mailto:gktechville@gmail.com" target="_blank" class="main__links-link"><i class="fa-solid fa-envelope main__links-icon"></i></a>
        <a href="https://twitter.com/gktechville/" target="_blank" class="main__links-link"><i class="fa-brands fa-twitter main__links-icon"></i></a>
        <a href="https://www.instagram.com/gktechvillenft/" target="_blank" class="main__links-link"><i class="fa-brands fa-instagram main__links-icon"></i></a>
        <a href="https://facebook.com/gktechville" target="_blank" class="main__links-link"><i class="fa-brands fa-facebook main__links-icon"></i></a>
        <a href="https://discord.gg/fSsDZYYwca" target="_blank" class="main__links-link"><i class="fa-brands fa-discord main__links-icon"></i></a>
      </div>
    </section>
    <section class="about">
      <h1 class="about__heading">{{ $t('abt') }}</h1>
      <p class="about__text">
       {{ $t('about') }}
      </p>
    </section>
    <section class="drops">
      <h1 class="drops__heading">Current Collections</h1>
      <p class="drops__text">this are selcted nft's from our collections</p>
      <div class="dropCard">
        <img src="@/assets/competition.jpg" alt="" class="dropCard__img">
      </div>
    </section>
    <!-- <img src="pics/laptop.png" class="backImage" /> -->
  </main>
  </div>
</template>

<style lang="scss">
  *{
    font-family: 'Roboto Mono', monospace;
  }

  .header{
    position: relative;
    z-index: 100;
  }

  .controller{
    height: 100vh;
    width: min(100vw, 100%);
    overflow: hidden;
  }
  .backVideo{
    position: fixed;
    z-index: -2;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    top: 0;
    left:0;

  }

  .backImage{
    max-width: 75vmin;
    position: fixed;
    top: 8em;
    right: 7em;
    z-index: -1;
    // max-height: 60vmin
  }

  .main{
    // background-image: url('@pics/laptop.png');
    
    height: 100vh;
    width: min(100vw, 100%);
    text-transform: uppercase;

    overflow-y: scroll;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar{
      background-color: transparent;
      width: 1vw;
    }

    &::-webkit-scrollbar-thumb{
      background: darken($secondary, 10);
      border-radius: 1em;
    }

    section{
      scroll-snap-align: start;
    }


    .landing{
      background-color: rgba(0, 0, 0, 0.50);
      padding: 0 0 0 12vmin;
      min-height: 100vh;
      width: 100%;
      // overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
    }

    .about{
      min-height: 100vh;
      width: min(100%, 100vw);
      padding: 20vh 12vmin 10vh 12vmin;
      line-height: calc(2em + 2.5vmin);
      background: rgba(0, 0, 0, 0.63) ;
      &__heading{
        text-align: center;
        color: $secondary;
        text-shadow: 0.5vmin 0.5vmin $primary;
        font-size: calc(2em + 1.5vmin);
        padding: calc(0.5em + 1.5vmin) 0 calc(0.5em + 1.5vmin) 0;
      }
      &__text{
        color: darken($primary, 15);
        text-transform: capitalize;
        font-size: calc(1em + 1.5vmin);
        text-align: justify;
        font-family: "Roboto Mono", monospace;
      }
    }

    .drops{
      padding: 10vh 11vmin 0 12vmin;
      min-height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: linear-gradient(200deg, rgba(0, 0, 0, 0.703) 55%, #c25e0070);

      &__heading{
        color: $secondary;
        text-shadow: 2px 2px $primary;
        font-size: calc(2em + 2vmin);
        text-align: center;
        margin: 0 0 0 0;
        padding: 1em 0 0.5em 0;
        // background-color: blue;
      }
      &__text{
        color: darken($primary, 15);
        font-size: calc(0.85em + 1.5vmin);
        text-align: center;
        padding: 0 0 calc(2em + 2vh) 0;
      }

      .dropCard{
        height: 45vmin;
        width: 35vmin;
        border: 1px solid white;
        overflow: hidden;

        &__img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &__text{
      &-header{
        font-family: 'Space Grotesk';
        color: $secondary;

        &Text{
          font-family: inherit;
          font-size: 8vmin;
          letter-spacing: 0.1em;
          text-shadow: 0.5vmin 0.5vmin 0 $primary;

          &:not(:first-child){
            margin: 0 0 0 0.5em;
          }
        }
      }
      &-about{
        color: darken($color:white, $amount: 30);
      }
      &-normal{
        color: $primary;
        text-shadow: 1.5px 2px 0 $secondary;
      }
    }

    &--text{
      font-size: 5vmin;
      margin: 4vmin 0 0 0;
      letter-spacing: 0.2em;
      font-weight: bold;
      font-family: "Roboto Mono";
    }

    &__links{
      position: absolute;
      bottom: 0;
      display: flex;
      right: 0;
      padding: 0 12vmin 12vmin 0;
      justify-content: flex-end;
      
      
      &-icon{
        color:adjust-color($primary, $alpha: -0.4);
        font-size: 7vmin;

      }

      &-link{
        text-decoration: none;
        
        &:not(:first-child){
          margin: 0 0 0 5vmin ;
        }
        
        &:hover{
          & .main__links-icon{
            cursor: $cursor2;
            color: $secondary;
          }
        }
      }
    }
  }

  .button{
    border: none;
    font-size: 1.3em;
    letter-spacing: 0.1em;
    background-color: $secondary;
    color: $primary;
    padding: 0.6em 2em 0.6em 2em;
    margin: 4vmin 0 0 0;
    width: fit-content;
    border-radius: 2em;
    transition: all 0.2s;
    text-decoration: none;
    font-family: "Roboto Mono";



    &--register{
      &:hover{
        background-color: $primary;
        color: $secondary;
        cursor: $cursor2;
        box-shadow: 2px 3px 0 $secondary
      }
    }
  }


@media only screen and (max-width: 780px) {
  .main{
    // padding: 20vh 0 0 6vmin;

    .landing{
      padding: 0 0 0 6vmin;
    }

    .about{
      &__text{
        text-align: start;
      }
    }

    &__text{

      &-headerText{
        font-size: 2.5em;
      }
      &-about{
        margin: 2em 0 0 0;
      }
    }

    &--text{
      font-size: 1.5em;
    }
  }

  .button{
    &--register{
      font-size: 1.1em;
      letter-spacing: 0.1em;
      margin: 2em 0 0 0;
    }
  }

  .backVideo{
    object-position: 65% 0%;
  }
}
</style>