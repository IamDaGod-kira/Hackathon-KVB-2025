import './home.css';
import List from './sub-parts/student-list';
import { useState } from 'react';

function Home() {
  const [showStudentList, setShowStudentList] = useState(false);

  return (
    <div className='body2'>
      <header className="header">
        <div className="logo">
          <img src="https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2023/04/2023042118.svg" alt="KV Ballygunge Logo" />
        </div>

        <h1 className="school-name">Kendriya Vidyalaya Ballygunge</h1>

        <a href="call.html" className="call-btn">Call Us</a>
        <a href="login.html" className="login-btn">Login</a>
      </header>

      <nav className="nav-bar">
        <button className="nav-btn green">Enrollment</button>
        <button onClick={() => setShowStudentList(true)} className="nav-btn blue">Student List</button>
        <button className="nav-btn gray">Home</button>
      </nav>

      <main className="content">
        {showStudentList ? (
          <section className="section">
            <List />
          </section>
        ) : (
          <div className='body2'>
            <section className="section">
              <h2>About Us</h2>
              <p>
                PM SHRI Kendriya Vidyalaya Ballygunge is one of the premier and leading academic institutions of West Bengal. It came into existence in 1980 starting its day from the cabins of Nishan Hut. The Vidyalaya today stands with all its pride and beauty in the lush green sprawling fields of Maidan Camp with a beautiful 3-storeyed rectangular building, comprising of big classrooms, well-equipped laboratories, convention hall, ATL Lab, Language Lab, CMP HALL and three computer labs with all modern equipment. The beautiful garden the children's park and two big playgrounds are its added facilities.
              </p>
              <br />
              <p>The Kendriya Vidyalayas have a four-fold mission, viz.,</p>
              <ol>
                <li>To cater to the educational needs of children of transferable Central Government employees including Defense and Para-military personnel by providing a common programme of education</li>
                <li>To pursue excellence and set the pace in the field of school education</li>
                <li>To initiate and promote experimentation and innovations in education in collaboration with other bodies like CBSE and NCERT</li>
                <li>To develop the spirit of national integration and create a sense of Indianness among children.</li>
              </ol>
            </section>

            <section className="section">
              <h2>Achievements</h2>
              <ul>
                <li>100% Board Exam Results in Class X & XII for the past 5 years.</li>
                <li>Winners of the Regional Science Exhibition 2024.</li>
                <li>Excellence in sports at regional and national level.</li>
                <li>Students selected for National Talent Search Examination (NTSE).</li>
              </ul>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
