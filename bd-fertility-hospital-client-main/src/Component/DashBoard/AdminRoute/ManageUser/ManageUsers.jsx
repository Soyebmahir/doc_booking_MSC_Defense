import UsersTable from "./UsersTable";
import useUsers from "../../../Hook/useUsers";
import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, refetch] = useUsers();
  const [searchText, setSearchText] = useState("");
  const [allUser, setAllUser] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://hospitalupdate.abinashfoundation.com/user-route/search/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        setAllUser(data.users);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  useEffect(() => {
    fetch("https://hospitalupdate.abinashfoundation.com/user-route/getAllUser")
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        setAllUser(data.result);
      });
  }, [refetch]);

  return (
    <div>
      <h2 className="text-2xl text-center pt-10 p-b-">
        All users: {users?.length}
      </h2>

      <div className="join">
        <div className="grid mx-auto">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered join-item"
            placeholder="Search"
          />
        </div>

        <div className="indicator">
          <button onClick={handleSearch} className="btn join-item">
            Search
          </button>
        </div>
      </div>

      <UsersTable users={allUser} refetch={refetch} />
    </div>
  );
};

export default ManageUsers;
