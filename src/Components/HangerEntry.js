import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { db, collection, addDoc } from './FirebaseConfig'; // Import Firestore functions
import './HangerEntry.css'; // Import CSS file for HangerEntry component

export default function HangerEntry() {
  const [formData, setFormData] = useState({
    date: '',
    msSubNo: '',
    colour: '',
    fabricDescription: '',
    fabricComposition: '',
    achievedGsm: '',
    submission: '',
    tcxNo: '',
    buyer: '',
    count: '',
    dia: '',
    gage: '',
    machineMake: '',
    greigeGsm: '',
    requiredGsm: '',
    loopLength: '',
    comments: '',
    approvedBy: '',
    yarnFrom: '',
    knittingBy: '',
    washingBy: '',
    dyeingBy: '',
    compactingBy: '',
    finishingBy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the formData to the 'hanger' collection in Firestore
      await addDoc(collection(db, 'hanger'), formData);
      // Reset the form after successful submission
      setFormData({
        date: '',
        msSubNo: '',
        colour: '',
        fabricDescription: '',
        fabricComposition: '',
        achievedGsm: '',
        submission: '',
        tcxNo: '',
        buyer: '',
        count: '',
        dia: '',
        gage: '',
        machineMake: '',
        greigeGsm: '',
        requiredGsm: '',
        loopLength: '',
        comments: '',
        approvedBy: '',
        yarnFrom: '',
        knittingBy: '',
        washingBy: '',
        dyeingBy: '',
        compactingBy: '',
        finishingBy: ''
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
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>MsSub No:</label>
          <input type="text" name="msSubNo" value={formData.msSubNo} onChange={handleChange} />
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
          <label>requiredGsm:</label>
          <input type="text" name="requiredGsm" value={formData.requiredGsm} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>achievedGsm:</label>
          <input type="text" name="achievedGsm" value={formData.achievedGsm} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>submission:</label>
          <input type="text" name="submission" value={formData.submission} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>tcxNo:</label>
          <input type="text" name="tcxNo" value={formData.tcxNo} onChange={handleChange} />
        </div>

        {/* <div className="form-group">
          <label>requiredGsm:</label>
          <input type="text" name="requiredGsm" value={formData.requiredGsm} onChange={handleChange} />
        </div> */}

        <div className="form-group">
          <label>buyer:</label>
          <input type="text" name="buyer" value={formData.buyer} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>count:</label>
          <input type="text" name="count" value={formData.count} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>dia:</label>
          <input type="text" name="dia" value={formData.dia} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>gage:</label>
          <input type="text" name="gage" value={formData.gage} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>machineMake:</label>
          <input type="text" name="machineMake" value={formData.machineMake} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>greigeGsm:</label>
          <input type="text" name="greigeGsm" value={formData.greigeGsm} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>loopLength:</label>
          <input type="text" name="loopLength" value={formData.loopLength} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>comments:</label>
          <input type="text" name="comments" value={formData.comments} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>approvedBy:</label>
          <input type="text" name="approvedBy" value={formData.approvedBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>yarnFrom:</label>
          <input type="text" name="yarnFrom" value={formData.yarnFrom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>knittingBy:</label>
          <input type="text" name="knittingBy" value={formData.knittingBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>washingBy:</label>
          <input type="text" name="washingBy" value={formData.washingBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>dyeingBy:</label>
          <input type="text" name="dyeingBy" value={formData.dyeingBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>compactingBy:</label>
          <input type="text" name="compactingBy" value={formData.compactingBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>finishingBy:</label>
          <input type="text" name="finishingBy" value={formData.finishingBy} onChange={handleChange} />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
