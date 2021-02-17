import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <ul className="icons">
            {/* <li>
                <a
                    href="https://twitter.com/"
                    className="icon fa-twitter"
                >
                    <span className="label">Twitter</span>
                </a>
            </li>
            <li>
                <a href="https://facebook.com" className="icon fa-facebook">
                    <span className="label">Facebook</span>
                </a>
            </li> */}
            {/* <li>
                <a href="https://instagram.com/potitta.id" className="icon fa-instagram">
                    <span className="label">Instagram</span>
                </a>
            </li>
            <li>
                <a
                    href="https://wa.me/6281396221194"
                    className="icon fa-whatsapp"
                >
                    <span className="label">whatsapp</span>
                </a>
            </li> */}
        </ul>
        <p className="copyright">&copy; Copyright by potitta.id | Develop by <a href="https://goodsolutions.id">goodsolutions</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
