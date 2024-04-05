import { useForm } from 'react-hook-form';
import VerificationInput from "react-verification-input";
import { submitVerificationCode } from './apiClient';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const { handleSubmit, setValue } = useForm();
  const [result,setResult] = useState()
  const navigate = useNavigate(); 

  useEffect(() => {
    if (result && result.message === 'success') {
      navigate('/success'); 
    }
  }, [result, navigate]);
 
  const onSubmit = (data) => {
    submitVerificationCode(data).then(data=>{
      setResult(data)
    });
  };

  const handleChange = (value) => {
    setValue('verificationCode', value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <span>Verification Code</span> 
        <div>
          <VerificationInput
            name="verificationCode" 
            onChange={handleChange}
            validChars="[0-9]*"
          />
        </div>
        <span>{result?.message}</span>
        <button type='submit' style={{ border: '1px solid #000', backgroundColor: '#800080', color: '#fff', padding: '10px 20px', borderRadius: '5px', marginTop: '20px' }}>Submit</button>
      </div>
    </form>
  );
};

export default Verification;
