import { FaCarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type CardProps = {
    name: string;
    address: string;
    distance: string | number;
    availability: boolean;
    imageSrc: string;
};

export function Card({ name, address, distance, availability, imageSrc }: CardProps) {
    return (
        <div className="card w-96 shadow-xl bg-white text-black m-2">
            <div className="p-5 flex justify-between">
                <div>
                    <h6 className="font-bold" title={name}>{name}</h6>
                    <p className="text-gray-400" title={address}>{address}</p>
                    <div className="mt-2 flex gap-4">
                        <div className="flex items-center gap-2">
                            <FaCarAlt size={16} />
                            <p className="text-sm">{distance} miles</p>
                        </div>
                        <div className="flex items-center gap-2">
                            {availability ? (
                                <>
                                    <FaCheckCircle className="text-success" />
                                    <p className="text-sm">Available</p>
                                </>
                            ) : (
                                <>
                                    <FaTimesCircle className="text-red-500" />
                                    <p className="text-sm">Not Available</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-20 h-20 rounded-xl">
                    <img className="rounded-xl" src={imageSrc} alt={`${name} image`} />
                </div>
            </div>
        </div>
    );
}
