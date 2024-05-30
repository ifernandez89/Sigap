import {Link} from "react-router-dom"

export default function factura({ nfact, fecha, nexp, folio, nis, nomsec, tarifa, importe, consumo }) {
    return (
        <tr className="">
            <td>{nfact}<span className=""></span></td>
            <td>{fecha}<span className=""></span></td>
            <td>{nexp}<span className=""></span></td>
            <td>{folio}<span className=""></span></td>
            <td>{nis}<span className=""></span></td>
            <td>{nomsec}<span className=""></span></td>
            <td>{tarifa}<span className=""></span></td>
            <td>{importe}<span className=""></span></td>
            <td>{consumo}<span className=""></span></td>
            <td><button className="" type="button" > <Link className="" to={`/Facturas/Editar/${nfact}`}>Editar</Link></button></td>
            <td><button className="" type="button" onClick={Eliminar}>
                Eliminar
            </button></td>
        </tr>
    )
}


