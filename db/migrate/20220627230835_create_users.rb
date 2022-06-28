class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :client
      t.string :poc
      t.string :email
      t.string :role
      t.string :urgency
      t.integer :quantity
      t.string :skills_needed

      t.timestamps
    end
  end
end
