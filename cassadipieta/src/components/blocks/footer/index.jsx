import "./footer.css"

export default function Footer() {
    return (<>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
            {" "}
            <div className="col mb-3">
                {" "}
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                    aria-label="Bootstrap"
                >
                    {" "}
                    <svg className="bi me-2" width={40} height={32} aria-hidden="true">
                        <use xlinkHref="#bootstrap" />
                    </svg>{" "}
                </a>{" "}
                <h6 className="text-body-secondary">© 2025</h6>{" "}
            </div>{" "}
            <div className="col mb-3" />{" "}
            <div className="col mb-3">
                {" "}
                <h5>Section</h5>{" "}
                <ul className="nav flex-column">
                    {" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Home
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Features
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Pricing
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            FAQs
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            About
                        </a>
                    </li>{" "}
                </ul>{" "}
            </div>{" "}
            <div className="col mb-3">
                {" "}
                <h5>Section</h5>{" "}
                <ul className="nav flex-column">
                    {" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Home
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Features
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Pricing
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            FAQs
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            About
                        </a>
                    </li>{" "}
                </ul>{" "}
            </div>{" "}
            <div className="col mb-3">
                {" "}
                <h5>Section</h5>{" "}
                <ul className="nav flex-column">
                    {" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Home
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Features
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Pricing
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            FAQs
                        </a>
                    </li>{" "}
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            About
                        </a>
                    </li>{" "}
                </ul>{" "}
            </div>{" "}
                <p className="text-body-secondary">© 2025 Company, Inc</p>
        </footer>{" "}
    </>);
}