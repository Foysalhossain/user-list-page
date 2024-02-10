import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";

const UserListPage = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('name');

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, []);

    // search bar name
    const filteredUsers = users.filter(item => {
        return (
            search.toLowerCase() === '' ||
            item.firstName.toLowerCase().includes(search)
        )
    });

    // sort by name, email, and company name
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (sortBy === 'name') {
            return a.firstName.localeCompare(b.firstName);
        }
        else if (sortBy === 'email') {
            return a.email.localeCompare(b.email);
        }
        else if (sortBy === 'company') {
            return a.company.name.localeCompare(b.company.name);
        }
    });

    return (
        <div className="user-list p-20 mx-auto">
            <h1 className="text-center text-5xl font-bold">User List</h1>
            <div className="text-center">
                {/* search bar */}
                <input
                    type="text"
                    placeholder="Search By Name"
                    className="input input-bordered join-item my-8 w-96"
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* sort dropdown */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="select select-bordered w-96 ms-2"
                >
                    <option value="name">Sort By Name</option>
                    <option value="email">Sort By Email</option>
                    <option value="company">Sort By Company</option>
                </select>
            </div>
            <div className="user-cards grid grid-cols-4 justify-items-center gap-6">
                {sortedUsers.map(user => <UserCard key={user.id} user={user}></UserCard>)}
            </div>
        </div>
    );
};

export default UserListPage;
