console.log("News API in Javascript");


let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c5b24cbaeb2e4e88aed3e8471bd94218",
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    
    let newsHTML = "";

    articles.forEach((element, index) => {
      let news = `

            <div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">

                <b>Breaking News: </b> ${index + 1} ${element["title"]}
                </button>
              </h2>
            </div>
            
            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
              <div class="card-body">
                ${element["content"]}. <a href="${
        element["url"]
      }" target="_blank">Read more here...</a>
              </div>
            </div>
            </div>
            
            </div>`;

      newsHTML += news;
    });

    newsAccordion.innerHTML = newsHTML;
  } else {
    console.log("Some error occured!..");
  }
};
xhr.send();
