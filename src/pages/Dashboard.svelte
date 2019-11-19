<script>
  import { onMount } from 'svelte'
  import Title from './../components/Title.svelte'

  onMount(async () => {
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
  });
</script>

<Title title="Dashboard" />

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
            </div>
        </div>
        <!--/Graph Card-->
    </div>

    <div class="w-full md:w-1/2 p-3">
        <!--Graph Card-->
        <div class="bg-white border-transparent rounded-lg shadow-lg">
            <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 class="font-bold uppercase text-gray-600">Polyglot</h5>
            </div>
            <div class="p-5">
                <canvas id="programming_languages" class="chartjs" width="undefined" height="undefined"></canvas>
            </div>
        </div>
        <!--/Graph Card-->
    </div>

    <div class="w-full md:w-1/2 p-3">
        <!--Graph Card-->
        <div class="bg-white border-transparent rounded-lg shadow-lg">
            <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 class="font-bold uppercase text-gray-600">Contracting</h5>
            </div>
            <div class="p-5">
                <canvas id="consulting_time" class="chartjs" width="undefined" height="undefined"></canvas>
            </div>
        </div>
        <!--/Graph Card-->
    </div>

    <div class="w-full md:w-1/2 p-3">
        <!--Table Card-->
        <div class="bg-white border-transparent rounded-lg shadow-lg">
            <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 class="font-bold uppercase text-gray-600">Side-Projects</h5>
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
