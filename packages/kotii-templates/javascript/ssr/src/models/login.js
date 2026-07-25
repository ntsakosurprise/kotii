import {mapper, requestMapper, responseMapperHelper} from 'apii-shapr';
const map = {
        
          name: "name",
          surname: "surname",
          email: "email",
          sessionType: "sessionType"
        
}
const requestMap = {
        
          name: "name",
          surname: "surname",
          email: "email",
          sessionType: "sessionType"
        
    }

const Login = {
  response: (res) => {
    let mapped = mapper(res, map);
    return mapped;
  },
  request: (req) => {
    let mapped = requestMapper(req, requestMap);
    return mapped;
  },
};

export default Login;