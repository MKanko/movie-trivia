class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question_number, :answer_option_a, :answer_option_b, :answer_option_c, :answer_option_d, :selected_answer, :correct_answer, :answer_context, :score 
end
