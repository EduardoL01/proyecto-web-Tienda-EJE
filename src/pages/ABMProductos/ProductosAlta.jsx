import { useState } from "react";
import { useForm } from "react-hook-form";
import AlertCustom from "../../components/AlertCustom";
import ButtonWithLoading from "../../components/Forms/ButtonWithLoading";
import FormGroup from "../../components/Forms/FormGroup";
import { createProduct} from "../../services/services";

function ProductosAlta() {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const [alert, setAlert] = useState({variant: "", text: ""})
    const [loading, setLoading] = useState(false)

    const onSubmit = async data => {
        try {
            setLoading(true)
            const document = await createProduct(data)
            console.log(document.id)
            if(document.id){
                setAlert({variant:"success", text:"se agrego correctamente el producto"})
                setLoading(false)
            }
            console.log(document)
            
        } catch (error) {
            setLoading(false)
            setAlert({variant:"danger", text:"Ocurrió un error"})
            console.log(error)
        }
    }

    return ( 
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <FormGroup label="Nombre" register={{...register("name", {required: true})}} />
                {errors.name && <div>El campo nombre es obligatorio</div>}
                <FormGroup label="Precio" register={{...register("price", {required: true})}} />
                {errors.price && <div>El campo precio es obligatorio</div>}
                <FormGroup label="Descripcion" register={{...register("description", {required: true})}} />
                {errors.price && <div>El campo descripción es obligatorio</div>}
                
                <form enctype='multipart/form-data' action='' method='post'>
                <input name='uploadedfile' type='file'></input>
                </form>
                
                <ButtonWithLoading variant="dark" loading={loading}>Guardar</ButtonWithLoading>
            </form>
            <AlertCustom {...alert} />
        </div>
     );
}

export default ProductosAlta;

/*
<form enctype='multipart/form-data' action='' method='post'>
            <input name='uploadedfile' type='file'></input>
            <input type='submit' value='Subir archivo'></input>
            </form>
*/