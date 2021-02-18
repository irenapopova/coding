
import { Route, Link, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home";



export const MyContext = createContext(null);

function App(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const [records, setRecords] = useState([]);

  //onload we are reading,what data we have in localStorage
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("userdata")); //null or userdata
    if (localData) {
      console.log(localData);
      setUserData(localData.user);
      setIsLogin(localData.islogin);
      setToken(localStorage.getItem("token"));
      console.log(props);
      props.history.push("/profile");
    }
  }, []);

  
export default withRouter(App);
