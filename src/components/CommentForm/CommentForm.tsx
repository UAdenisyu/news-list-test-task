
import { useForm, Controller } from "react-hook-form";
import { FormDataType, CommentType, FormSchema } from "../../schemas/comment";
import { zodResolver } from "@hookform/resolvers/zod"


const CommentForm = () => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormDataType>({
	resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormDataType): CommentType => {
	reset();
	const result = {
		...data,
		time: new Date(), 
	};
	console.log(result);
	return result;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-md mx-auto mb-10 bg-slate-300">
		<div className="mb-4">
			<label htmlFor="by" className="block text-gray-600">By:</label>
			<Controller
				name="by"
				defaultValue=""
				control={control}
				render={({ field }) => <input {...field} type="text" className={(errors.by?.message ? "border-2 border-rose-600 " : "") + "rounded w-full p-2"} />}
			/>
			{errors.by && <p className={"text-sm font-normal text-rose-500"}>{errors.by.message}</p>}
		</div>

		<div className="mb-4">
			<label htmlFor="parent" className="block text-gray-600">Parent:</label>
			<Controller
				name="parent"
				defaultValue=""
				control={control}
				render={({ field }) => <input {...field} type="number" className={(errors.parent?.message ? "border-2 border-rose-600 " : "") + "rounded w-full p-2"} />}
			/>
			{errors.parent && <p className={"text-sm font-normal text-rose-500"}>{errors.parent.message}</p>}
		</div>

		<div className="mb-4">
			<label htmlFor="text" className="block text-gray-600">Text:</label>
			<Controller
				name="text"
				defaultValue=""
				control={control}
				render={({ field }) => <input {...field} type="text" className={(errors.text?.message ? "border-2 border-rose-600 " : "") + "rounded w-full p-2"} />}
			/>
			{errors.text && <p className={"text-sm font-normal text-rose-500"}>{errors.text.message}</p>}
		</div>

		<div className="mb-4">
			<label htmlFor="type" className="block text-gray-600">Type:</label>
			<Controller
				name="type"
				defaultValue=""
				control={control}
				render={({ field }) => <input {...field} type="text" className={(errors.type?.message ? "border-2 border-rose-600 " : "") + "rounded w-full p-2"} />}
			/>
			{errors.type && <p className={"text-sm font-normal text-rose-500"}>{errors.type.message}</p>}
		</div>

		<div className="text-center">
			<button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 text-center">Submit</button> 
		</div>
    </form>
  );
};

export { CommentForm };
