module SongsHelper
  def duration_seconds(duration)
    result = duration.split(/'|"/)
    if result.any?
      if result.length == 2
        result[0].to_i*60 + result[1].to_i
      elsif result.length == 3
        result[0].to_i*3600 + result[1].to_i*60 + result[2].to_i
      end
    elsif duration.is_a? Integer
      duration
    else
      nil
    end
  end

  def duration_formated(duration)
    if duration
      duration >= 3600 ? Time.at(duration).utc.strftime("%H'%M'%S") : Time.at(duration).utc.strftime("%M'%S")
    else
      ""
    end
  end
end
