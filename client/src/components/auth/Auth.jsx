import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import OAuth from "./OAuth";
import SignIn from "./signIn";
import SignUp from "./Signup";

const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSignIn, setIsSignIn] = useState(false);

  const openSignUp = () => {
    setIsSignIn(false);
  };

  const openSignIn = () => {
    setIsSignIn(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-red-600 text-white px-2 py-1 text-sm rounded"
      >
        {localStorage.getItem("user")
          ? `Hi, ${JSON.parse(localStorage.getItem("user")).given_name}`
          : "Sign In"}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
                <button
                  onClick={closeModal}
                  className="absolute top-8 right-6 text-gray-500 hover:text-gray-700"
                >
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#666"
                    className="fill-current"
                  >
                    <path d="M13.125 0l-7.5 7.5 7.5 7.5 1.429-1.428L8.482 7.5l6.072-6.071z"></path>
                    <path d="M1.429 0l7.5 7.5-7.5 7.5-1.43-1.428L6.072 7.5 0 1.43z"></path>
                  </svg>
                </button>

                {isSignIn ?
                  <SignIn closeModal={closeModal} signUp={openSignUp} /> :
                  <SignUp closeModal={closeModal} signIn={openSignIn} />
                }

                <OAuth closeModal={closeModal} />

                <div className="flex items-center justify-center mt-10">
                  <label
                    htmlFor="termsCheckbox"
                    className="text-center text-gray-600 text-sm"
                  >
                    I agree to the{" "}
                    <a
                      href="/terms-and-conditions"
                      target="_blank"
                      className="text-blue-500"
                    >
                      Terms & Conditions
                    </a>{" "}
                    &amp;{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      className="text-blue-500"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Auth;
