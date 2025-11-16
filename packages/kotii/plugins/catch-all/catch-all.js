class KotiiCatchAll {
  constructor(pao) {
    this.pao = pao;
  }
  init() {
    this.listens({
      "catch-all": this.handleCatchAll.bind(this),
    });
  }
  handleCatchAll(data) {
    const self = this;
    console.log("THE CATCH ALL", data);
    self.callback = data.callback;

    self.emit({
      type: "handle-react-spa",
      data: {
        payload: { build: "server-build" },
        callback: (gotValue) => {
          self.debug("SPA GENERATION IS COMPLETED", gotValue, self.callback);
          self.callback({
            html: gotValue,
          });
        },
      },
    });
  }
  getSavedHistory() {
    return new Promise((resolve, reject) => {
      const self = this;
      let pao = self.pao;
      //let uid = pay.ID
      let queries = {
        returnFields: ["*"],
        tables: ["users"],
        conditions: [`id EQUALS 2`],
        //opiks: ['field.id.as[userID]']
      };
      self.query(
        "mysql.SEARCH",
        queries,
        self.multiDataRequestHandler.bind(this, resolve, reject)
      );
    });
  }
}
export default KotiiCatchAll;
