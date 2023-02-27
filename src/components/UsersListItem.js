import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import useThunk from '../hooks/useThunk';

function UsersListItem({ user }) {
  const [doDeleteUser, isDeletingUser, deletingUserError] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button className="mr-3" loading={isDeletingUser} onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {deletingUserError && <div>Error deleting user.</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;