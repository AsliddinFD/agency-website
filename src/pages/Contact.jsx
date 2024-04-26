import Layout from "./Layout";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbxpMWxxci7NmukS8pZhVVO7ANGoeQSl_-2k5_lZoVUXF0-1_xmQd_CuIUsWiJr_yyPs/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((data) => {
        toast.success(
          "We have recieved your message and will contact you soon!"
        );
        setName("");
        setPhone("");
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  return (
    <Layout>
      <ToastContainer />
      <div className="contact-container">
        <div className="contact-title">
          <div className="phone">
            <h1>Contacts</h1>
            <h4>+998 914109064</h4>
            <h4>+998 900047378</h4>
            <p>10:00-18:00(Mon-Fri)</p>
          </div>
          <br />
          <br />
          <div className="email">
            <h1>Email</h1>
            <h4>contact@dreamtour.uz</h4>
          </div>
          <br />
          <br />
          <div className="address">
            <h1>Address</h1>
            <h4>123 Example Street San Francisco, CA 12345</h4>
          </div>
        </div>
        <Divider orientation="vertical" flexItem></Divider>
        <div className="contact-form">
          <form className="form" onSubmit={(e) => Submit(e)}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Phone number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Send an application</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
