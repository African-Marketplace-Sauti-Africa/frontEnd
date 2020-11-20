import React from 'react'
import '../styles/Home.css'
import pic1 from '../assets/images/pic01.jpeg'
import pic2 from '../assets/images/pic02.jpeg'
import pic3 from '../assets/images/pic03.jpeg'

const HomePage = () => {


return(
  // <!-- Page Wrapper -->
  <div id="page-wrapper">

    {/* <!-- Banner --> */}
    <section id="banner">
      <div className="inner">
        <h1>African Marketplace</h1>
        <p>Sauti Africa empowers small business owners, particularly women, <br />to improve their business and economic opportunities<br /> to grow out of poverty. </p>
      </div>
    </section>

    {/* <!-- One --> */}
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Buy Local / Sell Local<br />
          Fruits, Vegetables, Grains, Animals, and more!</h2>
          <p>African Marketplace enables you to list, buy, sell, and compare prices of local food stuffs.</p>
        </header>
      </div>
    </section>

    {/* <!-- Two --> */}
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img className='img1' src={pic1} alt="Man at produce stall" />
        </div>
        <div className="content">
          <h2>Eat fresh!<br />
          Eat Local!</h2>
          <p>Checkout the fresh food near you at the best prices! Compare local vendors and pick out your next sweet treat.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="content">
          <h2>Fruit<br />
          Vegetables</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </div>
        <div className="image">
          <img className='img2' src={pic2} alt="Bins of produce" />
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img className='img3' src={pic3} alt="Bins of produce" />
        </div>
        <div className="content">
          <h2>Meats<br />
          Grains</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </div>
      </section>
    </section>

    {/* <!-- CTA --> */}
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Eat Fresh, Eat Local, Eat African Marketplace</h2>
          <p className='endP'>Help small business owners while being frugal and fresh.</p>
        </header>
      </div>
    </section>

    {/* <!-- Footer --> */}
    <footer id="footer">
      
    </footer>
  </div>
)
}

export default HomePage