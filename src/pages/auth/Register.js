import React from 'react'
import Layout from '../../layouts'

const Register = () => {
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
                <form>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fas fa-user"></i> </span>
                        </div>
                        <input name="name" className="form-control" placeholder="Full name" type="text" />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fas fa-envelope"></i> </span>
                        </div>
                        <input name="email" className="form-control" placeholder="Email address" type="email" />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fas fa-user"></i> </span>
                        </div>
                        <input name="username" className="form-control" placeholder="Username" type="text" />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fas fa-user"></i> </span>
                        </div>
                        <input name="password" className="form-control" placeholder="Password" type="text" />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fas fa-user"></i> </span>
                        </div>
                        <input name="repassword" className="form-control" placeholder="Repeat Password" type="text" />
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
