import React, { useState } from "react";
import "./Settings.css";

const Settings: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>(
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
  );
  const [fullName, setFullName] = useState("Christine Brown");
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
          <label>Full name</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>

        <div className="field">
          <label>Email address</label>
          <div className="input-with-badge">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <span className="verified">Verified</span>
          </div>
        </div>

        <div className="field">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="field">
          <label>Phone number</label>
          <div className="input-with-badge">
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <span className="verified">Verified</span>
          </div>
        </div>

        <div className="field">
          <label>Bio</label>
          <textarea rows={4} value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>

        <button type="submit" className="submit-button">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Settings;
