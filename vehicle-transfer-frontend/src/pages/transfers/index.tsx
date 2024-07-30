import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import TransferList from '../../components/TransferList';

const TransfersPage = () => {
    const [transfers, setTransfers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/transfers')
            .then(response => setTransfers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Transfers</h1>
            <TransferList transfers={transfers} />
            <Link href="/transfers/create">Create Transfer</Link>
        </div>
    );
};

export default TransfersPage;
