import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Platform, StatusBar, Keyboard } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import sendMail from '../Apis/sendMail';
import authenticate from '../Apis/SignUpApi'
import ErrorMessage from '../Components/ErrorMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';


export default function SignUp({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [accountType , setAccountType] = useState("Customer");

    const [isKeyBoard, setKeyBoard] = useState(false);
    const [codeSended, setCodeSended] = useState(false);
    const [error, showError] = useState("");


    useEffect(() => {
        const keyBoardOpen = Keyboard.addListener('keyboardDidShow', () => {
            setKeyBoard(true);
        });
        const keyBoardClose = Keyboard.addListener('keyboardDidHide', () => {
            setKeyBoard(false);
        });

        return () => {
            keyBoardOpen.remove();
            keyBoardClose.remove();
        };
    }, []);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const EmailVerification = async () => {
        console.log(name)
        if (!codeSended) {
            const response = await sendMail(email, password , name)
            if (!response.sucess){
                showError(response.message)
            }
            const delayInMilliseconds = 6000
            setCodeSended(true)
            const timeoutId = setTimeout(() => {
                setCodeSended(false)
            }, delayInMilliseconds);
        }
    }

    const AuthenticateUser = async () => {
        showError("sucess:singup in process")
        const response = await authenticate({
            email: email,
            password: password,
            code: parseInt(code),
            accountType : accountType
        })
        if (response.sucess) {
            AsyncStorage.setItem('@Email', email)
            AsyncStorage.setItem('@Password', password)
            AsyncStorage.setItem('@UserName', name)
            AsyncStorage.setItem('@AccountType', accountType)
            navigation.navigate(accountType == "Customer" ? 'BuyerSideComponents' : "SellerSideComponents" , params = {
                Email: email,
                Password: password,
                name: name
            })
        }
        else {
            showError(response.message)
        }
    }

    handleAccountType = ()=>{
        if(accountType == "Customer"){
            setAccountType("Business")
        }
        else {
            setAccountType ("Customer")
        }
    }

    return (
        <SafeAreaView style={styles.SafeAreaCont}>
            <View style={styles.ParentContainer}>

                {/* Remove ImageContainer to not display the image */}

                <View style={styles.container}>
                    <ErrorMessage errorMessage={error}></ErrorMessage>
                    <Text style={[styles.greetingText, { opacity: isKeyBoard ? 0 : 1 }]}>
                        Sign Up
                    </Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Enter your email'
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>UserName</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Enter your Name'
                            onChangeText={setName}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordInputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder='Enter your password'
                                secureTextEntry={!passwordVisible}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity
                                style={styles.eyeIconContainer}
                                onPress={togglePasswordVisibility}
                            >
                                <FontAwesome5 name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#666" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.passwordInputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder='Enter your password again'
                                secureTextEntry={!passwordVisible}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity
                                style={styles.eyeIconContainer}
                                onPress={togglePasswordVisibility}
                            >
                                <FontAwesome5 name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#666" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <RNPickerSelect
                        onValueChange={(value) => setSelectedValue(value)}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    /> */}
                    {/* <Text>Selected: {selectedValue}</Text> */}

                    {/* Additional Inputs for Sign Up */}
                    <View style={styles.inputContainer}>

                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Verification Code'
                            keyboardType="numeric"
                            onChangeText={setCode}
                        />
                        <TouchableOpacity onPress={EmailVerification}
                            activeOpacity={0.4}
                            style={{ opacity: codeSended ? 0.4 : 1 }}

                        >

                            <Text style={{ color: '#ed7032', width: '100%', textAlign: 'left' }}
                            >
                                send code
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.accountTypeSelector}> 
                        <TouchableOpacity onPress={handleAccountType} style = {{...styles.accountTypeSelectorOp , backgroundColor : accountType == "Business" ? "#3f36f5" : "#a3a3a3"}}> 
                            <Text style={styles.accountTypeText} >Business account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={handleAccountType}  style = {{...styles.accountTypeSelectorOp , backgroundColor : accountType == "Customer" ? "#3f36f5" : "#a3a3a3"}}>
                            <Text style={styles.accountTypeText}>Customer account</Text> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.orderBtn} onPress={AuthenticateUser} >
                            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: "500" }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Text style={{ color: '#ed7032', width: '100%', textAlign: 'left' }}
                            >
                                Already have an account? Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeAreaCont: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        backgroundColor: '##f2f2f2',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    ParentContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    greetingText: {
        width: '100%',
        textAlign: 'left',
        fontSize: 34,
        fontWeight: "800",
        color: '#4f4f4f',
        fontFamily: 'sans-serif',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        textAlign: 'left',
        width: '100%',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
    },
    inputStyle: {
        height: 45,
        width: '100%',
        color: '#030201',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 15,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        marginVertical: 5
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 10,
        top: 12,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
    },
    orderBtn: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: "center",
        backgroundColor: "#ed7032",
        marginHorizontal: 10,
    },
    accountTypeSelector : {
        width : '100%' ,
        flexDirection : 'row' ,
        alignItems : 'center' ,
        justifyContent : 'center',
        gap : 30 

    },
    accountTypeSelectorOp : {
        height : 40 ,
        width : 130 ,
        backgroundColor : "#0e3eff",
        justifyContent : "center",
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 5 
    },
    accountTypeText : {
        fontSize: 13, 
        fontWeight: "500" ,
        color : "#ffffff"
    }
    
});
