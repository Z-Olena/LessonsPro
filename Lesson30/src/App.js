import "./App.css"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  sname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const BasicCheckBox = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        wantGetUpdatesByEmail: false,
        checked: [],
      }}
      onSubmit={async (values) => {
        await sleep(500)
        console.log(JSON.stringify(values, null, 2))
      }}
    >
      {({ values }) => (
        <Form>
          <label>
            <Field type='checkbox' name='wantGetUpdatesByEmail' />
            {`${values.wantGetUpdatesByEmail}`}
          </label>

          <div id='checkbox-group'></div>
          <div role='group' aria-labelledby='checkbox-group'>
            <label>
              <Field type='checkbox' name='checked' value='One' />
              Не присылать письма
            </label>
          </div>

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

function FormWithValidation() {
  return (
    <Formik
      initialValues={{
        name: "",
        sname: "",
        email: "",
        description: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched, values }) => {
        console.log(values, errors, touched)
        return (
          <Form>
            <Field name='name' />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name='sname' />
            {errors.sname && touched.sname ? <div>{errors.sname}</div> : null}
            <Field name='email' type='email' />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name='description' type='description' />
            <button type='submit'>Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

function App() {
  return (
    <div className='App'>
      <FormWithValidation />
      <BasicCheckBox />
    </div>
  )
}

export default App
