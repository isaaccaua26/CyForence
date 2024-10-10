import React from 'react';

const Html = () => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content="" />
      <meta name="author" content="" />

      <title>CyForense | 404 Not Found Page</title>

      {/* CSS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,700;1,200&family=Unbounded:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/bootstrap-icons.css" rel="stylesheet" />
      <link href="css/CyForenseform-pack.css" rel="stylesheet" />
    </head>

    <body>
      <main>
        <header className="site-header">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-12 col-12 d-flex">
                <a
                  className="site-header-text d-flex justify-content-center align-items-center me-auto"
                  href="index.html"
                >
                  <i className="bi-box" />
                  <span>CyForense</span>
                </a>

                <ul className="social-icon d-flex justify-content-center align-items-center mx-auto">
                  <span className="text-white me-4 d-none d-lg-block">Stay connected</span>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-instagram" />
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-twitter" />
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-whatsapp" />
                  </li>
                </ul>

                <div>
                  <a
                    href="#"
                    className="custom-btn custom-border-btn btn"
                    dataBsToggle="modal"
                    dataBsTarget="#subscribeModal"
                  >
                    Notify me
                    <i className="bi-arrow-right ms-2" />
                  </a>
                </div>

                <a
                  className="bi-list offcanvas-icon"
                  dataBsToggle="offcanvas"
                  href="#offcanvasMenu"
                  role="button"
                  ariaControls="offcanvasMenu"
                />
              </div>
            </div>
          </div>
        </header>

        <div
          className="offcanvas offcanvas-end"
          dataBsScroll="true"
          tabIndex="-1"
          id="offcanvasMenu"
          ariaLabelledby="offcanvasMenuLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close ms-auto"
              dataBsDismiss="offcanvas"
              ariaLabel="Close"
            />
          </div>

          <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
            <nav>
              <ul>
                <li>
                  <a href="login.html">Login Form</a>
                </li>

                <li>
                  <a href="register.html">Create an account</a>
                </li>

                <li>
                  <a href="password-reset.html">Password Reset</a>
                </li>

                <li>
                  <a className="active" href="404.html">
                    404 Page
                  </a>
                </li>

                <li>
                  <a href="contact.html">Contact Form</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="subscribeModal"
          tabIndex="-1"
          ariaLabelledby="subscribeModalLabel"
          ariaHidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  dataBsDismiss="modal"
                  ariaLabel="Close"
                />
              </div>

              <div className="modal-body">
                <form
                  action="#"
                  method="get"
                  className="custom-form mt-lg-4 mt-2"
                  role="form"
                >
                  <h2 className="modal-title" id="subscribeModalLabel">
                    Stay up to date
                  </ h2>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="your@email.com"
                    required
                  />

                  <button type="submit" className="form-control">
                    Notify
                  </button>
                </form>
              </div>

              <div className="modal-footer justify-content-center">
                <p>By signing up, you agree to our Privacy Notice</p>
              </div>
            </div>
          </div>
        </div>

        <section className="hero-section hero-bg d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 text-center mx-auto">
                <h2 className="page-404-title">404</h2>

                <h3>Page Not Found</h3>

                <p>The page you are looking for doesn't exist or has been moved.</p>

                <a
                  className="custom-btn btn mt-4"
                  href="index.html"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* JAVASCRIPT */}
      <script src="js/jquery.min.js" />
      <script src="js/bootstrap.bundle.min.js" />
      <script src="js/countdown.js" />
      <script src="js/init.js" />
    </body>
  </html>
);

export default Html;