import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [submitSuc, setSubmitSuc] = useState(false);
  const inputStyle = `h-full p-3 text-text bg-background border-b border-primary hover:border-primary outline-none focus:border-primary`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setSubmitSuc(true);
    reset();
    alert(JSON.stringify(data, null, 2));
    setTimeout(() => {
      setSubmitSuc(false);
    }, 3000);
  };
  return (
    <form
      className="flex flex-col gap-4 md:gap-7 text-text w-full md:w-2/4 m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <input
          className={inputStyle}
          placeholder="Full Name"
          {...register("fullName", {
            required: "This field is required.",
            minLength: {
              value: 3,
              message: "Length of input should be 3 letters or more.",
            },
          })}
        />
        <p className="text-danger font-medium text-sm">
          {errors.fullName?.message}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <input
          className={inputStyle}
          placeholder="Subject"
          {...register("subject", {
            required: "This field is required.",
            minLength: {
              value: 3,
              message: "Length of input should be 3 letters or more.",
            },
          })}
        />
        <p className="text-danger font-medium text-sm">
          {errors.subject?.message}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <input
          className={inputStyle}
          placeholder="Email"
          {...register("email", {
            required: "This field is required.",
            pattern: {
              value: /^[\w\-.]+@(stud\.)?noroff\.no$/,
              message: "Email is invalid",
            },
          })}
        />
        <p className="text-danger font-medium text-sm">
          {errors.email?.message}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          className={inputStyle}
          placeholder="What is it we can help you with...?"
          {...register("queryContent", {
            required: "This field is required.",
            minLength: {
              value: 3,
              message: "Length of input should be 3 letters or more.",
            },
          })}
          rows={3}
        ></textarea>
        <p className="text-danger font-medium text-sm">
          {errors.queryContent?.message}
        </p>
      </div>
      {submitSuc ? (
        <input
          type="submit"
          value="Form Submitted 👍"
          className="rounded bg-success shadow shadow-secondary py-2 border border-success text-secondary text-lg font-semibold text-center"
        />
      ) : (
        <input
          type="submit"
          value="Submit Form"
          className="rounded bg-primary shadow shadow-secondary hover:bg-secondary py-2 border border-primary hover:border-primary hover:text-primary text-secondary text-lg font-semibold text-center"
        />
      )}
    </form>
  );
}
