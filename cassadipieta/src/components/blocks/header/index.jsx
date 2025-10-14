import "./header.css"

export default function Header() {
    return (<>
        <header className="p-3 text-bg-dark">
            <div className="container d-flex flex-row flex-wrap justify-content-between align-items-center">
                <div className="col-12 col-sm-4 col-md-4 col-lg-1 header-img d-flex justify-content-center">
                    <a href="/">
                        <img src="/img/cassadPieta.svg" alt="Cassad Pietà" className="col-12" />
                    </a>
                </div>

                <div className="col-12 col-sm-8 col-md-8 col-lg-7 d-flex flex-column flex-lg-row justify-content-end gap-2 gap-sm-4">
                    <div>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center justify-content-md-end mb-md-0">

                            <li>
                                <a href="/" className="nav-link px-2 text-secondary">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="/mostruario" className="nav-link px-2 text-white">
                                    Mostruario
                                </a>
                            </li>
                            <li>
                                <a href="/contato" className="nav-link px-2 text-white">
                                    Contato
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-2 text-white">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-2 text-white">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center text-sm-end">
                        <a href="/login">
                            <button type="button" className="btn btn-outline-light me-2">
                                Entrar
                            </button>
                        </a>
                        <a href="/cadastro">
                            <button type="button" className="btn btn-vermelho">
                                Cadastrar
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </>);
}