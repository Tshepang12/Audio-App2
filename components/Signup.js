import { Text, View, StyleSheet,TextInput,TouchableOpacity  } from 'react-native';
import { useState } from 'react';


function Signup({ navigation }){

    const nextpage = (()=>{
     navigation.navigate('login')
         createUserWithEmailAndPassword(auth,email,password)
         .then(auth=>console.log(auth))
    .catch(error=>console.error(error))

  })
  const[email,setEmail] = useState("");
const[password,setPassword] = useState("");

  return(
    <View style={styles.container}>


<Text style={styles.text}>Signup</Text>

<Text style={styles.lable}>Email</Text>
<TextInput placeholder="  enter email" style={styles.input}  onChangeText={(setEmail)}/>
<Text style={styles.lable}>Create new password</Text>

<TextInput placeholder="  enter new password"  style={styles.input}  onChangeText={(setPassword)}/>

<Text style={styles.paragraph}>Password may contain only lowercase,uppercase lettters and numbers,nd be at leasr 6 characters long</Text>

<br></br><br></br>

<Text style={styles.paragraph}>Already have an account ?<Text style={styles.text}>Login</Text></Text>

<TouchableOpacity style={styles.btn}  onPress={nextpage}>

       <Text style={styles.btntext}>Signup</Text >


    </TouchableOpacity>
    </View>
  );
}


export default Signup;

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