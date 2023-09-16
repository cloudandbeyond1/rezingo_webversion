import '../../assets/css/loginupdated.css';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

function LoginPage() {
  const [loginemail, setLoginemail] = useState("");
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



  // const signIp = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth,email,password)
  //   .then((userCredential) =>{
  //     setLoginemail(email)
  //   // console.log (userCredential);
  //   window.location.href="/";
    
  //   })
  //   .catch((error) => {
  //     console.log (error);
  //   });
  //   }
    const btnHide =()=> {
      let sample2 = document.getElementById("sample");
      sample2.style.display="none";
    }



    const validationSchema = Yup.object().shape({
      // fullname: Yup.string().required('Full Name is required'),
      email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
          password: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 6 characters'),
              termsOfService: Yup.bool()
              .oneOf([true], "Please accept")
              .required("Please accept"),
          // confirmPassword: Yup.string()
          //     .required('Confirm Password is required')
          //     .oneOf([Yup.ref('password')], 'Passwords must match')
              
      });
      const formOptions = { resolver: yupResolver(validationSchema) };
      // get functions to build form with useForm() hook
      const { register, handleSubmit, reset, formState } = useForm(formOptions);
      const { errors } = formState


      function signIn(data,e) {

        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
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
  <div class="login-form">
    <div class="login-form-inner">
      <h1 style={{textAlign:"center",fontWeight:"600"}}>Login</h1>
      <p class="body-text" style={{textAlign:"center"}}>See your growth and get consulting support!</p>

 



      <button onClick={signInWithGoogle} class="rounded-button google-login-button">
        <span class="google-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z" fill="#fbbb00" />
            <path d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z" fill="#518ef8" />
            <path d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z" fill="#28b446" />
            <path d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z" fill="#f14336" />
          </svg></span>
        <span>Login with google</span>
      </button>


	  <a href="https://www.facebook.com/" class="rounded-button google-login-button" style={{backgroundColor:"#3b5998",color:"#fff"}}>
        <span class="facebook-icon" style={{marginLeft:"20px"}} >
		  <i class="fa fa-facebook-official" style={{marginRight:"10px",display:"flex",fontSize:"24px"}}></i>
		  </span>
        <span>Login with Facebook</span>
      </a>
      <div class="sign-in-seperator">
        <span>or Sign in with Email</span>
      </div>
      <form onSubmit={handleSubmit(signIn)}>
      <div className="login-form-group">
      <label for="email">Email <span class="required-star">*</span></label>
            <input name="email"  {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} autocomplete="off" type="email"  value={email} onChange= {(e) => setEmail(e.target.value)} placeholder="email@website.com" id="email" />
            <div className="invalid-feedback">{errors.email?.message}</div>
      </div>

      <div class="login-form-group">
         <label for="pwd">Password <span class="required-star">*</span></label>
            <input name="password" type="password" value={password}   {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`} onChange= {(e) => setPassword(e.target.value)}   placeholder="Minimum 8 characters" id="pwd"/>
                <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div class="login-form-group single-row">
        <div class="custom-check">
		<input type="checkbox" {...register('termsOfService')}
            className={`form-control  ${errors.termsOfService ? 'is-invalid' : ''}`} /><label for="remember">Remember me</label>
        </div>


        <a href="/reset" class="link forgot-link">Forgot Password ?</a>
        {/* <div className="invalid-feedback">{errors.termsOfService?.message}</div> */}
      </div>
      

	  <div className="slider-btn btn-hover" style={{margin:"25px 0 35px"}}>
         <button type="submit" onClick={btnHide} style={{width:"100%",height:"45px",color:"#fff",border:"none"}}> Login </button>
      </div>
      </form>
      <div class="register-div">Not registered yet? <a href="/signup" class="link create-account">Sign Up Now</a></div>
    </div>

  </div>
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
</div>

  );
}

export default LoginPage;
