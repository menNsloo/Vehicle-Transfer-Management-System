const VehicleList = ({ vehicles }) => (
    <ul>
        {vehicles.map((vehicle) => (
            <li key={vehicle.vehicle_number}>{vehicle.vehicle_number} - {vehicle.vehicle_type}</li>
        ))}
    </ul>
);

export default VehicleList;