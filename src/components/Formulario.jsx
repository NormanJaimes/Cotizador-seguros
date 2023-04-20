import { Fragment } from "react"
import { MARCAS, YEARS,PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

export default function Formulario() {

 const {datos,  handleChangeDatos, error, setError, cotizaSeguro} = useCotizador();



 const handleSubmit = e =>{
  e.preventDefault();

   if (Object.values(datos).includes('')) {
    setError('Todos los campos son obligatorios')
    return
   }
   setError('')
   cotizaSeguro();
 }
  return (
    <>
    {error && <Error/>}
    <form action="" onSubmit={handleSubmit}>
     <div className="my-5">
      <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
      <select name="marca" id="" className="w-full p-3 bg-white border border-gray-200 " value={datos.marca} onChange={e => handleChangeDatos(e)}>
       <option value="">-- Selecciona Marca --</option>
       {MARCAS.map(marca => (
        <option value={marca.id} key={marca.id}>{marca.nombre}</option>
       ))}
      </select>
      
     </div>
     <div className="my-5">
      <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
      <select name="year" id="" className="w-full p-3 bg-white border border-gray-200 " value={datos.year} onChange={e => handleChangeDatos(e)}>
       <option value="">-- Selecciona Año --</option>
       {YEARS.map(year => (
        <option value={year} key={year}>{year}</option>
       ))}
      </select>
      
     </div>
     <div className="my-5">
      <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Eligen un Plan</label>
      <div className="flex gap-3 items-center">
       {PLANES.map(plan =>(
        <Fragment key={plan.id}>
         <label htmlFor={plan.id}>{plan.nombre}</label>
         <input type="radio" name="plan" id={plan.id} value={plan.id}  onChange={e => handleChangeDatos(e)} />
        </Fragment>
       ))}
      </div>
      
     </div>
     <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" name="" id="" value='Cotizar' />
    </form>
    </>
  )
}
