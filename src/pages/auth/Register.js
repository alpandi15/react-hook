import React from 'react'
import Layout from '../../layouts'
import Input from '../../components/form/Input'

const Register = () => {
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ])
  const [data, setData] = React.useState({})

  const handleChange = (name, value) => {
    setData(prev => (
      {...prev, [name]: value}
    ))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate()
      console.log(valid)
      if (!valid) {
        isValid = false
      }
    }

    if (!isValid) {
      return
    }

    console.log("Logged In");
  }

  console.log(inputRefs)

  return (
    <Layout>
      <div>
        <div className="card bg-light">
            <article className="card-body mx-auto mw-400">
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <p className="divider-text">
                    <span className="bg-light">OR</span>
                </p>
                <form onSubmit={onSubmit}>
                    <div className="form-group input-group">
                        <Input
                          ref={inputRefs.current[0]}
                          name="name"
                          className="form-control"
                          placeholder="Full name"
                          type="text"
                          onChange={handleChange}
                          validation="required|min:6|max:12"
                        />
                    </div>
                    <div className="form-group input-group">
                        <Input
                          ref={inputRefs.current[1]}
                          name="email"
                          className="form-control"
                          placeholder="E-Mail"
                          type="text"
                          onChange={handleChange}
                          validation="required|min:6|max:12"
                        />
                    </div>
                    <div className="form-group input-group">
                        <Input
                          ref={inputRefs.current[2]}
                          name="username"
                          className="form-control"
                          placeholder="Username"
                          type="text"
                          onChange={handleChange}
                        />
                    </div>
                    <div className="form-group input-group">
                        <Input
                          ref={inputRefs.current[3]}
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          onChange={handleChange}
                        />
                    </div>
                    <div className="form-group input-group">
                        <Input
                          ref={inputRefs.current[4]}
                          name="repassword"
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                    </div>
                    <p className="text-center">Have an account? <a href="">Log In</a> </p>
                </form>
            </article>
        </div>
      </div>
    </Layout>
  )
}

export default Register
