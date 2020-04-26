import TodaysChallengeView from "../views/TodaysChallengeView.vue";
import ChallengeView from "../views/ChallengeView.vue";
import StoryBeforeView from "../views/StoryBeforeView.vue";
import StoryAfterView from "../views/StoryAfterView.vue";
import LandingPage from "../views/LandingPageView.vue";
import SettingsView from "../views/SettingsView.vue";
import ContactView from "../views/ContactView.vue";
import NoChallengesView from "../views/NoChallengesView.vue";

const routes = [
  {
    path: "/challenges/empty",
    component: NoChallengesView,
    props: true
  },
  {
    path: "/challenges/:challengeId/before",
    component: StoryBeforeView,
    props: true
  },
  {
    path: "/challenges/:challengeId/after",
    component: StoryAfterView,
    props: true
  },
  {
    path: "/challenges/:challengeId",
    component: ChallengeView,
    props: true
  },
  {
    path: "/contact",
    component: ContactView,
    props: true
  },
  { path: "/today", component: TodaysChallengeView },
  { path: "/settings", component: SettingsView },
  { path: "/", component: LandingPage }
];

export default routes;
