import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { db, collection, addDoc } from './FirebaseConfig'; // Import Firestore functions
import './HangerEntry.css'; // Import CSS file for HangerEntry component

export default function TestEntry() {
  const [formData, setFormData] = useState({
    buyer: '',
    season: '',
    colour: '',
    fabricDescription: '',
    fabricComposition: '',
    fabricGsm: '',
    trfNo: '',
    submittedDate: '',
    reportNo: '',
    dateOfRecieve: '',
    pdfBox: null, // Change to null since it will be a file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Check if the selected file is a PDF
    if (file && file.type === 'application/pdf') {
      setFormData({
        ...formData,
        pdfBox: file
      });
    } else {

      alert('Please select a PDF file.');
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the formData to the 'hanger' collection in Firestore
      await addDoc(collection(db, 'test'), formData);
      // Reset the form after successful submission
      setFormData({
        buyer: '',
        season: '',
        colour: '',
        fabricDescription: '',
        fabricComposition: '',
        fabricGsm: '',
        trfNo: '',
        submittedDate: '',
        reportNo: '',
        dateOfRecieve: '',
        pdfBox: null, // Change to null after submission
      });
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data: ', error);
      alert('An error occurred while submitting data.');
    }
  };
  
  return (
    <div className="test-entry-container">
      <h1>Hanger Entry</h1>
      <form>
        <div className="form-group">
          <label>submittedDate:</label>
          <input type="date" name="submittedDate" value={formData.submittedDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>dateOfRecieve:</label>
          <input type="date" name="dateOfRecieve" value={formData.dateOfRecieve} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Colour:</label>
          <input type="text" name="colour" value={formData.colour} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>fabricDescription:</label>
          <input type="text" name="fabricDescription" value={formData.fabricDescription} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>fabricComposition:</label>
          <input type="text" name="fabricComposition" value={formData.fabricComposition} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>fabricGsm:</label>
          <input type="text" name="fabricGsm" value={formData.fabricGsm} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>season:</label>
          <input type="text" name="season" value={formData.season} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>trfNo:</label>
          <input type="text" name="trfNo" value={formData.trfNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>reportNo:</label>
          <input type="text" name="reportNo" value={formData.reportNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>buyer:</label>
          <input type="text" name="buyer" value={formData.buyer} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>pdfBox:</label>
          <input type="file" name="pdfBox" accept="application/pdf" onChange={handleFileChange} />

        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
