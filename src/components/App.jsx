import React from "react";
import Card from "./Card";

function App(props){
  return(
    <div >
    <h1 className="heading">My Contacts</h1>
<Card
  name="Hrithik Roshan"
  img="https://medicaldialogues.in/h-upload/2021/10/25/162666-hrithik-roshan.webp"
  tel = "+123 456 789"
  email= "hrithik@roshan.com"

/>
<Card
  name="Kangana Ranaut"
  img="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1651487090.jpg"
  tel = "+123 456 789"
  email="kangana@ranaut.com"
/>
<Card
  name="Kartik Aaryan"
  img="https://img.etimg.com/thumb/msid-94324148,width-1200,height-900,imgsize-38962,overlay-etpanache/photo.jpg"
  tel = "+123 456 789"
  email="kartik@aaryan.com"
/>
<Card
  name="Sushant Singh Rajput"
  img="https://media4.newsnationtv.com/photos/2019/01/21/3086_sushant-singh-rajput_7462.jpg"
  tel = "+123 456 789"
  email="sushant@rajput.com"
/>
    </div>
  );
}

export default App;