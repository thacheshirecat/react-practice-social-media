import React from "react";

function Header()
{
  var HeadStyle = {

  }
  return(
    <div>
      <button>Home</button>
      <button>Notifactions</button>
      <button>Messages</button>
      <div style={{float: 'right'}}>
        <input placeholder="Search"></input>
        <button>Tweet</button>
      </div>
      <hr/>
    </div>
  );
}

export default Header;
