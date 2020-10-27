class PagesStaticController < ApplicationController
  def index
  end

  def broadcast
    @setlists = Setlist.all.order(updated_at: :desc).to_json
    @songs = Song.all.order(updated_at: :desc).to_json
  end
end
