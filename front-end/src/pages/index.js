import ConsultForm from "@/components/ConsultForm";
import axios from "axios"
import { useEffect, useState } from "react";

export default function Home() {
const [data, setdata] = useState()
  const getData = () => {
      axios.get('http://localhost:4000/pais/colombi').then((response) => {
        setdata(response.data);
        console.log('response.data', response.data)
      });
  }

  useEffect(() => {
   getData()
  }, [])
  

  return (
   <div className="container py-5">
    <ConsultForm/>
   </div>
  )
}
