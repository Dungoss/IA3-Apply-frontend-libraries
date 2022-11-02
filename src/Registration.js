
import { useForm } from "react-hook-form";

const RegistForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input type="text" placeholder="Email" name="email" {...register("email")} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input type="password" placeholder="Password" name='password' {...register("password")} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
}

export default RegistForm;