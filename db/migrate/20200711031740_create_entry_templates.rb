class CreateEntryTemplates < ActiveRecord::Migration[6.0]
  def change
    create_table :entry_templates do |t|
      t.title :string
      t.timestamps
    end
  end
end
