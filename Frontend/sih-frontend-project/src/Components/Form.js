import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ParticleAnimation from "./ParticleAnimation";
import axios from "axios";

function HealthForm() {
  const location = useLocation();
  const userid = location.state && location.state.userid;
  const [formData, setFormData] = useState({
    userid: userid,
    age: "",
    gender: "",
    country: "",
    selfEmployed: "",
    familyHistory: "",
    interferesWithWork: "",
    numEmployees: "",
    remoteWork: "",
    techCompany: "",
    mentalHealthBenefits: "",
    knowMentalHealthOptions: "",
    discussedMentalHealth: "",
    mentalHealthResources: "",
    anonymityProtected: "",
    medicalLeaveEase: "",
    discussMentalHealth: "",
    discussPhysicalHealth: "",
    employerTakesMentalHealthSeriously: "",
    observedNegativeConsequences: "",
    soughtTreatment: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form submitted:", formData);
    // navigate("/emotion-analysis");
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/response/predict",
        formData
      );
      if (response.data.success) {
        navigate("/emotion-analysis", {
          state: { prediction: response.data.data.predicted },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-700">
      {/* Particle Container */}
      <ParticleAnimation />
      <div className="container mx-auto px-4 pt-8 pb-8 z-10">
        {/* Form container */}
        <div className="p-8 rounded shadow-md w-96 bg-gray-800 m-auto bg-opacity-75 relative">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 flex justify-center item-center">
            Health Information Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-slate-100 font-small">
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block text-slate-100 font-small"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="trans">Transgender</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-slate-100 font-small"
              >
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Self-employed */}
            <div>
              <label
                htmlFor="selfEmployed"
                className="block text-slate-100 font-small"
              >
                Are you self-employed?
              </label>
              <select
                id="selfEmployed"
                name="selfEmployed"
                value={formData.selfEmployed}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Family history */}
            <div>
              <label
                htmlFor="familyHistory"
                className="block text-slate-100 font-small"
              >
                Do you have any family history related to mental illness?
              </label>
              <select
                id="familyHistory"
                name="familyHistory"
                value={formData.familyHistory}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Interferes with work */}
            <div>
              <label
                htmlFor="interferesWithWork"
                className="block text-slate-100 font-small"
              >
                If you have a mental health problem, does it ever interfere with
                your work?
              </label>
              <select
                id="interferesWithWork"
                name="interferesWithWork"
                value={formData.interferesWithWork}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Number of employees */}
            <div>
              <label
                htmlFor="numEmployees"
                className="block text-slate-100 font-small"
              >
                Number of employees:
              </label>
              <input
                type="number"
                id="numEmployees"
                name="numEmployees"
                value={formData.numEmployees}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Remote work */}
            <div>
              <label
                htmlFor="remoteWork"
                className="block text-slate-100 font-small"
              >
                Do you work remotely (outside of an office) at least 50% of the
                time?
              </label>
              <select
                id="remoteWork"
                name="remoteWork"
                value={formData.remoteWork}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Is your employer primarily a tech company/organization? */}
            <div>
              <label
                htmlFor="techCompany"
                className="block text-slate-100 font-small"
              >
                Is your employer primarily a tech company/organization?
              </label>
              <select
                id="techCompany"
                name="techCompany"
                value={formData.techCompany}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Does your employer provide mental health benefits? */}
            <div>
              <label
                htmlFor="mentalHealthBenefits"
                className="block text-slate-100 font-small"
              >
                Does your employer provide mental health benefits?
              </label>
              <select
                id="mentalHealthBenefits"
                name="mentalHealthBenefits"
                value={formData.mentalHealthBenefits}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="knowMentalHealthOptions"
                className="block text-slate-100 font-small"
              >
                Do you know the options for mental health care your employer
                provides?
              </label>
              <select
                id="knowMentalHealthOptions"
                name="knowMentalHealthOptions"
                value={formData.knowMentalHealthOptions}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Discussed mental health */}
            <div>
              <label
                htmlFor="discussedMentalHealth"
                className="block text-slate-100 font-small"
              >
                Has your employer ever discussed mental health as part of an
                employee wellness program?
              </label>
              <select
                id="discussedMentalHealth"
                name="discussedMentalHealth"
                value={formData.discussedMentalHealth}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Mental health resources */}
            <div>
              <label
                htmlFor="mentalHealthResources"
                className="block text-slate-100 font-small"
              >
                Does your employer provide resources to learn more about mental
                health issues and how to seek help?
              </label>
              <select
                id="mentalHealthResources"
                name="mentalHealthResources"
                value={formData.mentalHealthResources}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Anonymity protected */}
            <div>
              <label
                htmlFor="anonymityProtected"
                className="block text-slate-100 font-small"
              >
                Is your anonymity protected if you choose to take advantage of
                mental health or substance abuse treatment?
              </label>
              <select
                id="anonymityProtected"
                name="anonymityProtected"
                value={formData.anonymityProtected}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Medical leave ease */}
            <div>
              <label
                htmlFor="medicalLeaveEase"
                className="block text-slate-100 font-small"
              >
                How easy is it for you to take medical leave for a mental health
                condition?
              </label>
              <input
                type="text"
                id="medicalLeaveEase"
                name="medicalLeaveEase"
                value={formData.medicalLeaveEase}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Discuss mental health */}
            <div>
              <label
                htmlFor="discussMentalHealth"
                className="block text-slate-100 font-small"
              >
                Do you think that discussing a mental health issue with your
                employer would have negative consequences?
              </label>
              <select
                id="discussMentalHealth"
                name="discussMentalHealth"
                value={formData.discussMentalHealth}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Discuss Physical Health */}

            <div>
              <label
                htmlFor="discussPhysicalHealth"
                className="block text-slate-100 font-small"
              >
                Do you think that discussing a physical health issue with your
                employer would have negative consequences?
              </label>
              <select
                id="discussPhysicalHealth"
                name="discussPhysicalHealth"
                value={formData.discussPhysicalHealth}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Employer takes mental health seriously */}
            <div>
              <label
                htmlFor="employerTakesMentalHealthSeriously"
                className="block text-slate-100 font-small"
              >
                Do you feel that your employer takes mental health as seriously
                as physical health?
              </label>
              <select
                id="employerTakesMentalHealthSeriously"
                name="employerTakesMentalHealthSeriously"
                value={formData.employerTakesMentalHealthSeriously}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Observed negative consequences */}
            <div>
              <label
                htmlFor="observedNegativeConsequences"
                className="block text-slate-100 font-small"
              >
                Have you heard of or observed negative consequences for
                coworkers with mental health conditions in your organization?
              </label>
              <select
                id="observedNegativeConsequences"
                name="observedNegativeConsequences"
                value={formData.observedNegativeConsequences}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Sought treatment */}
            <div>
              <label
                htmlFor="soughtTreatment"
                className="block text-slate-100 font-small"
              >
                Have you sought treatment for a mental health condition?
              </label>
              <select
                id="soughtTreatment"
                name="soughtTreatment"
                value={formData.soughtTreatment}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Continue with similar select dropdowns for other questions */}

            {/* Submit button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-l from-blue-500 to-purple-700 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HealthForm;
