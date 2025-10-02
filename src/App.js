import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { db, collection, addDoc } from "./firebaseConfig";
import "./App.css";

function PrivacyPolicy() {
  return (
    <div className="container">
      <h2>Privacy Policy for ESNYCA</h2>
      <p><strong>Effective Date:</strong> 11 February 2025</p>
      <p><strong>Last Updated:</strong> 11 February 2025</p>
      <p>Welcome to ESNYCA. This Privacy Policy explains how we collect, use, and protect your personal and sensitive data when you use our app.</p>
      <p>BY:Lihawu Tech</p>

      <h3>1. Information We Collect</h3>
      <p>We collect and process the following types of personal and sensitive user data:
Our app collects and stores user data using Firebase, a secure backend service provided by Google. Firebase encrypts data in transit using industry-standard HTTPS (TLS encryption) to protect user information while it is being transmitted. Firebase also follows strict security and compliance standards to ensure data protection. 
1.1 Personal Information
Cellphone Number: Required for user authentication, communication, and service functionality.
Location Data: Used to provide location-based services within the app.
Email:Used to provide app feature like auntentication 
1.2 Device Information
Device type, operating system, and unique device identifiers (e.g., Android Advertising ID) may be collected to enhance app performance and user experience.
1.3 Automatically Collected Information
We may collect app usage data, crash reports, and diagnostic data to improve app stability and functionality.</p>

      <h3>2. How We Use Your Data</h3>
      <p>We collect and process user data for the following purposes:
To authenticate users and provide app features.
To enhance user experience based on location services.
To improve security and prevent fraud.
To comply with legal obligations when required.</p>

      <h3>3. Data Sharing & Third-Party Services</h3>
      <p>We do not sell your personal or sensitive data. However, we may share your data with:
Service providers who help operate and improve our app (e.g., cloud storage, analytics).
Legal authorities if required by law.
Third-party SDKs integrated into our app, ensuring compliance with Google Play policies.</p>

      <h3>4. Data Security</h3>
      <p>We implement industry-standard security measures, including:
Restricted access to user data.
Secure storage of personal and sensitive data.
Encryption (HTTPS) for data transmission.</p>

      <h3>5. Data Retention & Deletion</h3>
      <p>We retain your data only as long as necessary to fulfill the intended purposes or as required by law.
5.1 Account Deletion
Users can request account deletion via:
In-App Settings: Navigate to [Settings >Account> Delete Account].
Website Request: Visit [esnyca.pages.dev] and submit an account deletion request.
Upon account deletion:
All user data will be permanently erased from our servers.
Some data may be retained if required for legal, fraud prevention, or regulatory reasons.
6. Permissions & User Consent
We use runtime permissions to access sensitive data (e.g., location).
Users must grant explicit consent before data collection.
We provide in-app disclosure before requesting sensitive data.</p>



      <h3>6. Contact Information</h3>
      <p>📧 Email: <a href="mailto:ngwenyamzwandile5@gmail.com">ngwenyamzwandile5@gmail.com</a></p>
      <p>🌍 Website: <a href="https://esnyca.pages.dev" target="_blank" rel="noopener noreferrer">esnyca.pages.dev</a></p>
    </div>
  );
}

function RequestDeletion() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "account_deletion_requests"), {
        name,
        email,
        timestamp: new Date(),
      });
      setMessage("Your request has been submitted. You will receive a confirmation email.");
      setEmail("");
      setName("");
    } catch (error) {
      console.error("Error submitting request: ", error);
      setMessage("Error submitting your request. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Request Account Deletion</h2>
      <p>If you want to delete your account, please enter your details below.</p>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <button type="submit">Submit Request</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/request-deletion">Request Account Deletion</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PrivacyPolicy />} />
          <Route path="/request-deletion" element={<RequestDeletion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
