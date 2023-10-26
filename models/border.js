const Sequelize = require("sequelize");

class Border extends Sequelize.Model {
  static initiate(sequelize) {
    Border.init({
      id: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
        comment: "공지사항 ID (기본키)",
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "",
      },
      title: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "제목",
      },
      contents: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "본문내용",
      },
      regdate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: "공지 작성시간",
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Border',
      tableName: 'Borders',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  // static associate(db) {
  //   db.Border.hasMany(db.Cart, { foreignKey: 'BorderId', sourceKey: 'id'});
  //   db.Border.hasMany(db.Order, { foreignKey: 'BorderId', sourceKey: 'id'});
  // }
};

module.exports = Border;