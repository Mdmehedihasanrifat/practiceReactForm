import { Form, useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalFrom = () => {

    const {register,handleSubmit}=useForm();
    const onSubmit=(data)=>{

        console.log(data);
    }
    const double=true;
 return (
<div>
  <form onSubmit={handleSubmit(onSubmit)} className={cn("border border-red-500 p-5",{
    "max-w-5x":double,
    "max-w-md":!double
    
  })}>
    <div className={cn("grid grid-cols-1 gap-2 mx-auto",{
        "md:grid-cols-2":double,
      
    })}>
      <div className="w-full max-w-md">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input type="text" className="w-full" id="name" {...register("name")} />
      </div>
      <div className="w-full  max-w-md">
        <label htmlFor="Email" className="block">
          Email:
        </label>
        <input type="text" className="w-full" id="Email" {...register("email")} />
      </div>
      <div className="w-full  max-w-md">
        <label htmlFor="password" className="block">
          Password:
        </label>
        <input type="password" className="w-full" id="password" {...register("password")} />
      </div>
    </div>
    {/* Additional form elements and submit button */}
  </form>
</div>

 )
};

export default NormalFrom;