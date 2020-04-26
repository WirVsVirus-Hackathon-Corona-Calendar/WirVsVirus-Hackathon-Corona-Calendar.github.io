import axios from "axios";
import moment from "moment";
let instance = undefined;

class ChallengeService {
  baseUrl =
    "https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges";
  constructor() {}

  static get instance() {
    if (instance == undefined) {
      instance = new ChallengeService();
    }
    return instance;
  }

  get all() {
    return axios
      .get(
        "https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges"
      )
      .then(response => response.data);
  }

  getById(id) {
    return this.all.then(
      all => all.filter(challenge => challenge.id === id)[0]
    );
  }

  get incomplete() {
    const completedIds = this.completed.map(challenge => challenge.id);

    return this.all.then(all => {
      return all.filter(challenge => {
        return !completedIds.includes(challenge.id);
      });
    });
  }

  get completed() {
    return JSON.parse(
      window.localStorage.getItem("completedChallenges") || "[]"
    );
  }

  get next() {
    const sortedChallenges = this.completed.sort((a, b) =>
      moment(a.completionDate, ["YYYY-MM-DD"]).isBefore(
        moment(b.completionDate)
      )
    );

    const challengeDoneToday =
      sortedChallenges.length == 0
        ? false
        : sortedChallenges[0].completionDate === moment().format("YYYY-MM-DD");

    console.trace(challengeDoneToday);
    if (challengeDoneToday) {
      return Promise.resolve(undefined);
    }
    return this.incomplete.then(incomplete => {
      return incomplete.sort((a, b) => a.order > b.order)[0];
    });
  }

  completeChallenge(id) {
    const completed = JSON.parse(
      window.localStorage.getItem("completedChallenges") || "[]"
    );

    const completionDateString = moment().format("YYYY-MM-DD");
    completed.push({ id, completionDate: completionDateString });
    window.localStorage.setItem(
      "completedChallenges",
      JSON.stringify(completed)
    );
  }
}

export default ChallengeService;
