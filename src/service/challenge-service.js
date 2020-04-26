import axios from "axios";
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
    const completedIds = JSON.parse(
      window.localStorage.getItem("completedChallenges") || "[]"
    );

    return this.all.then(all => {
      return all.filter(challenge => {
        return !completedIds.includes(challenge.id);
      });
    });
  }

  get next() {
    return this.incomplete.then(incomplete => {
      return incomplete.sort((a, b) => a.order > b.order)[0];
    });
  }

  completeChallenge(id) {
    const completed = JSON.parse(
      window.localStorage.getItem("completedChallenges") || "[]"
    );

    completed.push(id);
    window.localStorage.setItem(
      "completedChallenges",
      JSON.stringify(completed)
    );
  }
}

export default ChallengeService;
