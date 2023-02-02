/*eslint-disable*/
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos, showLoading } from '../store/action';
import Loading from './Loading';
import './style/main.css';

const Card = ({ data, owner }) => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos);
    const loading = useSelector(state => state.loading);

    const handleFetchRepo = ({e, data}) => {
        e.preventDefault();
        dispatch(fetchRepos(data.login));
    };

    return (
        <div className="card mt-4">
            <img className="card-img-top rounded-circle mt-2" src={data.avatar_url} style={{ width: "40%", margin: "auto" }} alt="Card cap" />
            <div className='card-body'>
                <p className='text-center mt-2 badge text-bg-info  badge-url p-2 w-100' style={{ fontSize: "10px" }}>{data.html_url}</p>
            </div>
            {/* <div className='row justify-content-center row-info'>
                <div className='col-4 d-flex justify-content-evenly'>
                    <p className='text-center mt-2 badge text-bg-secondary ms-2 mx-2 p-2 badge-info'>Following</p>
                </div>
                <div className='col-4 d-flex justify-content-evenly'>
                    <p className='text-center mt-2 badge text-bg-secondary ms-2 mx-2 p-2 badge-info'>Repo</p>
                </div>
                <div className='col-4 d-flex justify-content-evenly'>
                    <p className='text-center mt-2 badge text-bg-secondary ms-2 mx-2 p-2 badge-info'>Followers</p>
                </div>
            </div>
            <div className='row info-card'>
                <div className='col-4 d-flex justify-content-evenly'>
                    <p className='text-center'>21</p>
                </div>
                <div className='col-4 d-flex justify-content-evenly'>
                    <p className='text-center'>12</p>
                </div>
                <div className='col-4 d-flex justify-content-evenly'>
                    <p className='text-center'>1</p>
                </div>
            </div> */}
            <div className="card-body d-flex justify-content-center">
                <button onClick={(e)=>handleFetchRepo({e, data})} className="btn btn-outline-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${data.id}`} >
                    {data.login}
                </button>
            </div>
            <div className="collapse" id={`collapse${data.id}`}>
                {repos?.map((e, idx) => {
                    if(e.owner?.login === data.login) {
                        return (
                            <div key={idx} className="card mb-2 mx-1" onClick={()=> window.open(e.html_url, "_blank")}>
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title" style={{ fontSize: "14px" }}>{e.name}</h5>
                                        <div>
                                            <i className="fa-solid fa-star me-1"></i>
                                            {e.stargazers_count}
                                        </div>
                                    </div>
                                    <h6 className="card-subtitle mb-2 text-muted mt-2" style={{ fontSize: "12px" }}>{e.description}</h6>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Card