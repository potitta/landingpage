import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span>  */}
      <img className="img-lg" src={logo} alt="" />
    </div>
    <div className="content">
      <div className="inner">
        {/* <h1>POTITTA ID</h1> */}
        <p>
          <b>Solid &#38; Well made design</b>{' '}
          <br />
        </p>
        <a className="button" href="https://wa.me/6281280615589" target="_blank" style={{ background: 'rgba(155, 155, 155, 0.4)' }} >Order Now via WhatsApp <span className="icon fa-whatsapp"></span></a>
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('shoeBox')
            }}
          >
            PREMIUM ACRYLIC SHOEBOX
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('tShirt')
            }}
          >
            APPAREL
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('hoodie')
            }}
          >
            Hoodie by POTITTA
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('whoWeAre')
            }}
          >
            Who we are?
          </button>
        </li> */}
        <li>
          <a href="https://tokopedia.link/WnPzJJHzHcb" target="_blank">
            <button>
              <span className="icon fa-shopping-basket"></span> Tokopedia
            </button>
          </a>
        </li>
        <li>
          <a href="https://shopee.co.id/potitta.id" target="_blank">
            <button>
              <span className="icon fa-shopping-bag"></span> Shopee
            </button>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/potitta.id" target="_blank">
            <button>
              <span className="icon fa-instagram"></span> Instagram
            </button>
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('hoodie')
            }}
          >
            <span className="icon fa-shopping-cart"></span> Our Store
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
