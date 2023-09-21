import '../../assets/css/signup.css'
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'


function SignUp() {
  const [loginemail, setLoginemail] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  // const signUp = (e,data) => {
  //   e.preventDefault();
  //   createUserWithEmailAndPassword(auth,email,password)
  //   .then((userCredential) =>{
  //     setLoginemail(email)
  //   // console.log (userCredential);
  //   window.location.href="/";
    
  //   })
  //   .catch((error) => {
  //     console.log (error);
  //   });
  //   console.log(JSON.stringify(data, null, 4))
  //   return false
  //   }
 


  //validation
  const validationSchema = Yup.object().shape({
		fullname: Yup.string().required('Full Name is required'),
		email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
            termsOfService: Yup.bool()
            .oneOf([true], "Please accept")
            .required("Please accept"),
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState



    function onSubmit(data,e) {

      e.preventDefault();
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) =>{
        setLoginemail(email)
      // console.log (userCredential);
      window.location.href="/";
      
      })
      .catch((error) => {
        console.log (error);
      });

      console.log(JSON.stringify(data, null, 4))
      return false
    }


  return (
   

<div class="login-container">
<div class="onboarding">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide color-1">
          <div class="slide-image">
             <img src="/assets/img/slider/login.png" loading="lazy" alt="" />
          </div>
          <div class="slide-content">
            <h2>Join our classes now.</h2>
            <p>Your one-stop platform for holistic health, traditional medicine, and transformative well-being.</p>
          </div>
        </div>
      </div>
      
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="login-form">
    <div class="login-form-inner">
      <h1 style={{textAlign:"center",fontWeight:"600"}}>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>



     <div class="login-form-group">
        <label for="surname">Full Name <span class="required-star">*</span></label>
        <input autocomplete="off"  {...register('fullname')}
            className={`form-control ${errors.fullname ? 'is-invalid' : ''}`} value={name}
          onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Surname" id="surname"/>
         <div className="invalid-feedback">{errors.fullname?.message}</div>
      </div>
{/* 
	  <div class="login-form-group">
        <label for="givenname">Given Name <span class="required-star">*</span></label>
        <input autocomplete="off" {...register('givenName')} className={` ${errors.givenName ? 'is-invalid' : ''}`} placeholder="Enter Your Given Name" type="text" id="givenname"/>
        <div className="invalid-feedback">{errors.givenName?.message}</div>
      </div>
 */}

	  <div class="login-form-group">
        <label for="email">Email address<span class="required-star">*</span></label>
        <input type="email" value={email}  {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} onChange= {(e) => setEmail(e.target.value)} placeholder="email@website.com" id="email"/>
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
	  <a className="btn btn-primary" style={{fontSize: "10px",borderRadius:"0px"}} href="#" role="button">Send Verification Code</a>

    <div class="login-form-group">
        <label for="pwd">Password <span class="required-star">*</span></label>
        <input autocomplete="off"  {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`} value={password} onChange= {(e) => setPassword(e.target.value)} type="password" placeholder="Minimum 8 characters" id="pwd"/>
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>

	  <div class="login-form-group">
        <label for="pwd">Confirm Password <span class="required-star">*</span></label>
        <input autocomplete="off" {...register('confirmPassword')}
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} type="password" placeholder="Minimum 8 characters" id="pwd"/>
        <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
      </div>

	  <div className="login-form-group">
	  <label for="country">Country/Region</label>
      <select name="countries" id="country" className="input1" style={{border: "1px solid var(--grey)", padding: "13px 20px"}}>
        <option value="select">USA</option>
        <option value="javascript">INDIA</option>
        <option value="php">CANADA</option>
        <option value="java">AFRICA</option>
        <option value="golang">AUSTRALIA</option>
        <option value="python">JAPAN</option>
        <option value="c#">CHINA</option>
        
        
      </select>
	  </div>

    <div class="custom-check">
		<input type="checkbox"  {...register('termsOfService')}
            className={`form-control checkboxOne ${errors.termsOfService ? '' : ''}`} />
            <label for="remember">By signing up, you agree to <a href="#" class="link create-account">Terms of Service</a> and <a href="#" class="link create-account">Privacy Policy.</a></label>     
        </div>


    <div className="slider-btn btn-hover" style={{margin:"25px 0 20px"}}>
         <button type="submit" style={{width:"100%",height:"45px",color:"#fff",border:"none"}} > Register </button>
      </div>
    </form>



    <div class="register-div" style={{textAlign:"center"}}>You have already an account? <a href="/login" class="link create-account">Login</a></div>

    </div>

  </div>

</div>


  );
}

export default SignUp;
