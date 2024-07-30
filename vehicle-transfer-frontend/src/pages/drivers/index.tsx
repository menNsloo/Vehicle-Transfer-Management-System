import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import DriverList from '../../components/DriverList';

const DriversPage = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/drivers')
            .then(response => setDrivers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Drivers</h1>
            <DriverList drivers={drivers} />
            <Link href="/driver/create">Create Driver</Link>
        </div>
    );
};
