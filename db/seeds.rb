# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(client: 'PwC', poc: 'Linux Lee', email: 'Linux3000@no.com', role: 'Customer Success Manager', urgency: 'High', quantity: 1, skills_needed: 'SalesForce')

User.create(client: 'PwC', poc: 'Ashley Knight', email: 'AKRowling@no.com', role: 'Technical Lead', urgency: 'High', quantity: '3', skills_needed: 'ZenDesk Developer')

User.create(client: 'PwC', poc: 'Maria Rodriguez', email: 'M_D543@no.com', role: 'Snowflake Data Engineer', urgency: 'Low', quantity: '2', skills_needed: 'AWS')

User.create(client: 'PwC', poc: 'David Smith', email: 'DSmith_0100@no.com', role: 'Associate Developer', urgency: 'Med', quantity: '1', skills_needed: 'Java, SpringBoot Docker')

User.create(client: 'PwC', poc: 'Eliza Cath', email: 'ElizeT_Cat.com', role: 'Datavault 2.0', urgency: 'High', quantity: '2', skills_needed: 'Datavault Cert')

puts 'Done Seeding! 🌱🌱🌱'