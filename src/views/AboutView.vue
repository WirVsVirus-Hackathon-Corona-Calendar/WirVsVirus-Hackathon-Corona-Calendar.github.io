<template>
  <div class="container">
    <h2 class="headline">Über uns</h2>

    <p class="about_text">
      Liebe Eltern,
    </p>
    <p class="about_text">
      Imf & Firus wurde von einer Gruppe Freiwilliger im Rahmen des Hackathons
      (Was ist ein Hackathon; Siehe unten) #WirVsVirus der Bundesregierung
      entwickelt. Die App soll Sie entlasten! Wir wollen Ihnen helfen sich auf
      Ihre Arbeit zu konzentrieren und den Kindern helfen, die Zeit in den vier
      Wänden auszuhalten. Wir wissen, wie anstrengend diese Zeit für beide
      Seiten ist und sind an einer Problemlösung interessiert.
    </p>
    <p class="about_text">
      Ziel dieser App ist es die Kinder spielend eine gewisse Zeit am Tag zu
      unterhalten. Dabei wollen wir die Kinder von den digitalen Medien zur
      analogen Welt bekommen und ihre Kreativität herausfordern!
    </p>
    <p class="about_text">
      Eine Übersicht aller Challenges finden Sie auf unserer Website. Wir bitten
      Sie, diese nicht mit den Kindern zu teilen, um den Überraschungseffekt
      aufrechtzuerhalten. Gleichzeitig wissen wir, wie sensibel solche Themen
      für Eltern sind und wollen mit Ihnen zusammenarbeiten. Zwar haben wir die
      App kindgerecht gestaltet, was kindgerecht ist, entscheiden allerdings am
      Ende natürlich nur Sie!
    </p>
    <p class="about_text">
      Die Bilder, die die Kinder in der App von ihren Projekten schießen sollen,
      werden nur auf dem Handy lokal gespeichert und können daher nicht
      verarbeitet oder weitergeleitet werden.
    </p>
    <p class="about_text">
      Für Rückfragen stehen wir gerne zur Verfügung.
    </p>
    <p class="about_text">
      Bleiben Sie gesund und halten Sie durch!
    </p>
    <p class="about_text">
      Herzliche Grüße vom Team!
    </p>

    <i><h2 class="headline">Was ist ein Hackathon?</h2></i>

    <p class="about_text">
      Ein Hackathon (Wortschöpfung aus „Hack“ und „Marathon“) ist eine
      kollaborative Soft- und Hardwareentwicklungs­veranstaltung. Ziel eines
      Hackathons ist es, innerhalb der Dauer dieser Veranstaltung gemeinsam
      nützliche, kreative oder unterhaltsame Softwareprodukte herzustellen oder,
      allgemeiner, Lösungen für gegebene Probleme zu finden. Die Teilnehmer
      kommen bei Software-Hackathons üblicherweise aus verschiedenen Gebieten
      der Software- oder Hardwareindustrie und bearbeiten ihre Projekte häufig
      in funktionsübergreifenden Teams. Hackathons haben immer ein spezifisches
      Thema oder sind technologiebezogen. (Quelle: Wikipedia.de)
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {}
};
</script>

<style>
.about_text {
  width: 1050px;
  height: auto;
  padding-top: 20px;
  display: inline-block;
  align-content: center;
  justify-content: center;
  text-align: left;
  margin: 0 auto;
}

@media only screen and (max-width: 1100px) {
  .about_text {
    width: calc(100% - 100px);
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-left: 50px;
    margin-right: 50px;
  }
  .about_text:last-child {
    margin-bottom: 50px;
  }
}
</style>
