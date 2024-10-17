
class ServerSentEvents {
  constructor(pao) {
    this.pao = pao;
    this.res = null
  }
  init() {
    this.listens({
      "handle-serversentevents-task": this.handleServerSentEvents.bind(this),
      "send-event-to-client": this.handleSendEventToClient.bind(this)
    });
  }
  handleServerSentEvents(data) {
    const self = this;
    console.log("REQUEST FOR SERVER SENT EVENTS")
    console.log("REQUEST PAYLOAD", data)
    self.callback = data.callback;
    self.res = data.payload.request.res
  
    
    self.res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      'Content-Encoding': 'none',
      Connection: "keep-alive"
    })
    data.payload.request.req.on('close', () => {
      console.log(` Connection closed`);
    });

    
   
  }
  handleSendEventToClient(data) {
    const self = this;
    self.logSync("HandleServerSEnt",data);
    self.logSync(data);
    self.callback = data.callback;
    const {payload} = data 
    const {event} = payload 
    const {name, content} = event
    const clientData = `data: ${JSON.stringify(content)}\n\n`;
    console.log("THE CLIENT SERVER DATA", clientData)
    self.res.write(`event: ${name}`)
    self.res.write(clientData);
    self.callback({message: "Data has been sent to client"})

  }

}
export default ServerSentEvents;
