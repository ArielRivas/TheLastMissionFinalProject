import { React } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.scss";
import loginTicket from "../assets/login/loginTicket.png";
import { loginUser } from "../ReduxLogin/auth/auth.actions";
import { API } from "../shared/Api";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);

    API.post("/login", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
      const redirect = () => navigate("/home");
      if (formData.lvl === "evil") {
        dispatch(loginUser(res.data.userDB, "B", redirect));
      } else {
        dispatch(loginUser(res.data.userDB, "A", redirect));
      }
      console.log(res);
    
    });
  };

  return (
    <div className='loginContainer'>
      <div className='formContainer'>
        <img className='loginTicket' src={loginTicket} alt='imgLogin' />

        <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>Name</p>
            <input
              id='userName'
              type='text'
              name='userName'
              placeholder='Write your Name soldier'
              autoComplete='off'
              {...register("userName", { required: true })}
            />
          </label>

          <label>
            <p>Password</p>
            <input
              type='text'
              id='password'
              name='password'
              placeholder='Write your funny password'
              autoComplete='off'
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              })}
            />
          </label>

          <p>CHOOSE YOUR EVIL LEVEL</p>

          <ul className='levels'>
            <li className='lgnButton'>
              <input type='radio' id='evil' required  value="evil" {...register("lvl")} />
              <label htmlFor='evil'>Evil</label>
            </li>
            <li className='lgnButton'>
              <input type='radio' id='hero' required  value="hero" {...register("lvl")}/>
              <label htmlFor='hero'>Hero</label>
            </li>
          </ul>

          <button type='submit' className='btnLogin'>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
