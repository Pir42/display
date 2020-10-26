class SongsController < ApplicationController
  before_action :set_song, only: [:show, :update, :destroy]

  # GET /songs
  def index
    @songs = Song.all.order(:title)
    @songs.each { |song| song.duration_formated = helpers.duration_formated(song.duration) }
    @songs = @songs.to_json(methods: [:duration_formated])
  end

  # GET /songs/new
  def new
    @song = Song.new
  end

  # POST /songs
  def create
    @song = Song.new(song_params)
    @song.duration = helpers.duration_seconds(params[:song][:duration_formated])
    respond_to do |format|
      if @song.save
        format.html { redirect_to song_path(@song), turbolinks: true }
      else
        format.html { render :edit }
      end
    end
  end

  # GET /songs/:id
  def show
    @song.duration_formated = helpers.duration_formated(@song.duration)
    if !@song.chords || @song.chords.empty?
      @song.chords = "[]"
    end
    @chords = @song.chords.to_json
  end

  # PUT /songs/:id
  def update
    @song.duration = helpers.duration_seconds(params[:song][:duration_formated])
    respond_to do |format|
      if @song.update(song_params)
        format.html { redirect_to songs_path, turbolinks: true }
      else
        format.html { render :show }
      end
    end
  end

  # DESTROY /songs/:id
  def destroy
    respond_to do |format|
      if @song.destroy
        format.html { redirect_to songs_path, turbolinks: true }
      else
        format.html { render :show }
      end
    end
  end

  private

  def set_song
    @song = Song.find(params[:id])
  end

  def song_params
    params.require(:song).permit(
      :title,
      :artist,
      :bpm,
      :duration_formated,
      :chords
    )
  end

end
