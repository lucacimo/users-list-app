import Loader from "./Loader.tsx";
import { IUser } from "../types/types.ts";
import UserListItem from "./UserListItem.tsx";

interface UserListItemsProps {
  users: IUser[];
  loading: boolean;
}

const UserListItems = ({ users, loading }: UserListItemsProps) => {
  return loading ? (
    <Loader />
  ) : (
    <ul className="bg-white shadow rounded">
      {users.map((user, index) => (
        <UserListItem
          key={user.id}
          user={user}
          isLast={index === users.length - 1}
        />
      ))}
    </ul>
  );
};

export default UserListItems;
