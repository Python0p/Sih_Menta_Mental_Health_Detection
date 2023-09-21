"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Responses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userid: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			age: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			gender: {
				type: Sequelize.ENUM,
				values: ["male", "female","trans"],
				allowNull: false,
			},
			country: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			selfEmployed: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			familyHistory: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			interferesWithWork: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			numEmployees: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			remoteWork: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			techCompany: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			mentalHealthBenefits: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			knowMentalHealthOptions: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			discussedMentalHealth: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			mentalHealthResources: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			anonymityProtected: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			medicalLeaveEase: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			discussMentalHealth: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			discussPhysicalHealth: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			employerTakesMentalHealthSeriously: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			observedNegativeConsequences: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			soughtTreatment: {
				type: Sequelize.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Responses");
	},
};
