class EnglishInvitation extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<div class="text">
<p>Hi <span class="name">INSERT_NAME_HERE</span>,</p>
<p>
We have decided to explore a new chapter in our life. To get a good start into our
adventure, we need the help of friends and family. Therefore, we invite you to the start
of
our journey (also called marriage) for hopefully delicious food, good company, and a
cozy time.
</p>
<p style="text-align: left;">
<b>Practical information:</b><br>
Date: <br>
October 14th, 2023, 11 am - … <br>
Place: <br>
Sundeved Centret, Stenderup Kirkebakke 4,<br>
6400 Sønderborg, Denmark<br>
</p>
<p>
There are sleeping possibilities from Friday to Sunday.<br>
Please write us a message whether you are coming or not before August 15th.<br>
We would also like to know whether you want to stay the night(s) and/or have any dietary
restrictions.<br>
</p>
</div>
      `;
    }
  }
  
  customElements.define('english-invitation', EnglishInvitation);
