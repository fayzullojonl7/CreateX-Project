import React from 'react'

const Services = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-4">Service Page</h1>
            <p className="text-center text-gray-600">This is the service page where you can find various services we offer.</p>
            <div className="mt-8 max-w-2xl mx-auto">
                <ul className="list-disc list-inside space-y-2">
                    <li>Service 1: Description of service 1</li>
                    <li>Service 2: Description of service 2</li>
                    <li>Service 3: Description of service 3</li>
                </ul>
            </div>
        </div>
    )
}

export default Services
