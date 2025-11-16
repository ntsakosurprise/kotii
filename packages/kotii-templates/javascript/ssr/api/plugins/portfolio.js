class Users {
  constructor(pao) {
    this.pao = pao;
  }
  init() {
    this.listens({
      "handle-portfolio-task": this.handlePortfolioTask.bind(this),
    });
  }
  handlePortfolioTask(data) {
    const self = this;
    self.logSync("THE DATA PASSED TO PORTFOLIO");
    self.logSync(data);
    self.callback = data.callback;
    let { payload } = data;
    return self.callback(null, {
      actor: {
        type: "Personal website",
        age: "2 years",
        owner: "Ntsako Surprise",
        author: "Wix",
        WeeklyViews: 5,
      },
    });
  }
  getSavedHistory() {
    return new Promise((resolve, reject) => {
      const self = this;
      //let uid = pay.ID
      //   let queries = {
      //     returnFields: ["*"],
      //     tables: ["users"],
      //     conditions: [`id EQUALS 2`],
      //     //opiks: ['field.id.as[userID]']
      //   };
      //   self.query(
      //     "mysql.SEARCH",
      //     queries,
      //     self.multiDataRequestHandler.bind(this, resolve, reject)
      //   );
      resolve([
        {
          name: "Kotii",
          userName: "kotii-user",
          born: 2024,
          status: "In development",
        },
      ]);
    });
  }
  multiDataRequestHandler(
    resolve = null,
    reject = null,
    e = null,
    result = null
  ) {
    const self = this;
    self.pao.pa_wiLog("THE TYPE OF E IN DATAREQUEST HANDLER");
    self.pao.pa_wiLog(e);
    if (e) reject(new Error("An error has occured Inside MYSQL"));
    resolve(result);
  }
}
export default Users;
