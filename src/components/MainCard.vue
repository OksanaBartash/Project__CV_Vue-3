<template>
  <div class="main-container">

    <div class="container-top">
      <div class="profile">
        <img src="../assets/Bartash_O.jpg" alt="">
        <h1>Bartash Oksana</h1>

        <div class="block-job">
          <span class="line"></span>
          <h2>Frontend Developer</h2>
          <span class="line"></span>
        </div>

        <div class="social-links">
          <div class="link">
            <img class="img-link" src="../assets/icon-email.png" alt="link">
            <a href="mailto:kasandraoks84@gmail.com">
              <p class="img-text">kasandraoks84@gmail.com</p>
            </a>
          </div>
          <div class="link">
            <img class="img-link" src="../assets/github.png" alt="link">
            <a href="https://github.com/OksanaBartash">
              <p class="img-text">GitHub</p>
            </a>
          </div>
          <div class="link">
            <img class="img-link" src="../assets/icon_linkedin.png" alt="link">
            <a href="https://www.linkedin.com/in/oksana-bartash-5ab562292/">
              <p class="img-text">Linkedin</p>
            </a>
          </div>
          <div class="link">
            <img class="img-link phone-link" src="../assets/icon-phone.png" alt="link">
            <a href="tel:+380689106961">
              <p class="img-text">+38(068)910-69-61</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="colums">
      <div class="container-one">
        <div class="info-section">
          <h3 class="title-text">Information</h3>
          <ul>
            <li>28/10/1984</li>
            <li>УКРАЇНА <br> м.Вінниця</li>
          </ul>
        </div>
        <div class="technology-section">
          <h3 class="title-text">technology studied</h3>
          <div class="logo">
            <img src="../assets/figma.png" alt="Logo">
            <img src="../assets/css.png" alt="Logo">
            <img src="../assets/GoogleDrive.png" alt="Logo">
            <img src="../assets/html.png" alt="Logo">
            <img src="../assets/js.png" alt="Logo">
            <img src="../assets/vue3.png" alt="Logo">
            <img src="../assets/PixelPerfect.png" alt="Logo">
            <img src="../assets/Trello.png" alt="Logo">
            <img src="../assets/VisualStudio.png" alt="Logo">
          </div>
        </div>
        <div class="en-section">
          <h3 class="title-text">language</h3>
          <p>English - Intermediate</p>
        </div>
        <div class="hobby-section">
          <h3 class="title-text">hobby</h3>
          <ul>
            <li>Active sport - run</li>
            <li>Ride a bike</li>
            <li>Cooking tasty dishes</li>
            <li>Grow flowers</li>
          </ul>
        </div>
      </div>

      <div class="container-two">
        <div class="section-in-two about">
          <h2>About</h2>
          <p>Native city - Chernihiv. <br>Married, have an 11-year-old son. Since November 2022, I've been a student at
            the
            Vinnytsia IT Academy “INTITA”, studying actively and with a clear purpose. </p>
          <p> I enjoy running, dancing,
            spending
            time with my family, and cats.
          </p>
        </div>
        <div class="section-in-two skills">
          <h2>Skills</h2>
          <p>With 15 years of experience in accounting. I'm skilled at making quick and well-balanced decisions,
            especially when it comes to preparing reports. I know my way around data tasks like analysis, accounting, and
            storage.</p>
          <p>
            I've also worked closely with different departments and specialists, collaborating on receiving and submitting
            reports.</p>
          Continuous learning is a big part of my job. I make sure to stay updated on changes in laws, different ways of
          reporting, and the latest techniques in handling data. I'm also pretty quick at adapting to and understanding
          new programs and tools because when I changed jobs I had to learn new programs and different areas of
          work.
          <p>
            In the Academy, one of the projects I led involved a team of three developers, and together, we successfully
            developed an outstanding website in just two weeks.</p>
          <p>
            Currently, I serve as a technical Team Lead for new students, managing a team of five developers. As this is
            their inaugural project, I provide guidance by offering advice on various issues that may arise during the
            website creation process. My responsibilities include conducting online-meetings, assisting with coding and I
            made some training videos for them.</p>
          <p>
            I have also actively participated in Hackathons. It was particularly fascinating to collaborate with a new
            team swiftly and productively. (Certificates verifying my participation are attached to my resume.)
          </p>
        </div>
        <div class="section-in-two experience">
          <h2>Experience</h2>
          <p>Completed courses:<br>
            - Basics of C++ programming.
            <a href="https://github.com/OksanaBartash/Project_1_Sea_Fight">
              I made one small project only C++ </a>
            <br>
            - Fundamentals of version control systems.
            <a href="https://github.com/OksanaBartash?tab=repositories">GitHub - my repository</a>
            <br>
            - Computer Networks Basis (it was theory - module on platform INTITA-Academy),
            <br>
            - HTML layout and CSS.
            <a href="https://oksanabartash.github.io/web_practice_course_Bartash_O/"> Practice course</a>
            <br>
            - MySQL databases,
            <br>
            - JavaScript (used this knowledge on my practice - when made sites).
            <br>
            Currently, I am studying Vue.js, and I am constantly working on projects to consolidate practical skills.
          </p>
        </div>

        <div class="button-container">
          <div class="projects_button">
            <a href="">My Projects</a>
          </div>
          <div>
            <a href="">My Resume</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--------------------->
<script>
export default {

}

</script>

<!--------------------->
<style scoped>
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.main-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(243, 235, 171, 0.504);

  .container-top {
    background-color: rgb(7, 59, 28);
    color: #ffff;

    .profile {
      img {
        height: 10rem;
        border-radius: 50%;
        border: 2px solid #ffff;
        ;
        margin-top: 30px;
      }

      h1 {
        font-weight: 500;
        letter-spacing: 10px;
        font-size: 40px;
        margin-bottom: 3%;
      }

      .block-job {
        display: flex;
        justify-content: center;

        .line {
          display: block;
          height: 2px;
          width: 25%;
          background-color: #ffff;
        }

        h2 {
          font-weight: 500;
          letter-spacing: 6px;
          font-size: 20px;
          margin: -10px 30px 0 30px;
          text-transform: uppercase;
        }
      }
    }

    .social-links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .link {
        min-width: 100px;
        margin: 0 auto;

        .img-link {
          height: 40px;
          border: 0;
        }

        .phone-link {
          height: 34px;
          width: 34px;
          border: 1.5px solid #ffff;
          border-radius: 50%;
          padding: 2px;
        }

        a {
          text-decoration: none;

          .img-text {
            color: #ffff;
            font-size: 14px;
            margin-bottom: 30px;
          }
        }
      }
    }

  }

  .colums {
    display: flex;
    flex-direction: row;

    .container-one {
      background-color: rgb(243, 235, 171);
      width: 30%;
      padding: 2.5%;
      text-align: left;
      line-height: 25px;

      .title-text {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 500;
        margin: 20% 0 3% 0;

        ul {
          li {
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
          }
        }
      }

      .logo {
        img {
          height: 40px;
          width: 40px;
          margin: 16px 20px 0 0;
        }
      }
    }


    .container-two {
      width: 70%;
      padding: 16px;
      text-align: justify;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 1.3px;

      .section-in-two {
        h2 {
          font-size: 22px;
          font-weight: 600;
          margin: 3% 0 1% 0;
          text-align: center;
        }

        p {
          text-indent: 30px;
        }

        a {
          text-decoration: none;
        }
      }
    }
  }


}
</style>