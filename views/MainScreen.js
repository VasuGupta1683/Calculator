import React from 'react'
import {View, Text, ScrollView, Pressable} from 'react-native'
import {useState} from 'react';
import styles from './mainsc'
const MainScreen = () => {

    const [value,setValue] = useState('0')
    const [bracketopen, setBracketopen] = useState(false)
    
    const handlepress = (val) =>  {
      console.log('pressed',val)
      if(val=='AC'){
        setValue('0')
      }
      else if(val=='='){
        try{
          if((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length){
            console.log('Equal brackets')
            if(value.slice(-1)=='+' || value.slice(-1)=='-' || value.slice(-1)=='/' || value.slice(-1)=='*' || value.slice(-1)=='%' || value.slice(-1)=='.'){
              setValue(`${eval(value.replace('()','(0)').slice(0,-1))}`)
            }
            else{
              setValue(`${eval(value.replace('()','(0)'))}`)
            }
          }
          // else{
          //   console.log('Unequal brackets')
          // }
        } 
        catch(e){
          setValue('Format Error')
        }
      }

      else if(val=='Del'){
        setValue(value.slice(0,-1))
      }
      else if(val=='( )'){
        if(value == '0'){
          setValue('(')
          setBracketopen(true)
        }
        else if(value.slice(-1)=='+' || value.slice(-1)=='-' || value.slice(-1)=='/' || value.slice(-1)=='*' || value.slice(-1)=='%' || value.slice(-1)=='.'){
          setValue(value+'(')
          setBracketopen(true)
        }
        else{
          if(bracketopen == true){
            setValue(value+')')
            setBracketopen(false)
          }
          else{
            setValue(value+'(')
            setBracketopen(true)
          }
        }
      }
      else{
        if(value == '0'){
          if(isNaN(val)){
            setValue(value + val)
          }
          else{
            setValue(val)
          }
        }
        else if(isNaN(val)){
          if(value.slice(-1)=='+' || value.slice(-1)=='-' || value.slice(-1)=='/' || value.slice(-1)=='*' || value.slice(-1)=='%' || value.slice(-1)=='.'){
            setValue(value.slice(0,-1)+val)
          }
          else{
            setValue(value+val)
          }
        }
        else{
          setValue(value+val)
        }
      }
    }

    return (
      <View style={styles.main_screen}>
        <ScrollView ref = {ref=>{this.ScrollView = ref}}style={styles.ms_display} onContentSizeChange={()=>this.ScrollView.scrollToEnd({animated:true})}>
          <Text style={styles.ms_text}>
            {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
          </Text>
        </ScrollView>

        <View style={styles.ms_keypad}>
          <View style={styles.msk_row}>

            <Pressable onPress={()=>handlepress('AC')}>
              <View style={styles.btn1_outer}>
                <Text style={styles.bg1_button}>AC</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('( )')}>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>( )</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('%')}>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>%</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('/')}>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>/</Text>
              </View>
            </Pressable>

          </View>
        
          <View style={styles.msk_row}>

            <Pressable onPress={()=>handlepress('7')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>7</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('8')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>8</Text>
              </View>
            </Pressable>

            <Pressable  onPress={()=>handlepress('9')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>9</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('*')}>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>*</Text>
              </View>
            </Pressable>

          </View>
        
          <View style={styles.msk_row}>

            <Pressable onPress={()=>handlepress('4')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>4</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('5')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>5</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('6')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>6</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('-')}>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>-</Text>
              </View>
            </Pressable>
            
          </View>

          <View style={styles.msk_row}>

            <Pressable onPress={()=>handlepress('1')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>1</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('2')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>2</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('3')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>3</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('+')}>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>+</Text>
              </View>
            </Pressable>
            
          </View>

          <View style={styles.msk_row}>

            <Pressable onPress={()=>handlepress('0')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>0</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('.')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>.</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('Del')}>
              <View style={styles.btn1_outer}>
                <Text style={styles.bg1_button}>Del</Text>
              </View>
            </Pressable>

            <Pressable onPress={()=>handlepress('=')}>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>=</Text>
              </View>
            </Pressable>
            
          </View>
        </View>

      </View>
    )
  }

export default MainScreen