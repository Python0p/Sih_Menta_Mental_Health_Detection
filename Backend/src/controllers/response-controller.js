const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const {
  responseService,
  userService,
  predictionService,
} = require("../services");

async function createResponse(req, res) {
  try {
    const name = await userService.getName(req.body.userid);
    const response = await responseService.createResponse({
      name: name,
      userid: req.body.userid,
      age: req.body.age,
      gender: req.body.gender,
      country: req.body.country,
      selfEmployed: req.body.selfEmployed,
      familyHistory: req.body.familyHistory,
      interferesWithWork: req.body.interferesWithWork,
      numEmployees: req.body.numEmployees,
      remoteWork: req.body.remoteWork,
      techCompany: req.body.techCompany,
      mentalHealthBenefits: req.body.mentalHealthBenefits,
      knowMentalHealthOptions: req.body.knowMentalHealthOptions,
      discussedMentalHealth: req.body.discussedMentalHealth,
      mentalHealthResources: req.body.mentalHealthResources,
      anonymityProtected: req.body.anonymityProtected,
      medicalLeaveEase: req.body.medicalLeaveEase,
      discussMentalHealth: req.body.discussMentalHealth,
      discussPhysicalHealth: req.body.discussPhysicalHealth,
      employerTakesMentalHealthSeriously:
        req.body.employerTakesMentalHealthSeriously,
      observedNegativeConsequences: req.body.observedNegativeConsequences,
      soughtTreatment: req.body.soughtTreatment,
    });
    console.log(response.dataValues);
    let prediction = null;
    if (SuccessResponse.success) {
      prediction = await predictionService.getFormPrediction({
        Age: response.dataValues.age,
        Gender: response.dataValues.gender,
        Country: response.dataValues.country,
        self_employed: response.dataValues.selfEmployed,
        family_history: response.dataValues.familyHistory,
        work_interfere: response.dataValues.interferesWithWork,
        no_employees: response.dataValues.numEmployees,
        remote_work: response.dataValues.remoteWork,
        tech_company: response.dataValues.techCompany,
        anonymity: response.dataValues.anonymityProtected,
        leave: response.dataValues.medicalLeaveEase,
        mental_health_consequence: response.dataValues.discussMentalHealth,
        phys_health_consequence: response.dataValues.discussPhysicalHealth,
        supervisor: response.dataValues.employerTakesMentalHealthSeriously,
        obs_consequence: response.dataValues.observedNegativeConsequences,
        benefits: response.dataValues.mentalHealthBenefits,
        wellness_program: response.dataValues.discussedMentalHealth,
        seek_help: response.dataValues.soughtTreatment,
      });
    }
    console.log(prediction);
    SuccessResponse.data = prediction.data;
    SuccessResponse.messages = "Predicted Successfully";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createResponse,
};
