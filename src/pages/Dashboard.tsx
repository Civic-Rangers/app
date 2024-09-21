import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { Profile } from "../components/Profile";

const user = {
    name: "Amanda Smith",
    description: "Passionate about community support and making parking accessible.",
    phone: "561-123-4567",
    email: "donor@example.com",
    availableSpaces: [
        {
            address_street: "6701 Hiatus Rd",
            address_city: "Tamarac",
            address_state: "FL",
            address_zip: "33321",
            distance: "18.45 miles",
            available: "available",
            imageSrc: "https://lh3.googleusercontent.com/gg/ACM6BIt6G-a4VJfODcB6nyhZ92GJ0oGUxAnzWCoGr4S7uLuOk0K_o4Qsrtrb7fDc75D1KbsddNVnaPIUq-CLLpNF9oa6fx2ryWT4wG8P8U524QT3bCuT8PgggHy6-Uv48J-iIWcvsWMwopfg0eyhV0iFIrP-h-BVBRFIAsHX80hScNBU0qfGxK65BNkaMu6tU4jUUfOJL8LYThAGVRVs1h4QKHSLK3fnPg2KgQ5WV8NYvKJz7ayFE8IcXqGn8VPysxSk1GZEFRz7fiS5QMNbSeJmu4jv1En2ik-IHADHL-U1hY1CVui2cpa6RQh_6wrBjQAd1F83XHsVOskjBAbyjdAG2yiZ"
        },
        {
            address_street: "123 Main St",
            address_city: "Fort Lauderdale",
            address_state: "FL",
            address_zip: "33301",
            distance: "5.2 miles",
            available: "not available",
            imageSrc: "https://lh3.googleusercontent.com/gg/ACM6BIt6G-a4VJfODcB6nyhZ92GJ0oGUxAnzWCoGr4S7uLuOk0K_o4Qsrtrb7fDc75D1KbsddNVnaPIUq-CLLpNF9oa6fx2ryWT4wG8P8U524QT3bCuT8PgggHy6-Uv48J-iIWcvsWMwopfg0eyhV0iFIrP-h-BVBRFIAsHX80hScNBU0qfGxK65BNkaMu6tU4jUUfOJL8LYThAGVRVs1h4QKHSLK3fnPg2KgQ5WV8NYvKJz7ayFE8IcXqGn8VPysxSk1GZEFRz7fiS5QMNbSeJmu4jv1En2ik-IHADHL-U1hY1CVui2cpa6RQh_6wrBjQAd1F83XHsVOskjBAbyjdAG2yiZ"
        }
    ]
};


export function Dashboard() {
    return (
        <>
            {/* {user.availableSpaces.map((space, index) => (
                <Card 
                    key={index}
                    address_street={space.address_street}
                    address_city={space.address_city}
                    address_state={space.address_state}
                    address_zip={space.address_zip}
                    distance={space.distance}
                    available={space.available}
                    imageSrc={space.imageSrc}
                />
            ))} */}
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