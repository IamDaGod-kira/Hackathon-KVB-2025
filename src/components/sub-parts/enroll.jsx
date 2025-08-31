import "./enroll.css";

export default function Enroll() {
  return (
    <div className="body4">
      <div clasName="form-container">
        <h2>Student Enrollment Form</h2>
        <form action="#" method="post">
          <label htmlFor="fullname">Full Name of Student</label>
          <input
            className="input"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter full name of student"
            required
          />
          <label htmlFor="fullname">Name of Father</label>
          <input
            className="input"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter name of father"
            required
          />
          <label htmlFor="fullname">Name of Mother</label>
          <input
            className="input"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter name of mother"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <label htmlFor="email">Unique ID</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Unique ID"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label htmlFor="phone">Alternative Phone Number</label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your alternative phone number"
            required
          />

          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                className="input"
                type="radio"
                name="gender"
                value="male"
                required
              />{" "}
              Male
            </label>
            <label>
              <input
                className="input"
                type="radio"
                name="gender"
                value="female"
              />{" "}
              Female
            </label>
            <label>
              <input
                className="input"
                type="radio"
                name="gender"
                value="other"
              />{" "}
              Other
            </label>
          </div>
          <label>Physically Disabled</label>
          <div className="radio-group">
            <label>
              <input
                className="input"
                type="radio"
                name="handicapped"
                value="yes"
                required
              />{" "}
              Yes
            </label>
            <label>
              <input type="radio" name="handicapped" value="no" /> No
            </label>
          </div>
          <label htmlFor="className">Select Class</label>
          <select
            className="select"
            name="className"
            required
            onchange="toggleCourse()"
          >
            <option value="">-- Choose Class --</option>
            <option value="1">Balvatika I</option>
            <option value="1">Balvatika II</option>
            <option value="1">Balvatika III</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>

          <div id="courseSection" style="display:none;">
            <label htmlFor="course">Select Course</label>
            <select className="select" id="course" name="course">
              <option value="">-- Choose a Stream --</option>
              <option value="science">Science(Computer Science)</option>
              <option value="science">Science(Bilology)</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Humanities</option>
            </select>
          </div>
          <label htmlFor="address">Address</label>
          <textarea
            className="textarea"
            id="address"
            name="address"
            rows="4"
            placeholder="Enter address"
            required
          ></textarea>

          <button className="button4" type="submit">
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
}
