import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ErrorMessage({ errorMessage }) {
  const [isVisible, setVisible] = useState(false);
  const messageRef = useRef("");
  const messageType = useRef("sucess");

  useEffect(() => {
    if(errorMessage){
        messageType.current = errorMessage.startsWith("sucess")?"sucess" :"fail";
        messageRef.current = errorMessage.replace(messageType.current+":" , "");
        setVisible(true);
    
        const timer = setTimeout(() => {
          setVisible(false);
        }, 5000);
    }

   
  }, [errorMessage]);

  return (
    <>
      {isVisible && (
        <View style={[styles.errorContainer , { backgroundColor: messageType=="suces" ? '#2d990c': '#9c0500',}]}>
          <Text style={styles.errorMessage}>{messageRef.current}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    height: 30,
    width: '70%',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 6,
    zIndex: 999,
  },
  errorMessage: {
    fontSize: 20,
    color: 'white',
  },
});
