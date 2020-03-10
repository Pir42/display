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
        format.html { redirect_to songs_path }
      else
        format.html { render :edit }
      end
    end
  end

  # GET /songs/:id
  def show
    @song = Song.find(params[:id])
    @song.chords = [
      {
        section: "Intro",
        chords: [
          ["Am", "B", "E", "C"]
        ]
      }
    ]
  end

  private

  def song_params
    params.require(:song).permit(
      :title,
      :artist,
      :duration,
      :bpm,
      :chords
    )
  end
end
