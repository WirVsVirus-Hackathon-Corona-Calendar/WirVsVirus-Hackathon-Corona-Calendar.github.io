import TodaysChallengeView from "../views/TodaysChallengeView.vue";
import ChallengeView from "../views/ChallengeView.vue";
import StoryBeforeView from "../views/StoryBeforeView.vue";
import StoryAfterView from "../views/StoryAfterView.vue";
import LandingPage from "../views/LandingPageView.vue";
import SettingsView from "../views/SettingsView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import NoChallengesView from "../views/NoChallengesView.vue";

const routes = [
  {
    path: "/challenges/empty",
    component: NoChallengesView,
    props: true,
    title: "Challenges - Imf & Firus"
  },
  {
    path: "/challenges/:challengeId/before",
    component: StoryBeforeView,
    props: true,
    title: "Challenges - Imf & Firus"
  },
  {
    path: "/challenges/:challengeId/after",
    component: StoryAfterView,
    props: true,
    title: "Challenges - Imf & Firus"
  },
  {
    path: "/challenges/:challengeId",
    component: ChallengeView,
    props: true,
    title: "Challenges - Imf & Firus"
  },
  {
    path: "/contact",
    component: ContactView,
    props: true,
    title: "Kontakt - Imf & Firus"
  },
  {
    path: "/about",
    component: AboutView,
    title: "Über - Imf & Firus"
  },
  {
    path: "/today",
    component: TodaysChallengeView,
    title: "Heute - Imf & Firus"
  },
  {
    path: "/settings",
    component: SettingsView,
    title: "Einstellungen - Imf & Firus"
  },
  { path: "/", component: LandingPage, title: "Imf & Firus" }
];

export default routes;
