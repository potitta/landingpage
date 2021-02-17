import PropTypes from 'prop-types'
import React from 'react'

//shoebox
import Shoebox1 from '../pages/shoebox'
import Shoebox2 from '../pages/shoebox-2'
import price from '../images/shoebox/price.jpg'

//shirt
import BannedShirt from '../pages/shirt/banned'
import BullsShirt from '../pages/shirt/bulls'
import CarolShirt from '../pages/shirt/caroll'
import GotemShirt from '../pages/shirt/gotem'
import JordanShirt from '../pages/shirt/jordan'
import KMAShirt from '../pages/shirt/kma'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="whoWeAre"
          className={`${this.props.article === 'whoWeAre' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Who We Are</h2>
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas pretium euismod. Nam in tortor nunc. Etiam lacinia justo lorem, a fringilla velit ullamcorper ac. Nulla sollicitudin turpis vel metus tempor, eget elementum velit scelerisque. Donec sem libero, pretium ac tempor at, ornare ut libero. Aenean lacinia augue nec efficitur viverra. Ut eu dolor magna. Suspendisse sit amet placerat metus. Cras faucibus vel nibh vel suscipit. Cras accumsan in nunc a dapibus. Duis eget sem in enim maximus sodales et convallis est.
<br /><br />
Sed egestas ante tellus, ultricies sollicitudin augue ornare vitae. Aenean porta mauris sit amet ante rutrum feugiat. In vulputate viverra sem, eu varius tortor gravida in. Proin facilisis neque eu justo tincidunt mollis. Phasellus pellentesque ac mauris nec sodales. Nullam rutrum enim posuere, molestie orci id, malesuada dui. Maecenas luctus massa ex, ut bibendum augue mollis sit amet. Nulla pharetra egestas congue. Nunc scelerisque tellus eu eleifend suscipit. Praesent purus augue, ornare quis orci non, finibus viverra velit.
<br /><br />
Morbi condimentum dictum porta. Nulla sit amet vulputate tellus. Integer a mauris ultrices, tempus sapien ac, ornare est. Proin nec scelerisque ex, eu tempus ligula. Proin dapibus lorem vel lorem euismod viverra. Proin id sollicitudin eros. Etiam posuere eros mauris. Nulla rutrum rutrum turpis sit amet sagittis. Pellentesque ullamcorper eu lacus ac luctus. Ut eu accumsan erat. Sed in felis sed turpis viverra porttitor. Fusce eget condimentum justo. Sed tristique, tortor nec mollis varius, ex metus tempus elit, sed lobortis quam neque ac dui. In sed ullamcorper eros, sed eleifend augue. Fusce id ipsum efficitur, hendrerit mi a, maximus velit. 
          </p>
          {close}
        </article>

        <article
          id="hoodie"
          className={`${this.props.article === 'hoodie' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Store</h2>
          <h3>
             Something amazing is coming to you "SOON"
          </h3>
          {close}
        </article>

        <article
          id="shoeBox"
          className={`${this.props.article === 'shoeBox' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Premium Acrylic <br /> Shoebox </h2>
          
          <p>
            A big specialty at potitta.id is our ability to make custom display boxes and cases that are just right for your needs and wants. This applies to custom plastic boxes as well, sometimes referred as custom acrylic boxes or custom plexiglass boxes.
          </p>

          <h3>
            Hang your shoes on the wall
          </h3>
          <Shoebox2 />
          <br />
          <Shoebox1 />
          <br />
          <h3>
            Box Spesification
          </h3>
          <span className="image main">
            <img src={price} alt="" />
          </span>
          {close}
        </article>
        <article
          id="tShirt"
          className={`${this.props.article === 'tShirt' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Oversize T-Shirt</h2>
          <p>
            Potitta.id also made Premium Oversize T-Shirt for your stylish fashion needs.
          </p>
          <br /><br />
          <h3>
            Banned design
          </h3>
          <BannedShirt />
          <br /><br />
          <h3>
            Bulls design
          </h3>
          <BullsShirt />
          <br /><br />
          <h3>
            Carolina design
          </h3>
          <CarolShirt />
          <br /><br />
          <h3>
            Got Em design
          </h3>
          <GotemShirt />
          <br /><br />
          <h3>
            Jordan design
          </h3>
          <JordanShirt />
          <br /><br />
          <h3>
            Kiss my Airs design
          </h3>
          <KMAShirt />
          <br /><br />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
