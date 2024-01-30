import './App.css';
import React, {useState} from 'react';
import './App.css';

function Page1({ goToPage2, goToPage3 }) {
  return (
    <div>
      
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    body {\n      background-image: url("https://image.freepik.com/free-vector/watercolour-background-with-leaves_91008-324.jpg");\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n  ',
    }}
  />
  

      <h1></h1>
      <p>. </p>
           
<center>
  
  <img src="https://media.giphy.com/media/l41lMTlCUccbXYqxG/giphy.gif" width={350} height={350}  alt="Logo" />
        <h1 className="myText">PlantLy</h1>
        <p
  style={{
    fontFamily: '"Courier New", Courier, monospace',
    color: 'rgb(26, 26, 23)',
  }}
>
Let yourself grow with your plants ^_^
</p>

       
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        body {\n            font-family: Arial, sans-serif;\n            text-align: center;\n        }\n        .container input[type="submit"] {\n            width: 25%;\n            padding: 20px;\n            box-sizing: border-box;\n            background-color: #4c90af;\n            color: white;\n            border: none;\n            border-radius: 20px;\n            cursor: pointer;\n        }\n\n        .container input[type="submit"]:hover {\n            background-color: #45a049;\n        }\n    ',
    }}
  />
  <div className="container">
    <input onClick={goToPage3} type="submit"value="STEP IN" />
  </div>
      </center>

    </div>
  );
}

function Page2({ goToPage1, goToPage3 }) {
  const [name , setName] = useState('');
 const [Department , setDepartment] = useState('');
 const [MailId , setMailId] = useState('');
 const [confPassword , setConfPassword] = useState('');
 const [password , setPassword] = useState('');
 
 const handleChange =(e)=>{
 setName(e.target.value);
 }
 const handleAgeChange =(e)=>{
 setDepartment(e.target.value);
 }
 const handleMailIdChange =(e)=>{
 setMailId(e.target.value);
 }
 const handleConfPasswordChange =(e)=>{
 setConfPassword(e.target.value);
 }
 const handlePasswordChange =(e)=>{
 setPassword(e.target.value);
 }

 const handleSubmit=(e)=>{
 if(password!==confPassword)
{
 alert("password Not Match");
 }
else{
 alert('A form was submitted with Name :"' + name +
 '" ,Department:"'+Department +'" and MailId :"' + MailId + '"');
 }
 e.preventDefault();

 }
 
  return (
      <div className="Page2">       
 <header className="Page2-header">
 <button onClick={goToPage1}>&#8592;</button>
<center>
 <form onSubmit={(e) => {handleSubmit(e)}}>
   {}
  
 <h2>Create Your ID</h2>
<h3> Sign up here</h3>
<label >
User Name:
</label><br/>
 <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
{}
<h1></h1>
 <label >
Phone Number:
 </label><br/>
<input type="text" value={Department} required onChange={(e)=> {handleAgeChange(e)}} /><br/>
{}
<h1></h1>

<label>
 Mail Id: </label><br/>
<input type="MailId" value={MailId} required onChange={(e)=> {handleMailIdChange(e)}} /><br/>
 {}

 <title>Login Page</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        body {\n            font-family: Arial, sans-serif;\n            text-align: center;\n        }\n        .container input[type="submit"] {\n            width: 40%;\n            padding: 20px;\n            box-sizing: border-box;\n            background-color: #319945;\n            color: white;\n            border: none;\n            border-radius: 20px;\n            cursor: pointer;\n        }\n\n        .container input[type="submit"]:hover {\n            background-color: #cb5175;\n        }\n    ',
    }}
  />
  <div className="container">
    <h1></h1>
    <input type="submit" defaultValue="Log in" onClick={goToPage3}/>
  </div>
  
 <p></p>

 </form>
 </center>
</header>

    </div>
  );
}

const Page3 = ({ goToPage2, goToPage4 , goToPage5, goToPage6,goToPage7 }) => {
  
  return (
    
    <div>
      <div>
        
  <title>PlantLy.com</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: '\nbody,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}\n',
    }}
  />
  {/* Sidebar/menu */}
  <nav
    className="w3-sidebar w3-collapse w3-dark-grey w3-animate-left"
    style={{ zIndex: 3, width: 300 }}
    id="mySidebar"
  >
    <br />
    <div className="w3-container">
      <a
        href="#"
        onclick="w3_close()"
        className="w3-hide-large w3-right w3-jumbo w3-padding w3-dark-grey"
        title="close menu"
      >
        <i className="fa fa-remove" />
      </a>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.cYmg7_5Nrd-k9mvt35KOTwHaHa&pid=Api&P=0&h=180"
        style={{ width: '45%' }}
        className="w3-round"
      />
      <br />
      <br />
      <h4>
        <b>PlantLy</b>
      </h4>
    </div>
    <div className="w3-bar-block">
      <a
        href="#portfolio"
        onclick="w3_close()"
        className="w3-bar-item w3-button w3-padding w3-text"
      >
        <i className="fa fa-th-large fa-fw w3-margin-right" />
        HOME
      </a>
      
      <a
        href="#contact"
        onclick="w3_close()"
        className="w3-bar-item w3-button w3-padding"
      >
        <i className="fa fa-envelope fa-fw w3-margin-right" />
        CONTACT
      </a>
    </div>
    <div className="w3-panel w3-large">
      <i className="fa fa-facebook-official w3-hover-opacity"> &nbsp;</i>
      <i className="fa fa-instagram w3-hover-opacity" > &nbsp;</i>
      <i className="fa fa-snapchat w3-hover-opacity" > &nbsp;</i>
      <i className="fa fa-twitter w3-hover-opacity" > &nbsp;</i>
      <i className="fa fa-linkedin w3-hover-opacity" > &nbsp;</i>
    </div>
  </nav>
  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-hide-large w3-animate-opacity"
    onclick="w3_close()"
    style={{ cursor: 'pointer' }}
    title="close side menu"
    id="myOverlay"
  />
  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 300 }}>
    {/* Header */}
    <header id="portfolio">
      <a href="#">
        <img
          src="/w3images/avatar_g2.jpg"
          style={{ width: 65 }}
          className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
          width="100px"
          height="300px"
        />
      </a>
      <span
        className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
        onclick="w3_open()"
      >
        <i className="fa fa-bars" />
      </span>
      <div className="w3-container">
        <h1>
          <b>PlantLy- Online plant guide</b>
        </h1>
        <div className="w3-section w3-bottombar w3-padding-16">
          <span className="w3-margin-right">Filter:</span>
          <button className="w3-button w3-black">ALL</button>
          <button className="w3-button w3-white">
            <i className="fa fa-diamond w3-margin-right" />
            Premium
          </button>
          <button className="w3-button w3-white w3-hide-small">
            <i className="fa fa-photo w3-margin-right" />
            Categories
          </button>
        </div>
      </div>
    </header>
    
    {/* First Photo Grid*/}
    <div className="w3-row-padding">
      <div className="w3-third w3-container w3-margin-bottom">
          <img
            src="https://a6adc47bb216dfe8a383-49bf67815854ec9e2c04a8f4abb9cbf5.ssl.cf3.rackcdn.com/images/products2/pl/20/00/02/72/pl2000027236_card_lg.jpg"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
             
        <div className="w3-container w3-white">
          <p>
            <b>SPIDER PLANT</b>
          </p>
          <p>
            “The long green leaves of the Spider Plant are striped with white.
            It gets its name because of the unique spider-like growth that
            dangles from the ends of the mother plant.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage4}>View</button>
</div>

        </div>
      </div>
      <div className="w3-third w3-container w3-margin-bottom">
        <a href="">
          <img
            src="https://www.houseplant411.com/wp-content/uploads/aloe-vera-white-pot_sunwand24-ss_edit-2048x1365.jpg"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>ALOE VERA</b>
          </p>
          <p>
            “Aloe vera is an evergreen succulent species native to the Arabian
            Peninsula. The thick leaves are filled with gooey flesh that stores
            water for survival in its native desert territories. ”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage5}>View</button>
</div>
        </div>
      </div>
      <div className="w3-third w3-container">
        <a href="">
          <img
            src="https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>PEPPERS</b>
          </p>
          <p>
            “ Most are moderately spicy, though because there are so many
            variants, the spice level can vary dramatically. It is
            also a popular seasoning product made from peppers plants.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage6}>View</button>
</div>

        </div>
      </div>
    </div>
    {/* Second Photo Grid*/}
    <div className="w3-row-padding">
      <div className="w3-third w3-container w3-margin-bottom">
        <a href="">
          <img
            src="https://www.avasflowers.net/img/prod_img/avasflowers-peace-lily-plant-as-shown-10221.png"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>PEACE LILY</b>
          </p>
          <p>
            "A plant as beautiful as its name, the leaves of Peace Lily are
            clusters of shiny, golden ovals. Creamy-white hooded flowers adorn
            the plant during spring and early summer.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage4}>View</button>
</div>
        </div>
      </div>
      <div className="w3-third w3-container w3-margin-bottom">
        <a href="">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.IHT1qEtSFTxYq0veqY8QyAHaFQ&pid=Api&P=0&h=180"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>CHINESE HIBISCUS</b>
          </p>
          <p>
            “Chinese hibiscus is the national flower of Malaysia and is featured
            on Malaysian coins. Although the Latin name, Hibiscus rosa-sinensis,
            means “the rose of China,” it is not related to true roses.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage4}>View</button>
</div>        </div>
      </div>
      <div className="w3-third w3-container">
        <a href="">
          <img
            src="https://asset.bloomnation.com/c_limit,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1605832238/vendor/5422/catalog/product/2/0/20201119042900_file_5fb69d4c6746d_5fb69da1328aa.jpg"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>SNAKE PLANT</b>
          </p>
          <p>
            “An evergreen plant with long, sharp, green leaves, the Snake Plant
            can be considered the ideal easy-to-grow houseplant. On maturing,
            fragrant white flowers may grace the plant occasionally.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage4}>View</button>
</div>        </div>
      </div>
    </div>
    {/* Pagination */}
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          «
        </a>
        
        <a href="#" className="w3-bar-item w3-black w3-button" onClick={goToPage7}>
          1
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          2
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          3
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          4
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          »
        </a>
      </div>
    </div>
   
    {/* Contact Section */}
    <div className="w3-container w3-padding-large w3-grey">
      <h4 id="contact">
        <b>Contact Me</b>
      </h4>
      <div
        className="w3-row-padding w3-center w3-padding-24"
        style={{ margin: '0 -16px' }}
      >
        <div className="w3-third w3-dark-grey">
          <p>
            <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
          </p>
          <p>plantly24@email.com</p>
        </div>
        <div className="w3-third w3-teal">
          <p>
            <i className="fa fa-map-marker w3-xxlarge w3-text-light-grey" />
          </p>
          <p>Erode, Tamil Nadu</p>
        </div>
        <div className="w3-third w3-dark-grey">
          <p>
            <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
          </p>
          <p>0427-5561-8787</p>
        </div>
      </div>
      <hr className="w3-opacity" />
      <form action="/action_page.php" target="_blank">
        
        
      </form>
    </div>
    {/* Footer */}
    <footer className="w3-container w3-padding-32 w3-dark-grey">
      <div className="w3-row-padding">
        <div className="w3-third">
          <h3>TO KNOW MORE</h3>
          <p>About PlantLy.com</p>
          <p>
            {' '}
            Launched in 2023, PlantLy.com provides detailed descriptions, images, and recommended treatments, that empowers users to take prompt action and protect their plants from potential harm.
          </p>
        </div>
        <div className="w3-third">
          <h3></h3>
              
              <br />
              
              <br />
        </div>
        <div className="w3-third">
          <h3>TAGS</h3>
          <p>
            <span className="w3-tag w3-black w3-margin-bottom">Privacy policy</span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Customer care
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Terms & conditions
            </span>
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Ratings
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Read
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              News
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Updates
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom"></span>
          </p>
        </div>
      </div>
    </footer>
    {/* End page content */}
  </div>
</div>;

      <button onClick={goToPage2}>Go to Page 2</button>
    </div>
  );
}
const Page7 = ({ goToPage2, goToPage4 , goToPage5, goToPage6 }) => {
  
  return (
    
    <div>
      <div>
        
  <title>PlantLy.com</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: '\nbody,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}\n',
    }}
  />
  {/* Sidebar/menu */}
  <nav
    className="w3-sidebar w3-collapse w3-dark-grey w3-animate-left"
    style={{ zIndex: 3, width: 300 }}
    id="mySidebar"
  >
    <br />
    <div className="w3-container">
      <a
        href="#"
        onclick="w3_close()"
        className="w3-hide-large w3-right w3-jumbo w3-padding w3-dark-grey"
        title="close menu"
      >
        <i className="fa fa-remove" />
      </a>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.cYmg7_5Nrd-k9mvt35KOTwHaHa&pid=Api&P=0&h=180"
        style={{ width: '45%' }}
        className="w3-round"
      />
      <br />
      <br />
      <h4>
        <b>PlantLy</b>
      </h4>
    </div>
    <div className="w3-bar-block">
      <a
        href="#portfolio"
        onclick="w3_close()"
        className="w3-bar-item w3-button w3-padding w3-text"
      >
        <i className="fa fa-th-large fa-fw w3-margin-right" />
        HOME
      </a>
      
      <a
        href="#contact"
        onclick="w3_close()"
        className="w3-bar-item w3-button w3-padding"
      >
        <i className="fa fa-envelope fa-fw w3-margin-right" />
        CONTACT
      </a>
    </div>
    <div className="w3-panel w3-large">
      <i className="fa fa-facebook-official w3-hover-opacity"> &nbsp;</i>
      <i className="fa fa-instagram w3-hover-opacity" > &nbsp;</i>
      <i className="fa fa-snapchat w3-hover-opacity" > &nbsp;</i>
      <i className="fa fa-twitter w3-hover-opacity" > &nbsp;</i>
      <i className="fa fa-linkedin w3-hover-opacity" > &nbsp;</i>
    </div>
  </nav>
  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-hide-large w3-animate-opacity"
    onclick="w3_close()"
    style={{ cursor: 'pointer' }}
    title="close side menu"
    id="myOverlay"
  />
  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 300 }}>
    {/* Header */}
    <header id="portfolio">
      <a href="#">
        <img
          src="/w3images/avatar_g2.jpg"
          style={{ width: 65 }}
          className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
          width="100px"
          height="300px"
        />
      </a>
      <span
        className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
        onclick="w3_open()"
      >
        <i className="fa fa-bars" />
      </span>
      <div className="w3-container">
        <h1>
          <b>PlantLy- Online plant guide</b>
        </h1>
        <div className="w3-section w3-bottombar w3-padding-16">
          <span className="w3-margin-right">Filter:</span>
          <button className="w3-button w3-black">ALL</button>
          <button className="w3-button w3-white">
            <i className="fa fa-diamond w3-margin-right" />
            Premium
          </button>
          <button className="w3-button w3-white w3-hide-small">
            <i className="fa fa-photo w3-margin-right" />
            Categories
          </button>
        </div>
      </div>
    </header>
    
    {/* First Photo Grid*/}
    <div className="w3-row-padding">
      <div className="w3-third w3-container w3-margin-bottom">
          <img
            src="https://a6adc47bb216dfe8a383-49bf67815854ec9e2c04a8f4abb9cbf5.ssl.cf3.rackcdn.com/images/products2/pl/20/00/02/72/pl2000027236_card_lg.jpg"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
             
        <div className="w3-container w3-white">
          <p>
            <b>SPIDER PLANT</b>
          </p>
          <p>
            “The long green leaves of the Spider Plant are striped with white.
            It gets its name because of the unique spider-like growth that
            dangles from the ends of the mother plant.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage4}>View</button>
</div>

        </div>
      </div>
      <div className="w3-third w3-container w3-margin-bottom">
        <a href="">
          <img
            src="https://www.houseplant411.com/wp-content/uploads/aloe-vera-white-pot_sunwand24-ss_edit-2048x1365.jpg"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>ALOE VERA</b>
          </p>
          <p>
            “Aloe vera is an evergreen succulent species native to the Arabian
            Peninsula. The thick leaves are filled with gooey flesh that stores
            water for survival in its native desert territories. ”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage5}>View</button>
</div>
        </div>
      </div>
      <div className="w3-third w3-container">
        <a href="">
          <img
            src="https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>PEPPERS</b>
          </p>
          <p>
            “ Most are moderately spicy, though because there are so many
            variants, the spice level can vary dramatically. It is
            also a popular seasoning product made from peppers plants.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage6}>View</button>
</div>

        </div>
      </div>
    </div>
    {/* Second Photo Grid*/}
    <div className="w3-row-padding">
      <div className="w3-third w3-container w3-margin-bottom">
        <a href="">
          <img
            src="https://www.avasflowers.net/img/prod_img/avasflowers-peace-lily-plant-as-shown-10221.png"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>PEACE LILY</b>
          </p>
          <p>
            "A plant as beautiful as its name, the leaves of Peace Lily are
            clusters of shiny, golden ovals. Creamy-white hooded flowers adorn
            the plant during spring and early summer.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage4}>View</button>
</div>
        </div>
      </div>
      <div className="w3-third w3-container w3-margin-bottom">
        <a href="">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.IHT1qEtSFTxYq0veqY8QyAHaFQ&pid=Api&P=0&h=180"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>CHINESE HIBISCUS</b>
          </p>
          <p>
            “Chinese hibiscus is the national flower of Malaysia and is featured
            on Malaysian coins. Although the Latin name, Hibiscus rosa-sinensis,
            means “the rose of China,” it is not related to true roses.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage4}>View</button>
</div>        </div>
      </div>
      <div className="w3-third w3-container">
        <a href="">
          <img
            src="https://asset.bloomnation.com/c_limit,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1605832238/vendor/5422/catalog/product/2/0/20201119042900_file_5fb69d4c6746d_5fb69da1328aa.jpg"
            alt="Norway"
            style={{ width: '100%' }}
            className="w3-hover-opacity"
            width="100px"
            height="300px"
          />
        </a>
        <div className="w3-container w3-white">
          <p>
            <b>SNAKE PLANT</b>
          </p>
          <p>
            “An evergreen plant with long, sharp, green leaves, the Snake Plant
            can be considered the ideal easy-to-grow houseplant. On maturing,
            fragrant white flowers may grace the plant occasionally.”
          </p>
          <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #05bb90;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #056951;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage4}>View</button>
</div>        </div>
      </div>
    </div>
    {/* Pagination */}
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          «
        </a>
        
        <a href="#" className="w3-bar-item w3-black w3-button" onClick={goToPage4}>
          1
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          2
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          3
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          4
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          »
        </a>
      </div>
    </div>
   
    {/* Contact Section */}
    <div className="w3-container w3-padding-large w3-grey">
      <h4 id="contact">
        <b>Contact Me</b>
      </h4>
      <div
        className="w3-row-padding w3-center w3-padding-24"
        style={{ margin: '0 -16px' }}
      >
        <div className="w3-third w3-dark-grey">
          <p>
            <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
          </p>
          <p>plantly24@email.com</p>
        </div>
        <div className="w3-third w3-teal">
          <p>
            <i className="fa fa-map-marker w3-xxlarge w3-text-light-grey" />
          </p>
          <p>Erode, Tamil Nadu</p>
        </div>
        <div className="w3-third w3-dark-grey">
          <p>
            <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
          </p>
          <p>0427-5561-8787</p>
        </div>
      </div>
      <hr className="w3-opacity" />
      <form action="/action_page.php" target="_blank">
        
        
      </form>
    </div>
    {/* Footer */}
    <footer className="w3-container w3-padding-32 w3-dark-grey">
      <div className="w3-row-padding">
        <div className="w3-third">
          <h3>TO KNOW MORE</h3>
          <p>About PlantLy.com</p>
          <p>
            {' '}
            Launched in 2023, PlantLy.com provides detailed descriptions, images, and recommended treatments, that empowers users to take prompt action and protect their plants from potential harm.
          </p>
        </div>
        <div className="w3-third">
          <h3></h3>
              
              <br />
              
              <br />
        </div>
        <div className="w3-third">
          <h3>TAGS</h3>
          <p>
            <span className="w3-tag w3-black w3-margin-bottom">Privacy policy</span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Customer care
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Terms & conditions
            </span>
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Ratings
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Read
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              News
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Updates
            </span>{' '}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom"></span>
          </p>
        </div>
      </div>
    </footer>
    {/* End page content */}
  </div>
</div>;

      <button onClick={goToPage2}>Go to Page 2</button>
    </div>
  );
}
const Page4 = ({goToPage3}) =>{
  return(
    <div>
  <title>Spider Plant</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* CSS styles for the website */\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n    }\n    header {\n      background-color: #333;\n      color: #fff;\n      padding: 40px;\n    }\n    h1 {\nbackground-color: cee3f7;\n      margin: 0;\n    }\n    nav {\n      background-color: #b2c77d;\n      color: #fff;\n      padding: 10px;\n    }\n    nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n    }\n    nav ul li {\n      display: inline;\n      margin-right: 10px;\n    }\n    nav ul li a {\n      color: #cee3f7;\n      text-decoration: none;\n    }\n    main {\nbackground-color: cee3f7;\n      padding: 20px;\n    }\n    footer {\n      background-color: #333;\n      color: #fff;\n      padding: 10px;\n      text-align: center;\n    }\n  ',
    }}
  />
  <header>
    <h1>Spider Plant</h1>
  </header>
  <nav></nav>
  <main>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\nbody {\n  background-image: url('https://www.hortmag.com/.image/t_share/MTY5MTI2ODkzMDgzOTYwNjA5/image-placeholder-title.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n",
      }}
    />
    <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #515b58;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #688880;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage3}>Back</button>
</div>
    <p
      style={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp2825988.jpg")',
      }}
    ></p>
    <h2>Also known as</h2>
    <p>Anthericum comosum, Hartwegia comosa.</p>
    <p>
      It is one of the easiest to grow houseplants, the Spider Plant is a
      low-maintenance, attractive addition to any home.{' '}
    </p>
    <h2>Steps to take care</h2>
    <ul>
      <li>Light: Spider plants thrive in bright, indirect light.</li>
      <li>
        Temperature: Spider plants prefer average room temperatures between
        60-75°F{' '}
      </li>
      <li>
        Watering: Spider plants like to be evenly moist but not overly wet.
      </li>
      <li>
        Fertilizer: Feed your spider plant with a balanced, water-soluble
        houseplant fertilizer.
      </li>
      <li>Pest control: Spider plants are generally resistant to pests</li>
    </ul>
    <h2>How to take care</h2>
    <p>
      These plantlets can be rooted in water or soil to propagate new plants.
      Prune any brown or damaged leaves regularly to maintain the plant's
      appearance.
    </p>
    <h2>Fertilizers to use</h2>
    <p>
      Feed once every month during the spring and summer with an all-purpose
      fertilizer for indoor plants.
    </p>
    <p>The Spider Plant is non-toxic and safe for humans, dogs, and cats.</p>
    <p>
      While maintaining a garden is no child's play, it does not have to be
      nerve-wracking.{' '}
    </p>
  </main>
  <footer>
    <p>© PlantLy. All rights reserved.</p>
  </footer>
</div>

  );
}
const Page5 = ({goToPage3}) =>{
  return (
    <div>
  <title>Aloe Vera</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* CSS styles for the website */\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n    }\n    header {\n      background-color: #333;\n      color: #fff;\n      padding: 40px;\n    }\n    h1 {\nbackground-color: cee3f7;\n      margin: 0;\n    }\n    nav {\n      background-color: #b6e9cc;\n      color: #fff;\n      padding: 10px;\n    }\n    nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n    }\n    nav ul li {\n      display: inline;\n      margin-right: 10px;\n    }\n    nav ul li a {\n      color: #cef7da;\n      text-decoration: none;\n    }\n    main {\nbackground-color: cee3f7;\n      padding: 20px;\n    }\n    footer {\n      background-color: #333;\n      color: #fff;\n      padding: 10px;\n      text-align: center;\n    }\n  ',
    }}
  />
  <header>
    <h1>Aloe Vera</h1>
  </header>
  <nav></nav>
  <main>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\nbody {\n  background-image: url('https://ak.picdn.net/shutterstock/videos/1007706247/thumb/1.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n",
      }}
    />
         <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #515b58;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #688880;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage3}>Back</button>
</div>

    <p
      style={{
        backgroundImage:
          'url("http://cdn.wallpapersafari.com/16/70/ulTDdW.jpg")',
      }}
    ></p>
    <h2>Also Known As</h2>
    <p>Chinese aloe, Wand of heaven, Burn aloe.</p>
    <p>Aloe Vera thrives in natural bright light, indoors or outdoors.</p>
    <h2>Steps to take care</h2>
    <ul>
      <li>Water sparingly</li>
      <li>Allow the soil to dry out </li>
      <li>Provide indirect sunlight</li>
      <li>Wait for new growth</li>
      <li>Transplant the new plant</li>
    </ul>
    <h2>How to care</h2>
    <p>
      Aloe Vera thrives in natural bright light, indoors or outdoors. However,
      direct harsh sunlight can cause damage. The plant also needs low watering.
    </p>
    <p>
      {' '}
      You can water it once a week in summers and space the timing even more in
      winters and rainy seasons.
    </p>
    <p>
      While maintaining a garden is no child's play, it does not have to be
      nerve-wracking.{' '}
    </p>
    <h2>Fertilizers to use</h2>
    <p>Enhanced resilience</p>
    <p>
      Use about ¼ cup to ½ cup of fresh aloe vera per gallon of water total.
    </p>
  </main>
  <footer>
    <p>© PlantLy. All rights reserved.</p>
  </footer>
</div>
  );
}
const Page6 = ({goToPage3}) =>{
  return(
<div>
  <title>Peppers</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* CSS styles for the website */\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n    }\n    header {\n      background-color: #333;\n      color: #fff;\n      padding: 40px;\n    }\n    h1 {\nbackground-color: cee3f7;\n      margin: 0;\n    }\n    nav {\n      background-color: #d58b96;\n      color: #fff;\n      padding: 10px;\n    }\n    nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n    }\n    nav ul li {\n      display: inline;\n      margin-right: 10px;\n    }\n    nav ul li a {\n      color: #cef7da;\n      text-decoration: none;\n    }\n    main {\nbackground-color: cee3f7;\n      padding: 20px;\n    }\n    footer {\n      background-color: #333;\n      color: #fff;\n      padding: 10px;\n      text-align: center;\n    }\n  ',
    }}
  />
  <header>
    <h1>Peppers</h1>
  </header>
  <nav></nav>
  <main>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\nbody {\n  background-image: url('http://growhotpeppers.com/wp-content/uploads/2017/03/pepper-plant.jpg');\n  background-repeat: no-repeat;\n  background-size: 125%;\n}\n",
      }}
    />
 <div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Button Styles */\n    .button {\n      display: inline-block;\n      padding: 8px 17px;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      background-color: #515b58;\n      color: #FFFFFF;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .button:hover {\n      background-color: #688880;\n    }\n  ',
    }}
  />
  <button className="button" onClick={goToPage3}>Back</button>
</div>
    <p
      style={{
        backgroundImage:
          'url("http://cdn.wallpapersafari.com/16/70/ulTDdW.jpg")',
      }}
    ></p>
    <h2>Also Known As</h2>
    <p>Piper, Capsicum.</p>
    <p>
      Peppers are a warm-season crop and come in a variety of colors, shapes,
      and sizes.
    </p>
    <h2>Steps to take care</h2>
    <ul>
      <li>Light: Black pepper plants thrive in bright, indirect sunlight.</li>
      <li>Temperature: Maintain a warm temperature between 60-90°F. </li>
      <li>Watering: Keep the soil consistently moist but not waterlogged.</li>
      <li>Humidity: Black pepper plants prefer high humidity.</li>
      <li>Propagation: Black pepper plants can be propagated from cuttings.</li>
    </ul>
    <h2>How to care</h2>
    <p>
      Ensure good drainage to prevent waterlogging, as overly wet conditions can
      lead to root rot.
    </p>
    <p> Pruning can also help control the size of the plant.</p>
    <p>
      Watch for signs of diseases such as root rot or fungal infections and take
      necessary measures to address them.{' '}
    </p>
    <h2>Fertilizers to use</h2>
    <p>
      A mixture of peat moss, perlite, and compost can work well for black
      pepper plants.{' '}
    </p>
    <p>Well-rotted manure, fish emulsion, seaweed extract, and bone meal.</p>
  </main>
  <footer>
    <p>© PlantLy. All rights reserved.</p>
  </footer>
</div>
  );
 }
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage2 = () => {
    setCurrentPage(2);
  };

  const goToPage1 = () => {
    setCurrentPage(1);
  };

  const goToPage3 = () => {
    setCurrentPage(3);
  };
  const goToPage4 = () => {
    setCurrentPage(4);
  };
    const goToPage5 = () => {
      setCurrentPage(5);
  };
  const goToPage6 = () => {
    setCurrentPage(6);
};
const goToPage7 = () => {
  setCurrentPage(7);
};


  return (
    <div>
    {currentPage === 1 ? (
        <Page1 goToPage2={goToPage2} goToPage3={goToPage3} />
      ) : currentPage === 2 ? (
        <Page2 goToPage1={goToPage1} goToPage3={goToPage3} />
      ) : currentPage === 3 ? (
        <Page3 goToPage2={goToPage2} goToPage4={goToPage4} goToPage5={goToPage5} goToPage6={goToPage6} goToPage7={goToPage7} />
      ) : currentPage ===4? (
        <Page4 goToPage3={goToPage3} />
      ) : currentPage ===5? (
      <Page5 goToPage3={goToPage3} />
      ) : 
      <Page6 goToPage3={goToPage3} />
      }
 
  </div>
);

}

export default App;

