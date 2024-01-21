import React, { useState } from 'react';

const CreateGroup = () => {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [framework, setFramework] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ title, language, framework, difficulty });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px'}}><strong>Create Project Group</strong></h2>
        <label style={{ display: 'block', marginBottom: '30px' }}>
          Project Title:
          <input
            placeholder="Enter project title..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '5px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '30px' }}>
          Programming Language:
          <input
            placeholder="Enter programming language..."
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ width: '100%', padding: '5px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '30px' }}>
          Framework:
          <input
            placeholder="Enter framework..."
            type="text"
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            style={{ width: '100%', padding: '5px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Difficulty:
          <input
            placeholder="Enter difficulty..."
            type="text"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ width: '100%', padding: '5px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
        </label>
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;