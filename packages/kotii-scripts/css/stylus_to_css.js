import stylus from "stylus";
import fs from "node:fs";

export default (stylusFile, stylusFileName) => {
  console.log("THE STYLUS TO CSS", stylus, stylusFileName)
  console.log("THEY STYLUS", stylus)
  return new Promise((resolve) => {
    
    stylus
      .render(fs.readFileSync(stylusFile, { encoding: "utf8" }), {
        filename: stylusFileName,
        
      },(err,output) => {
        console.log("STYLUS OUTPUT RESULT", err,output);
        if(err){
          throw new Error(err)
        }
        resolve(output);
      })
      
  });
};
