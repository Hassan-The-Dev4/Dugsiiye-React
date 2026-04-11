import LoginForm from "./LoginForm";
import UserList from "./UserList";
import { Counterdown } from "./Counterdown";
import { Greeting } from "./Greeting";
import { MouseTracker } from "./MouseTracker";
import { UserFetching } from "./UserFetching";

function App() {
  
    const users = [
      { id: 1, name: 'Abdirahman', email: 'abdirahman@gmail.com.com' },
      { id: 2, name: 'Hassan', email: 'Hassan12@gmail.com' },
    ];

  return (

      // <Greeting />
      // <EventResize />
      // <MouseTracker />
      //  <Counterdown />
      // <UserFetching />

      // <div>
      //   <UserList users={users} />
      // </div>

       <div>
       <LoginForm />
       </div>

  )


}

export default App;
