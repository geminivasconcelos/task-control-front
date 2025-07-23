import React, { useState } from "react";
import "./Settings.css";
import Layout from "../components/Layout";
import user from "../assets/user.jpg";
const Settings: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>(user);
  const [name, setName] = useState("Christine");
  const [surname, setSurname] = useState("Brown");
  const [email, setEmail] = useState("christinebrown@gmail.com");
  const [username, setUsername] = useState("christinebrown");
  const [phone, setPhone] = useState("+1 945-913-2196");
  const [bio, setBio] = useState(
    "Senior blog writer at Hamill Group since 2017.\nI've also been lucky enough to work for the Parisian LLC."
  );

  const handleUploadNew = () => {
    alert("Upload de imagem ainda não implementado.");
  };

  const handleRemovePicture = () => {
    setProfilePicture("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <Layout>
      <div className="container">
        <nav className="nav-tabs">
          <button className="active-tab">Account Settings</button>
          <button className="inactive-tab">Login & Security</button>
          <button className="inactive-tab">Notification Settings</button>
          <button className="inactive-tab">Interface</button>
          <button className="inactive-tab">Additional Settings</button>
        </nav>

        <div className="profile-section">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" className="profile-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}

          <div className="buttons">
            <button onClick={handleUploadNew} className="upload-button">
              Upload New
            </button>
            <button onClick={handleRemovePicture} className="remove-button">
              Remove Profile Picture
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Surname</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Email address</label>
            <div className="input-with-badge">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="verified">Verified</span>
            </div>
          </div>

          <div className="field">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Update Profile
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
