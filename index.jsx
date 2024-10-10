import React from 'react';

const Html = () => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content="" />
      <meta name="author" content="" />

      <title>CyForense | Contact Form page</title>

      {/* CSS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,700;1,200&family=Unbounded:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/bootstrap-icons.css" rel="stylesheet" />
      <link href="css/CyForense-form-pack.css" rel="stylesheet" />
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
                  <a href="login.html">Login</a>
                </li>

                <li>
                  <a href="register.html">Crie sua conta</a>
                </li>

                <li>
                  <a href="password-reset.html">Recuperar senha</a>
                </li>

                <li>
                  <a href="404.html">404 Page</a>
                </li>

                <li>
                  <a className="active" href="contact.html">
                    Forma de contato
                  </a>
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
                  </h2>

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

        <section className="hero-section d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mx-auto">
                <form
                  className="custom-form contact-form"
                  role="form"
                  method="post"
                >
                  <h2 className="hero-title text-center mb-4 pb-2">
                    Contact Form
                  </h2>

                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                        />

                        <label htmlFor="floatingInput">Full Name</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating mb-4 p-0">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="Email address"
                          required
                        />

                        <label htmlFor="email">Email address</label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Message"
                        />

                        <label htmlFor="floatingTextarea">Message</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-10 mx-auto">
                      <button type="submit" className="form-control">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="video-wrap">
            <video
              autoPlay
              loop
              muted
              className="custom-video"
              poster=""
            >
              <source src="videos/video.mp4" type="video/mp4" />

              Your browser does not support the video tag.
            </video>
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