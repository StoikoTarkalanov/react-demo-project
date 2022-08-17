import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as dataService from '../../services/dataServices';
import './Edit.css';

const Edit = () => {
  const [userData, setUserData] = useState({});
  const [newUserData, setNewUserData] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const editData = await dataService.getUserById(userId);
      setUserData(editData);
    })();
  }, [userId]);

  const editHandler = async (e) => {
    e.preventDefault();

    const { name, gender, age } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    const editData = await dataService.updateUser(userId, {
      name,
      gender,
      age,
    });

    setNewUserData(editData);
  };

  return (
    <>
      <div className="edit-container">
        <form className="form-content" method="PUT" onSubmit={editHandler}>
          <h1>Edit Component</h1>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={userData?.firstName}
          />
          <input type="text" id="age" name="age" defaultValue={userData?.age} />
          <input
            type="text"
            id="gender"
            name="gender"
            defaultValue={userData?.gender}
          />
          <input type="submit" value="Edit" />
        </form>
        <article className="attention">
          <p>
            Updating a user will not update it into the server. It will simulate
            a PUT/PATCH request and will return the user with modified data
          </p>
          <h2>Updated Data</h2>
          <p>
            {Object.keys(newUserData).length !== 0
              ? `${newUserData?.firstName}`
              : 'Data not updated yet!'}
          </p>
          <p>
            {Object.keys(newUserData).length !== 0
              ? `${newUserData?.age}`
              : 'Data not updated yet!'}
          </p>
          <p>
            {Object.keys(newUserData).length !== 0
              ? `${newUserData?.gender}`
              : 'Data not updated yet!'}
          </p>
        </article>
      </div>
    </>
  );
};

export default Edit;
