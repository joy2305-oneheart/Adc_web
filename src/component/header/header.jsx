import React from 'react'

const Header = () => {
  return (
   <>
    <header class="adc_header adc">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand adc_logo" href="/index.html"><img src="src/assets/images/adc-icon.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about_us.html">About Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Programs
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Healing and Deliverance Conference</a></li>
                                    <li><a class="dropdown-item" href="#">Encounter with God</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Connect Group</a></li>
                                    <li><a class="dropdown-item" href="#">Living Free</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact_us.html">Contact Us</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
   </>
  )
}

export default Header
