class SongsController < ApplicationController
  # GET /songs
  def index
    @songs = Song.all
  end

  # GET /songs/new
  def new
    @song = Song.new
  end

  # POST /songs
  def create
    @song = Song.new(song_params)
    respond_to do |format|
      if @song.save
        format.html { redirect_to song_path(@song) }
      else
        format.html { render :edit }
      end
    end
  end

  # GET /songs/:id
  def show
    @song = Song.find(params[:id])
    if !@song.chords
      @song.chords = "[]"
    end
  end

  # PUT /songs/:id
  def update
    @song = Song.find(params[:id])
    respond_to do |format|
      if @song.update(song_params)
        format.html { redirect_to songs_path }
      else
        format.html { render :show }
      end
    end
  end

  private

  def song_params
    params.require(:song).permit(
      :title,
      :artist,
      :bpm,
      :chords
    )
  end
end
