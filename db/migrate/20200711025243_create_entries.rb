class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :contents
      t.text :emojis
      t.timestamps
    end
  end
end
