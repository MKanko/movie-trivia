class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question_number, :question, :answer_option_a, :answer_option_b, :answer_option_c, :answer_option_d, :correct_answer, :answer_context
  belongs_to :quiz 
end
