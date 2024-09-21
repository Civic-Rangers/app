export function Dashboard(){
    return (
        <>
            <div className="relative mb-16">
                <div className="h-48 rounded-lg bg-gray-200"></div>
                <div className="absolute bottom-0 left-8 transform translate-y-1/2">
                    <div className="w-32 h-32 rounded-full bg-white border border-solid">
                        
                    </div>
                </div>
            </div>
            <div className="ml-12">
                <p>Test Account</p>
                <p>User Bio...</p>
                <div className="flex">
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <h2>Listings</h2>
            </div>
            <div>
                <h2>Requests</h2>
            </div>
        </>
    )
}