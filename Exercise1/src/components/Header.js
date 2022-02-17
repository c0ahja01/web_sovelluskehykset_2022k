import React from 'react';

export default function Header() {
  return(
  
  <div className="headerOuter">
     
    <div className="headerInner">
        <img src="helsingisanomatLogo.jpg" alt="logo"/>
      <div className="menuElement">Etusivu</div>
      <div className="menuElement">Etusivu</div>
      <div className="menuElement">Uutiset</div>
      <div className="menuElement">Lehdet</div>
      <div className="menuElement">Asiakaspalvelu</div>
            
            <button>Tilaa</button>
      <div className="menuElementLisa"> Kirjaudu</div>
      <div className="menuElementLisa"> Valikko</div>
    </div>
      
  </div>
  );
}