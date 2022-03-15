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
    padding: 0 0 0 5em;
    position: fixed;
    top: 20vh;
    &__text{
      &-header{
        font-family: 'Space Grotesk';
        color: #FF7D00;

        &Text{
          font-family: inherit;
          font-size: 4em;
          letter-spacing: 0.1em;
          text-shadow: 3px 4px 0 #efecca;

          &:not(:first-child){
            margin: 0 0 0 0.5em;
          }
        }
      }
      &-about{
        color: darken($color:white, $amount: 30);
      }
      &-normal{
        color: #efecca;
        text-shadow: 1px 2px 0 #FF7D00;
      }
    }

    &--text{
      font-size: 2em;
      margin: 0.8em 0 0 0;
      letter-spacing: 0.2em;
      font-weight: bold;
    }
  }

  .button{
    border: 0px;
    font-size: 1.3em;
    letter-spacing: 0.2em;
    background-color: #FF7D00;
    color: whitesmoke;
    padding: 0.6em 2em 0.6em 2em;
    margin: 1em 0 0 0;
    width: fit-content;
    border-radius: 2em;
  }

</style>