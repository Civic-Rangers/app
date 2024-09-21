import { Profile } from "../components/Profile";
import thumbnailImage from "../assets/car.png";

const user = {
    name: "Amanda Smith",
    description: "Making parking accessible.",
    phone: "561-123-4567",
    email: "example@email.com",
    availableSpaces: [
        {
            address_street: "123 Main St",
            address_city: "Fort Lauderdale",
            address_state: "FL",
            address_zip: "33301",
            distance: "5.2 miles",
            available: "available",
            imageSrc: thumbnailImage
        },
        {
            address_street: "6701 Hiatus Rd",
            address_city: "Tamarac",
            address_state: "FL",
            address_zip: "33321",
            distance: "18.45 miles",
            available: "not available",
            imageSrc: thumbnailImage
        }
    ]
};


export function Dashboard() {
    return (
        <>
            <Profile 
                role="donor"
                name={user.name}
                description={user.description}
                phone={user.phone}
                email={user.email}
                availableSpaces={user.availableSpaces}
                isLoggedInUser={true}
            />
        </>
    );
}