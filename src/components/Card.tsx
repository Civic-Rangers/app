import { FaCarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type CardProps = {
    address_street: string;
    address_city: string;
    address_state: string;
    address_zip?: string
    distance: string;
    available: string;
    imageSrc: string;
    onClick?: () => void;
};

export function Card({ address_street, address_city, address_state, address_zip, distance, available, imageSrc, onClick }: CardProps) {
    return (
        <div className="card w-96 shadow-xl bg-white text-black m-2" onClick={onClick}>
            <div className="p-5 flex justify-between">
                <div>
                    <h6 className="font-bold" title={address_street}>{address_street}</h6>
                    <p className="text-gray-400" title={`${address_city}, ${address_state}, ${address_zip}`}>{`${address_city}, ${address_state}, ${address_zip}`}</p>
                    <div className="mt-2 flex gap-4">
                        <div className="flex items-center gap-2">
                            <FaCarAlt size={16} />
                            <p className="text-sm">{distance}</p>
                        </div>
                        <div className="flex items-center gap-2">
                        {available === "available" ? (
                                <>
                                    <FaCheckCircle className="text-success" />
                                    <p className="text-sm">Available</p>
                                </>
                            ) : (
                                <>
                                    <FaTimesCircle className="text-error" />
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
