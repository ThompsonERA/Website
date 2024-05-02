import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

const Testimonials = () => {
   // testimonialData
   const testimonialData = [
      {
         id: 1,
         img: 'assets/img/testimonial/testimonial-1.jpg',
         review: "I recently experienced outstanding service from Ruth & Naomi. From my initial inquiry to the completion of the cleaning service, their professionalism, attention to detail, and dedication to customer satisfaction were remarkable.The prompt and courteous response I received when contacting them impressed me. They took the time to understand my needs and scheduled a convenient in-home consultation. Maria, the maid assigned to my home, conducted a thorough assessment and provided valuable insights, instilling confidence in their ability to deliver exceptional results.  On the day of the cleaning service, Maria arrived punctually with all necessary supplies. Her friendly demeanor and meticulous work ethic ensured every corner of my home received the attention it deserved. I was particularly impressed by the level of detail in the cleaning, even in hard-to-reach areas. Ruth & Naomi's commitment to customer satisfaction was evident as they followed up after the service to ensure my complete satisfaction, which indeed exceeded my expectations. In conclusion, I highly recommend Ruth & Naomi for their reliability, professionalism, and attention to detail. Their exceptional service sets them apart, and I will definitely be utilizing their services again in the future. Thank you, Ruth & Naomi, for your outstanding work!",
         name: 'Dianne Ameter',
         title: 'UX Designer'
      },
      {
         id: 2,
         img: 'assets/img/testimonial/testimonial-2.jpg',
         review: "Had an amazing experience with Ruth & Naomi's cleaning service! From the first call to the final dusting, they were top-notch. Maria, the maid they sent, was fantastic. She arrived on time, with everything needed, and got to work right away. Maria's attention to detail was impressive. Every nook and cranny in my home got the attention it deserved, and even the tough spots were spotless. Plus, her friendly attitude made the whole experience even better. After the service, Ruth & Naomi followed up to ensure everything was to my liking. Their dedication to customer satisfaction really stood out to me. In short, if you're looking for reliable, professional, and detail-oriented cleaners, Ruth & Naomi is the way to go. I'll definitely be booking them for all my future cleaning needs. Thanks, Ruth & Naomi, for the fantastic job!",
         name: 'Douglas Lyphe',
         title: 'Devolopment'
      },
      {
         id: 3,
         img: 'assets/img/testimonial/testimonial-3.jpg',
         review: " Absolutely thrilled with the exceptional service from Ruth & Naomi's cleaning team! Right from the get-go, their professionalism and attention to detail were evident. Maria, the maid they sent, was a true gem. Punctual and equipped with all the necessary tools, she wasted no time in transforming my home into a spotless haven. Her meticulous approach ensured that every corner was impeccably cleaned, leaving no dust bunny behind! What's more, Ruth & Naomi's dedication to customer satisfaction was unparalleled. Their follow-up after the service further exemplified their commitment to excellence. If you're in need of reliable, friendly, and thorough cleaners, look no further than Ruth & Naomi. They've certainly earned my trust, and I'll be reaching out to them for all my future cleaning needs. Many thanks to the entire team for a job well done!",
         name: 'Customer Support',
         title: 'IT Specialist'
      },
      {
         id: 4,
         img: 'assets/img/testimonial/testimonial-4.jpg',
         review: "Ruth & Naomi's cleaning service exceeded all expectations! From the moment they arrived, I knew I was in good hands. Maria, the maid assigned to my home, was not only prompt and professional but also incredibly thorough. She paid attention to every detail, ensuring that even the tiniest nooks and crannies were spotless. I was particularly impressed by her cheerful demeanor, which made the entire experience enjoyable. Ruth & Naomi's commitment to customer satisfaction was evident throughout the process, from the initial consultation to the follow-up after the service. I couldn't be happier with the results and will definitely be booking them again in the future. Thank you, Ruth & Naomi, for making my home sparkle!",
         name: 'Shahnewaz Sakil',
         title: 'Developer'
      },
      {
         id: 5,
         img: 'assets/img/testimonial/testimonial-2.jpg',
         review: "Absolutely delighted with the service provided by Ruth & Naomi's cleaning team! Maria, the maid they sent, was an absolute superstar. Not only did she arrive on time and fully equipped, but she also worked tirelessly to ensure that my home was left immaculate. Her attention to detail was truly remarkable, and I was blown away by the results. Ruth & Naomi's dedication to customer satisfaction was evident in every interaction, and their follow-up after the service was the cherry on top. If you're looking for reliable, friendly, and efficient cleaners, look no further than Ruth & Naomi. I can't recommend them highly enough! Thank you for a job well done!",
         name: 'Douglas Lyphe',
         title: 'Devolopment'
      },
   ]

   const renderReviewText = (review) => {
      const words = review.split(' ');
      const [isExpanded, setIsExpanded] = useState(false);
      if (words.length <= 8 || isExpanded) {
         return (
            <>
               {review}
               {words.length > 10 && (
                  <span className="review-toggle" onClick={() => setIsExpanded(!isExpanded)} style={{color: 'black' }}>
                     ...Hide
                  </span>
               )}
            </>
         );
      } else {
         return (
            <>
               {words.slice(0, 10).join(' ')}
               <span className="review-toggle" onClick={() => setIsExpanded(!isExpanded)} style={{color: 'black'}}>
                  ...Read More
               </span>
            </>
         );
      }
   };
   return (
      <>
         <section className="testimonial__area pt-80 pb-120 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 mb-40 text-center">
                        <span className="section__title-pre">Our Staff</span>
                        <h3 className="section__title-2">What our Customers Say.</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="testimonial__slider">

                        <Swiper
                           spaceBetween={30}
                           slidesPerView={1}
                           className='testimonial__slider'
                           pagination={{ clickable: true }}
                           autoplay={{ delay: 6000 }}
                           breakpoints={{
                              550: {
                                 slidesPerView: 1,
                              },
                              768: {
                                 slidesPerView: 2,
                              },
                              992: {
                                 slidesPerView: 3,
                              },
                           }}
                        >

                           {
                              testimonialData.map(testimonial => {
                                 return <SwiperSlide key={testimonial.id}>
                                    <div className="testimonial__item transition-3 text-center white-bg">
                                       <div className="testimonial__avater">
                                          <img src={testimonial.img} alt="" />
                                       </div>
                                       <div className="testimonial__avater-info mb-5">
                                          <h3>{testimonial.name}</h3>
                                       </div>
                                       <div className="testimonial__rating">
                                          <ul>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                          </ul>
                                       </div>
                                       <div className="testimonial__text">
                                          <p>
                                             {renderReviewText(testimonial.review)}
                                          </p>
                                          {/* <p>
                                             I recently experienced outstanding service from Ruth & Naomi. From my initial inquiry to the completion of the cleaning service, their professionalism, attention to detail, and dedication to customer satisfaction were remarkable.

                                             The prompt and courteous response I received when contacting them impressed me. They took the time to understand my needs and scheduled a convenient in-home consultation. Maria, the maid assigned to my home, conducted a thorough assessment and provided valuable insights, instilling confidence in their ability to deliver exceptional results.

                                             On the day of the cleaning service, Maria arrived punctually with all necessary supplies. Her friendly demeanor and meticulous work ethic ensured every corner of my home received the attention it deserved. I was particularly impressed by the level of detail in the cleaning, even in hard-to-reach areas.

                                             Ruth & Naomi's commitment to customer satisfaction was evident as they followed up after the service to ensure my complete satisfaction, which indeed exceeded my expectations.

                                             In conclusion, I highly recommend Ruth & Naomi for their reliability, professionalism, and attention to detail. Their exceptional service sets them apart, and I will definitely be utilizing their services again in the future.

                                             Thank you, Ruth & Naomi, for your outstanding work!</p> */}
                                       </div>
                                       {/* <div className="testimonial__avater-info mb-5">
                                          <h3>{testimonial.name}</h3>
                                          <span>{testimonial.title}</span>
                                       </div> */}
                                       {/* <div className="testimonial__rating">
                                          <ul>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                          </ul>
                                       </div> */}
                                    </div>
                                 </SwiperSlide>
                              })
                           }

                        </Swiper>

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Testimonials;