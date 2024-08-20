import { useForm } from "../hooks/useForm"

interface FormData {
  email: string
  name: string
  age: string
}

export const Form = () => {

  const { formular, HandleChange } = useForm<FormData>({
    email: '',
    name: '',
    age: '',
  })

  const {email, name, age} = formular

  return (
    <form autoComplete="off">

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={email}
          onChange={HandleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="email"
          name="name"
          className="form-control"
          value={name}
          onChange={HandleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="number"
          name="age"
          className="form-control"
          value={age}
          onChange={HandleChange}
        />
      </div>


      <pre>{JSON.stringify(formular)}</pre>

    </form>
  )
}
