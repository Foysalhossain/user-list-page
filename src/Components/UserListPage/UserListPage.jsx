import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";


const UserListPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, []);

    return (
        <div className="user-list p-20 mx-auto">
            <h1>User List</h1>
            <div className="user-cards grid grid-cols-4 justify-items-center gap-6">
                {
                    users.map(user => <UserCard key={user.id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};


export default UserListPage;