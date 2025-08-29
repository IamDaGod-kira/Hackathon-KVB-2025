import './home.css'

function Home() {
    return(
        <>
          <header class="header">
    <div class="logo">
      <img src="images/kv-logo.png" alt="KV Ballygunge Logo"/>
    </div>

    <h1 class="school-name">Kendriya Vidyalaya Ballygunge</h1>

    <a href="call.html" class="call-btn">Call Us</a>
    <a href="login.html" class="login-btn">Login</a>
  </header>

  <nav class="nav-bar">
    <button href="enroll.html" class="nav-btn green">Enrollment</button>
    <button href="student_list.html" class="nav-btn blue" onclick = "window.location.href = 'file:///F:/PMSHRIKVB/student_list.html'">Student List</button>
    <button href="index.html" class="nav-btn gray">Home</button>
  </nav>

  <main class="content">
    <section class="section">
      <h2>About Us</h2>
      <p>
        PM SHRI Kendriya Vidyalaya Ballygunge is one of the premier and leading academic institutions of West Bengal. It came into existence in 1980 starting its day from the cabins of Nishan Hut. The Vidyalaya today stands with all its pride and beauty in the lush green sprawling fields of Maidan Camp with a beautiful 3-storeyed rectangular building, comprising of big classrooms, well-equipped laboratories, convention hall, ATL Lab, Language Lab, CMP HALL and three computer labs with all modern equipment. The beautiful garden the children's park and two big playgrounds are its added facilities.
      </p>
      <br/>
      <p>The Kendriya Vidyalayas have a four-fold mission, viz.,</p>
      <ol>
        <li>To cater to the educational needs of children of transferable Central Government employees including Defense and Para-military personnel by providing a common programme of education</li>
        <li>To pursue excellence and set the pace in the field of school education</li>
        <li>To initiate and promote experimentation and innovations in education in collaboration with other bodies like the Central Board of Secondary Education (CBSE) and the National Council of Educational Research and Training (NCERT) etc. and</li>
        <li>To develop the spirit of national integration and create a sense of Indianness among children.</li>
      </ol>
    </section>

    <section class="section">
      <h2>Achievements</h2>
      <ul>
        <li>100% Board Exam Results in Class X & XII for the past 5 years.</li>
        <li>Winners of the Regional Science Exhibition 2024.</li>
        <li>Excellence in sports at regional and national level.</li>
        <li>Students selected for National Talent Search Examination (NTSE).</li>
      </ul>
    </section>
  </main>
</>
    )}
export default Home;