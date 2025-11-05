export default function Modal({msgBotao, titulo, corpo }) {
    return <>
        <button
            className=" btn btn-vermelho btn-md"
            type="button"
            style={{ width: 150 }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            {msgBotao}
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
                    <div className="modal-header bg-vermelho">
                        <h1 className="modal-title fs-5 txt-branco" id="exampleModalLabel">
                            {titulo}
                        </h1>

                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        {corpo}
                    </div>
                </div>
            </div>
        </div>
    </>
}