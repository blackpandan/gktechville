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
  <video playsinline disablePictureInPicture autoplay muted loop class="backVideo" poster="vids/star.jpg">
    <source src="vids/solar.webm" type="video/webm" >
    <source src="vids/solar.mp4" type="video/mp4" >
  </video>
  <main class="main">
    <div>
      <p class="main__text-header">
        <span class="main__text-headerText">LEARN,</span>
        <span class="main__text-headerText">GET NEWS</span>
      </p>
      <p class="main__text-about main--text">ABOUT</p>
      <p class="main__text-normal main--text">CRYPTOCURRENCY</p>
      <p class="main__text-normal main--text">METAVERSE</p>
      <p class="main__text-normal main--text">NFT'S</p>
      <button class="button button--register">Register</button>
    </div>

    <div class="main__links">
      <a href="mailto:gktechville@gmail.com" target="_blank" class="main__links-link"><i class="fa-solid fa-envelope main__links-icon"></i></a>
      <a href="https://twitter.com/gktechville/" target="_blank" class="main__links-link"><i class="fa-brands fa-twitter main__links-icon"></i></a>
      <a href="https://www.instagram.com/gktechville/" target="_blank" class="main__links-link"><i class="fa-brands fa-instagram main__links-icon"></i></a>
      <a href="https://facebook.com/gktechville" target="_blank" class="main__links-link"><i class="fa-brands fa-facebook main__links-icon"></i></a>
      <a href="" target="_blank" class="main__links-link"><i class="fa-brands fa-discord main__links-icon"></i></a>
    </div>
    <!-- <img src="pics/laptop.png" class="backImage" /> -->
  </main>
  </div>
</template>

<style lang="scss">
  *{
    font-family: 'Roboto', sans-serif;
  }

  .controller{
    background-color: rgba(0, 0, 0, 0.281);
    height: 100vh;
    width: 100vw;
  }
  .backVideo{
    position: fixed;
    z-index: -2;
    width: 100vw;
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
    padding: 0 0 0 12vmin;
    position: fixed;
    top: 20vh;
    &__text{
      &-header{
        font-family: 'Space Grotesk';
        color: $secondary;

        &Text{
          font-family: inherit;
          font-size: 8vmin;
          letter-spacing: 0.1em;
          text-shadow: 3px 4px 0 $primary;

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
        text-shadow: 1px 2px 0 $secondary;
      }
    }

    &--text{
      font-size: 5vmin;
      margin: 4vmin 0 0 0;
      letter-spacing: 0.2em;
      font-weight: bold;
    }

    &__links{
      position: fixed;
      bottom: 0;
      display: flex;
      width: 100vw;
      padding: 0 24vmin 12vmin 0;
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
            color: $secondary;
          }
        }
      }
    }
  }

  .button{
    border: 0px;
    font-size: 1.3em;
    letter-spacing: 0.2em;
    background-color: $secondary;
    color: $primary;
    padding: 0.6em 2em 0.6em 2em;
    margin: 4vmin 0 0 0;
    width: fit-content;
    border-radius: 2em;
    transition: all 0.2s;



    &--register{
      &:hover{
        background-color: $primary;
        color: $secondary;
        cursor: pointer;
        box-shadow: 2px 3px 0 $secondary
      }
    }
  }

</style>