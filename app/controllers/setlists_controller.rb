class SetlistsController < ApplicationController
  # GET /setlists
  def index
    @setlists = Setlist.all.order(:name).to_json(methods: [:number_of_songs, :duration_f])
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
    @setlist_songs = @setlist.songs.order(:position).to_json
    @songs = (Song.all.order(:title) - @setlist.songs).to_json
  end

  # PUT /setlists/:id
  def update
    @setlist = Setlist.find(params[:id])
    setlist_positions = SetlistPosition.where(setlist: @setlist)
    songs = JSON.parse(setlist_params[:songs]).map { |song| Song.find(song["id"]) }

    songs.each_with_index do |song, index|
      if !@setlist.songs.include?(song)
        SetlistPosition.create(setlist: @setlist, song: song, position: index + 1)
      end
    end

    @setlist.songs.each_with_index do |song|
      sp = setlist_positions.find_by(song: song)
      songs.include?(song) ? sp.update(position: songs.index(song) + 1) : sp.destroy
    end

    respond_to do |format|
      format.html { redirect_to setlists_path }
    end
  end

  private

  def setlist_params
    params.require(:setlist).permit(
      :name,
      :songs
    )
  end
end
