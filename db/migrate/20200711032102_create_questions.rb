class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :title
      t.integer :type
      t.reference :entry_templates
      t.timestamps
    end
  end
end
