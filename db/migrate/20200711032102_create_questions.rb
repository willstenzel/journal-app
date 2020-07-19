class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :title
      t.integer :question_type
      t.references :entry_template
      t.timestamps
    end
  end
end
