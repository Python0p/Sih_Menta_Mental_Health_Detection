"use strict";
const { Model } = require("sequelize");
const { Enum } = require("../utils/common");
const { ADMIN, DOCTOR, USER } = Enum.USER_ROLES;
const { serverConfig } = require("../config");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.Response, {
				foreignKey: "userid",
				onDelete: "CASCADE",
			});
		}
	}
	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			role: {
				type: DataTypes.ENUM,
				values: [ADMIN, DOCTOR, USER],
				defaultValue: USER,
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	User.beforeCreate(function encrypt(user) {
		const encryptedPassword = bcrypt.hashSync(
			user.password,
			serverConfig.SALT_ROUNDS
		);
		user.password = encryptedPassword;
	});
	return User;
};
