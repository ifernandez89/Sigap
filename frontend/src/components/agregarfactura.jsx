import { Link } from "react-router-dom"
import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button, Box, Image, Heading
} from '@chakra-ui/react'

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
    const [recfactpot, setRecfactpot] = useState("");
    const [ptapotconv, setPtapotconv] = useState("");
    const [ptapotreg, setPtapotreg] = useState("");
    const [fptapotconv, setFptapotconv] = useState("");
    const [fptapotreg, setFptapotreg] = useState("");
    const [fptapotconve, setFptapotconve] = useState("");
    const [fptapotregi, setFptapotregi] = useState("");
    const [t4potconv, setT4potconv] = useState("");

    function SetNfact(e) {
        setNfact(e.target.value);
    }
    function SetFecha(e) {
        setFecha(e.target.value);
    }
    function SetNexp(e) {
        setNexp(e.target.value);
    }
    function SetFolio(e) {
        setFolio(e.target.value);
    }
    function SetImpvenc(e) {
        setImpvenc(e.target.value);
    }
    function SetNis(e) {
        setNis(e.target.value);
    }
    function setCondfiscs(e) {
        setCondfisc(e.target.value);
    }
    function SetConsact(e) {
        setConsact(e.target.value);
    }
    function SetInfodes(e) {
        setInfodes(e.target.value);
    }
    function SetCosphi(e) {
        setCosphi(e.target.value);
    }
    function SetFactorpot(e) {
        setFactorpot(e.target.value);
    }
    function SetRecfactpot(e) {
        setRecfactpot(e.target.value);
    }
    function SetPtapotconv(e) {
        setPtapotconv(e.target.value);
    }
    function SetPtapotreg(e) {
        setPtapotreg(e.target.value);
    }
    function SetFptapotconv(e) {
        setFptapotconv(e.target.value);
    }
    function SetFptapotreg(e) {
        setFptapotreg(e.target.value);
    }
    function SetFptapotconve(e) {
        setFptapotconve(e.target.value);
    }
    function SetFptapotregi(e) {
        setFptapotregi(e.target.value);
    }
    function SetT4potconv(e) {
        setT4potconv(e.target.value);
    }

    function aceptar(e) {
        e.preventDefault();
        if (nfact != null) {
            fetch('http://127.0.0.1:8000/api/AgregarFactura', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    fecha: fecha,
                    nfact: nfact,
                    nexp: nexp,
                    folio: folio,
                    importepvenc: importepvenc,
                    nisnu: nisnu,
                    nomsec: "",
                    zona: "",
                    tarifa: "",
                    condfisciva: condfisciva,
                    consactual: consactual,
                    infodes: infodes,
                    cosphi: cosphi,
                    factorpot: factorpot,
                    recfactpot: recfactpot,
                    ptapotconv: ptapotconv,
                    ptapotreg: ptapotreg,
                    fptapotconv: fptapotconv,
                    fptapotreg: fptapotreg,
                    fptapotconve: fptapotconve,
                    fptapotregi: fptapotregi,
                    t4potconv: t4potconv
                })
            }).then(() => {
                setFecha('');
                setNfact('');
                setNexp('');
                setFolio('');
                setImpvenc('');
                setNis('');
                setCondfisc('');
                setConsact('');
                setInfodes('');
                setCosphi('');
                setFactorpot('');
                setRecfactpot('');
                setPtapotconv('');
                setPtapotreg('');
                setFptapotconv('');
                setFptapotreg('');
                setFptapotconve('');
                setFptapotregi('');
                setT4potconv('');
                window.location.reload();
            }).catch(error => {
                console.error('Error en la solicitud:', error.message);
                alert('Factura existente');
            });
        }
    }
    return (
        <>
            <div className="">
                <Heading lineHeight='tall'>

                    Agregar factura:

                </Heading>
                <form className="">
                    <label className='Labels'>Nº Factura:</label><span className="espacio"></span>
                    <input className='textbox' type="text" onChange={SetNfact} value={nfact} />
                    <br /><br />
                    <label className='Labels'>Fecha:</label> <span className="espacio"></span>
                    <input className='textbox' type="text" onChange={SetFecha} value={fecha} />
                    <br /><br />
                    <label className='Labels'>Nº Expediente:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={SetNexp} value={nexp} />
                    <br /><br />
                    <label className='Labels'>Nº Folio:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={SetFolio} value={folio} />
                    <br /><br />
                    <label className='Labels'>Importe:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={SetImpvenc} value={importepvenc} />
                    <br /><br />
                    <label className='Labels'>Nis:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={SetNis} value={nisnu} />
                    <br /><br />
                    <label className='Labels'>Condic.Fiscal:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={setCondfisc} value={condfisciva} />
                    <br /><br />
                    <label className='Labels'>Consumo Actual:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={setConsact} value={consactual} />
                    <br /><br />
                    <label className='Labels'>Info.Designada:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={setInfodes} value={infodes} />
                    <br /><br />
                    <label className='Labels'>Coseno Phi:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={setCosphi} value={cosphi} />
                    <br /><br />
                    <label className='Labels'>Factor de Pot.:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={setFactorpot} value={factorpot} />
                    <br /><br />
                    <label className='Labels'>Recargo Factor Pot.:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={setRecfactpot} value={recfactpot} />
                    <br /><br />
                    <label className='Labels'>Punta de Pot. conve:</label><span className="espacio"></span>
                    <input className='textbox' type="" onChange={setPtapotconv} value={ptapotconv} />
                    <br /><br />
                    <button className='textbox' onClick={aceptar}><Link className="" to={'/'}> aceptar</Link> </button><span className=""></span>
                    <button className='textbox' ><Link className="" to={'/'}> cancelar</Link></button>
                </form>
            </div>
        </>
    );
}
