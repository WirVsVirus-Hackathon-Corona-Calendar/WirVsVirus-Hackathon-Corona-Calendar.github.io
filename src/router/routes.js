import TodaysChallengeView from "../views/TodaysChallengeView.vue";
import ChallengeView from "../views/ChallengeView.vue";
import LandingPage from "../views/LandingPage.vue";

const routes = [
  {
    path: "/challenges/:challengeId",
    component: ChallengeView,
    props: true
  },
  { path: "/today", component: TodaysChallengeView },
  { path: "/", component: LandingPage }
];

export default routes;
