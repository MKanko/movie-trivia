class RemoveTimeFromResults < ActiveRecord::Migration[5.2]
  def change
    remove_column :results, :time, :time
  end
end
