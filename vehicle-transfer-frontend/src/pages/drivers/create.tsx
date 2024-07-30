import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import DriverForm from '../../components/DriverForm';


const CreateDriverPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone_number', phoneNumber);
        formData.append('profile_photo', profilePhoto);

        try {
            await axios.post('http://localhost:3001/drivers', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            router.push('/drivers');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create Driver</h1>
            <DriverForm
                name={name}
                phoneNumber={phoneNumber}
                setName={setName}
                setPhoneNumber={setPhoneNumber}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default CreateDriverPage;