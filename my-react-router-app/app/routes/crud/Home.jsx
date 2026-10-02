import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLoaderData
} from "react-router";
import './App.css'
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import taskarray from "./TaskArray";

export function loader() {
    return { taskarray }
}

function Home() {

    const [taskName, setTaskName] = useState("");
    const [userName, setUserName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [type, setType] = useState("");

    const { taskarray } = useLoaderData()


    // Function to delete an entry
    function deleted(id) {

        fetch(`/delete?id=${id}`).then(request => {
            if (request.ok) {
                location.reload();
                history("/");
            }
            else {
                alert("Ye kya hai behenchodd?");
            }
        });

    }


    return (


        <div id="results" style={{ margin: "2rem" }}>
            <ul>

                {taskarray.map((task, index) => (
                  
                    <li key={index}>

                    <div id ="shey">

                       <h3 class="big">{task.taskName}</h3>
                       <h4 class="small">Assigned To: {task.userName}</h4>
                       <h4 class="small"> {task.type}</h4>
                       <h4 class= "date">{task.deadline}</h4>

                            <Button
                             onClick={() => deleted(index)}
                             variant="danger">   
                    Delete Task
                </Button>

              <Link to={`/edit?id=${index}`}>
                <Button 
                             variant="info">   
                    Edit Task
                </Button>
                </Link>

                        </div>
                    </li>

                ))}

            </ul>

            <div className="d-grid gap-2 mt-4">
                <Link to="/create">
                    <Button variant="success" size="lg">
                        Add new task
                    </Button>
                </Link>

            
            </div>


        </div>

    )
}






export default Home;
