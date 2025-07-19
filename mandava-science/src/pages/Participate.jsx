import React, { useState } from 'react';
import '../styles/Participate.css';

// API endpoint for volunteer form submission
const API_URL = import.meta.env.PROD ? '/api/participate' : 'http://localhost:3001/api/participate';

const statesAndUTs = [
  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
  'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand',
  'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra',
  'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal'
];

const initialState = {
  title: '', firstName: '', middleName: '', lastName: '',
  gender: '', dob: '', age: '', email: '',
  primaryContact: '', altContact: '',
  currentAddress: '', permSame: '', permanentAddress: '',
  employmentStatus: '', qualification: '', program: '',
  gradYear: '', collegeName: '', collegeAddress: '',
  currentYear: '', hobbies: '',
  internshipState: '', internshipCity: '', internshipPin: '', internshipStart: '',
  socialJustice: '', economicRespect: '', nationBuilding: ''
};

const Participate = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked ? value : '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Success:', data);
      setMessage('Application submitted successfully!');
      setFormData(initialState); // Reset form
    } catch (error) {
      console.error('Fetch error:', error);
      setMessage('Error submitting application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="participate-wrapper">
      <div className="form-card">
        <h1>Volunteer with Mandava Science Foundation</h1>
        <p>Join a movement of purpose, powered by science, justice, and service.</p>

        <form onSubmit={handleSubmit}>
          <fieldset className="form-section">
            <legend>Personal Details</legend>
            <div className="form-group">
              <select name="title" value={formData.title} onChange={handleChange} required>
                <option value="">Select Title</option>
                <option>Mr.</option><option>Ms.</option><option>Mrs.</option><option>Dr.</option>
              </select>
            </div>
            <div className="form-group">
              <input
                name="firstName" placeholder="First Name"
                value={formData.firstName} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="middleName" placeholder="Middle Name"
                value={formData.middleName} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                name="lastName" placeholder="Last Name"
                value={formData.lastName} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Gender</option>
                <option>Male</option><option>Female</option><option>Others</option>
              </select>
            </div>
            <div className="form-group">
              <input
                name="dob" type="date"
                value={formData.dob} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="age" type="number" placeholder="Your Age"
                value={formData.age} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="email" type="email" placeholder="Email"
                value={formData.email} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="primaryContact" placeholder="Primary Contact"
                value={formData.primaryContact} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="altContact" placeholder="Alternate Contact"
                value={formData.altContact} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="currentAddress" placeholder="Current Address"
                value={formData.currentAddress} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <select name="permSame" value={formData.permSame} onChange={handleChange} required>
                <option value="">Permanent Address same?</option>
                <option>Yes</option><option>No</option>
              </select>
            </div>
            {formData.permSame === 'No' && (
              <div className="form-group">
                <textarea
                  name="permanentAddress" placeholder="Permanent Address"
                  value={formData.permanentAddress} onChange={handleChange}
                />
              </div>
            )}
          </fieldset>

          <fieldset className="form-section">
            <legend>Educational Details</legend>
            <div className="form-group">
              <select
                name="employmentStatus" value={formData.employmentStatus}
                onChange={handleChange} required
              >
                <option value="">Employment Status</option>
                <option>Student</option><option>Employee</option>
                <option>Self-Employed/Entrepreneur</option>
                <option>Businessman</option><option>Retired</option>
              </select>
            </div>
            <div className="form-group">
              <select
                name="qualification" value={formData.qualification}
                onChange={handleChange} required
              >
                <option value="">Qualification</option>
                <option>Diploma</option><option>Bachelor's</option>
                <option>Master's</option><option>Ph.D</option><option>Others</option>
              </select>
            </div>
            <div className="form-group">
              <input
                name="program" placeholder="Program/Course"
                value={formData.program} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="gradYear" type="number" placeholder="Graduation Year"
                value={formData.gradYear} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="collegeName" placeholder="College Name"
                value={formData.collegeName} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <textarea
                name="collegeAddress" placeholder="College Address"
                value={formData.collegeAddress} onChange={handleChange} required
              />
            </div>
          </fieldset>

          {formData.employmentStatus === 'Student' && (
            <fieldset className="form-section">
              <legend>Student Info</legend>
              <div className="form-group">
                <select
                  name="currentYear" value={formData.currentYear}
                  onChange={handleChange}
                >
                  <option value="">Year of Study</option>
                  <option>1st</option><option>2nd</option>
                  <option>3rd</option><option>4th</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="hobbies" placeholder="Hobbies"
                  value={formData.hobbies} onChange={handleChange}
                />
              </div>
            </fieldset>
          )}

          <fieldset className="form-section">
            <legend>Internship Details</legend>
            <div className="form-group">
              <select
                name="internshipState" value={formData.internshipState}
                onChange={handleChange} required
              >
                <option value="">Select State</option>
                {statesAndUTs.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <input
                name="internshipCity" placeholder="City"
                value={formData.internshipCity} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="internshipPin" placeholder="PIN Code"
                value={formData.internshipPin} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                name="internshipStart" type="date"
                value={formData.internshipStart} onChange={handleChange} required
              />
            </div>
          </fieldset>

          <fieldset className="form-section">
            <legend>Your Views</legend>
            <div className="form-group">
              <textarea
                name="socialJustice" placeholder="What is Social Justice?"
                value={formData.socialJustice} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <textarea
                name="economicRespect" placeholder="What is Economic Self-Respect?"
                value={formData.economicRespect} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <textarea
                name="nationBuilding" placeholder="What is Nation Building?"
                value={formData.nationBuilding} onChange={handleChange} required
              />
            </div>
          </fieldset>

          <div className="submit-wrapper">
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Participate;