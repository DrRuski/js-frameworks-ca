import { useForm } from "react-hook-form";

export default function ContactForm() {
  const inputStyle = `h-full p-3 text-text bg-background border-b border-primary hover:border-primary outline-none focus:border-primary`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (value) => alert(JSON.stringify(value, null, 2));
  return (
    <form
      className="flex flex-col gap-4 md:gap-6 text-text w-full md:w-2/4 m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={inputStyle}
        placeholder="Full Name"
        {...register("fullName", { required: true, minLength: 3 })}
        type="text"
      />
      <input
        className={inputStyle}
        placeholder="Subject"
        {...register("subject", { required: true, minLength: 3 })}
        type="text"
      />
      <input
        className={inputStyle}
        placeholder="Email"
        type="text"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      />
      {errors.email && <span className="text-text text-">Invalid Email</span>}
      <textarea
        className={inputStyle}
        placeholder="What is it we can help you with?..."
        {...register("queryContent", { required: true, minLength: 3 })}
        rows={3}
      ></textarea>
      <input type="submit" />
    </form>
  );
}
