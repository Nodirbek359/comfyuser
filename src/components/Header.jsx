import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };

  return (
    <header className='bg-neutral py-2 text-neutral-content'>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
            <button
              className='btn btn-xs  btn-primary'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link to='/login' className='link link-hover border rounded p-1 text-xs sm:text-sm'>
              Sign in 
            </Link>
            <Link to='/register' className='link border p-1 rounded  link-hover text-xs sm:text-sm'>
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
