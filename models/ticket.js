const Sequelize = require("sequelize");

class Ticket extends Sequelize.Model {
  static initiate(sequelize) {
    Ticket.init({
      prodNum: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull: false,
        comment: "티켓 번호 (기본키)",
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
        comment: "티켓 이름",
      },
      kind: {
        type: Sequelize.STRING(10),
        allowNull: false,
        comment: 
          "종류 1. 콘서트, 2. 뮤지컬, 3.클래식, 4. 전시회",
      },
      price: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        comment: "티켓 가격",
      },
      content: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        comment: "공연/전시회 설명",
      },
      imageUrl:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.BOOLEAN, 
        allowNull: false,
        defaultValue: 1,
        comment: "공연/상영 위치", 
      },
      regdate: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "상영/공연 일정",
      },
      maxPeople:{
        type: Sequelize.INTEGER(10),
        allowNull: false,
        comment: "최대 입장가능 인원",
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Ticket',
      tableName: 'Tickets',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  // static associate(db) {
  //   db.Ticket.hasMany(db.Cart, { foreignKey: 'prodNum', sourceKey: 'prodNum'});
  //   db.Ticket.hasMany(db.OrderDetail, { foreignKey: 'prodNum', sourceKey: 'prodNum'});
  // }
};

module.exports = Ticket;