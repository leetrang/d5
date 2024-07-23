import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function ComputerView({ dbs }) {
    let [db, setDB] = useState(dbs);
    let navigate = useNavigate();

    let [sname, setName] = useState("");

    const but = {
        marginLeft: "10px"
    }
    const left = {
        textAlign: "left"
    }
    const right = {
        textAlign: "right"
    }


    const fnRemove = (computerID) => {
        if (window.confirm("are u sure ?")) {
            let index = dbs.map(x => x.id).indexOf(computerID);
            dbs.splice(index, 1);

            setDB(db.filter(x => x.id !== computerID));
        }
    }

    const fnSearch = (ev) => {
        setDB(dbs.filter(x => x.name.includes(sname)));
    }

    return (
        <div>
            <h3>
                List of Computers
            </h3>

            <p>
                <input onChange={(ev) => setName(ev.target.value)} />
                <button className="btn btn-warning" onClick={fnSearch} type="button">Search</button>
            </p>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>co.</th>
                        <th>price</th>
                        <th>action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        db.map(x =>
                            <tr>
                                <td>{x.id}</td>
                                <td style={left}>{x.name}</td>
                                <td style={left}>{x.co}</td>
                                <td style={right}>{x.price}</td>
                                <td>
                                    <button className="btn btn-info"
                                        onClick={(e) => navigate(`/computer-edit/${x.id}`)}
                                    >edit</button>

                                    <button className="btn btn-danger" style={but}
                                        onClick={(ev) => fnRemove(x.id)}
                                    >delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}