class GermanInvitation extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<div class="text">
<p>Hallo <span class="name">INSERT_NAME_HERE</span>,</p>
<p>
Wir haben uns dazu entschieden ein neues Kapitel in unserem Leben zu beginnen.
Für einen guten Start in dieses Abenteuer, würden wir uns über die Hilfe von Familie und Freunden freuen.
Aus diesem Grund seid ihr herzlich zum Start dieser Reise (auch Hochzeit genannt) eingeladen.
Dann können wir zusammen feiern mit hoffentlich leckerem Essen, guter Gesellschaft und gemütlichem Beisammen sein.
</p>
<p style="text-align: left;">
<b>Praktische Informationen:</b><br>
Datum:<br>
October 15th, 2023, 11 am - … <br>
Ort: <br>
Sundeved Centret, Stenderup Kirkebakke 4, <br>
6400 Sønderborg, Dänemark <br>
</p>
<p>
Schlafmöglichkeiten sind vorhanden von Freitag bis Sonntag. <br>
Wir würden uns freuen über eine Zusage oder Absage vor dem 15. August. <br>
Falls man gerne übernachten möchte und/oder Einschränkungen in der Ernährung hat, würden wir um eine frühzeitige Nachricht bitten. <br>
</p>
</div>
      `;
    }
  }
  
  customElements.define('german-invitation', GermanInvitation);