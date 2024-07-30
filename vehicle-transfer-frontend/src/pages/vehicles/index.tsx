import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import VehicleList from '../../components/VehicleList';

const VehiclesPage = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/vehicles')
            .then(response => setVehicles(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Vehicles</h1>
            <VehicleList vehicles={vehicles} />
            <Link href="/vehicles/create">Create Vehicle</Link>
        </div>
    );
};

export default VehiclesPage;
