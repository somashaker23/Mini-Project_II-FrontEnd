import React,{ useState, useEffect } from "react";
import{ref,onValue, DataSnapshot, get} from "firebase/database"

import Pagination from 'rc-pagination';
// import datatableUsers from "./temp_jsondata";
import FirebaseRTcofig from "../config/index.js";

const db = FirebaseRTcofig;
let stud =[];



const LogArea = () => {
    const [records,setRecord] = useState([]);
    useEffect(() => {
        
        let dbRef = ref(db, 'records/');
        // As you are using a listener, declare it so it can be returned
        var listener = onValue(dbRef,(snapshot)=>{
        let firedata = [];
        snapshot.forEach(x =>{
        
            let data = x.val();
            firedata.push(data);
            
        });
                
        setRecord(firedata);
      });

    return () => listener() // <== the listener function, which the hook will automatically run when the component unmounts.

  }, []); 



    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(records.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize,studetails) => {
        // Normally you should get the data from the server

        const record10 = records.slice((current - 1) * pageSize, current * pageSize).filter(element=>element.IN===undefined).map(element=>element);   
        
        return record10;
    };

    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button><i className="fa fa-angle-double-left"></i></button>;
        }
        if (type === 'next') {
            return <button><i className="fa fa-angle-double-right"></i></button>;
        }
        return originalElement;
    }

    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                        <div className="card-body p-0">
                            
                            <div className="table-filter-info">
                                
                                <Pagination
                                    className="pagination-data"
                                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                    onChange={PaginationChange}
                                    total={records.length}
                                    current={current}
                                    pageSize={size}
                                    showSizeChanger={false}
                                    itemRender={PrevNextArrow}
                                    onShowSizeChange={PerPageChange}
                                />
                            </div>
                            <div className="table-responsive">
                                <table className="table table-text-small mb-0">
                                    <thead className="thead-primary table-sorting">
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Roll Number</th>
                                            <th>Mobile</th>
                                            <th>OUT Time</th>
                                            <th>IN Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {   
                                            
                                            getData(current, size).map((data, index) => {
                                            console.log(data.IN)
                                               return (
                                                    <tr key={data.ID}>
                                                        <td>{index+1}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.rollnumber}</td>
                                                        <td><a style={{color:'inherit'}} href={'tel:'+ data.mobile}>{data.mobile}</a></td>
                                                        <td>{data.OUT}</td>
                                                        <td>{data.IN}</td>
                                                    </tr>
                                                );
                                            }).reverse()
                                        }
                                    </tbody>
                                </table>
                            </div>
                          <div className="table-filter-info">
                                
                                <Pagination
                                    className="pagination-data"
                                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                    onChange={PaginationChange}
                                    total={records.length}
                                    current={current}
                                    pageSize={size}
                                    showSizeChanger={false}
                                    itemRender={PrevNextArrow}
                                    onShowSizeChange={PerPageChange}
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogArea;
// ReactDOM.render(<App />, document.getElementById("root"));