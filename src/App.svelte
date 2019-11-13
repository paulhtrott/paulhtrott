<script>
  export let name;
  export let API_URL;
</script>

<main>
  <!--Nav-->
  <nav class="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
    <div class="flex flex-wrap items-center">
      <div class="flex w-full p-2 sm:text-center md:text-right text-white">
        <img class="mx-2 rounded-full h-12 w-12 flex" src="https://www.gravatar.com/avatar/5c4b6bb578cf5e01bc857920fc8ec61a" alt="Paul H Trott - Software Engineer - Gravatar" />
        <p class="text-2xl">{name} <span class="italic text-xs">Software Engineer</span></p>
      </div>
    </div>
  </nav>
  <!-- End of Nav -->


  <div class="flex flex-col md:flex-row">
    <!-- Side Nav -->
    <div class="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

        <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                <li class="mr-3 flex-1">
                    <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 border-pink-500 hover:border-pink-500">
                        <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">At-A-Glance</span>
                    </a>
                </li>
                <li class="mr-3 flex-1">
                    <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                        <i class="fa fa-envelope pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Experience</span>
                    </a>
                </li>
                <li class="mr-3 flex-1">
                    <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-600">
                        <i class="fas fa-tasks pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Education</span>
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
    <!-- End of Side Nav -->

    <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
      <!-- Title in content section -->
      <div class="bg-blue-800 p-2 shadow text-xl text-white">
          <h3 class="font-bold pl-2">At-A-Glance</h3>
      </div>
      <!-- End of Title content section -->

      <!-- Skill Graphs -->
      <div class="flex flex-row flex-wrap flex-grow mt-2">
          <div class="w-full md:w-1/2 p-3">
              <!--Graph Card-->
              <div class="bg-white border-transparent rounded-lg shadow-lg">
                  <div class="bg-gray-400 uppercase text-gray-800 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                      <h5 class="font-bold uppercase text-gray-600">Experience</h5>
                  </div>
                  <div class="p-5">
                      <canvas id="years" class="chartjs" width="undefined" height="undefined"></canvas>
                      <script>
                          new Chart(document.getElementById("years"), {
                              "type": "bar",
                              "data": {
                                  "labels": ["CVTC", "JAMF", "GHC", "TheBlaze", "Pressable"],
                                  "datasets": [{
                                      "label": "Years of Experience",
                                      "data": [0.5, 1.7, 2, 2, 1],
                                      "borderColor": "rgb(170, 83, 95)",
                                      "backgroundColor": "rgba(170, 83, 95, 0.5)"
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

          <div class="w-full md:w-1/2 p-3">
              <!--Graph Card-->
              <div class="bg-white border-transparent rounded-lg shadow-lg">
                  <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                      <h5 class="font-bold uppercase text-gray-600">Language Usage</h5>
                  </div>
                  <div class="p-5">
                      <canvas id="programming_languages" class="chartjs" width="undefined" height="undefined"></canvas>
                      <script>
                          new Chart(document.getElementById("programming_languages"), {
                              "type": "doughnut",
                              "data": {
                                  "labels": ["Bash", "SQL", "Objective C", "Python", "C#", "Java", "Ruby", "GoLang", "Javascript"],
                                  "datasets": [{
                                      "label": "Knowledge %",
                                      "data": [1, 3, 1, 3, 10, 10, 50, 2, 20],
                                      "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgb(138,170,83)", "rgb(170,83,138)", "rgb(170,83,95)", "rgb(170,159,83)", "rgb(83,95,170)", "rgb(170,115,83)"]
                                  }]
                              }
                          });
                      </script>
                  </div>
              </div>
              <!--/Graph Card-->
          </div>

          <div class="w-full md:w-1/2 p-3">
              <!--Graph Card-->
              <div class="bg-white border-transparent rounded-lg shadow-lg">
                  <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                      <h5 class="font-bold uppercase text-gray-600">Ninja Web Studios LLC</h5>
                  </div>
                  <div class="p-5">
                      <canvas id="consulting_time" class="chartjs" width="undefined" height="undefined"></canvas>
                      <script>
                          new Chart(document.getElementById("consulting_time"), {
                              "type": "line",
                              "data": {
                                  "labels": ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
                                  "datasets": [{
                                      "label": "Hours Spent",
                                      "data": [1954, 1970, 2012, 1820, 1702, 120, 0, 0, 250, 300, 276],
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

          <div class="w-full md:w-1/2 p-3">
              <!--Table Card-->
              <div class="bg-white border-transparent rounded-lg shadow-lg">
                  <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                      <h5 class="font-bold uppercase text-gray-600">Frameworks</h5>
                  </div>
                  <div class="p-5">
                      <table class="w-full p-5 text-gray-700">
                          <thead>
                              <tr>
                                  <th class="text-left text-blue-900">Framework</th>
                                  <th class="text-left text-blue-900">Website</th>
                              </tr>
                          </thead>

                          <tbody>
                              <tr>
                                  <td>ReactJs and Ruby on Rails API</td>
                                  <td><a href="https://estimationbuilder.com">EstimationBuilder.com</a></td>
                              </tr>
                              <tr>
                                  <td>SvelteJs and Headless Wordpress API</td>
                                  <td><a href="https://paulhtrott.com">Paul H. Trott Resume</a></td>
                              </tr>
                              <tr>
                                  <td>Ruby on Rails</td>
                                  <td><a href="https://fishingtackletracker.com">Fishing Tackle Tracker</a></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <!--/table Card-->
          </div>
      </div>
    </div>
  </div>
</main>
