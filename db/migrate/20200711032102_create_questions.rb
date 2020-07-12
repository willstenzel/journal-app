class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :title
      t.integer :type
      t.references :entry_templates
      t.timestamps
    end
  end
end
