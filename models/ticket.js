const Sequelize = require("sequelize");

class Ticket extends Sequelize.Model {
  static initiate(sequelize) {
    Ticket.init({
      prodNum: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
      useyn: {
        type: Sequelize.BOOLEAN, 
        allowNull: false,
        defaultValue: 1,
        comment: "상품 판매 여부(판매: 1, 판매중단: 0)",
      },
      regdate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: "상품 등록일",
        //INSERT INTO foodingdb.Tickets (name, price, content) values('삼다수', 1000, '제주도의 삼다수입니다');
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