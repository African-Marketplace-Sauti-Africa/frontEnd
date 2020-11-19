import React from 'react'
import '../styles/Home.css'

const HomePage = () => {


return(
  // <!-- Page Wrapper -->
  <div id="page-wrapper">

    {/* <!-- Banner --> */}
    <section id="banner">
      <div class="inner">
        <h1>African Marketplace</h1>
        <p>Sauti Africa empowers small business owners, particularly women, <br />to improve their business and economic opportunities<br /> to grow out of poverty. </p>
      </div>
      <a href="#one" class="more scrolly">Learn More</a>
    </section>

    {/* <!-- One --> */}
    <section id="one" class="wrapper style1 special">
      <div class="inner">
        <header class="major">
          <h2>Arcu aliquet vel lobortis ata nisl<br />
          eget augue amet aliquet nisl cep donec</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
          fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
        </header>
      </div>
    </section>

    {/* <!-- Two --> */}
    <section id="two" class="wrapper alt style2">
      <section class="spotlight">
        <div class="image"><img src="images/pic01.jpeg" alt="" /></div><div class="content">
          <h2>Magna primis lobortis<br />
          sed ullamcorper</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </div>
      </section>
      <section class="spotlight">
        <div class="image"><img src="images/pic02.jpeg" alt="" /></div><div class="content">
          <h2>Tortor dolore feugiat<br />
          elementum magna</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </div>
      </section>
      <section class="spotlight">
        <div class="image"><img src="images/pic03.jpeg" alt="" /></div><div class="content">
          <h2>Augue eleifend aliquet<br />
          sed condimentum</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </div>
      </section>
    </section>

    {/* <!-- Three --> */}
    <section id="three" class="wrapper style3 special">
      <div class="inner">
        <header class="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
          fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
        </header>
        <ul class="features">
          <li class="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
          </li>
          <li class="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
          </li>
          <li class="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
          </li>
          <li class="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
          </li>
          <li class="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
          </li>
          <li class="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
          </li>
        </ul>
      </div>
    </section>

    {/* <!-- CTA --> */}
    <section id="cta" class="wrapper style4">
      <div class="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
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