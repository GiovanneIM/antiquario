import './login.css'

import Image from 'next/image'

export default function Login() {
    return <>
        <div className="container m-0">
            <div className="corpo row">

                <div className='col-12 col-md-6 div_logo'>
                    <a
                        href={'/'}
                        className='col-8 col-md-8 col-lg-6'
                    >
                        <img src='/img/cassadPieta.svg' alt='Logo Cassa di Pieta' className='col-12'/>
                    </a>
                </div>

                <div className='col-12 col-md-6 div_login'>

                    <main className="form-signin w-100 m-auto">
                        <form>
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="form-check text-start my-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue="remember-me"
                                    id="checkDefault"
                                />
                                <label className="form-check-label" htmlFor="checkDefault">
                                    Remember me
                                </label>
                            </div>

                            <button className="btn btn-primary w-100 py-2" type="submit">
                                Sign in
                            </button>

                            <div className='legenda'>
                                <p className="text-body-secondary">Ainda não possui uma conta?</p>
                                <a className="text-body-secondary" href='/cadastro'>Cadastrar-se</a>
                            </div>
                        </form>
                    </main>


                </div>
            </div>
        </div>
    </>
}