import { ClipLoader } from "react-spinners";

const override={
    display: 'block',
    margin: 'auto'
}

const Spinner = ({loading}:any) => {
  return (
    <ClipLoader
    color="#2e3192"
    loading={loading}
    cssOverride={override}
    size={150}
    /> 
      
   
  );
}

export default Spinner;
