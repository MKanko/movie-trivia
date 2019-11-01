# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hunt_red_october = Movie.create(title: 'The Hunt For Red October');

hunt_red_october_quiz_1 = Movie.quizzes.build(title: 'Hunt For Red October Quiz 1', point_value: 50, quiz_result: false);

question_1 = Movie.quizzes.questions.build(question_number: 1, answer_option_a: 'Canada', answer_option_b: 'China', answer_option_c: 'Germany', answer_option_d: 'Russia', selected_answer: undefined, correct_answer: 'Russia', answer_context: 'It is of course about a Russian submarine, or as it was when the movie was released, a Soviet submarine, since the country was still called the Soviet Union.', score: 0);
question_2 = Movie.quizzes.questions.build(question_number: 2, answer_option_a: 'James Earl Jones', answer_option_b: 'Alec Baldwin', answer_option_c: 'Sean Connery', answer_option_d: 'Tommy Lee Jones', selected_answer: undefined, correct_answer: 'Tommy Lee Jones', answer_context: 'James Earl Jones, the voice of Darth Vader, is of course in this movie, as are Sean Connery and Alec Baldwin. Jones and Baldwin are American, while Connery plays the Russian submarine captain.', score: 0)

