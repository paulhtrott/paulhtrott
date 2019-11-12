<main>
  <!--Nav-->
  <nav class="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
    <div class="flex flex-wrap items-center">
      <div class="flex w-full p-2 sm:text-center md:text-right text-white">
        <img class="mx-2 rounded-full h-12 w-12 flex" src="https://www.gravatar.com/avatar/5c4b6bb578cf5e01bc857920fc8ec61a" alt="Paul H Trott - Software Engineer - Gravatar" />
        <p class="text-2xl">Paul Trott <span class="italic text-xs">Software Engineer</span></p>
      </div>
    </div>
  </nav>


  <div class="flex flex-col md:flex-row">

      <div class="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

          <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
              <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                  <li class="mr-3 flex-1">
                      <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                          <i class="fas fa-tasks pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Skills</span>
                      </a>
                  </li>
                  <li class="mr-3 flex-1">
                      <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                          <i class="fa fa-envelope pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Experience</span>
                      </a>
                  </li>
                  <li class="mr-3 flex-1">
                      <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                          <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Education</span>
                      </a>
                  </li>
                  <li class="mr-3 flex-1">
                      <a href="#" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                          <i class="fa fa-wallet pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Blog Posts</span>
                      </a>
                  </li>
              </ul>
          </div>
      </div>

      <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div class="bg-blue-800 p-2 shadow text-xl text-white">
              <h3 class="font-bold pl-2">Skills</h3>
          </div>

          <div class="flex flex-row flex-wrap flex-grow mt-2">
              <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                  <!--Graph Card-->
                  <div class="bg-white border-transparent rounded-lg shadow-lg">
                      <div class="bg-gray-400 uppercase text-gray-800 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                          <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                      </div>
                      <div class="p-5">
                          <canvas id="chartjs-7" class="chartjs" width="undefined" height="undefined"></canvas>
                          <script>
                              new Chart(document.getElementById("chartjs-7"), {
                                  "type": "bar",
                                  "data": {
                                      "labels": ["January", "February", "March", "April"],
                                      "datasets": [{
                                          "label": "Page Impressions",
                                          "data": [10, 20, 30, 40],
                                          "borderColor": "rgb(255, 99, 132)",
                                          "backgroundColor": "rgba(255, 99, 132, 0.2)"
                                      }, {
                                          "label": "Adsense Clicks",
                                          "data": [5, 15, 10, 30],
                                          "type": "line",
                                          "fill": false,
                                          "borderColor": "rgb(54, 162, 235)"
                                      }]
                                  },
                                  "options": {
                                      "scales": {
                                          "yAxes": [{
                                              "ticks": {
                                                  "beginAtZero": true
                                              }
                                          }]
                                      }
                                  }
                              });
                          </script>
                      </div>
                  </div>
                  <!--/Graph Card-->
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                  <!--Graph Card-->
                  <div class="bg-white border-transparent rounded-lg shadow-lg">
                      <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                          <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                      </div>
                      <div class="p-5">
                          <canvas id="chartjs-0" class="chartjs" width="undefined" height="undefined"></canvas>
                          <script>
                              new Chart(document.getElementById("chartjs-0"), {
                                  "type": "line",
                                  "data": {
                                      "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                      "datasets": [{
                                          "label": "Views",
                                          "data": [65, 59, 80, 81, 56, 55, 40],
                                          "fill": false,
                                          "borderColor": "rgb(75, 192, 192)",
                                          "lineTension": 0.1
                                      }]
                                  },
                                  "options": {}
                              });
                          </script>
                      </div>
                  </div>
                  <!--/Graph Card-->
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                  <!--Graph Card-->
                  <div class="bg-white border-transparent rounded-lg shadow-lg">
                      <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                          <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                      </div>
                      <div class="p-5">
                          <canvas id="chartjs-1" class="chartjs" width="undefined" height="undefined"></canvas>
                          <script>
                              new Chart(document.getElementById("chartjs-1"), {
                                  "type": "bar",
                                  "data": {
                                      "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                      "datasets": [{
                                          "label": "Likes",
                                          "data": [65, 59, 80, 81, 56, 55, 40],
                                          "fill": false,
                                          "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                                          "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                                          "borderWidth": 1
                                      }]
                                  },
                                  "options": {
                                      "scales": {
                                          "yAxes": [{
                                              "ticks": {
                                                  "beginAtZero": true
                                              }
                                          }]
                                      }
                                  }
                              });
                          </script>
                      </div>
                  </div>
                  <!--/Graph Card-->
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                  <!--Graph Card-->
                  <div class="bg-white border-transparent rounded-lg shadow-lg">
                      <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                          <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                      </div>
                      <div class="p-5"><canvas id="chartjs-4" class="chartjs" width="undefined" height="undefined"></canvas>
                          <script>
                              new Chart(document.getElementById("chartjs-4"), {
                                  "type": "doughnut",
                                  "data": {
                                      "labels": ["P1", "P2", "P3"],
                                      "datasets": [{
                                          "label": "Issues",
                                          "data": [300, 50, 100],
                                          "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                      }]
                                  }
                              });
                          </script>
                      </div>
                  </div>
                  <!--/Graph Card-->
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                  <!--Table Card-->
                  <div class="bg-white border-transparent rounded-lg shadow-lg">
                      <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                          <h5 class="font-bold uppercase text-gray-600">Table</h5>
                      </div>
                      <div class="p-5">
                          <table class="w-full p-5 text-gray-700">
                              <thead>
                                  <tr>
                                      <th class="text-left text-blue-900">Name</th>
                                      <th class="text-left text-blue-900">Side</th>
                                      <th class="text-left text-blue-900">Role</th>
                                  </tr>
                              </thead>

                              <tbody>
                                  <tr>
                                      <td>Obi Wan Kenobi</td>
                                      <td>Light</td>
                                      <td>Jedi</td>
                                  </tr>
                                  <tr>
                                      <td>Greedo</td>
                                      <td>South</td>
                                      <td>Scumbag</td>
                                  </tr>
                                  <tr>
                                      <td>Darth Vader</td>
                                      <td>Dark</td>
                                      <td>Sith</td>
                                  </tr>
                              </tbody>
                          </table>

                          <p class="py-2"><a href="#">See More issues...</a></p>

                      </div>
                  </div>
                  <!--/table Card-->
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                  <!--Template Card-->
                  <div class="bg-white border-transparent rounded-lg shadow-lg">
                      <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                          <h5 class="font-bold uppercase text-gray-600">Template</h5>
                      </div>
                      <div class="p-5">

                      </div>
                  </div>
                  <!--/Template Card-->
              </div>
          </div>
      </div>
  </div>
</main>
