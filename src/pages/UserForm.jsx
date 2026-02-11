import { useState } from "react"
import { useForm } from "react-hook-form"

export default function UserForm() {

  const [stepName, setStepName] = useState("personal")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({})
  const onSubmit = (data) => console.log(data)


  console.log(watch("example"))

  return (
    <div className="p-4">
      <div className="w-fit my-8">
        <span className={`${stepName == "personal" ? "border-2" : ""} py-2 px-4 rounded-md cursor-pointer `} onClick={() => setStepName("personal")}>Personal</span>
        <span className={`${stepName == "education" ? "border-2" : ""} py-2 px-4 rounded-md cursor-pointer`} onClick={() => setStepName("education")}>Educational</span>
        <span className={`${stepName == "experience" ? "border-2" : ""} py-2 px-4 rounded-md cursor-pointer`} onClick={() => setStepName("experience")}>Experience</span>
      </div>
      <h1>Personal Details</h1>
      <form
        className="text-black grid max-w-4xl mx-auto  items-center justify-between"
        onSubmit={handleSubmit(onSubmit)}>

        {stepName == "personal" && <>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </label>
              <input id="firstName"
                className="border-2 rounded-md p-2"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span>First Name is required</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="middleName">Middle Name</label>
              <input
                className="border-2 rounded-md p-2"
                id="middleName" {...register("middleName")} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input id="lastName"
                className="border-2 rounded-md p-2"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <span>last Name is required</span>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input id="email"
                className="border-2 rounded-md p-2"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Email is required</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">
                Phone no <span className="text-red-500">*</span>
              </label>
              <input id="phone"
                type="number"
                maxLength={10}
                className="border-2 rounded-md p-2"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>phone no is required</span>}
            </div>
          </div>

          <div className="grid-cols-1 grid ">
            <div className="flex flex-col">
              <label htmlFor="phone">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea id="address"
                rows={4}
                className="border-2 rounded-md p-2"
                {...register("address", { required: true })}
              />
              {errors.address && <span>address is required</span>}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label htmlFor="pincode">
                Pin Code <span className="text-red-500">*</span>
              </label>
              <input id="pincode"
                className="border-2 rounded-md p-2"
                {...register("pincode", { required: true })}
              />
              {errors.pincode && <span>First Name is required</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="country">country</label>
              <input
                className="border-2 rounded-md p-2"
                id="country" {...register("country")} />
              {errors.country && <span>country is required</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="state">
                State<span className="text-red-500">*</span>
              </label>
              <input id="state"
                className="border-2 rounded-md p-2"
                {...register("state", { required: true })}
              />
              {errors.state && <span>state is required</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="city">
                city <span className="text-red-500">*</span>
              </label>
              <input id="city"
                className="border-2 rounded-md p-2"
                {...register("city", { required: true })}
              />
              {errors.city && <span>city is required</span>}
            </div>
          </div>
          <button className="cursor-pointer" onClick={() => setStepName("education")}>Next</button>
        </>}
        {stepName == "education" && <>
          <div className="grid">
            <div className="flex flex-col">
              <label htmlFor="pincode">
                College Name <span className="text-red-500">*</span>
              </label>
              <input id="collegeName"
                className="border-2 rounded-md p-2"
                {...register("collegeName", { required: true })}
              />
              {errors.collegeName && <span>college Name is required</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="pyear">passing Year</label>
              <input
                className="border-2 rounded-md p-2"
                id="pyear" {...register("pyear")} />
              {errors.pyear && <span>Passing Year is required</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="cgpa">
                cgpa<span className="text-red-500">*</span>
              </label>
              <input id="cgpa"
                className="border-2 rounded-md p-2"
                {...register("cgpa", { required: true })}
              />
              {errors.cgpa && <span>cgpa is required</span>}
            </div>

          </div>
          <button onClick={() => setStepName("experience")}>Next</button>
          <button onClick={() => setStepName("personal")}>Back</button>
        </>
        }
        {stepName == "experience" && <>
          <div className="grid">
            <div className="flex flex-col">
              <label htmlFor="pincode">
                College Name <span className="text-red-500">*</span>
              </label>
              <input id="experience"
                type="number"
                className="border-2 rounded-md p-2"
                {...register("collegeName")}
              />

            </div>

            <div className="flex flex-col">
              <label htmlFor="comName">Company Name</label>
              <input
                className="border-2 rounded-md p-2"
                id="comName" {...register("comName")} />
            </div>
          </div>
          <button onClick={() => setStepName("education")}>Back</button>
          <input type="submit" />
        </>
        }

      </form>
    </div>
  )
}