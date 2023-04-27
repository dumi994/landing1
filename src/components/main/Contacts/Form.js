/* import React, { useState } from "react";
import styles from "./Contacts.module.css"
import axios from "axios";
import PillButton from "../../buttons/PillButton"
import classes from "../../buttons/PillButton.module.css"

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://www.googleapis.com/gmail/v1/users/me/messages/send", {
      email: email,
      message: message,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6 col-sm-12">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form; */

/* 
https://accounts.google.com/o/oauth2/auth?client_id=338664468956-sg0b22ep4ljgc5hnp4kf68qk7qcu3eks.apps.googleusercontent.com&redirect_uri=http://localhost&response_type=code&scope=https://www.googleapis.com/auth/drive&access_type=offline


curl --request POST --data "code=4/0AVHEtk55gWo5VYdAGTLaMw9z_u71mtnjXM4jQFOlAA-DIt_1CgImhlpDl6IcxWr1tLYH6w&client_id=595439602550-1kkp8oj1pi2kk70jc03s3i9ndjcjgjd8.apps.googleusercontent.com&client_secret=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&redirect_uri=http://localhost&grant_type=authorization_code" https://oauth2.googleapis.com/token

http://localhost/?code=4/0AVHEtk55gWo5VYdAGTLaMw9z_u71mtnjXM4jQFOlAA-DIt_1CgImhlpDl6IcxWr1tLYH6w&scope=https://www.googleapis.com/auth/drive
*/
import React, { useState } from "react";
import styles from "./Contacts.module.css"
import axios from "axios";
import PillButton from "../../buttons/PillButton"
import classes from "../../buttons/PillButton.module.css"
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const accessToken = 'AIzaSyBl1mt7IOKOD2mmEKywZs5FmfwOR9UJboQ';

    const url = 'https://www.googleapis.com/gmail/v1/users/me/messages/send';

    const messageBody = `From: ${name} <${email}>
    To: dumi.9944@gmail.com
    Subject: Contact Form Submission
    Content-Type: text/html; charset=utf-8
     ${message}
    `;
    const encodedMessage = window.btoa(messageBody);

    const messageData = {
      raw: encodedMessage
    }
    const requestData ={
      message: messageData
    }
    console.log(messageBody);


    axios({
      method: 'post',
      url: url,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      data: requestData,
    })
    .then((response) => {
      console.log(response);
      alert('Email sent successfully');
    })
    .catch((error) => {
      console.error(error);
      alert('There was an error sending your email. Please try again later.');
    });

  };
  return (
    <>
  <form className={`${styles.infoForm} col-md-12 col-lg-6  col-sm-12 px-5`}>
        <div className="row">
            <div className="col-md-6 col-sm-12  my-4">
            <input type="text" className="form-control" placeholder="Nome"/>
            </div>
            <div className="col-md-6 col-sm-12  my-4">
            <input type="text" className="form-control" placeholder="Cognome"/>
            </div>
        </div>
        <div className="row my-4">
            <div className="col-md-12  col-sm-12">
            <input type="email" className="form-control" placeholder="Email"/>
            </div>
        </div>
        <div className="row my-4">
            <div>
            <textarea name="comment" className="form-control" form="usrform" placeholder="Messaggio"></textarea>
            </div>
        </div>
        <PillButton type="submit" className={classes.hbutton}>Send</PillButton>
    </form> 
    {/* <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form> */}
    </>
  )
}

export default Form
/* (studiolegale-pfa.netsons.org) */

 /* <form className={`${styles.infoForm} col-md-12 col-lg-6  `}>
        <div className="row">
            <div className="col-md-6 col-sm-12  my-4">
            <input type="text" className="form-control" placeholder="Nome"/>
            </div>
            <div className="col-md-6 col-sm-12  my-4">
            <input type="text" className="form-control" placeholder="Cognome"/>
            </div>
        </div>
        <div className="row my-4">
            <div className="col-md-12  col-sm-12">
            <input type="email" className="form-control" placeholder="Email"/>
            </div>
        </div>
        <div className="row my-4">
            <div>
            <textarea name="comment" className="form-control" form="usrform" placeholder="Messaggio"></textarea>
            </div>
        </div>
        <PillButton type="submit" className={classes.hbutton}>Send</PillButton>
    </form> */