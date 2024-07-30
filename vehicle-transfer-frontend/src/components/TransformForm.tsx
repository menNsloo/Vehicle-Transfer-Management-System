const TransferForm = ({ vehicles, drivers, vehicleId, fromDriverId, toDriverId, transferDate, setVehicleId, setFromDriverId, setToDriverId, setTransferDate, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Vehicle:</label>
            <select value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} required>
                <option value="">Select a vehicle</option>
                {vehicles.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.id}>{vehicle.vehicle_number}</option>
                ))}
            </select>
        </div>
        <div>
            <label>From Driver:</label>
            <select value={fromDriverId} onChange={(e) => setFromDriverId(e.target.value)} required>
                <option value="">Select a driver</option>
                {drivers.map((driver) => (
                    <option key={driver.id} value={driver.id}>{driver.name}</option>
                ))}
            </select>
        </div>
        <div>
            <label>To Driver:</label>
            <select value={toDriverId} onChange={(e) => setToDriverId(e.target.value)} required>
                <option value="">Select a driver</option>
                {drivers.map((driver) => (
                    <option key={driver.id} value={driver.id}>{driver.name}</option>
                ))}
            </select>
        </div>
        <div>
            <label>Transfer Date:</label>
            <input type="date" value={transferDate} onChange={(e) => setTransferDate(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
    </form>
);

export default TransferForm;