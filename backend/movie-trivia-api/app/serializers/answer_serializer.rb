class AnswerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question, :selected_answer, :correct_answer, :answer_context
  belongs_to :result
end
