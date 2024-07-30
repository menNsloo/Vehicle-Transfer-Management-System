const TransferList = ({ transfers }) => (
    <ul>
        {transfers.map((transfer) => (
            <li key={transfer.id}>
                Vehicle: {transfer.vehicle.vehicle_number} - From: {transfer.from_driver.name} - To: {transfer.to_driver.name} - Date: {new Date(transfer.transfer_date).toLocaleDateString()}
            </li>
        ))}
    </ul>
);

export default TransferList;