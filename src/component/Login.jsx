import React from 'react'
import GoogleButton from 'react-google-button'
import { signInWithGoogle } from '../firebase'
import { Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack,Link,Button,Heading,Text,
useColorModeValue,
} from '@chakra-ui/react';
import GithubButton from 'react-github-login-button'
import { FirebaseError } from 'firebase/app';
const Login = () => {


  // const SignInWithFirebase=()=>{
  //   var google_provider =new FirebaseError.auth.GoogleAuthProvider();
  //   FirebaseError.auth().signInWithPopup(google_provider)
  //   .then((re)=>{
  //     console.log(re);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }




  return (
    <div style={{marginTop:"70px",marginLeft:"500px", border:"1px solid red",height:"450px" ,width:"300px"}}>
    
      <Heading color="#7e61c8">Welcome To Bardeen</Heading>
      <p>Let's log in to your Automations</p>
     <Input height="30px" width="230px" borderRadius="5px" placeholder="enter email"/> <br/><br/>
     <Input height="30px" width="230px" borderRadius="5px" placeholder="enter password"/> <br/>

     <p style={{fontSize:"12px", color:"blue"}}>Create Account &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Forgate password</p>
     <Button border="none" color='white' backgroundColor="blue" height="36px" width="240px" borderRadius="5px">Sign In</Button>

   
  
       <GoogleButton style={{marginLeft:"30px", marginTop:"10px"}}  onClick={signInWithGoogle}/>

       <GithubButton style={{marginLeft:"30px", marginTop:"10px"}}/>

       {/* <h1>{localStorage.getItem("name")}</h1> */}
   </div>
  )
}

export default Login

