import Link from 'next/link';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const SignUp = () => {
   // useAuth
   const { handleGoogleSignIn, handleRegister } = useAuth();
   // useRouter
   const router = useRouter();
   // handleSubmit
   const { register, handleSubmit, reset } = useForm();
   // onSubmit
   const onSubmit = data => {
      if (data.password !== data.re_password) {
         return Swal.fire({
            icon: 'error',
            title: 'Does Not Match Password',
            text: 'Please provide a currect value',
         })
      }
      if (data.password.length < 6) {
         return Swal.fire({
            icon: 'error',
            // title: 'Does Not Password',
            text: 'Password Must be at least 6 character',
         })
      }
      handleRegister(data.name, data.email, data.password, reset, router)
   };
   return (
      <>

         <section className="signup__area p-relative z-index-1 pt-100 pb-145">

            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                     <div className="section__title-wrapper text-center mb-55">
                        <h2 className="section__title">Create a free <br />  Account</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                     <div className="sign__wrapper white-bg">
                        <div className="sign__header mb-35">
                           <div onClick={() => handleGoogleSignIn(router)} className="sign__in text-center">
                              <a style={{ cursor: 'pointer' }} className="sign__social g-plus text-start mb-15"><i className="fab fa-google-plus-g"></i>Sign Up with Google</a>
                              <p> Or, <Link href="/sign-up"><a style={{color: 'red'}}>sign up</a></Link> with your email</p>
                           </div>
                        </div>
                        <div className="sign__form">
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="sign__input-wrapper mb-25">
                                 <h5>First Name</h5>
                                 <div className="sign__input">
                                    <input {...register("first_name")} required type="text" placeholder="First Name" />
                                    <i className="fal fa-user"></i>
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-25">
                                 <h5>Last Name</h5>
                                 <div className="sign__input">
                                    <input {...register("last_name")} required type="text" placeholder="Last Name" />
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-25">
                                 <h5>Email</h5>
                                 <div className="sign__input">
                                    <input {...register("email")} required type="email" placeholder="e-mail address" />
                                    <i className="fal fa-envelope"></i>
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-25">
                                 <h5>Password</h5>
                                 <div className="sign__input">
                                    <input {...register("password")} required type="password" placeholder="Password" />
                                    <i className="fal fa-lock"></i>
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-10">
                                 <h5>Re-Enter Password</h5>
                                 <div className="sign__input">
                                    <input {...register("re_password")} required type="password" placeholder="Re-Password" />
                                    <i className="fal fa-lock"></i>
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-25">
                                 <h5>Birth Date</h5>
                                 <div className="sign__input">
                                    <input {...register("birth_date")} required type="date" />
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-25">
                                 <h5>Phone Number</h5>
                                 <div className="sign__input">
                                    <input {...register("phone_number")} required type="text" placeholder="Phone Number" />
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-25">
                                 <h5>Hire Date</h5>
                                 <div className="sign__input">
                                    <input {...register("hire_date")} required type="date" />
                                 </div>
                              </div>
                              <div className="sign__action d-flex justify-content-between mb-30">
                                 <div className="sign__agree d-flex align-items-center">
                                    <input required className="m-check-input" type="checkbox" id="m-agree" />
                                    <label className="m-check-label" htmlFor="m-agree">I agree to the <a href="#">Terms & Conditions</a>
                                    </label>

                                 </div>
                              </div>
                              <button className="tp-btn w-100"> <span></span> Sign Up</button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default SignUp;