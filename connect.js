const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/danceregister",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  // useCreateIndex:true
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(e);
})

style.css


/*  import google fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
*{
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body{
  background: rgb(226, 226, 226);
}
nav{
  position: sticky;
  top: 0;
  bottom: 0;
  height: 100vh;
  left: 0;
  width: 230px;
  background-color:hotpink;
  overflow: visible;
  transition: 1s;
}
nav:hover{
  width: 280px;
  color: powderblue;
  transition: 1s;
}
.logo{
  text-align: center;
  display: flex;
  margin: 10px 0 0 10px;
  padding-bottom: 3rem;
}

.logo img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.logo span{
  font-weight: bold;
  padding-left: 15px;
  font-size: 20px;
  text-transform: uppercase;
}
a{
  position: relative;
  width: 280px;
  font-size: 14px;
  color: powderblue;
  display: table;
  padding: 12px;
}
nav .fas{
  position: relative;
  width: 70px;
  height: 40px;
  top: 20px;
  font-size: 20px;
  text-align: center;
}
.nav-item{
  color:white;
  font-size: 20px;
  position: relative;
  top: 12px;
  margin-left: 10px;
}
a:hover{
  background: pink;
}

.back{
  position: absolute;
  bottom: 0;
}

.container{
  display: flex;
}
.main{
  position: relative;
  width: 100%;
  background-image:url(db1.png);
background-position: center;
  background-repeat: no-repeat;
    background-size: cover;
padding-left:100px;
  
}
.main-top{
  display: flex;
  width: 100%;
   text-align:centre;
}
h2{
font-weight:bold;
color:hotpink;
font-style:italic;
}
h1{
font-weight:bold;
color:powderblue;
font-style:oblique;
}
.it{
    display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius:300px;
}
 .t{
    display: block;
 }
 .header {
  padding: 1px;
  text-align: center;
  color:hotpink;
  font-size: 30px;
}






