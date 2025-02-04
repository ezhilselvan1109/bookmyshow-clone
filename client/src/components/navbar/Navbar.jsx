import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import Auth from "../auth/Auth";
import { useSelector } from 'react-redux'

function NavSm() {
  return (
    <>
      <div className="text-black flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-red-500 text-xs flex items-center cursor-pointer">
            Dindigul  <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="text-black flex items-center justify-evenly">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-red-500 text-xs flex items-center cursor-pointer">
            Dindigul  <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavLg() {
  const { currentUser } = useSelector(state => state.user)

  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent p-3 border-2 rounded-lg focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-black-200 text-base flex items-center cursor-pointer">
            Dindigul <BiChevronDown />
          </span>
          {currentUser ?
            <div className="flex items-center gap-2">
              <img src={currentUser.profilePicture} className="w-10" alt="profile" />
              <h1>Hi, {currentUser.username}</h1></div>
            : <Auth />
          }
          <div className="w-8 h-8 text-black">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-3">
      <div className="md:hidden">
        <NavSm />
      </div>
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
