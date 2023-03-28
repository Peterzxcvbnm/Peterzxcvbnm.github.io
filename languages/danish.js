class DanishInvitation extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<div class="text">
<p>Hej <span class="name">INSERT_NAME_HERE</span>,</p>
<p>
Vi har besluttet at udforske et nyt kapitel af vores liv.
Vi har brug for hjælp fra venner og familie til at få en god start på vores nye eventyr.
Derfor inviterer vi hermed du/I til starten på vores rejse (også kaldet ægteskab) med forhåbentligt lækker mad, godt selskab og hyggeligt samvær. 
</p>
<p style="text-align: left;">
<b>Praktisk information:</b><br>
Dato: <br>
14. oktober 2023 11 - … <br>
Sted: <br> 
Sundeved Centret, Stenderup Kirkebakke 4, <br>
6400 Sønderborg, Danmark <br>
</p>
<p>
Der vil være overnatningsmuligheder fredag til søndag. <br>
Vi vil gerne vide hvis du/I overnatter og hvis du/I har nogle allergier, som vi skal tænke på.<br>
Svar udbedes inden d. 15. august. <br>
</p>
</div>
      `;
    }
  }
  
  customElements.define('danish-invitation', DanishInvitation);
