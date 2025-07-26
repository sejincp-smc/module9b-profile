function MoreProfile({ name, bio, profileImage }) {
  return (
    <div style={{ width: '200px', margin: '20px auto', padding: '24px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <img src={profileImage} alt={`${name}'s profile`} style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover' }} />
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#888' }}>{bio}</p>
    </div>
  );
}

export default MoreProfile;