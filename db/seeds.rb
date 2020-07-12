# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

free_form_template = EntryTemplate.create!({ title: "Free Form"});
free_form_question = Question.create!({ 
    title: "Body", 
    entry_template_id: free_form_template.id,
    question_type: 1  # This should map to the BlockType.LongResponse type on the frontend
})

Entry.create!({
    title: "My First Entry",
    contents: "https://some_s3_bucket.com",
    emojis: "U+1F92F",
})
