class SetlistsController < ApplicationController
  # GET /setlists
  def index
    @setlists = Setlist.all.order(:name)
  end

  # GET /setlists/new
  def new
    @setlist = Setlist.new
  end

  # POST /setlists
  def create
    @setlist = Setlist.new(setlist_params)
    respond_to do |format|
      if @setlist.save
        format.html { redirect_to setlist_path(@setlist), turbolinks: true }
      else
        format.html { render :edit }
      end
    end
  end

  # GET /setlists/:id
  def show
    @setlist = Setlist.find(params[:id])
    @songs = Song.all.order(:title).to_json
  end

  private

  def setlist_params
    params.require(:setlist).permit(
      :name
    )
  end
end
