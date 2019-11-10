class AnswerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question_number, :question, :selected_answer, :correct_answer, :answer_context
  belongs_to :result
end
