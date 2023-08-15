import React from 'react';
import './RightSection.css';

function RightSection() {
  return (
    <div id="right-container">
      <div className="right-head">
        <span>
          <h4 className="st">STUDENTS</h4>
        </span>
        <a href="#">Add Student</a>
      </div>
      <div className="table-sec">
        <table className='table-bordered'>
          <thead>
            <tr>
              <th>R NO.</th>
              <th>FULL NAME</th>
              <th>BRANCH</th>
              <th>MOBILE</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>ARAKAL ABU</td>
              <td>MECHANICAL</td>
              <td>958687412</td>
              <td>arakalabu@gmail.com</td>
            </tr>
            <tr>
              <td>002</td>
              <td>SOOMAN</td>
              <td>MECHANICAL</td>
              <td>958687415</td>
              <td>sooman@gmail.com</td>
            </tr>
            <tr>
              <td>003</td>
              <td>BINEESH</td>
              <td>CIVIL</td>
              <td>958687417</td>
              <td>bineeshpp@gmail.com</td>
            </tr>
            <tr>
              <td>004</td>
              <td>SHAJI</td>
              <td>AERONAUTICAL</td>
              <td>958687467</td>
              <td>shajipopz@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RightSection;
