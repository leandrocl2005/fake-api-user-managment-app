module.exports = function() {
  var faker = require('faker');
  var fakerBr = require('faker-br');
  faker.locale = "pt_BR";
  var _ = require('lodash');
  return {
    users: _.times(350, function(n) {
      const created_at = faker.date.between(
        "2020-05-01",
        "2020-05-30"
      )
      const born_date = faker.date.between(
        "1900-05-01",
        "2000-05-30"
      )
      return {
        id: n,
        ...faker.helpers.userCard(),
        cpf: fakerBr.br.cpf(),
        password: "$2a$10$LmEmqCsivO./7W7zE5AWU.Dj.9u0X83rXuCjoEeU8gkJR1upDzes2",
        born_day: born_date.getDate() < 10 ? `0${born_date.getDate()}` : `${born_date.getDate()}`,
        born_month: born_date.getMonth() < 10 ? `0${born_date.getMonth()}` : `${born_date.getMonth()}`,
        born_year: born_date.getYear() < 100 ? `19${born_date.getYear()}` : `19${born_date.getYear()}`, 
        mother_name: fakerBr.name.findName(),
        age: 20 + faker.random.number(60),
        created_at_day: created_at.getDate(),
        created_at_month: created_at.getMonth(),
        created_at_year: created_at.getFullYear(),
        updated_at: faker.date.between(
          "2020-06-01",
          Date()       
        )
      }
    }),
    receptions: _.times(1500, function(n) {
      const user_id = faker.random.number(200)
      const people_types = ['colaborator', 'visitor']
      const pacient_treatments = ['A', 'B', 'C', 'D']
      const created_at = faker.date.between(
        "2020-06-01",
        "2020-10-30"
      )
      return {
        id: n,
        user_id: user_id,
        type: user_id < 100 ? 'patient' : (
          user_id > 301 ? 'professional' :
          people_types[Math.floor(Math.random() * people_types.length)]
        ),
        companion: user_id < 100 ? 200 + faker.random.number(99) : null,
        treatment: user_id < 100 ? pacient_treatments[
          Math.floor(Math.random() * pacient_treatments.length)
        ] : null,
        created_at_day: created_at.getDate(),
        created_at_month: created_at.getMonth(),
        created_at_year: created_at.getFullYear(),
      }
    }),
    home_services: _.times(3000, function(n) {
      const home_service_types = [
        'almoço','café','lanche','jantar','pouso', 'banho'
      ]
      const created_at = faker.date.between(
        "2020-06-01",
        "2020-10-30"
      )
      return {
        id: n,
        user_id: faker.random.number(299),
        home_service: home_service_types[
          Math.floor(Math.random() * home_service_types.length)
        ],
        created_at_day: created_at.getDate(),
        created_at_month: created_at.getMonth(),
        created_at_year: created_at.getFullYear()
      }
    }),
    total_users: {
      value: 350
    },
    professional_services: _.times(300, function(n) {
      const created_at = faker.date.between(
        "2020-06-01",
        "2020-10-30"
      )
      const professional_service_types = ["M", "N", "O", "P"]
      return {
        id: n,
        user_id: 301 + faker.random.number(40),
        professional_service:  professional_service_types[
          Math.floor(Math.random() * professional_service_types.length)
        ],
        description: faker.lorem.paragraphs(3),
        created_at_day: created_at.getDate(),
        created_at_month: created_at.getMonth(),
        created_at_year: created_at.getFullYear()        
      }
    })
  }
}