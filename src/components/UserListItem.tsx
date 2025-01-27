import { Link } from "react-router-dom";
import { IUser } from "../types/types.ts";

interface UserListItemProps {
  user: IUser;
  isLast: boolean;
}

const UserListItem = ({ user, isLast }: UserListItemProps) => {
  return (
    <Link
      to={`/user/${user.id}`}
      state={{ user }}
      className="text-blue-500 no-underline"
    >
      <li
        className={`flex items-center p-4 ${!isLast ? "border-b border-gray-300" : ""}`}
      >
        <span className="flex-1 truncate">{user.name}</span>
        <span className="w-6 text-lg text-center">
          {user.gender === "male" ? "♂" : "♀"}
        </span>
        <div
          className={`w-3 h-3 rounded-full ${
            user.status === "active" ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
      </li>
    </Link>
  );
};

export default UserListItem;
