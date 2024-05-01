

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, updateDoc,db } from './FirebaseConfig';

export default function HangerEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hanger, setHanger] = useState({
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

  useEffect(() => {
    const fetchhanger = async () => {
      try {
        const hangerDoc = await getDoc(doc(db, 'hanger', id));
        if (hangerDoc.exists()) {
          setHanger(hangerDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching hanger data: ', error);
      }
    };

    fetchhanger();
  }, [id]);

  // Handle update function
  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, 'hanger', id), hanger);
      console.log('Document successfully updated!');
      alert('Updated successfully!');
      navigate('/hanger-details'); // Navigate back to hanger details page
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHanger(prevHanger => ({
      ...prevHanger,
      [name]: value
    }));
  };

  return (
    <div className="edit-hanger-container">
      <h1>Edit Hanger Details</h1>
      <form>
        <div className="form-group">
        <label>Date:</label>
        <input type="text" name="date" value={hanger.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>MsSub No:</label>
          <input type="text" name="msSubNo" value={hanger.msSubNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Colour:</label>
          <input type="text" name="colour" value={hanger.colour} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>fabricDescription:</label>
          <input type="text" name="fabricDescription" value={hanger.fabricDescription} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>fabricComposition:</label>
          <input type="text" name="fabricComposition" value={hanger.fabricComposition} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>requiredGsm:</label>
          <input type="text" name="requiredGsm" value={hanger.requiredGsm} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>achievedGsm:</label>
          <input type="text" name="achievedGsm" value={hanger.achievedGsm} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>submission:</label>
          <input type="text" name="submission" value={hanger.submission} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>tcxNo:</label>
          <input type="text" name="tcxNo" value={hanger.tcxNo} onChange={handleChange} />
        </div>

        {/* <div className="form-group">
          <label>requiredGsm:</label>
          <input type="text" name="requiredGsm" value={hanger.requiredGsm} onChange={handleChange} />
        </div> */}

        <div className="form-group">
          <label>buyer:</label>
          <input type="text" name="buyer" value={hanger.buyer} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>count:</label>
          <input type="text" name="count" value={hanger.count} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>dia:</label>
          <input type="text" name="dia" value={hanger.dia} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>gage:</label>
          <input type="text" name="gage" value={hanger.gage} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>machineMake:</label>
          <input type="text" name="machineMake" value={hanger.machineMake} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>greigeGsm:</label>
          <input type="text" name="greigeGsm" value={hanger.greigeGsm} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>loopLength:</label>
          <input type="text" name="loopLength" value={hanger.loopLength} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>comments:</label>
          <input type="text" name="comments" value={hanger.comments} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>approvedBy:</label>
          <input type="text" name="approvedBy" value={hanger.approvedBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>yarnFrom:</label>
          <input type="text" name="yarnFrom" value={hanger.yarnFrom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>knittingBy:</label>
          <input type="text" name="knittingBy" value={hanger.knittingBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>washingBy:</label>
          <input type="text" name="washingBy" value={hanger.washingBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>dyeingBy:</label>
          <input type="text" name="dyeingBy" value={hanger.dyeingBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>compactingBy:</label>
          <input type="text" name="compactingBy" value={hanger.compactingBy} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>finishingBy:</label>
          <input type="text" name="finishingBy" value={hanger.finishingBy} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}
