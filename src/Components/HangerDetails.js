import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { db, collection, getDocs, deleteDoc, doc } from './FirebaseConfig'; // Import deleteDoc and doc
import './HangerDetails.css';
import { useNavigate } from 'react-router-dom';


export default function HangerComponent() {
  const [hangerData, setHangerData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHangerData = async () => {
      try {
        const hangerCollectionRef = collection(db, 'hanger');
        const querySnapshot = await getDocs(hangerCollectionRef);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() }); // Include document ID along with data
        });
        setHangerData(data);
      } catch (error) {
        console.error('Error fetching hanger data: ', error);
      }
    };

    fetchHangerData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'hanger', id));
      setHangerData(hangerData.filter((hanger) => hanger.id !== id));
    } catch (error) {
      console.error('Error deleting hanger entry: ', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleGoBackClick = () => {
    navigate('/home');
  };


  return (
    <div>
    <h1 className="task-list-heading">Hanger Details</h1>
    <div className='go-back-button-containerOne'>
  <Button variant="primary" className="go-back-button" onClick={handleGoBackClick}>Go Back</Button>
</div>

    <div className="test-entry-container">
      <Table striped bordered hover className="task-table">
        <thead>
          <tr>
            <th>Si. No</th>
            <th>Date</th>
            <th>MsSub No</th>
            <th>Colour</th>
            <th>fabricDescription</th>
            <th>fabricComposition</th>
            <th>achievedGsm</th>
            <th>submission</th>
            <th>tcxNo</th>
            <th>buyer </th>
            <th>count</th>
            <th>dia</th>
            <th>gage</th>
            <th>machineMake</th>
            <th>greigeGsm</th>
            <th>requiredGsm</th>
            <th>loopLength</th>
            <th>comments</th>
            <th>approvedBy</th>
            <th>yarnFrom</th>
            <th>knittingBy</th>
            <th>washingBy</th>
            <th>dyeingBy</th>
            <th>compactingBy</th>
            <th>finishingBy</th>
          </tr>
        </thead>
        <tbody>
          {hangerData.map((hanger, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{hanger.date}</td>
              <td>{hanger.msSubNo}</td>
              <td>{hanger.colour}</td>
              <td>{hanger.fabricDescription}</td>
              <td>{hanger.fabricComposition}</td>
              <td>{hanger.achievedGsm}</td>
              <td>{hanger.submission}</td>
              <td>{hanger.tcxNo}</td>
              <td>{hanger.buyer}</td>
              <td>{hanger.count}</td>
              <td>{hanger.dia}</td>
              <td>{hanger.gage}</td>
              <td>{hanger.machineMake}</td>
              <td>{hanger.greigeGsm}</td>
              <td>{hanger.requiredGsm}</td>
              <td>{hanger.loopLength}</td>
              <td>{hanger.comments}</td>
              <td>{hanger.approvedBy}</td>
              <td>{hanger.yarnFrom}</td>
              <td>{hanger.knittingBy}</td>
              <td>{hanger.washingBy}</td>
              <td>{hanger.dyeingBy}</td>
              <td>{hanger.compactingBy}</td>
              <td>{hanger.finishingBy}</td>
              <Button variant="primary" onClick={() => handleEdit(hanger.id)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(hanger.id)}>Delete</Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
}
