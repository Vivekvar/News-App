<img src="https://res.cloudinary.com/vivekcloud/image/upload/v1648042133/Yelp-Camp/Screenshot_20_u1hdsp.png">
<h1>News App</h1>
News App is an app using which the users can get to know what is happening around the globe i.e., they can read latest news of different countries.
<br>
A particular news is shown in the form of a card which also contains the source, author and time of news.
<br>
Using the READ MORE button, the user read more about that particular news.
<h1>Features</h1>
<ul>
<li>User can read the news on a particular category like:&nbsp; <code><b>GENERAL</b>, <b>BUSINESS</b>, <b>ENTERTAINMENT</b>, <b>HEALTH</b>, <b>SCIENCE</b>, <b>SPORTS</b> and <b>TECHNOLOGY</b></code>.</li>
<li>User can <code>search for a particular news</code> and the matching results will be shown on the screen.</li>
<br>
<img src="https://res.cloudinary.com/vivekcloud/image/upload/v1648042133/Yelp-Camp/Screenshot_21_dbtsri.png">
<br>
<br>
<li><code>Infinite scroll</code> is also implemented and the articles are fetched continuously.</li>
<li>A <code>red loading bar</code> is implemented to show the progress of the fetching of data.</li>
<li>Before data is shown, a <code>spinner</code> is also used for user experience.</li>
</ul>
<h1>Built With</h1>
<ul>
<li>React</li>
<li>Bootstrap</li>
<li>Javascript</li>
<li>HTML/CSS</li>
<li>News API (The API used to fetch news).</li>
</ul>
<h1>Run It Locally</h1>
Currently, the API used for fetching news does not allow hosting in its developer pack, therefore I won't be able to show the live version of it. But still if someone wants to see the whole project, they can do so by following these steps -
<br>
<br>
<ol type="1">
<li>Clone the repository</li>
<li>Run <code>npm install</code> to install all dependencies.</li>
<li>Make an account on News API and copy the API_KEY from the accounts page.</li>
<li>Make a .env.local file and write <code>REACT_APP_NEWS_API="Your API Key"</code></li>
<li>Run <code>npm run start</code> to start the development server.</li>
