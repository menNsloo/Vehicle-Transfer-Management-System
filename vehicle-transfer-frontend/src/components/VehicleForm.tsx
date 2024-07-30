const VehicleForm = ({ vehicleNumber, vehicleType, setVehicleNumber, setVehicleType, setPucCertificate, setInsuranceCertificate, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Vehicle Number:</label>
            <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />
        </div>
        <div>
            <label>Vehicle Type:</label>
            <input type="text" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required />
        </div>
        <div>
            <label>PUC Certificate:</label>
            <input type="file" onChange={(e) => setPucCertificate(e.target.files[0])} />
        </div>
        <div>
            <label>Insurance Certificate:</label>
            <input type="file" onChange={(e) => setInsuranceCertificate(e.target.files[0])} />
        </div>
        <button type="submit">Submit</button>
    </form>
);

export default VehicleForm;