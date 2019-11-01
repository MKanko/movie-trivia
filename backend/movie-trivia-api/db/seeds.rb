# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hunt_red_october = Movie.create(title: 'The Hunt For Red October');

hunt_red_october_quiz_1 = Movie.quizzes.build(title: 'Hunt For Red October Quiz 1', point_value: 50, quiz_result: false);

question_1 = Movie.quizzes.questions.build(question_number: 1, question: 'The Hunt for Red October is a movie about a submarine from what country?', answer_option_a: 'Canada', answer_option_b: 'China', answer_option_c: 'Germany', answer_option_d: 'Russia', selected_answer: undefined, correct_answer: 'Russia', answer_context: 'It is of course about a Russian submarine, or as it was when the movie was released, a Soviet submarine, since the country was still called the Soviet Union.', score: 0);
question_2 = Movie.quizzes.questions.build(question_number: 2, question: 'Which actor does NOT appear in The Hunt for Red October?', answer_option_a: 'James Earl Jones', answer_option_b: 'Alec Baldwin', answer_option_c: 'Sean Connery', answer_option_d: 'Tommy Lee Jones', selected_answer: undefined, correct_answer: 'Tommy Lee Jones', answer_context: 'James Earl Jones, the voice of Darth Vader, is of course in this movie, as are Sean Connery and Alec Baldwin. Jones and Baldwin are American, while Connery plays the Russian submarine captain.', score: 0); 
question_3 = Movie.quizzes.questions.build(question_number: 3, question: 'When does the story in the movie take place?', answer_option_a: '1970s', answer_option_b: '1990s', answer_option_c: '1980s', answer_option_d: '1940s', selected_answer: undefined, correct_answer: '1980s', answer_context: 'The movie plot takes place during 1984. Actual release of the film was not done until 1989, but since the movie was based upon a book, written by Tom Clancy, he wrote the story, which took place in 1984 in the book.', score: 0);
question_4 = Movie.quizzes.questions.build(question_number: 4, question: 'One of the names of the United States submarines in the movie was USS Dallas. Is there a real submarine with this name?', answer_option_a: 'Yes', answer_option_b: 'No', answer_option_c: '', answer_option_d: '', selected_answer: undefined, correct_answer: 'Yes', answer_context: 'The USS Dallas is a real submarine.', score: 0); 
question_5 = Movie.quizzes.questions.build(question_number: 5, question: "In the movie, there is an area of underwater canyons that the submarine 'Red October' uses to hide in and head across the Atlantic ocean. What do the American's call this route?", answer_option_a: ' passage to the deep', answer_option_b: 'canyon ball run', answer_option_c: 'red route one', answer_option_d: 'the double peaks', selected_answer: undefined, correct_answer: 'red route one', answer_context: "The Americans aboard the USS 'Dallas' submarine call this passage Red Route One, and they know that the Russians have very accurate maps of this area, so they don't try to follow them in there.", score: 0); 
