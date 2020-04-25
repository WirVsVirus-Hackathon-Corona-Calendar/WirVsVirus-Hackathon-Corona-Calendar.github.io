import TodaysChallengeView from "../views/TodaysChallengeView.vue";
import ChallengeView from "../views/ChallengeView.vue";

const routes = [
  {
    path: "/challenges/:challengeId",
    component: ChallengeView,
    props: true
  },
  { path: "/today", component: TodaysChallengeView }
];

export default routes;
