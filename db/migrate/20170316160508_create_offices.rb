class CreateOffices < ActiveRecord::Migration[5.0]
  def change
    create_table :offices do |t|
      t.integer :owner_id, null: false
      t.string :location, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :price, null: false
      t.string :image_url, null: false
      t.string :about_this, null: false
      t.integer :guest_limit, null: false
      t.integer :desks, null: false
      t.timestamps
    end
    add_index :offices, :owner_id
    add_index :offices, :price
  end
end
