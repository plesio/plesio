<script lang="ts">
  import "./AboutMe.scss";
  import Card, { Content } from "@smui/card";
</script>

<style>

</style>

<div class="aboutme">
  <h4 class="aboutme">About Me</h4>
  <div class="aboutme card">
    <Card style="background-color: black; text-align: right">
      <Content style="color: white;">
        <caption>Job</caption>
        <p>Programmer</p>
        <p style="font-size:75%">(Java/Kotlin/TypeScript etc..)</p>
        <hr />
        <caption>Musician</caption>
        <p>Japanese Rock Composer</p>
        <p>plays Guitar/Bass/Drums</p>
        <p>Drums Programmer (on DTM)</p>
        <hr />
        <caption>Active</caption>
        <p>
          <a
            href="https://www.youtube.com/watch?v=FiM1wK3G6a4&t=7020s"
            style="text-decoration: none;">
            Sakura-Yukke Alternative
          </a>
          (Guitar)
        </p>
        <p>
          <a
            href="https://plesio.bandcamp.com/releases"
            style="text-decoration: none;">
            Mastery Puppetz
          </a>
          (Everything but Vocal)
        </p>
        <hr />
        <caption>e.x.)</caption>
        <p>Sakura-Yukke Band (Guitar)</p>
        <p>Sakura-Yukke (DTM Support)</p>
        <p>
          <a
            href="https://soundcloud.com/natsumegu"
            style="text-decoration: none;">
            Natsumeg
          </a>
          (Drums)
        </p>
        <hr />
        <p>... and more ...</p>
      </Content>
    </Card>
  </div>
</div>
