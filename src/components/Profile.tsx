import { FaEnvelope, FaPhoneAlt, FaEllipsisV } from "react-icons/fa";
import { Card } from "./Card"; // Adjust the import path as necessary

type ProfileProps = {
    role: string;
    name: string;
    description: string;
    phone: string;
    email: string;
    availableSpaces: Array<{
        address_street: string;
        address_city: string;
        address_state: string;
        address_zip?: string;
        distance: string;
        available: string;
        imageSrc: string;
    }>;
    isLoggedInUser: boolean; // New prop to check if the profile belongs to the logged-in user
}

type Request = {
    name: string;
    phone: string;
    vehicle: string;
    profileImg: string;
    location: string;
}

export function Profile({ role, name, description, phone, email, availableSpaces, isLoggedInUser }: ProfileProps) {
    // Example requests data with profile image and location
    const requests: Request[] = [
        { name: "John Doe", phone: "555-123-4567", vehicle: "Toyota Camry 2020", profileImg: "https://via.placeholder.com/50", location: "Miami, FL" },
        { name: "Jane Smith", phone: "555-987-6543", vehicle: "Honda Civic 2018", profileImg: "https://via.placeholder.com/50", location: "Fort Lauderdale, FL" },
        { name: "Michael Johnson", phone: "555-654-3210", vehicle: "Tesla Model 3 2021", profileImg: "https://via.placeholder.com/50", location: "Orlando, FL" }
    ];

    return (
        <div className="p-4">
            {role === "donor" ? (
                <>
                    <div className="relative mb-16">
                        {/* Profile background and dropdown */}
                        <div className="bg-cover h-48 rounded-lg shadow" style={{ backgroundImage: `url('https://via.placeholder.com/600x200')` }}>
                            <div className="absolute top-2 right-2">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-sm btn-ghost">
                                        <FaEllipsisV />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button>View Profile</button></li>
                                        <li><button className="text-red-500">Report User</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Profile picture */}
                        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Replace with actual image URL
                                    alt="Profile"
                                />
                            </div>
                        </div>
                    </div>

                    {/* User Info */}
                    <div>
                        <h2 className="text-lg font-bold">{name}</h2>
                        <p className="text-gray-700">{description}</p>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt size={16} />
                                <p>{phone}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope size={16} />
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Available Parking Spaces */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Available Parking Spaces</h3>
                        <div className="flex flex-wrap gap-4 mt-2">
                            {availableSpaces.length > 0 ? (
                                availableSpaces.map((space, index) => (
                                    <Card
                                        key={index}
                                        address_street={space.address_street}
                                        address_city={space.address_city}
                                        address_state={space.address_state}
                                        address_zip={space.address_zip}
                                        distance={space.distance}
                                        available={space.available}
                                        imageSrc={space.imageSrc}
                                        onClick={() => console.log(`Clicked on ${space.address_street}`)} // Example onClick functionality
                                    />
                                ))
                            ) : (
                                <p>No available parking spaces listed.</p>
                            )}
                        </div>
                    </div>

                    {/* Conditional Requests Section */}
                    {isLoggedInUser && (
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Requests</h3>
                            <table className="table-auto w-full mt-4 rounded-lg shadow-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-2 text-left">Name</th>
                                        <th className="p-2 text-left">Phone</th>
                                        <th className="p-2 text-left">Vehicle</th>
                                        <th className="p-2 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map((request, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="p-2 flex items-center gap-2">
                                                <img src={request.profileImg} alt={request.name} className="w-10 h-10 rounded-full" />
                                                <div>
                                                    <p>{request.name}</p>
                                                    <p className="text-sm text-gray-500">{request.location}</p>
                                                </div>
                                            </td>
                                            <td className="p-2">{request.phone}</td>
                                            <td className="p-2">{request.vehicle}</td>
                                            <td className="p-2">
                                                <button className="btn btn-sm btn-outline">Review</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            ) : (
                <div>This is a seeker!</div>
            )}
        </div>
    );
}
