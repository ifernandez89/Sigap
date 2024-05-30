import {Link} from "react-router-dom"
import React,{useState} from 'react'

export default function AgregarFactura() {
    
    const [fecha, setFecha] = useState(null);
    const [nfact, setNfact] = useState(null);
    const [nexp, setNexp] = useState("");
    const [folio, setFolio] = useState("");
    const [importepvenc, setImpvenc] = useState("");
    const [nisnu, setNis] = useState(null);
    const [condfisciva, setCondfisc] = useState("");
    const [consactual, setConsact] = useState("");
    const [infodes, setInfodes] = useState("");
    const [cosphi, setCosphi] = useState("");
    const [factorpot, setFactorpot] = useState("");
    const [rectfactpot, setRecfactpot] = useState("");
    const [ptapotconv, setPtapotconv] = useState("");
    const [ptapotreg, setPtapotreg] = useState("");
    const [fptapotconv, setFptapotconv] = useState("");
    const [fptapotreg, setFptapotreg] = useState("");
    const [fptapotconve, setFptapotconve] = useState("");
    const [fptapotregi, setFptapotregi] = useState("");
    const [t4potconv, setT4potconv] = useState("");
    const [consalerta, setConsalerta] = useState("");

    function SetNfact(e){
        setNfact(e.target.value);
    }
    function SetFecha(e){
        setFecha(e.target.value);
    }
    function SetNexp(e){
        setNexp(e.target.value);
    }
    function SetFolio(e){
        setFolio(e.target.value);
    }
    function SetImpvenc(e){
        setImpvenc(e.target.value);
    }
    function SetNis(e){
        setNis(e.target.value);
    }
    function setCondfiscs(e){
        setCondfisc(e.target.value);
    }
    function SetConsact(e){
        setConsact(e.target.value);
    }
    function SetInfodes(e){
        setInfodes(e.target.value);
    }
    function SetCosphi(e){
        setCosphi(e.target.value);
    }
    function SetFactorpot(e){
        setFactorpot(e.target.value);
    }
    function SetRecfactpot(e){
        setRecfactpot(e.target.value);
    }
    function SetPtapotconv(e){
        setPtapotconv(e.target.value);
    }
    function SetPtapotreg(e){
        setPtapotreg(e.target.value);
    }
    function SetFptapotconv(e){
        setFptapotconv(e.target.value);
    }
    function SetFptapotreg(e){
        setFptapotreg(e.target.value);
    }
    function SetFptapotconve(e){
        setFptapotconve(e.target.value);
    }
    function SetFptapotregi(e){
        setFptapotregi(e.target.value);
    }
    function SetT4potconv(e){
        setT4potconv(e.target.value);
    }
    function SetConsalerta(e){
        setConsalerta(e.target.value);
    }
    
    function aceptar(e) {
        e.preventDefault();
            if (nfact != null) {
                fetch('http://127.0.0.1:8000/api/AgregarAlumno', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        Dni: dni,
                        Nombre: nombre,
                        Apellido: apellido
                    })
                }).then(() => {
                    setApellido('');
                    setNombre('');
                    setDni('');
                    window.location.reload();
                }).catch(error => {
                    console.error('Error en la solicitud:', error.message);
                    alert('Alumno ya existente');
                });
            }
    }
    return(

    )
}
