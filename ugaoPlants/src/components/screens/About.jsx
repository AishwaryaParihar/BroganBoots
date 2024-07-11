import React from 'react'
import imgAbout from '../../assets/Animal.webp'
const About = () => {
  return (
    <div>
    <div className="container">
      <div className="row pt-5">
          <div className="col-md-6  d-flex align-items-center px-4">
              <div className="join">
                  <h2>About <span className="text-primary">Br</span>ogan Boots</h2>
                  <p>Brogan Boots was built out of frustration to make trade-offs between – clunky and delicate dress boots that fall apart after a few wears, or boots that were incredibly overpriced? And it is when I decided, there has to be another option</p>
                 <p>At Brogan Boots we offer ridiculously high quality footwear that are designed, developed and hand crafted in-house by our efficient and highly skilled artisans, drawing inspiration from the world around us and our amazing customers.</p>
              </div>
          </div>
          <div className="col-md-6">
           <div className="text-end py-4">
           <img src={imgAbout} alt="" className="img-club" />
           </div>
          </div>
      </div>
  </div>
  {/* why ugaao */}
  {/* <div className="container aboutugaoo py-5">
  <div className="whyugaoo">
      <h2>About Ugaoo</h2>
      <p className="whyugaoo-p">Ugaoo is India’s largest and most trusted online plant nursery that specialises in all your gardening needs. The Ugaoo online nursery not only sells premium quality exotic <a href="/">indoor plants</a>, outdoor plants, <a href="/">flowering plants</a>, and <a href="/">succulents</a> to name a few, but also specialises in organic vegetable, herb, and <a href="/">flower seeds</a>. Ugaoo provides premium, trendy planters, best in class soil and <a href="/">fertilisers</a>, and all the <a href="/">gardening tools</a> a home gardener can need.</p>
      <p className="whyugaoo-p">At Ugaoo we believe that we are more than a garden store, we help people grow along their gardening journey, Afterall plants grow people. We believe in the magic of growing things and discovering our inner self in the process while revelling in the jot of your first new leaf, your first bloom, or your first sprouted seed.</p>
      <p className="whyugaoo-p">Ugaoo prides itself in the fact that it is not just an online garden store or online plant nursery but a friend who helps both you and your garden grow. We provide a lifetime of gardening support and hand hold you through all your gardening journeys.</p>
  </div>
  </div> */}
  </div>
  )
}

export default About
