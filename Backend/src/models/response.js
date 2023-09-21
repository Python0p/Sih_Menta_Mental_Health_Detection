"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	class Response extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is Not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.User, {
				foreignKey: "userid",
				onDelete: "CASCADE",
			});
		}
	}

	Response.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			userid: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			age: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			gender: {
				type: DataTypes.ENUM,
				values: ["male", "female", "trans"],
				allowNull: false,
			},
			country: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			selfEmployed: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			familyHistory: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			interferesWithWork: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			numEmployees: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			remoteWork: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			techCompany: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			mentalHealthBenefits: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			knowMentalHealthOptions: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			discussedMentalHealth: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			mentalHealthResources: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			anonymityProtected: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			medicalLeaveEase: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			discussMentalHealth: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			discussPhysicalHealth: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			employerTakesMentalHealthSeriously: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			observedNegativeConsequences: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
			soughtTreatment: {
				type: DataTypes.ENUM,
				values: ["Yes", "No"],
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Response",
		}
	);

	return Response;
};
