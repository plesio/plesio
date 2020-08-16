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
        <p>plays Guitar/Bass/Vocal/Drums...</p>
        <p>Drums Arranger</p>
        <p>Drums Programmer (on DTM)</p>
        <hr />
        <caption>Band</caption>
        <p>Sakura-Yukke Alternative(Guitar)</p>
        <p>e.x.) Natsumeg(Drums).</p>
        <p>e.x.) Sakura-Yukke(Drums)</p>
        <hr />
        <p>... and more ...</p>
      </Content>
    </Card>

  </div>
</div>
