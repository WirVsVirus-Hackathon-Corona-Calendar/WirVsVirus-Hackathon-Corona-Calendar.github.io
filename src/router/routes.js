import TodaysChallengeView from "../views/TodaysChallengeView.vue";
import ChallengeView from "../views/ChallengeView.vue";
import StoryBeforeView from "../views/StoryBeforeView.vue";
import LandingPage from "../views/LandingPage.vue";

const routes = [
  {
    path: "/challenges/:challengeId/before",
    component: StoryBeforeView,
    props: true
  },
  {
    path: "/challenges/:challengeId/after",
    component: ChallengeView,
    props: true
  },
  {
    path: "/challenges/:challengeId",
    component: ChallengeView,
    props: true
  },
  { path: "/today", component: TodaysChallengeView },
  { path: "/", component: LandingPage }
];

export default routes;
