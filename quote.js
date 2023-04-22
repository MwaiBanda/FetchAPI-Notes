window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
      fetchQuotes(selectedTopic, selectedCount);	   
     
   });
});

async function fetchQuotes(topic, count) {
   const response = await fetch(`https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`)
   const quotes = await response.json()
  if (quotes.length > 0) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>${quotes[c - 1].quote} - ${quotes[c - 1].source}</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
} else {
       document.querySelector("#quotes").innerHTML = `Topic '${topic}' not found`;

}
}
