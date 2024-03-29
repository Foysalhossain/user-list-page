import { Link } from "react-router-dom";


const UserCard = ({ user }) => {
    const { id, firstName, lastName, image, email, address, company } = user;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl my-2 border border-red-400">
                <figure className="px-10 pt-10">
                    <img src={image} alt="avatar" className="rounded-xl w-20 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <Link to={`/userDetails/${id}`}>
                        <h2 className="card-title">{firstName} {lastName}</h2>
                    </Link>
                    <p>Email: {email}</p>
                    <p>Address: {address.address}</p>
                    <p>City: {address.city}</p>
                    <p>Company: {company.name}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;