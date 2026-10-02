import React, { useState } from 'react'
import { Button, Form as BootstrapForm } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import taskarray from "./TaskArray";
import { Link, useNavigate, redirect, Form } from "react-router";



/** @param {{ request: Request }} request  = This sends an request near the server*/

export async function loader({ request }){
     
    const url = new URL(request.url);

    const id = Number.parseInt(url.searchParams.get('id'));

    taskarray.splice(id,1);
    
    return redirect("/")


}

