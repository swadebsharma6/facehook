import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg";

import NotificationIcon from "../../assets/icons/notification.svg";
import FbLogo from "../../assets/images/fblogo.png";
import Logout from "../Form/Logout";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";

const Header = () => {
  const { auth } = useAuth();
  const  {state} = useProfile();

  const user = state?.user ?? auth?.user;

  // console.log(auth, state);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/">
          <img
            className="max-w-[100px] rounded-full lg:max-w-[130px]"
            src={FbLogo}
            width={60}
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={homeIcon} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={NotificationIcon} alt="Notification" />
          </button>
          <Logout />
          <Link to="/login" className="btn-primary">
            <IoMdLogIn />
            Login
          </Link>
          <h2 className="text-xl font-bold">
            {user?.firstName} {user?.lastName}
          </h2>
          <button className="flex-center !ml-8 gap-3">
            <Link to="/me">
              <img
                className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
                alt="USEr Image"
                width={50}
              />
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
