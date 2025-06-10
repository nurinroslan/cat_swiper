class CatsController < ApplicationController
  def index
    @cats = Array.new(10) { "https://cataas.com/cat?#{SecureRandom.hex(4)}" }
  end

  def summary
    @liked_cats = params[:liked_cats] || []
  end
end
