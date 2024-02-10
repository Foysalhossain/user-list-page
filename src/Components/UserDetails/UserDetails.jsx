import { Link, useLoaderData } from "react-router-dom";

import { useParams } from "react-router-dom";


const UserDetails = () => {
    const { id } = useParams();
    const details = useLoaderData();
    const { firstName, lastName, image, email, address, company } = details;
    return (
        <div className="md:container md:mx-auto grid justify-center p-20 w-full">
            <h3 className="text-center py-10 font-bold">User Details Id: {id}</h3>
            <div className="card w-96 bg-base-100 shadow-xl py-10">
                <figure><img src={image} alt="avatar" className=" w-28 h-28" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="font-bold">First & Last Name: {firstName} {lastName}</h2>
                    </div>
                    <p>Email: {email}</p>
                    <p>Address: {address.address}</p>
                    <p>City: {address.city}</p>
                    <p>Company: {company.name}</p>
                    <div className="card-actions">
                        <Link to="/">
                            <button className="btn btn-outline btn-default">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;