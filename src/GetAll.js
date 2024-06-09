import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { REST_BASE_URL } from './constants';

function GetAll() {
  const [value, setvalue] = useState([]);

  const fetch = useCallback(() => {
    axios.get(REST_BASE_URL + '/get').then((e) => setvalue(e.data));
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      ResultEmails:
      <button type='button' onClick={fetch}>
        {' '}
        Refetch{' '}
      </button>
      {value.map((e) => (
        <p>{e}</p>
      ))}
    </>
  );
}

export default GetAll;
