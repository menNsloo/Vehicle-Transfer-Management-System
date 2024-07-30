import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import TransferForm from '../../components/DriverForm';

const CreateTransferPage = () => {
    const router = useRouter();
    const [vehicles, setVehicles] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [vehicleId, setVehicleId] = useState('');
    const [fromDriverId, setFromDriverId] = useState('');
    const [toDriverId, setToDriverId] = useState('');
    const [transferDate, setTransferDate] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/vehicles')
            .then(response => setVehicles(response.data))
            .catch(error => console.error(error));

        axios.get('http://localhost:3001/drivers')
            .then(response => setDrivers(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3001/transfers', {
                vehicle: { id: vehicleId },
                from_driver: { id: fromDriverId },
                to_driver: { id: toDriverId },
                transfer_date: transferDate,
            });
            router.push('/transfers');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create Transfer</h1>
            <TransferForm
                vehicles={vehicles}
                drivers={drivers}
                vehicleId={vehicleId}
                fromDriverId={fromDriverId}
                toDriverId={toDriverId}
                transferDate={transferDate}
                setVehicleId={setVehicleId}
                setFromDriverId={setFromDriverId}
                setToDriverId={setToDriverId}
                setTransferDate={setTransferDate}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default CreateTransferPage;