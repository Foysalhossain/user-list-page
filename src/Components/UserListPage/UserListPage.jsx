import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";


const UserListPage = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, []);


    return (
        <div className="user-list p-20 mx-auto">
            <h1 className="text-center text-5xl font-bold">User List</h1>
            <div className="text-center">
                <input
                    type="text"
                    placeholder="Search By Name"
                    className="input input-bordered join-item my-8 w-96"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="user-cards grid grid-cols-4 justify-items-center gap-6">
                {
                    users.filter(item => {
                        return search.toLowerCase() === '' ? item : item.firstName.toLowerCase().includes(search);
                    }).map(user => <UserCard key={user.id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};


export default UserListPage;