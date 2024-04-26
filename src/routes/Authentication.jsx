import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import './authentication.scss'



const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;