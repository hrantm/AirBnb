class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :author_id, null: false
      t.integer :office_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps
    end

    add_index :bookings, :author_id
    add_index :bookings, :office_id
  end
end
