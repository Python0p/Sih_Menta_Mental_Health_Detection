"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.addConstraint("Responses", {
			type: "foreign key",
			fields: ["userid"],
			name: "user_fk_constraint",
			references: {
				table: "Users",
				field: "id",
			},
			onDelete: "CASCADE",
		});
	},

	async down(queryInterface, Sequelize) {
		queryInterface.removeConstraint("Responses", "user_fk_constraint");
	},
};
