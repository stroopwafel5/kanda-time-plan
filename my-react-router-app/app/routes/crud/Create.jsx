import React, { useState } from 'react'
import { Button, Form as BootstrapForm } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import taskarray from "./TaskArray";
import { Link, useNavigate, redirect, Form } from "react-router";

export default function Create() {

    
    const [taskName, setTaskName] = useState("");
    const [userName, setUserName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [type, setType] = useState("");


    //Lets you go to the last page
    let history = useNavigate();



return(
  <BootstrapForm 
   as={Form}
   method="post"
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
                >
   
  <h2> Create a new task! </h2>
   
 {/* Taskname
                */}

                <BootstrapForm.Group
                    className="mb-3"
                    controlId="formBasicTaskname"
                >
                    <BootstrapForm.Control
                        onChange={(e) =>
                            setTaskName(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Task Name"
                        name="taskName"
                        required
                    />
                </BootstrapForm.Group>


 {/* Username
                */}

      <BootstrapForm.Group
                    className="mb-3"
                    controlId="formBasicUsername"
                >
                    <BootstrapForm.Control
                        onChange={(e) =>
                            setUserName(e.target.value)
                        }
                        type="text"
                        placeholder="Enter User Name"
                        name="userName"
                        required
                    />
                </BootstrapForm.Group>


  {/* Task Deadline
                */}
      <BootstrapForm.Group
                    className="mb-3"
                    controlId="formBasicDeadline"
                >
                    <BootstrapForm.Control
                        onChange={(e) =>
                            setDeadline(e.target.value)
                        }
                        type="date"
                        placeholder="Enter Deadline"
                        name = "deadline"
                        required
                    />
                </BootstrapForm.Group>

 {/* Task Type
                */}

        <BootstrapForm.Group
            className="mb-3"
            controlId="formBasicType"
        >

            <BootstrapForm.Control name="type" type="hidden" value={type} />

            <BootstrapForm.Select
                value={type}
                onChange={(e) =>
                    setType(e.target.value)
                }
                required
            >
                <option value="Animation">Animation</option>

                <option value="Voice Acting">Voice Acting</option>

                <option value="Concept Art">Concept Art</option>

                <option value="Background Art">Background Art</option>

                <option value="Writing">Writing</option>

            </BootstrapForm.Select>


        </BootstrapForm.Group>


            <BootstrapForm.Control
                    variant="success"
                    type="submit"
                    value="Submit"
               />


    {/* Redirecting back to home page */}

                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Go Back
                    </Button>
                </Link>

</BootstrapForm>
)}


/** @param {{ request: Request }} request  = This sends an request near the server*/
export async function action({ request }){

    const formData = await request.formData()
    
    taskarray.push({id: formData.id ,
         taskName: formData.get('taskName'), 
         userName : formData.get('userName'), 
         deadline: formData.get('deadline'),
         type: formData.get('type'), });

   console.log(`${formData.get('taskName')},
    ${formData.get('userName')}`);

    return redirect("/")

}