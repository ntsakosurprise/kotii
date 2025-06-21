import postcss from "postcss";

export default (inputCss=[],opts) => {
   let asts = inputCss.map((css)=>{
      return postcss.parse(css, opts)
   })
   console.log("Arrays of ASTS", asts)
   if(asts.length === 1) return asts[0]
   return asts
};
