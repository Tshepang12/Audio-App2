import { Text, View, StyleSheet,TextInput,TouchableOpacity  } from 'react-native';
import { useState } from 'react';


function Login({navigation }){

    const audiopage = (()=>{
     navigation.navigate('recording')
      signInWithEmailAndPassword(auth,email,password)
    .catch(error=>console.error(error))

  })
  


const[email,setEmail] = useState("");
const[password,setPassword] = useState("");




  
  return(
    <View style={styles.container}>


<Text style={styles.text}>Login</Text>

<Text style={styles.lable}>Email</Text>
<TextInput placeholder="  enter your email" style={styles.input}  onChangeText={(setEmail)}/>
<Text style={styles.lable}>Password</Text>

<TextInput placeholder="  enter  your password"  style={styles.input}  onChangeText={(setPassword)}/>

<Text style={styles.lable2}>Forgot Password</Text>

<br></br><br></br>

<Text style={styles.paragraph}>Don't have an account ?<Text style={styles.text}>Signup</Text></Text>

<TouchableOpacity style={styles.btn} onPress={audiopage}>

       <Text style={styles.btntext} >Login</Text >


    </TouchableOpacity>
    </View>
  );
}


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#CFD2CF',
    padding: 8,

  },
    input:{
  width:300,
  height: 50,
  backgroundColor: 'white',
  borderRadius: 20,
  marginLeft: 12,
  borderColor: '#3B9AE1',

  },
  text:{
    textAlign: 'center',
fontSize: 'larger',
fontWeight: 'bold',

marginBottom: 70,

  },
 lable:{
 margin:5,
fontSize: '50',
fontWeight: '500',

  },
   lable2:{
 margin:5,
fontSize: '50',
fontWeight: '500',
textAlign:'center',

  },
   paragraph:{
 margin:5,
fontSize: '14',
fontWeight: 'small',
textAlign:'center',

  },
    btn:{
    marginTop:12,
    backgroundColor: 'white',
    borderColor:'black',
    width: 150,
    height: 40,
    marginLeft: 70,
    paddingTop: 15,
    borderRadius: 50,
  },
  btntext:{
     margin:5,
fontSize: '50',
fontWeight: '500',
textAlign:'center',
marginTop: -8,
  }
  });