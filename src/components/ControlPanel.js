import React from 'react';

function ControlPanel() {
   
    
    return (
    <div style={{ width: '100%', height: '100%' }}>  
    <fieldset>
  <legend>选择一个横坐标:</legend>

  <div>
    <input type="radio" id="year" name="xaxis" value="year"  />
    <label for="year">year</label>
  </div>

  <div>
    <input type="radio" id="country" name="xaxis" value="country" />
    <label for="country">country</label>
  </div>

  <div>
    <input type="radio" id="runtime" name="xaxis" value="runtime" />
    <label for="runtime">runtime</label>
  </div> 
    </fieldset>

    </div>
    );
}

export default ControlPanel;