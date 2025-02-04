import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../redux/user/userSlice';

export default function OAuth({closeModal}) {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data);
      dispatch(signInSuccess(data));
      closeModal();
    } catch (error) {
      console.log('could not login with google', error);
    }
  };
  return (
    <button
      type='button'
      onClick={handleGoogleClick}
      className="border border-gray-300 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-full w-full mb-4 flex items-center justify-center"
    >
      <span className="mr-2">
        <img
          src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg"
          alt="Google Logo"
          className="w-6 h-6"
        />
      </span>
      Continue with Google
    </button>
  );
}
