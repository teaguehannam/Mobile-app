import React, { useState } from 'react';

const Email = () => {

	const [message, setMessage] = useState({ email:"", subject:"", message:"" });

	const handleEmail = (event) => setMessage({ email:event.target.value, subject: message.subject,  message:message.message });
	const handleSubject = (event) => setMessage({ email:message.email, subject: event.target.value,  message:message.message });
	const handleMessage = (event) => setMessage({ email:message.email,  subject: message.subject, message: event.target.value });
	
	const handleSubmit = (event) => {
		event.preventDefault();
		alert("Message not recieved :P")
	};

	return (
		<div className="EmailContainer">

			<div className="Title">
				<h2>Message me</h2>
			</div>

			<div className="UserInfo">
				<p>Email</p>
				<input type="text" onChange={handleEmail} />
				<p>Subject</p>
				<input type="text" onChange={handleSubject} />
			</div>

			<div className="MessageContainer">
				<p>Message:</p>
				<textarea type="text" className="MessageContainer" onChange={handleMessage} />
			</div>

			<div className="SubmitButton">
				<input type="submit" onClick={handleSubmit} />
			</div>

		</div>
	)
}

export default Email;