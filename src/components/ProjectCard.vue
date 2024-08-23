
<template>
  <div id="portfolio-section">
    <h2>PARTICIPATION IN PROJECTS</h2>
    <div class="container">

      <div class="item-portfolio">
        <div class="img-item">
          <img src="../assets/portfolio/nutritionist.png" alt="Nutritionist">
        </div>
        <a href="https://github.com/OksanaBartash/Project__Nutritionist">
          <p class="link-item">Project__Nutritionist</p>
        </a>
        <p></p>
      </div>

      <div class="item-portfolio">
        <div class="img-item">
          <img src="../assets/portfolio/the_theater.png" alt="the-Theater">
        </div>
        <a href="https://github.com/OksanaBartash/Project__the-Theater">
          <p class="link-item">Project the-Theater</p>
        </a>
      </div>

      <div class="item-portfolio">
        <div class="img-item">
          <img src="../assets/portfolio/tui-trevel.png" alt="Travel_agency-TUI">
        </div>
        <a href="https://github.com/OksanaBartash/Project__Travel_agency-TUI">
          <p class="link-item">Project_Travel_agency-TUI</p>
        </a>
      </div>

      <div class="item-portfolio">
        <div class="img-item">
          <img src="../assets/portfolio/best_filter_system.jpg" alt="best-filters">
        </div>
        <a href="https://github.com/OksanaBartash/Project__best-filters">
          <p class="link-item"> Project__best-filters</p>
        </a>
      </div>

      <div class="item-portfolio">
        <div class="img-item">
          <img src="../assets/portfolio/dv-dark.png" alt="DV-Dark">
        </div>
        <a href="https://github.com/OksanaBartash/Internal-project_DV-Dark">
          <p class="link-item"> Internal-project
            Dobrogo-vechora-Dark</p>
        </a>
      </div>

      <div class="item-portfolio">
        <div class="img-item">
          <img src="../assets/portfolio/dv-light.png" alt="DV-light">
        </div>
        <a href="https://github.com/OksanaBartash/Internal-project_DV-light">
          <p class="link-item"> Internal-project
            Dobrogo-vechora-LIGHT</p>
        </a>
      </div>

    </div>
  </div>
</template>


<!--------------------->
<script>


</script>

<!--------------------->

<style scoped>
#portfolio-section {
  margin: 0;
  padding: 0;
  background-color: rgb(243, 235, 171);

  h2 {
    text-align: center;
    padding: 50px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    flex-wrap: wrap;

    .item-portfolio {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 390px;

      .img-item {
        height: 280px;

        img {
          width: 100%;
          height: 100%;
          padding: 3%;
        }
      }

      a {
        .link-item {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          text-align: left;
          font-size: 1.5rem;
          font-weight: 500;
          padding: 20px;
        }
      }
    }
  }

}
</style>