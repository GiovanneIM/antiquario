import "./contato.css"

export default function Home() {
    return (
        <>
            {/* /container */}
            <div className="container">
                <div className="conteiner">
                    <div className="colunas col-md-4 col-lg-12">
                        <h4 className="mb-3">Perguntas Frequentes</h4>
                    </div>
                </div>
                <div
                    className="conteiner-per mt-2">
                    <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                    >
                        <div className="accordion-item">
                            <h2 className="accordion-header border border-secondary">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                >
                                    Quem pode retirar o pedido na loja?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    A retirada só pode ser realizada pela pessoa que você indicou no
                                    ato da compra com a apresentação de um documento com foto. Caso
                                    uma outra pessoa tente fazer este procedimento, é necessário
                                    enviar um e-mail com autorização para credito@sportshop.com.br,
                                    com os seguintes dados: Nome completo (responsável para retirada),
                                    CPF e grau de parentesco.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                >
                                    Como funciona Retirada Loja?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    A retirada loja é uma maneira de você comprar online ou pelo nosso
                                    televendas e retirar o seu produto em alguma loja física da
                                    SportShop de sua preferência e mais perto de você. Sendo uma opção
                                    mais rápida e sem custos de frete.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header border border-secondary">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                >
                                    Em quais situações perdemos a garantia?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    Todos os produtos SportShop são destinados exclusivamente ao uso
                                    doméstico; o uso comercial pode resultar na perda da garantia.
                                    Evite o uso de adaptadores nos produtos. Se houver
                                    incompatibilidade com a tomada, recomendamos que busque a
                                    assistência de um eletricista profissional. Por favor, evite a
                                    utilização de transformador, pois o uso deste dispositivo pode
                                    acarretar riscos para sua segurança, bem como comprometer o
                                    funcionamento adequado do produto e a qualidade do mesmo.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main>
                    <div className="conteiner mt-5">
                        <div className="colunasContato col-md-4 col-lg-12">
                            <h4 className="mb-3">Entre em Contato</h4>
                            <form className="needs-validation" noValidate="">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        {" "}
                                        <label htmlFor="firstName" className="form-label">
                                            Nome
                                        </label>{" "}
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            placeholder=""
                                            defaultValue=""
                                            required=""
                                            style={{ border: "1px solid black" }}
                                        />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        {" "}
                                        <label htmlFor="lastName" className="form-label">
                                            Sobrenome
                                        </label>{" "}
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder=""
                                            defaultValue=""
                                            required=""
                                            style={{ border: "1px solid black" }}
                                        />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {" "}
                                        <label htmlFor="email" className="form-label">
                                            Email <span className="text-body-secondary">(Opcional)</span>
                                        </label>{" "}
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="você@exemplo.com"
                                            style={{ border: "1px solid black" }}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {" "}
                                        <label htmlFor="address" className="form-label">
                                            Endereço
                                        </label>{" "}
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="123 Rua."
                                            required=""
                                            style={{ border: "1px solid black" }}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {" "}
                                        <label htmlFor="address2" className="form-label">
                                            Endereço 2{" "}
                                            <span className="text-body-secondary">(Opcional)</span>
                                        </label>{" "}
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address2"
                                            placeholder="Apartamento n°"
                                            style={{ border: "1px solid black" }}
                                        />{" "}
                                    </div>
                                    <div className="col-md-5">
                                        {" "}
                                        <label htmlFor="country" className="form-label">
                                            Estado
                                        </label>{" "}
                                        <select
                                            className="form-select"
                                            id="state"
                                            required=""
                                            style={{ border: "1px solid black" }}
                                        >
                                            <option value="">Escolha...</option>
                                            <option>São Paulo</option>
                                            <option>Rio de Janeiro</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        {" "}
                                        <label htmlFor="state" className="form-label">
                                            Cidade
                                        </label>{" "}
                                        <select
                                            className="form-select"
                                            id="city"
                                            required=""
                                            style={{ border: "1px solid black" }}
                                        >
                                            <option value="">Escolha...</option>
                                            <option>São caetano do Sul</option>
                                            <option>Santo André</option>
                                            <option>São Bernardo do Campo</option>
                                            <option>Volta Redonda</option>
                                            <option>São Gonçalo</option>
                                            <option>Duque de Caixias</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                    <label
                                        htmlFor="comments"
                                        className="form-label"
                                        style={{ marginBottom: 0 }}
                                    >
                                        Cometários/Reclamações
                                    </label>
                                    <div className="input-group">
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            style={{ height: "15vh", border: "1px solid black" }}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="form-check">
                                    {" "}
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="same-address"
                                        style={{ border: "1px solid black" }}
                                    />{" "}
                                    <label className="form-check-label" htmlFor="same-address">
                                        Confirme se este ainda é seu endereço
                                    </label>
                                </div>
                                <div className="form-check">
                                    {" "}
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="save-info"
                                        style={{ border: "1px solid black" }}
                                    />{" "}
                                    <label className="form-check-label" htmlFor="save-info">
                                        Salve as informações para uma próxima vez
                                    </label>{" "}
                                </div>
                                <hr className="my-4" />{" "}
                                <button
                                    className=" btn btn-primary btn-md"
                                    type="button"
                                    style={{ width: 150 }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Enviar
                                </button>
                                {/* Modal */}
                                <div
                                    className="modal fade"
                                    id="exampleModal"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Recebemos sua Mensagem!
                                                </h1>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                />
                                            </div>
                                            <div className="modal-body">
                                                Que legal que você entrou em contato com a gente, o seu
                                                feedback é muito importante para a Pinguim Shop. Agradecemos
                                                a sua mensagem e vamos analisá-la com carinho.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>

            {/* Sobre nós */}
            <div className="containerSobreNos py-5">
                <div className="sobreNos row featurette py-5">
                    {" "}
                    <div className="col-md-7">
                        {" "}
                        <h2 className="featurette-heading fw-normal lh-1">
                            First featurette heading.{" "}
                            <span className="text-body-secondary">It’ll blow your mind.</span>
                        </h2>{" "}
                        <p className="lead">
                            Some great placeholder content for the first featurette here. Imagine some
                            exciting prose here.
                        </p>{" "}
                    </div>{" "}
                    <div className="col-md-5">
                        {" "}
                        <svg
                            aria-label="Placeholder: 500x500"
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            height={500}
                            preserveAspectRatio="xMidYMid slice"
                            role="img"
                            width={500}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                                500x500
                            </text>
                        </svg>{" "}
                    </div>{" "}
                </div>
            </div>
        </>
    );
}
