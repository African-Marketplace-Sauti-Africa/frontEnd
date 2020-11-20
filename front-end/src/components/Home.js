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
          <h2>Arcu aliquet vel lobortis ata nisl<br />
          eget augue amet aliquet nisl cep donec</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
          fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
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
          <h2>Magna primis lobortis<br />
          sed ullamcorper</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="content">
          <h2>Tortor dolore feugiat<br />
          elementum magna</h2>
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
          <h2>Augue eleifend aliquet<br />
          sed condimentum</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </div>
      </section>
    </section>

    {/* <!-- CTA --> */}
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p className='endP'>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
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