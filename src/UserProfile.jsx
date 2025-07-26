function UserProfile() {
  const name = "Sejin Park";
  const bio = "I'm currently shifting my career path from art direction to software engineering.";
  const profileImage = "https://images.unsplash.com/photo-1728557006747-c2d6dacd1a04?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div style={{ width: '320px', margin: '20px auto', padding: '24px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <img src={profileImage} alt={`${name}'s profile`} style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover' }} />
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#888' }}>{bio}</p>
    </div>
  );
}

export default UserProfile;