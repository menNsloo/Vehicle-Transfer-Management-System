const DriverForm = ({ name, phoneNumber, setName, setPhoneNumber, setProfilePhoto, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
            <label>Phone Number:</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
            <label>Profile Photo:</label>
            <input type="file" onChange={(e) => setProfilePhoto(e.target.files[0])} />
        </div>
        <button type="submit">Submit</button>
    </form>
);

export default DriverForm;