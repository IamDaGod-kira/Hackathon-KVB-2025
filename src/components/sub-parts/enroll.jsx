import "./enroll.css";
import { useState } from "react";

export default function Enroll() {
  const [showCourse, setShowCourse] = useState(false);

  const toggleCourse = (e) => {
    const value = e.target.value;
    if (value === "11" || value === "12") {
      setShowCourse(true);
    } else {
      setShowCourse(false);
    }
  };

  return (
    <div className="body4">
      <div className="form-container">
        <h2>Student Enrollment Form</h2>
        <form action="#" method="post">
          <label htmlFor="studentName">Full Name of Student</label>
          <input
            className="input"
            type="text"
            id="studentName"
            name="studentName"
            placeholder="Enter full name of student"
            required
          />

          {/* Father */}
          <label htmlFor="fatherName">Name of Father</label>
          <input
            className="input"
            type="text"
            id="fatherName"
            name="fatherName"
            placeholder="Enter name of father"
            required
          />

          {/* Mother */}
          <label htmlFor="motherName">Name of Mother</label>
          <input
            className="input"
            type="text"
            id="motherName"
            name="motherName"
            placeholder="Enter name of mother"
            required
          />

          {/* Email */}
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
          />

          {/* Unique ID */}
          <label htmlFor="uniqueId">Unique ID</label>
          <input
            className="input"
            type="text"
            id="uniqueId"
            name="uniqueId"
            placeholder="Enter Unique ID"
            required
          />

          {/* Phone */}
          <label htmlFor="phone">Phone Number</label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          {/* Alt Phone */}
          <label htmlFor="altPhone">Alternative Phone Number</label>
          <input
            className="input"
            type="tel"
            id="altPhone"
            name="altPhone"
            placeholder="Enter your alternative phone number"
            required
          />

          {/* Gender */}
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </div>

          {/* Disabled */}
          <label>Physically Disabled</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="handicapped" value="yes" required /> Yes
            </label>
            <label>
              <input type="radio" name="handicapped" value="no" /> No
            </label>
          </div>

          {/* Class */}
          <label htmlFor="className">Select Class</label>
          <select
            className="select"
            name="className"
            id="className"
            required
            onChange={toggleCourse}
          >
            <option value="">-- Choose Class --</option>
            <option value="balvatika1">Balvatika I</option>
            <option value="balvatika2">Balvatika II</option>
            <option value="balvatika3">Balvatika III</option>
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

          {/* Course Section (Only for Class 11 & 12) */}
          {showCourse && (
            <div id="courseSection">
              <label htmlFor="course">Select Course</label>
              <select className="select" id="course" name="course">
                <option value="">-- Choose a Stream --</option>
                <option value="science-cs">Science (Computer Science)</option>
                <option value="science-bio">Science (Biology)</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Humanities</option>
              </select>
            </div>
          )}

          {/* Address */}
          <label htmlFor="address">Address</label>
          <textarea
            className="textarea"
            id="address"
            name="address"
            rows="4"
            placeholder="Enter address"
            required
          ></textarea>

          {/* Submit */}
          <button className="button4" type="submit">
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
}