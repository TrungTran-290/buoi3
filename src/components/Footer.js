import React, { useState } from "react";
import { Button, Input } from "reactstrap";

function Footer(props) {
  const {setFlag,del} = props
  return (
    <>
    <div>
      <Input type="checkbox" onChange={()=>setFlag("Checkall")}/>
      <Button onClick={()=>(setFlag("Checked"))}>Checked</Button>
      <Button onClick={()=>(setFlag("UnChecked"))}>UnChecked</Button>
      <Button onClick={()=>(setFlag("Uncheckall"))}>Uncheckall</Button>
      <Button onClick={()=>(setFlag("del"))}>Delete</Button>
    </div>
      <div className="Bott">
        <h1 className="footer">
          © [name of rightsholder or rightsholders] [publication year]: e.g. ©
          XYZ Press and contributors 2024
        </h1>
      </div>
    </>
  );
}

export default Footer;
