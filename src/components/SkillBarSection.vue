<template>
 <!-- Skills -->
  <div class="row skill">
    <div class="three columns header-col">
      <h1><span>Skills</span></h1>
    </div>

    <div class="nine columns main-col">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
    </div>
    
    <div class="bars">
      <ul class="skills">
        <li><span class="bar-expand photoshop"></span><em>Photoshop</em></li>
        <li>
          <span class="bar-expand illustrator"></span><em>Illustrator</em>
        </li>
        <li><span class="bar-expand wordpress"></span><em>Wordpress</em></li>
        <li><span class="bar-expand css"></span><em>CSS</em></li>
        <li><span class="bar-expand html5"></span><em>HTML5</em></li>
        <li><span class="bar-expand jquery"></span><em>jQuery</em></li>
      </ul>
    </div>
    <!-- end skill-bars -->
  </div>
</template>

<script>
export default {
  name: "SkillBarSection",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.bars {
  width: 95%;
  float: left;
  padding: 0;
  text-align: left;
}
.bars .skills {
  margin-top: 36px;
  list-style: none;
}
.bars li {
  position: relative;
  margin-bottom: 60px;
  background: #ccc;
  height: 42px;
  border-radius: 3px;
}
.bars li em {
  font: 15px "opensans-bold", sans-serif;
  color: #313131;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: normal;
  position: relative;
  top: -36px;
}
.bar-expand {
  position: absolute;
  left: 0;
  top: 0;
  background: #313131;
  display: inline-block;
  height: 42px;
  line-height: 42px;
  border-radius: 3px 0 0 3px;
}

.photoshop {
  width: 60%;
  animation: photoshop 2s ease;
}
.illustrator {
  width: 55%;
  animation: illustrator 2s ease;
}
.wordpress {
  width: 50%;
  animation: wordpress 2s ease;
}
.css {
  width: 90%;
  animation: css 2s ease;
}
.html5 {
  width: 80%;
  animation: html5 2s ease;
}
.jquery {
  width: 50%;
  animation: jquery 2s ease;
}

@keyframes photoshop {
  0% {
    width: 0px;
  }
  100% {
    width: 60%;
  }
}
@keyframes illustrator {
  0% {
    width: 0px;
  }
  100% {
    width: 55%;
  }
}
@keyframes wordpress {
  0% {
    width: 0px;
  }
  100% {
    width: 50%;
  }
}
@keyframes css {
  0% {
    width: 0px;
  }
  100% {
    width: 90%;
  }
}
@keyframes html5 {
  0% {
    width: 0px;
  }
  100% {
    width: 80%;
  }
}
@keyframes jquery {
  0% {
    width: 0px;
  }
  100% {
    width: 50%;
  }
}
</style>
