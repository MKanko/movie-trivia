class ResultsController < ApplicationController

    # def index 
    #     results = Result.all
    #     options = {
    #         include: [:answers]
    #     }
    #     render json: ResultSerializer.new(results, options)
    # end 

    # def new
    #     result = Result.new
    # end

    # find quiz object by id 
    # build a result using the quiz id and quiz title
    # Iterate thru selAns and build an answer object for each one and each answer is related to the result (use result build answer)
    # figure out quiz score based off number of correct answers (compare sel anser with correct answer)
    # at some point update stat object 

    def create       
        quiz = Quiz.find(params[:quiz_id])       
        result = Result.new(quiz_id: quiz.id, title: quiz.title, point_value: 50, user_id: params[:user_id], 
        score: 0)       
        user_ans = params[:selAnswers]
        index = 0
        user_ans.each do |key, value|
            ans = result.answers.build(selected_answer: user_ans[key])
            ans.question_number = "#{quiz.questions[index].question_number}"
            ans.question = "#{quiz.questions[index].question}"
            ans.correct_answer = "#{quiz.questions[index].correct_answer}"
            ans.answer_context = "#{quiz.questions[index].answer_context}"
            result.score += ans.selected_answer == ans.correct_answer ? 5 : 0
            index += 1
        end       
        result.save
        result.user.stat.update_user_stat  # call update_user_stat method in stat.rb   
                        
        options = {
            include: [:answers]
        }
        render json: ResultSerializer.new(result, options) 
    end
    

    def show 
        result = Result.find(params[:id])
        options = {
            include: [:answers]
        }
        render json: ResultSerializer.new(result, options)
    end

    
end

# Write a instance method generateResultAnswers in result.rb passing in user_ans array 
# (params[:selAnswers]) to build instances of answer objects for result.
# Then call generateResultAnswers in the above create action.
