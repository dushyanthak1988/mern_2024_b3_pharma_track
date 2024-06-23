import React, { useEffect, useState } from 'react';
import * as api from '../services/ApiServices';
import backgroundImage from '../assets/images/medicine_list_background.jpg'; // Ensure you have this image in your assets

function MedicineList() {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState('');
  const [showAddMedicineForm, setShowAddMedicineForm] = useState(false);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    quantity: '',
    expiryDate: '',
    price: ''
  });

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const { data } = await api.fetchMedicines();
        setMedicines(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedicines();
  }, []);

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedicine(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addMedicineHandler = async (e) => {
    e.preventDefault();
    try {
      await api.createMedicine(newMedicine);
      alert('Medicine added successfully');
      setNewMedicine({ name: '', quantity: '', expiryDate: '', price: '' });
      setShowAddMedicineForm(false);
      const { data } = await api.fetchMedicines(); // Refresh the medicine list
      setMedicines(data);
    } catch (error) {
      console.error(error);
      alert('Error adding medicine');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.listContainer}>
        <h1 style={styles.title}>Medicines</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Name</th>
              <th style={styles.tableHeader}>Quantity</th>
              <th style={styles.tableHeader}>Expiry Date</th>
              <th style={styles.tableHeader}>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.map((medicine) => (
              <tr key={medicine._id} style={styles.tableRow}>
                <td style={styles.tableCell}>{medicine.name}</td>
                <td style={styles.tableCell}>{medicine.quantity}</td>
                <td style={styles.tableCell}>{medicine.expiryDate}</td>
                <td style={styles.tableCell}>{medicine.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={() => setShowAddMedicineForm(!showAddMedicineForm)} style={styles.addButton}>
          {showAddMedicineForm ? 'Cancel' : 'Add New Medicine'}
        </button>
        {showAddMedicineForm && (
          <form onSubmit={addMedicineHandler} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newMedicine.name}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={newMedicine.quantity}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            <input
              type="date"
              name="expiryDate"
              placeholder="Expiry Date"
              value={newMedicine.expiryDate}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newMedicine.price}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Add Medicine</button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  listContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  addButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    padding: '10px',
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
  },
  tableRow: {
    backgroundColor: '#fff',
    '&:nth-of-type(even)': {
      backgroundColor: '#f9f9f9',
    },
  },
  tableCell: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default MedicineList;
