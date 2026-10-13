import { Fragment, Component } from "react";

import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/user-context.js";



class UserFinder extends Component {
    static contextType=UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers:[],
      searchTerm: "",
    };
  }
  componentDidMount(){
    this.setState({
        //send HTTP request
        filteredUsers:this.context.users
    })
  }
  componentDidUpdate(prevProps,prevState){
       const normalizedSearch = this.state.searchTerm.trim().toLowerCase();
    if(prevState.searchTerm!==this.state.searchTerm){
        this.setState({
       filteredUsers: this.context.users.filter((user) =>
        user.name.toLowerCase().includes(normalizedSearch),
      ),

    })
    }
     
  }
  searchChangeHandler(event){
    this.setState({
        searchTerm:event.target.value
    })
}
render(){
    return (
    <Fragment>
      <div className={classes.finder}>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
      </div>
      <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
      </ErrorBoundary>
    </Fragment>
  );
}


}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const normalizedSearch = searchTerm.trim().toLowerCase();

//     setFilteredUsers(
//       DUMMY_USERS.filter((user) =>
//         user.name.toLowerCase().includes(normalizedSearch),
//       ),
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={this.searchChangeHandle.bind(this)} />
//       </div>
//       <Users users={this.state.filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
