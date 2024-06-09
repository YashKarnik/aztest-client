import { useState } from 'react';
import axios from 'axios';
import { REST_BASE_URL } from './constants';

function Insert() {
  const [value, setvalue] = useState('');

  const handleChange = (e) => setvalue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(REST_BASE_URL + '/insert', value);
  };

  const onFileChangeHandler = (e) => {
    e.preventDefault();
    // this.setState({
    //   selectedFile: e.target.files[0],
    // });
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    axios.post('http://localhost:8080/upload', formData).then((res) => {
      console.log(res.data);
      alert('File uploaded successfully.');
    });
  };

  return (
    <>
      <label>Insert TExt</label>
      <input type='text' onChange={handleChange} value={value} />
      <button type='submit' onClick={handleSubmit} disabled={value === ''}>
        Submit
      </button>

      <br />

      <label>Upload Your File: </label>
      <input
        type='file'
        className='form-control'
        name='file'
        onChange={onFileChangeHandler}
      />
    </>
  );
}

export default Insert;
