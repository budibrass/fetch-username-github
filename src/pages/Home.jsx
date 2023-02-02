import React, { useEffect, useState } from 'react';
import { Card } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/action';
import './css/main.css';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [userName, setUserName] = useState('');
  const [payload, setPayload] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayload(userName)
  };

  useEffect(() => {
    dispatch(fetchUsers(payload));
  }, [dispatch, payload])

  return (
    <div className='container'>
      <h1 className='title text-center'>Input Username Github</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Input Username Github and Press Enter" 
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* <div className="input-group-btn">
          </div> */}
        </div>
      </form>

      <hr className='hr mt-5' />

      <div className="row">
          {users.items?.map((e, idx) => {
            return (
              <div className="col-lg-3 col-md-6 col-xs-1" key={idx}>
                <Card data={e} owner={e.login}/>
              </div>
            )
          })}
          {users.items?.length === 0 ?
            <div className='d-flex justify-content-center' >
              <img src="../assets/search2.svg" style={{ width: "50%"}} className="img-fluid mt-5" alt="..."></img>
            </div>
            : null
          }
      </div>
    </div>
  )
}

export default Home