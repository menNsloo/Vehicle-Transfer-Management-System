import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import VehicleForm from '../../components/VehicleForm';

const CreateVehiclePage = () => {
    const router = useRouter();
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [pucCertificate, setPucCertificate] = useState(null);
    const [insuranceCertificate, setInsuranceCertificate] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('vehicle_number', vehicleNumber);
        formData.append('vehicle_type', vehicleType);
        formData.append('puc_certificate', pucCertificate);
        formData.append('insurance_certificate', insuranceCertificate);

        try {
            await axios.post('http://localhost:3001/vehicles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            router.push('/vehicles');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create Vehicle</h1>
            <VehicleForm
                vehicleNumber={vehicleNumber}
                vehicleType={vehicleType}
                setVehicleNumber={setVehicleNumber}
                setVehicleType={setVehicleType}
                setPucCertificate={setPucCertificate}
                setInsuranceCertificate={setInsuranceCertificate}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default CreateVehiclePage;