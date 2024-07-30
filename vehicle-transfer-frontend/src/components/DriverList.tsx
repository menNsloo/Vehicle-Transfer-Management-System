const DriverList = ({ drivers }) => (
    <ul>
        {drivers.map((driver) => (
            <li key={driver.id}>{driver.name} - {driver.phone_number}</li>
        ))}
    </ul>
);

export default DriverList;
